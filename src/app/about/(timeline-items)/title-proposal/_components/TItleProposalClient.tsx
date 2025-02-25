"use client";

import React from 'react';
import BackToTimeline from '@/components/buttons/back-timeline-btn';

export default function TitleProposalClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 pt-12 px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Title Proposal</h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    The initial stage of our research involved brainstorming and defining the project scope.
                    This step was crucial in identifying the need for an AI-powered forecasting model for AXS investors.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Project Scope & Initial Research</h2>
                <p className="text-gray-300 mb-4">
                    During the title proposal phase, our team identified the growing demand for accurate
                    cryptocurrency forecasting, specifically in the AXS market. Through extensive
                    literature review and initial consultations with experts, we formulated a
                    comprehensive research plan that outlined our methodologies, expected outcomes, and
                    potential contributions to the field.
                </p>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Supporting Studies</h2>
                <p className="text-gray-300 mb-4">
                    Predictive modeling for cryptocurrency forecasting has gained significant attention due to
                    the high volatility of digital assets. Studies by Edwards (2019) and Pedamkar (2022)
                    emphasize that machine learning techniques, such as Long Short-Term Memory (LSTM) networks,
                    are highly effective in capturing patterns in financial time series data. Additionally,
                    research by Kylie (2019) from CoinMarketCap highlights the importance of using a
                    volume-weighted approach to improve forecasting accuracy.
                </p>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Methodology</h2>
                <p className="text-gray-300 mb-4">
                    The study employs a quantitative research approach, utilizing a predictive analytics
                    framework. The methodology consists of three phases:
                </p>
                <ul className="text-gray-300 list-disc pl-6 mb-4">
                    <li>Data Collection: Gathering historical AXS price data from Cryptocompare API.</li>
                    <li>Data Processing: Cleaning and normalizing data for training the LSTM model.</li>
                    <li>Model Development: Training and evaluating the predictive model using RMSE.</li>
                </ul>

                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Significance of the Study</h2>
                <p className="text-gray-300">
                    This project serves as a valuable tool for AXS investors, aiding in informed
                    decision-making by providing data-driven insights. By leveraging machine learning
                    techniques, we aim to bridge the gap between technical analysis and investment
                    strategies in the cryptocurrency market. Additionally, this study contributes to the
                    growing field of AI-powered financial forecasting, offering new perspectives on digital asset predictions.
                </p>
            </div>

            {/* Navigation */}
            <div className="text-center mt-10">
                <BackToTimeline />
            </div>
        </div>
    );
}
