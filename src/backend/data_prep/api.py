import requests

API_URL = "https://min-api.cryptocompare.com/data/v2/histohour"


def fetch_data(symbol, currency, limit, to_timestamp):
    """Fetch hourly OHLCV data from CryptoCompare API."""
    params = {
        "fsym": symbol,
        "tsym": currency,
        "limit": limit,
        "toTs": to_timestamp,
    }
    response = requests.get(API_URL, params=params)
    return response.json()
