import pandas as pd
from datetime import datetime, timezone
import ta


def process_df(df, start_timestamp):
    """Converts fetched df into a pandas dfFrame and preprocesses it."""

    df = pd.DataFrame(df)

    # Ensure 'time' is a column
    if 'time' not in df.columns:
        raise ValueError("The 'time' column is missing from the data!")

    if not df.empty:
        df.drop_duplicates(subset=["time"], keep="last", inplace=True)
        df["time"] = pd.to_datetime(df["time"], unit="s", utc=True)
        df.sort_values(by="time", inplace=True)

        # Final filtering to remove any excess data before 2021-01-29
        df = df[df["time"] >= datetime.fromtimestamp(
            start_timestamp, tz=timezone.utc)]
    return df


def remove_unnecessary_columns(df):
    """Removes unnecessary columns. (Also removes the close price)"""
    if "conversionType" in df.columns:
        df.drop(columns=["conversionType",
                "conversionSymbol", "close"], inplace=True)


def remove_empty_columns(df):
    if not df.empty:
        df.dropna(inplace=True)
    else:
        raise ValueError("The dataframe is empty! Nothing to remove.")


def validate_df(df):
    # Check for NaN values in each column
    nan_columns = df.columns[df.isna().any()].tolist()

    if nan_columns:
        print("Columns with NaN values:", nan_columns)
    else:
        print("No NaN values found in the DataFrame.")

    print(f"length of dataset", {len(df)})


def add_features(df):
    """Add the selected features (features that the trained model uses) to the raw df ['open', 'high', 'low', 'volumefrom', 'volumeto'].
    Columns:
        'ATR',
        'Rolling_Std_10', 'hour', 'day_of_week', 'month',
        'Stoch_%K', 'Stoch_%D', 'Williams_%R',
        'Donchian_Upper', 'Donchian_Lower', 'Donchian_Mid'
    """
    print('Setting time as index')
    # Set time as index if it exists and isn't already the index
    if 'time' in df.columns:
        df['time'] = pd.to_datetime(df['time'])
        df.set_index("time", inplace=True)
    print('Adding price_direction feature...')
    # Add price_direction feature which will be the target variable
    df['price_direction'] = (df['close'].diff() > 0).astype(
        int)  # 1 if price goes up, 0 if it goes down

    print('Adding TA Features...')
    # 1. Volatility-Based Indicators
    df['ATR'] = ta.volatility.average_true_range(
        df['high'], df['low'], df['close'], window=14)
    df['Rolling_Std_10'] = df['close'].rolling(window=10).std()

    # 2. Momentum Indicators
    df['Stoch_%K'] = ta.momentum.stoch(
        df['high'], df['low'], df['close'], window=14, smooth_window=3)
    df['Stoch_%D'] = ta.momentum.stoch_signal(
        df['high'], df['low'], df['close'], window=14, smooth_window=3)
    df['Williams_%R'] = ta.momentum.williams_r(
        df['high'], df['low'], df['close'], lbp=14)

    # 3. Time-Based Features
    df['hour'] = df.index.hour
    df['day_of_week'] = df.index.dayofweek
    df['month'] = df.index.month

    # 4. Trend Indicators
    dc = ta.volatility.DonchianChannel(
        df['high'], df['low'], df['close'], window=20)
    df['Donchian_Upper'] = dc.donchian_channel_hband()
    df['Donchian_Lower'] = dc.donchian_channel_lband()
    df['Donchian_Mid'] = dc.donchian_channel_mband()

    return df
