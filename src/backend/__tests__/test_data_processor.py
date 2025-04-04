import pandas as pd
from data_prep.data_processor import process_df, remove_unnecessary_columns, add_features


def test_process_data():
    # Sample data for testing
    sample_data = [
        {"time": 1625011200, "close": 100,
            "conversionType": "direct", "conversionSymbol": "USD"},
        {"time": 1625014800, "close": 105,
            "conversionType": "direct", "conversionSymbol": "USD"}
    ]

    # Process the sample data
    df = process_df(sample_data, 1625011200)
    print("Processed Data:")
    print(df)


def test_remove_unnecessary_columns():
    sample_data = pd.DataFrame({
        "time": [1625011200, 1625014800],
        "close": [100, 105],
        "conversionType": ["direct", "direct"],
        "conversionSymbol": ["USD", "USD"]
    })

    remove_unnecessary_columns(sample_data)
    print("Data after removing unnecessary columns:")
    print(sample_data)


def test_add_features():
    sample_data = pd.DataFrame({
        "time": [1625011200, 1625014800],
        "close": [100, 105],
    })

    sample_data = add_features(sample_data)
    print("Data with added features:")
    print(sample_data)


# Run tests
test_process_data()
test_remove_unnecessary_columns()
test_add_features()
