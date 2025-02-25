"use client";

import React from 'react';
import BackToTimeline from '@/components/buttons/back-timeline-btn';

export default function ResearchPageClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 pt-12 px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Research Phase</h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    The research phase focused on gathering, analyzing, and cleaning data to develop an accurate AXS price forecasting model.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Historical Background</h2>
                <p className="text-gray-300 mb-4">
                    The study was initiated due to the volatile nature of cryptocurrency prices, especially AXS.
                    Existing research highlighted that investors lacked reliable tools for predicting price trends,
                    prompting the development of a machine learning-based predictive model.
                </p>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Research Methodology</h2>
                <p className="text-gray-300 mb-4">
                    The study adopted a quantitative approach, employing data analytics and machine learning techniques.
                    The research was divided into three phases:
                </p>
                <ul className="text-gray-300 list-disc pl-6 mb-4">
                    <li>Phase 1: Data gathering and cleaning, ensuring high-quality input for model training.</li>
                    <li>Phase 2: Model training and validation using LSTM networks to forecast AXS prices.</li>
                    <li>Phase 3: Deployment of the predictive model into an interactive website for investor use.</li>
                </ul>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Challenges and Findings</h2>
                <p className="text-gray-300 mb-4">
                    The primary challenge was acquiring and preprocessing large datasets while ensuring model accuracy.
                    After extensive testing, the model achieved an RMSE value of 0.2495, indicating strong predictive performance.
                </p>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Significance of the Study</h2>
                <p className="text-gray-300">
                    This research contributes to the field of AI-driven financial forecasting by providing investors
                    with a data-driven decision-making tool, bridging the gap between technical analysis and investment strategies.
                </p>
            </div>

            {/* Navigation */}
            <div className="text-center mt-10">
                <BackToTimeline />
            </div>
        </div>
    );
}
