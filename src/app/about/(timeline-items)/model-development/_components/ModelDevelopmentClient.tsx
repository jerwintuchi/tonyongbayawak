"use client";

import React from "react";
import Phase1 from "./Phase1";
import BackToTimeline from "@/components/buttons/back-timeline-btn";


export default function ModelDevelopmentClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-4 relative overflow-hidden text-gray-100">
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
                    Data Cleaning and Preprocessing
                </h2>
                <p className="text-gray-300 mb-4">
                    The predictive model is developed using <strong>Long Short-Term Memory (LSTM)</strong>, a deep learning algorithm
                    optimized for sequential data. LSTM is chosen due to its ability to capture long-term dependencies,
                    making it ideal for forecasting AXS price trends over time.
                </p>
            </div>

            {/* Phase 1: Data Preparation & Cleaning */}
            <Phase1 />

            <div className="mt-8 flex justify-center">
                <BackToTimeline />
            </div>
        </div>
    );
}
