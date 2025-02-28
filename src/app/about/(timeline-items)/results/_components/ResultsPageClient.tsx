import BackToTimeline from '@/components/buttons/back-timeline-btn';
import React from 'react';

export default function ResultsPageClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-4 relative overflow-hidden text-gray-100">
            <h2 className="text-3xl font-semibold text-blue-300 text-center mb-6">Summary, Conclusions, and Recommendations</h2>

            {/* Summary of Findings */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Summary of Findings</h3>
                <p className="text-gray-300">
                    This study aimed to address the volatility problem of the AXS cryptocurrency by developing an accurate predictive model.
                    The research involved training and validating an LSTM-based model using <strong>12,603 training samples</strong> and <strong>3,151 test set</strong>. The best-performing model,
                    <strong> which is the tuned lstm_elite</strong>, achieved an RMSE of <strong>2.3952</strong>, classified as <strong>‘Accurate’</strong> based on predefined evaluation standards.
                </p>
                <p className="text-gray-300 mt-4">
                    A 5-point Likert Scale Questionnaire was conducted to evaluate the usability of the deployed predictive model using ISO-9126 quality standards.
                    The results indicate that most AXS investors felt confident using the system, leading to changes in their initial investment decisions. The model
                    guided users in making more informed choices regarding holding, selling, and liquidating assets.
                </p>
            </div>

            {/* Conclusions */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Conclusions</h3>
                <p className="text-gray-300">
                    The study demonstrates that <strong>Open, High, Low, Close Price, and Moving Average</strong> are effective predictors for AXS cryptocurrency forecasting
                    within a three-month period. The performance of the LSTM Neural Network significantly relies on the selection of feature variables, lags, and model architecture.
                    The results suggest that a single-layer LSTM is sufficient for learning and generalizing price trends effectively.
                </p>
                <p className="text-gray-300 mt-4">
                    The website implementing the model successfully met ISO-9126 standards for <strong>Usability, Efficiency, Reliability, and Portability</strong>.
                    The predictive system influenced AXS investors&quot; confidence, with the majority modifying their decisions based on the forecasts. However, a small
                    subset of users remained firm in their initial strategies, indicating that while the system is beneficial, it does not universally alter investment behavior.
                </p>
            </div>

            {/* Recommendations */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Recommendations</h3>
                <p className="text-gray-300">
                    While the study confirms the accuracy of the predictive model, it does not guarantee that the same feature variables and hyperparameters
                    will always yield optimal results in different datasets. Future studies should explore additional variables, optimize hyperparameters dynamically,
                    and experiment with different neural network architectures to improve accuracy and adaptability.
                </p>
                <p className="text-gray-300 mt-4">
                    Researchers interested in cryptocurrency price prediction should carefully consider the dataset, model architecture, and training parameters before
                    applying this approach to other digital assets. Additionally, aside from <strong>Moving Average</strong> as a feature variable, incorporating additional <strong>market sentiment indicators</strong> such as
                    <strong> Bullish Percent Index (BPI), Volatility Index (VIX) etc.</strong>, or external factors such as <strong>news trends</strong> and <strong>social media discussions</strong>,
                    could further enhance prediction accuracy by capturing external factors influencing cryptocurrency prices. While the developed model aids decision-making
                    for AXS investors, further refinements and external validations are necessary to ensure its long-term reliability.
                </p>
            </div>
            <div className="flex justify-center mt-6">
                <BackToTimeline />
            </div>
        </div>
    );
}
