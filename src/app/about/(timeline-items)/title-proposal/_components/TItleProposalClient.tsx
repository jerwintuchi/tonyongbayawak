"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Objectives</h2>
                <ul className="text-gray-300 list-disc pl-6 mb-4">
                    <li>Develop a predictive model for AXS price forecasting using LSTM.</li>
                    <li>Analyze historical market data to identify patterns and trends.</li>
                    <li>Validate the model’s accuracy using RMSE as a scoring metric.</li>
                    <li>Deploy the model to an interactive web application for investor use.</li>
                </ul>
                <h2 className="text-2xl text-blue-300 font-semibold mb-4">Significance of the Study</h2>
                <p className="text-gray-300">
                    This project serves as a valuable tool for AXS investors, aiding in informed
                    decision-making by providing data-driven insights. By leveraging machine learning
                    techniques, we aim to bridge the gap between technical analysis and investment
                    strategies in the cryptocurrency market.
                </p>
            </div>

            {/* Navigation */}
            <div className="text-center mt-10">
                <Link href="/about">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                        Back to Timeline
                    </Button>
                </Link>
            </div>
        </div>
    );
}
