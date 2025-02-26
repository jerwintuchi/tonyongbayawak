"use client";

import React from 'react';
import Image from 'next/image';

export function Methodology() {
    return (
        <>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4 text-center">Methodology</h2>

                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Type of Research</h3>
                <p className="text-gray-300 mb-4">
                    This study adopts a <strong>Quantitative and Correlational</strong> approach, focusing on the predictive performance of the model and investigating relationships between feature variables.
                </p>

                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Project Design</h3>
                <p className="text-gray-300 mb-4">
                    The system consists of an AI-powered forecasting model for AXS, a user-friendly interface, and real-time market data analysis. The design process includes:
                </p>

                {/* Activity, Use Case, System Design Diagrams */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center">
                        <Image src="/diagrams/activity.svg" alt="Activity Diagram" width={600} height={350} className="rounded-lg shadow-md mx-auto w-full" />
                        <p className="text-sm text-gray-400 mt-2">Fig. 1 - Activity Diagram</p>
                    </div>
                    <div className="text-center">
                        <Image src="/diagrams/use-case.svg" alt="Use Case Diagram" width={600} height={350} className="rounded-lg shadow-md mx-auto w-full" />
                        <p className="text-sm text-gray-400 mt-2">Fig. 2 - Use Case Diagram</p>
                    </div>
                    <div className="text-center col-span-1 md:col-span-2 lg:col-span-3">
                        <Image src="/diagrams/system-architecture1.svg" alt="System Architecture 1" width={600} height={350} className="rounded-lg shadow-md mx-auto w-full max-w-xl" />
                    </div>
                    <div className="text-center col-span-1 md:col-span-2 lg:col-span-3">
                        <Image src="/diagrams/system-architecture2.svg" alt="System Architecture 2" width={600} height={350} className="rounded-lg shadow-md mx-auto w-full max-w-xl" />
                        <p className="text-sm text-gray-400 mt-2">Fig. 3 - System Architecture</p>
                    </div>
                </div>

                <h3 className="text-2xl text-blue-300 font-semibold mt-8 mb-2">Hardware and Software Specifications</h3>
                <p className="text-gray-300 mb-4">
                    The system is designed to run efficiently on the following specifications:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>Processor: Ryzen 5 3400G or higher</li>
                    <li>RAM: 16GB DDR4</li>
                    <li>Graphics: RX Vega 11 or equivalent</li>
                    <li>Storage: 250GB SSD (PCIe NVMe preferred)</li>
                    <li>OS: Windows 10</li>
                    <li>Python 3.10 or later</li>
                </ul>
            </div>

            {/* Methods in Developing and Evaluating the Software */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4 text-center">Methods in Developing and Evaluating the Software</h2>
                <p className="text-gray-300 mb-4">
                    The study follows the <strong>Waterfall Methodology</strong>, dividing development into three phases:
                </p>
                <div className="text-center my-6">
                    <Image src="/diagrams/waterfall-method.svg" alt="Feature Variables" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">Fig. 4 -Waterfall methodology for the Project </p>
                </div>
                <ul className="list-disc list-inside text-gray-300 mb-4 text-center">
                    <li><strong>Phase 1:</strong> Data Gathering and Cleaning</li>
                    <li><strong>Phase 2:</strong> Model Training and Validation</li>
                    <li><strong>Phase 3:</strong> Deployment and Evaluation</li>
                </ul>
                <p className="text-gray-300 mb-4">
                    Evaluation includes accuracy testing using <strong>Root Mean Squared Error (RMSE)</strong> and usability testing based on ISO 9126 standards.
                </p>
            </div>
        </>
    );
}
