from fastapi import FastAPI  # type: ignore
import mlflow
import lightgbm as lgb  # type: ignore
import pandas as pd
import joblib  # type: ignore
import os

# Initialize FastAPI
app = FastAPI()

# Load the trained model
MODEL_PATH = "models/LightGBM_classifier_v4.pkl"
if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)
else:
    model = None

# MLflow Tracking URI (Store experiment results)
mlflow.set_tracking_uri("file:./mlflow")


@app.get("/")
def home():
    return {"message": "FastAPI + MLflow Server is Running!"}


@app.post("/predict")
def predict(data: dict):
    """
    Receives JSON input and returns a prediction.
    Supports both single and batch predictions.

    Expected input formats:
    - Single prediction: {"features": [values]}
    - Batch prediction: {"features": [[values], [values], ...]}
    """
    if model is None:
        return {"error": "Model not found. Train and save the model first."}

    # Column names expected by the model
    columns = [
        'high', 'low', 'open', 'volumefrom', 'volumeto', 'ATR',
        'Rolling_Std_10', 'hour', 'day_of_week', 'month',
        'Stoch_%K', 'Stoch_%D', 'Williams_%R',
        'Donchian_Upper', 'Donchian_Lower', 'Donchian_Mid'
    ]

    # Determine if input is single or batch
    if isinstance(data["features"][0], list):
        # Batch input
        features = pd.DataFrame(data["features"], columns=columns)
    else:
        # Single input
        features = pd.DataFrame([data["features"]], columns=columns)

    # Make predictions
    predictions = model.predict(features)

    # Log prediction in MLflow
    with mlflow.start_run():
        mlflow.log_params(data)
        for i, pred in enumerate(predictions):
            mlflow.log_metric(f"prediction_{i}", pred)

    return {"predictions": predictions.tolist()}
