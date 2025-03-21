from fastapi import FastAPI
import mlflow
import lightgbm as lgb
import pandas as pd
import joblib
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
    Receives JSON input, processes it, and returns a prediction.
    Expected input format: { "features": [values] }
    """
    if model is None:
        return {"error": "Model not found. Train and save the model first."}

    # Convert input to DataFrame
    features = pd.DataFrame([data["features"]], columns=[
        'high', 'low', 'open', 'volumefrom', 'volumeto', 'ATR',
        'Rolling_Std_10', 'hour', 'day_of_week', 'month',
        'Stoch_%K', 'Stoch_%D', 'Williams_%R',
        'Donchian_Upper', 'Donchian_Lower', 'Donchian_Mid'
    ])

    # Make prediction
    prediction = model.predict(features)[0]

    # Log prediction in MLflow
    with mlflow.start_run():
        mlflow.log_params(data)
        mlflow.log_metric("prediction", prediction)

    return {"prediction": int(prediction)}
