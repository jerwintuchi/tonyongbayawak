from datetime import datetime, timezone
from data_prep.fetch_and_process_data import fetch_and_process_data


def test_fetch_and_process_data():
    symbol = "AXS"
    currency = "USD"
    limit = 2000
    start_date = "2021-01-29"
    end_date = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    fetch_and_process_data(symbol, currency, limit, start_date, end_date)


# Run the test
test_fetch_and_process_data()
