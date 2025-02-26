import React from 'react'

export default function Phase2() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl text-blue-300 font-semibold mb-2">Phase 2: Model Training & Validation</h3>
            <p className="text-gray-300">
                The predictive model is trained using LSTM, with hyperparameters fine-tuned for optimal accuracy. The model undergoes training using:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Batch size: 32</li>
                <li>Optimizer: Adam</li>
                <li>Epochs: 50+</li>
                <li>Loss function: Mean Squared Error (MSE)</li>
            </ul>
            <p className="text-gray-300 mt-2">
                The accuracy of the model is validated using <strong>Root Mean Squared Error (RMSE)</strong>, where a lower RMSE value indicates
                better predictive performance.
            </p>
        </div>
    )
}
