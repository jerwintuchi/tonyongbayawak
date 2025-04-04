from data_prep.api import fetch_data


def test_fetch_data():
    symbol = "AXS"
    currency = "USD"
    limit = 2000
    to_timestamp = 1625011200  # Example timestamp
    data = fetch_data(symbol, currency, limit, to_timestamp)

    if data:
        print("Data fetched successfully!")
        print(data)
    else:
        print("Error: Failed to fetch data.")


test_fetch_data()
