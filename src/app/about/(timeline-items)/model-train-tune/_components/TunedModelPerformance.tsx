import Diagram from '@/components/Diagram';
import React from 'react';

export default function TunedModelPerformance() {
    return (
        <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-semibold mb-2 text-blue-300">
                Tuned Model Test-Set and Forecast Performance
            </h2>
            <Diagram
                src="tuned-model-test-perf.svg"
                alt="Tuned Model Test-Set and Forecast Performance"
                width={1000}
                height={600}
                className='flex flex-row md:flex-row justify-center mt-4 gap-4'
                title="Fig. 10 - Tuned Model Test-Set Performance"
            />
            <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-300 mb-4">
                    The figure above illustrates the time-series data of an AXS&apos; price from January 2021 to October 2022. The forecast of the <span className='text-yellow-500'>tuned model</span> indicates the <span className='text-yellow-300'>95% confidence interval (CI)</span>, signifying uncertainty in the predictions.
                </p>
                <p className="text-gray-300 mb-4">
                    The resulting normalized RMSE of <strong>0.2495 (approximately 25%)</strong> suggests a reasonable level of accuracy. Since the predicted values closely follow actual price movements and mostly remain within the confidence interval, the model demonstrates reasonable predictive performance.
                </p>
                <p className="text-gray-300">
                    In conclusion, the LSTM model effectively captures trends and provides useful forecasts, with minimal deviation from actual values. This accuracy level supports its reliability for decision-making in time-series forecasting.
                </p>
            </div>
            <Diagram
                src="tuned-model-forecast.svg"
                alt="Tuned Model Forecast Performance"
                width={1000}
                height={600}
                className='flex flex-row md:flex-row justify-center mt-4 gap-4'
                title="Fig. 11 - Tuned Model Forecast Performance"
            />
            <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
                <p className="mb-4">
                    This plot visualizes the <strong>test set performance</strong> of a tuned model, specifically for the last <strong>three months</strong> of the dataset. It includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><span className='text-blue-700'><strong>Actual values :</strong> </span>The real observed values from the dataset.</li>
                    <li><span className='text-yellow-500'><strong>LSTM Elite Predictions</strong></span>: The forecasted values from the tuned LSTM model.</li>
                    <li><span className='text-yellow-300'><strong>95% Confidence Interval</strong></span>: Represents the expected range within which future values are likely to fall.</li>
                </ul>

                <h3 className="text-lg font-semibold text-blue-300 mb-2">Analysis & Justification</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>The model&apos;s predictions closely follow the actual trend, indicating <strong>strong predictive performance</strong>.</li>
                    <li>The <strong>tight confidence interval</strong> suggests <strong>low variance</strong>, meaning the model is <strong>reliable and stable</strong> within this period.</li>
                    <li>The <strong>RMSE (Root Mean Square Error)</strong> being normalized and within an acceptable range further supports the model’s accuracy.</li>
                    <li>The downward trend and stabilization near the end show the model successfully adapts to changing patterns.</li>
                </ul>

                <h3 className="text-lg font-semibold text-blue-300 mb-2">Conclusion & Disclaimer</h3>
                <p>
                    The <strong>tuned LSTM model</strong> effectively predicts future values with <strong>high accuracy</strong> while maintaining a <strong>low error margin</strong>.
                    The confidence intervals provide a good balance between certainty and flexibility, making this model a <strong>trustworthy tool for analyzing historical trends</strong>.
                </p>
                <p className="m-6 text-yellow-300 bg-yellow-400 bg-opacity-25 p-4 rounded-lg">
                    <strong>Disclaimer:</strong> This predictive model was developed to provide insights into the AXS market by identifying trends and assessing potential risks.
                    However, it should <strong>not</strong> be used as a sole basis for investment decisions. The cryptocurrency market is highly volatile, and predictions
                    are based on historical data, which does not guarantee future performance. Investors should conduct independent research and seek financial
                    advice before making any investment decisions.
                </p>

            </div>

        </div>
    );
}
