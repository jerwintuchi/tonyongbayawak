import logging
from data_prep.api import fetch_data
from data_prep.data_processor import process_df, remove_unnecessary_columns, remove_empty_columns, validate_df, add_features
from datetime import datetime, timezone


def fetch_and_process_data(SYMBOL, CURRENCY, LIMIT, START_DATE, END_DATE):
    """Fetches, preprocesses, and saves the hourly data."""
    logging.info(
        f"Fetching {SYMBOL} hourly data from {START_DATE} to {END_DATE}")
    print('Fetching data...')
  # Convert start and end dates to timestamps
    start_timestamp = int(datetime.strptime(
        START_DATE, "%Y-%m-%d").replace(tzinfo=timezone.utc).timestamp())
    end_timestamp = int(datetime.now(timezone.utc).timestamp())

    all_data = []
    current_timestamp = end_timestamp
    batch_count = 1

    while current_timestamp >= start_timestamp:
        print('Calling fetch_data from api.py')
        data = fetch_data(SYMBOL, CURRENCY, LIMIT, current_timestamp)

        if "Data" in data and "Data" in data["Data"]:
            ohlcv_data = data["Data"]["Data"]
            if ohlcv_data:
                all_data.extend(ohlcv_data)

                # Move back in time by LIMIT hours
                next_timestamp = ohlcv_data[0]["time"] - (LIMIT * 3600)
                if next_timestamp < start_timestamp:
                    break
                current_timestamp = next_timestamp
                batch_count += 1
            else:
                break
        else:
            logging.error(f"API error: {data}")
            break

    print('Processing dataframe...')
    # Preprocess and clean the data
    df = process_df(all_data, start_timestamp)
    if not df.empty:
        print('Adding features....')
        # Add additional ta features
        df = add_features(df)
        print('Removing unnecessary columns...')

        # Remove unnecessary columns
        remove_unnecessary_columns(df)

        # Remove empty columns
        print('Removing empty columns...')
        remove_empty_columns(df)

        # Save to CSV
        csv_filename = "dataset/axs_dataset.csv"
        df.to_csv(csv_filename, index=True)

        validate_df(df)

        print(f'Dataset features: {df.columns}')
        print(f"✅ Data saved to {csv_filename} with {len(df)} records")
        logging.info(f"Successfully fetched {len(df)} records.")
    else:
        print("❌ No data retrieved.")
        logging.error("No data retrieved.")
