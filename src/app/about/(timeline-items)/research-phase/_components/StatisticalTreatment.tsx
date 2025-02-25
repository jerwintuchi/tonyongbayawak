"use client";

import React from 'react';
import SlovinsFormula from '@/app/about/(timeline-items)/research-phase/_components/SlovinFormula';
import RMSESection from './RMSESection';
import LikertScale from './LikertScale';
import CronbachAlpha from './CronbachAlpha';
import MeanFormula from './MeanFormula';


export function StatisticalTreatment() {
    return (
        <div>
            {/* Statistical Treatment and Sampling Techniques */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Statistical Treatment and Sampling Techniques</h2>

                {/* Respondents Table */}
                <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="text-left p-3">Respondents</th>
                            <th className="text-left p-3">Number of Respondents</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-600">
                            <td className="p-3">CS Professionals</td>
                            <td className="p-3">2</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="p-3">IT Professionals</td>
                            <td className="p-3">3</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="p-3">Domain Expert</td>
                            <td className="p-3">2</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                            <td className="p-3">AXS Stakeholders</td>
                            <td className="p-3">397</td>
                        </tr>
                        <tr className="font-bold bg-gray-800">
                            <td className="p-3">Total Respondents</td>
                            <td className="p-3">404</td>
                        </tr>
                    </tbody>
                </table>

                {/* Slovin's Formula */}
                <div className="flex flex-row mt-6">
                    <SlovinsFormula />
                </div>

                <p className="text-gray-300 mt-4">
                    A total of <strong>404 respondents</strong> were selected using Slovin&apos;s formula, ensuring a <strong>95% confidence level</strong>. RMSE values were analyzed to assess the accuracy of the model, with a score below 0.5 indicating high predictive reliability.
                </p>
            </div>
            {/* RMSE Accuracy Table */}
            <RMSESection />
            {/* Likert Scale Interpretation */}
            <LikertScale />

            {/* Cronbach’s Alpha Section */}
            <CronbachAlpha />

            {/* Question Item Mean Formula */}
            <MeanFormula />
        </div>
    );
}
