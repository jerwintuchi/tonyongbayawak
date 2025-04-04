import requests
import pandas as pd
import time
import logging
from datetime import datetime, timezone, timedelta

# Setup logging
log_filename = "debug_log.txt"
logging.basicConfig(
    filename=log_filename,
    level=logging.INFO,
    format="%(asctime)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)   

# CryptoCompare API Endpoint for Hourly Data
API_URL = "https://min-api.cryptocompare.com/data/v2/histohour"

# Fixed start date (2021-01-29)
start_date = "2021-01-29"
end_date = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Convert start and end dates to timestamps
start_timestamp = int(datetime.strptime(
    start_date, "%Y-%m-%d").replace(tzinfo=timezone.utc).timestamp())
end_timestamp = int(datetime.now(timezone.utc).timestamp())

# Constants
SYMBOL = "AXS"
CURRENCY = "USD"
LIMIT = 2000  # Max records per request
all_data = []


def fetch_data(to_timestamp):
    """Fetch AXS hourly OHLCV data from CryptoCompare API."""
    params = {
        "fsym": SYMBOL,
        "tsym": CURRENCY,
        "limit": LIMIT,
        "toTs": to_timestamp,
    }
    response = requests.get(API_URL, params=params)
    return response.json()


def remove_unnecessary_columns(df):
    # Remove conversionType and conversionSymbol columns
    df.drop(columns=["conversionType", "conversionSymbol"], inplace=True)


# Start Fetching Data
logging.info(
    f"Fetching AXS hourly data from {start_timestamp} to {end_timestamp}"
)

# Fetch data starting from end timestamp moving backward
current_timestamp = end_timestamp
batch_count = 1

while current_timestamp >= start_timestamp:
    data = fetch_data(current_timestamp)

    if "Data" in data and "Data" in data["Data"]:
        ohlcv_data = data["Data"]["Data"]
        if ohlcv_data:
            all_data.extend(ohlcv_data)

            # Move back in time by LIMIT hours
            next_timestamp = ohlcv_data[0]["time"] - (LIMIT * 3600)
            if next_timestamp < start_timestamp:
                break  # Stop fetching if the next timestamp is earlier than start date
            current_timestamp = next_timestamp
            batch_count += 1
        else:
            break
    else:
        logging.error(f"API error: {data}")
        break

# Convert Data to DataFrame
df = pd.DataFrame(all_data)
if not df.empty:
    df.drop_duplicates(subset=["time"], keep="last", inplace=True)
    df["time"] = pd.to_datetime(df["time"], unit="s", utc=True)
    df.sort_values(by="time", inplace=True)

    # Final filtering to remove any excess data before 2021-01-29
    df = df[df["time"] >= datetime.fromtimestamp(
        start_timestamp, tz=timezone.utc)]

    # Ensure 'time' column is included when saving
    csv_filename = "datasets/new_axs_dataset.csv"
    df.to_csv(csv_filename, index=False, columns=[
              "time"] + [col for col in df.columns if col != "time"])
    print(f"✅ Data saved to {csv_filename} with {len(df)} records")
    logging.info(f"Successfully fetched {len(df)} records.")
else:
    print("❌ No data retrieved.")
    logging.error("No data retrieved.")
