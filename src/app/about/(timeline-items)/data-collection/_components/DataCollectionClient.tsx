"use client";

import BackToTimeline from "@/components/buttons/back-timeline-btn";
import React from "react";

export default function DataCollectionClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-4 relative overflow-hidden text-gray-100">
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
                    Data Gathering
                </h2>
                <p className="text-gray-300 mb-4">
                    The study employs multiple data collection techniques, including API-based financial data retrieval, structured questionnaires, and performance observations using
                    automated testing.
                </p>
            </div>

            {/* API Data Collection */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">API Data Collection</h3>
                <p className="text-gray-300">
                    Real-time historical data for <strong>Axie Infinity Shards (AXS)</strong> is retrieved from
                    <a href="https://www.cryptocompare.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> CryptoCompare </a>
                    API. The collected dataset includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Open Price</li>
                    <li>Close Price</li>
                    <li>High Price</li>
                    <li>Low Price</li>
                    <li>Volume</li>
                    <li>Moving Average</li>
                </ul>
                <p className="text-gray-300 mt-2">
                    Data is parsed using Python’s JSON package and split into <strong>80% training and 20% testing sets</strong>, following best practices to avoid overfitting.
                </p>
            </div>

            {/* Questionnaire Collection */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Questionnaire Collection</h3>
                <p className="text-gray-300">
                    A structured <strong>5-point Likert scale questionnaire</strong> evaluates:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Confidence in <strong>holding, liquidating, selling, and buying AXS</strong>.</li>
                    <li>System <strong>usability assessment</strong> using ISO 9126 standards.</li>
                </ul>
                <p className="text-gray-300 mt-2">
                    Responses are collected from <strong>IT/CS professionals, students, and AXS investors</strong>, analyzed with <strong>IBM SPSS Cronbach’s Alpha (α)</strong> for reliability.
                </p>
            </div>

            {/* Automated Observation */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Automated Observation</h3>
                <p className="text-gray-300">
                    Website and server performance are evaluated using industry tools:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-medium text-gray-200"><a href="https://developers.google.com/speed/pagespeed/insights/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">PageSpeed Insights (Google)</a></span>: Measures <strong>performance, accessibility, best practices, and SEO</strong>.
                    </li>
                    <li>
                        <span className="font-medium text-gray-200"><a href="https://www.paessler.com/tools/webstress" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Webserver Stress Tool 8 <i>Enterprise Edition</i></a></span>: Tests <strong>total hits, concurrent users, and CPU load</strong>.
                    </li>
                    <li>
                        <span className="font-medium text-gray-200"><a href="https://www.lambdatest.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Lambda Test</a></span>: Ensures <strong>cross-device compatibility</strong> (Chrome, Firefox, Safari, Opera, mobile devices).
                    </li>
                </ul>
                <p className="text-gray-300 mt-2">
                    These tests validate <strong>efficiency, reliability, and portability</strong>, aligning with ISO 9126 quality factors.
                </p>
            </div>
            <div className="flex justify-center">
                <BackToTimeline />
            </div>

        </div>
    );
}