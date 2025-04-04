from fastapi import FastAPI  # type: ignore
import mlflow
import lightgbm as lgb  # type: ignore
import pandas as pd
import joblib  # type: ignore
import os
from apscheduler.schedulers.background import BackgroundScheduler
from sklearn.metrics import accuracy_score  # type: ignore
import numpy as np
from data_prep.logger import setup_logging
from data_prep.fetch_and_process_data import fetch_and_process_data
from datetime import datetime, timezone


# Initialize FastAPI
app = FastAPI()

# MLflow Tracking URI (store experiments locally)
mlflow.set_tracking_uri("file:./mlflow")
mlflow.set_experiment("lightgbm_experiment")

# Load the trained model
MODEL_PATH = "models/LightGBM_classifier_v4.pkl"
if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)
else:
    model = None

# Setup logging
setup_logging()

# Define Parameters
SYMBOL = "AXS"
CURRENCY = "USD"
LIMIT = 2000
START_DATE = "2021-01-29"
END_DATE = datetime.now(timezone.utc).strftime("%Y-%m-%d")  # Current date


# Retrain Model if Accuracy Drops
def retrain_model():
    global model
    print("🔄 Checking model performance...")

    # Fetch latest data
    dataset = fetch_and_process_data(
        SYMBOL, CURRENCY, LIMIT, START_DATE, END_DATE)

    # the dataset to be returned from the function should already be preprocessed
    X_train, y_train = dataset

    # Train a new LightGBM model
    new_model = lgb.LGBMClassifier()
    new_model.fit(X_train, y_train)

    # Evaluate accuracy
    y_pred = new_model.predict(X_train)
    accuracy = accuracy_score(y_train, y_pred)
    print(f"📊 New Model Accuracy: {accuracy}")

    # Log to MLflow
    with mlflow.start_run():
        mlflow.log_metric("accuracy", accuracy)

        # Save model if accuracy meets threshold
        if accuracy >= 0.7:
            print("✅ Accuracy is good. Updating model...")
            joblib.dump(new_model, MODEL_PATH)
            model = new_model
            mlflow.sklearn.log_model(new_model, "lightgbm_model")
        else:
            print("❌ Accuracy too low. Not updating model.")


# Schedule automatic retraining every 24 hours
scheduler = BackgroundScheduler()
scheduler.add_job(retrain_model, "interval", hours=24)
scheduler.start()


@app.get("/")
def home():
    return {"message": "FastAPI + MLflow Server is Running!"}


@app.post("/predict")
def predict(data: dict):
    """Receives JSON input and returns a prediction."""
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
