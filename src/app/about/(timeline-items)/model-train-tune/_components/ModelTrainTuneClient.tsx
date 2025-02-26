"use client";

import React from "react";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";
import ModelsTable from "./ModelsTable";
import BackToTimeline from "@/components/buttons/back-timeline-btn";

export default function ModelTrainTuneClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-4 relative overflow-hidden text-gray-100">
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
                    Model Training & Hyperparameter Tuning
                </h2>
                <p className="text-gray-300 mb-4">
                    The proposed LSTM model undergoes a structured training process, model architecture design, and hyperparameter tuning to optimize forecast accuracy.
                </p>
            </div>

            {/* Model Training Process */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Training the LSTM Model</h3>
                <p className="text-gray-300 mb-4 text-center">
                    First, import the necessary modules.
                </p>
                <div className="my-6">
                    <CodeBlock
                        text={
                            `
                            from scalecast.Forecaster import Forecaster
                            from tensorflow.keras.callbacks import EarlyStopping
                            from sklearn.preprocessing import MinMaxScaler
                            from tensorflow.keras.preprocessing.sequence import TimeseriesGenerator
                            import pandas as pd, numpy as np
                            import matplotlib.pyplot as plt
                            import pickle
                            import tensorflow as tf
                            import joblib
                            `
                        }
                        language="python"
                        theme={dracula}
                    />
                </div>
                <p className="text-gray-300 text-center pb-4"> Then </p>
                <CodeBlock
                    text={
                        `
                            dataf=pd.read_csv("finalfr.csv") # load dataset

                            dataf.time = pd.to_datetime(dataf.time) # convert the time column to datetime type

                            dataf['ma'] = dataf['close'].rolling(window=200).mean() # calculate moving average
                            `
                    }
                    language="python"
                    theme={dracula}
                />
                <p className="text-gray-300 mb-4 text-center p-4">
                    We load the dataset, which contains the <strong>feature and target variable</strong>. And then we perform feature engineering to
                    calculate the <strong>Moving Average</strong> based on the <strong>200 previous close/closing prices</strong>. And set the value of the computed moving average to the ma column.
                </p>
            </div>

            {/* Hyperparameter Tuning */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Hyperparameter Tuning</h3>
                <p className="text-gray-300 mb-4">
                    Now that the dataset is ready, we proceed with hyperparameter tuning. To improve model performance, various hyperparameters such as <strong>number of LSTM units/layer, learning rate, batch size, and dropout rate</strong> were tuned.
                </p>
                <CodeBlock
                    text={
                        `
                            f = Forecaster(y=dataf["close"], current_dates=dataf["time"]) # instantiate a Forecaster object
                            f.plot()
                            plt.title("AXS historic price",size=16)
                            plt.show()
                            `
                    }
                    language="python"
                    theme={dracula}
                />
                <p className="text-gray-300 mb-4 text-center p-4">
                    We instantiate a Forecaster object called <strong>&apos;f&apos;</strong> with the target variable <strong>(Closing Price)</strong> and current dates to plot the historic price of the AXS.
                </p>
                <div className='flex flex-col md:flex-row justify-center mt-4'>
                    <Image src="/diagrams/axs-history.png" alt="Hyperparameter Tuning" width={500} height={300} className="rounded-lg shadow-md w-full bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 1 - AXS Price History</p>
                <p className="text-gray-300 mb-4 text-center p-4">
                    Now that we have the Forecaster object. We can now train the model.
                </p>
                <CodeBlock
                    text={
                        `
                            f.set_test_length(.20) # set the test length to 20%
                            f.generate_future_dates(2600) #3 months
                            `
                    }
                    language="python"
                    theme={dracula}
                />
                <p className="text-gray-300 mb-4 text-center p-4">
                    We set the test length to <strong>20%</strong> and generate the forecast for the next <strong>2600 hours</strong> which is equivalent to <strong>3 months</strong>.
                </p>
                <h3 className="text-2xl text-blue-300 text-center font-semibold mb-2">Training and Tuning</h3>
                <p className="text-gray-300 mb-4 text-center p-4">
                    The proponents created and configured <strong>7 Recurrent Neural Networks</strong> and <strong>1 Multiple Linear Regression (MLR)</strong> model, each with unique and different architecture and
                    hyperparameters and is trained using <strong>80%</strong> of the dataset which is the <strong>training set</strong> and validated using <strong>20%</strong> of the dataset which is the <strong>test set</strong>.
                </p>
                <ModelsTable />
            </div>

            {/* Model Evaluation */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Model Evaluation</h3>
                <p className="text-gray-300 mb-4">
                    The trained model is evaluated using <strong>Root Mean Squared Error (RMSE)</strong>, ensuring it provides accurate price predictions. Lower RMSE values indicate better predictive performance.
                </p>
                <div className='flex flex-col md:flex-row justify-center mt-4'>
                    <Image src="/diagrams/model-evaluation.png" alt="Model Evaluation" width={500} height={300} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 2 - Model Evaluation Metrics</p>
            </div>
            <div className="flex justify-center">
                <BackToTimeline />
            </div>
        </div>
    );
}

