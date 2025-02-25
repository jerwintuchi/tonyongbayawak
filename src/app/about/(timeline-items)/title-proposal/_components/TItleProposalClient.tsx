"use client";

import React from 'react';
import BackToTimeline from '@/components/buttons/back-timeline-btn';
import Image from 'next/image';
import LSTMDropdown from './LSTMDropdown';
import LSTMExplanation from './LSTMExplanation';
import ImportantInfo from './ImportantInfo';
import SOP from './SOP';

export default function TitleProposalClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden text-gray-100">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 pt-12 px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Developing predictive model using LSTM on AXS for Long-Term AXS
                    Investors</h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    Understanding cryptocurrency volatility and leveraging AI-powered forecasting to empower investors.
                </p>
            </div>

            {/* Introduction Section */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Introduction</h2>
                <p className="text-gray-300 mb-4">
                    Cryptocurrency has revolutionized financial transactions, providing decentralized, fast, and secure exchanges.
                    However, its high volatility makes investment risky. This research aims to develop a predictive model for <strong>AXS (Axie Infinity Shards)</strong>,
                    assisting investors in making informed decisions.
                </p>
                {/* SOP Section */}
                <SOP />

                {/* Image Example */}
                <div className="text-center my-6">
                    <Image src="/diagrams/volatility.jpg" alt="Cryptocurrency Volatility" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">Fig. 1 - Market volatility patterns in cryptocurrencies.</p>
                </div>

                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Traditional vs. AI-Based Forecasting</h3>
                <p className="text-gray-300 mb-4">
                    Traditional models often assume linear relationships between variables, making them ineffective for highly volatile assets like AXS.
                    AI-based models can adapt and learn from historical data, improving predictive accuracy and robustness against sudden market changes.
                </p>
                <p className="text-gray-300 mb-4">
                    Traditional forecasting methods like <strong>Multiple Linear Regression (MLR)</strong> and <strong>ARIMA</strong> struggle with complex, non-linear price movements.
                    <strong> Machine Learning (ML) models, specifically Long Short-Term Memory (LSTM) RNNs,</strong> outperform these methods by recognizing hidden trends in sequential data.
                </p>
            </div>
            {/* Importand info */}
            <ImportantInfo />

            {/* LSTM Explanation Section */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <LSTMExplanation />

                {/* LSTM Diagram */}
                <div className="text-center my-6">
                    <Image src="/diagrams/lstm-architecture.png" alt="LSTM Structure" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">Fig. 2 - LSTM architecture with memory cells for trend learning.</p>
                </div>
                <div className="ml-5 p-4 border rounded-lg shadow-md">
                    <p>
                        Imagine you&apos;re trying to remember the key points of a long story, but you only have a small notebook to take notes. If you write everything, your notebook will fill up too quickly, and if you don’t write enough, you’ll forget important details. LSTMs work in a similar way!
                    </p>
                    <p>Now, let’s break down what’s happening in the image step by step.</p>

                    <LSTMDropdown />
                    <div className="mt-6 font-semibold">
                        <h3>Why is LSTM so powerful?</h3>
                        <p>
                            Unlike traditional memory models, LSTM carefully balances <em>forgetting, remembering, and updating</em>, making it great at spotting long-term trends in cryptocurrency prices, stock markets, and even language translation!
                        </p>
                    </div>
                </div>
            </div>



            {/* Significance of the Study */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Significance of the Study</h2>
                <p className="text-gray-300 mb-4">
                    The project serves as a valuable tool for <strong>AXS investors</strong>, offering guidance in navigating cryptocurrency&apos;s high volatility and financial risks.
                    It benefits <strong>Filipino investors</strong> by aiding long-term strategies and contributes to research on machine learning&apos;s role in AXS price prediction,
                    addressing the gap in existing local studies.
                </p>
            </div>

            {/* Navigation */}
            <div className="text-center mt-10">
                <BackToTimeline />
            </div>
        </div>
    );
}
