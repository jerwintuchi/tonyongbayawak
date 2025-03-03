import BackToTimeline from '@/components/buttons/back-timeline-btn';
import Diagram from '@/components/Diagram';
import React, { Suspense } from 'react';
import SoftwareDemo from './SoftwareDemo';

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
            {/* Feedback from Respondents */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <p className='text-yellow-300 text-sm mt-4 mx-12 text-center'>
                    In accordance with our privacy policy, individual survey responses will remain confidential.<br /> Only general feedback and recommendations will be shared.
                </p>
                <Diagram src="feedback.png" alt="Feedback from Respondents" width={500} height={300} className="rounded-lg shadow-md bg-white" title="Fig. 1 - Optional Respondents' Feedback" />
            </div>


            {/* Actual Forecast */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <Diagram src="forecast-result.svg" alt="Forecast Result" width={800} height={400} className="rounded-lg shadow-md bg-white" title="Fig. 2 - Forecast Result" />
                <p className='text-gray-300 mt-4'>
                    The figure presents a comparison between the actual <span className='text-orange-400'>AXS cryptocurrency price movements</span>  and the <span className='text-blue-400'>Predictions</span> made by the tuned LSTM model.
                    The actual price data shows notable volatility, particularly around mid-February, where a sharp increase is observed before stabilizing and eventually trending downward in early <strong>March</strong>.<br />
                    The forecasted values, while closely following the overall trend, exhibit a smoother trajectory with fewer sharp fluctuations.
                    The model successfully captures the long-term downward trend of AXS prices, demonstrating its effectiveness in predicting general price movements.<br /><br />
                    However, some discrepancies are noticeable, particularly in areas where rapid price spikes or dips occur in the actual data.
                    These deviations suggest that while the <span className='text-blue-400'>LSTM model</span> performs well for broader trend analysis, its responsiveness to sudden market fluctuations could be
                    further refined. Enhancing the model by incorporating additional indicators, such as trading volume or market sentiment analysis, could improve short-term
                    predictive accuracy. Despite these minor differences, the forecast provides valuable insights, helping investors anticipate price trends and make more informed
                    financial decisions.
                </p>
            </div>

            {/* Software Demo */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md mt-6">
                <h2 className='text-center text-3xl text-blue-400 mt-4'>
                    Software Demo
                </h2>
                <Suspense fallback={<div className="animate-pulse bg-gray-700 w-full h-64 rounded-lg mt-4"></div>}>
                    <SoftwareDemo />
                </Suspense>
                <p className='text-gray-300 mt-4'>
                    The web app prototype was designed and refined based on expert feedback to provide a more comprehensive trading experience.
                    Key features include <strong>Technical Analysis (TA) tools</strong>, allowing users to draw directly on the price chart,
                    as well as the ability to enable <strong>popular indicators</strong> such as <strong>Relative Strength Index (RSI)</strong> and <strong>Moving Averages</strong> for better trend analysis.
                    Users can also <strong>save their annotated charts</strong>, preserving their custom drawings and insights for future reference.
                    Additionally, the system enables users to <strong>export forecast data in CSV format</strong>, making it easier to analyze trends offline.
                    These enhancements ensure that traders have access to essential tools for data-driven decision-making, improving both usability and analytical depth.
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
        </div >
    );
}
