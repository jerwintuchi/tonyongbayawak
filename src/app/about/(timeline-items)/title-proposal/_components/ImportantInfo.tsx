"use client";

import React from 'react';
import Image from 'next/image';

export function ImportantInfo() {
    return (
        <div>
            {/* 1.3 Conceptual Framework */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4 text-center">Conceptual Framework</h2>
                <div className="text-center my-6">
                    <Image src="/diagrams/feature-variables.svg" alt="Feature Variables" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">Fig. 2 - Key Variables for Predictive Model Development</p>
                </div>
                <h3 className="text-3xl text-blue-300 font-semibold mb-4">Feature Variables</h3>
                <p className="text-gray-300 text-md mb-4 ml-4">
                    The model is built on five key feature variables: opening price, closing price, daily high, daily low, and trading volume. These indicators help assess market trends, investor sentiment, and asset profitability. High trading volume signifies market interest and liquidity, making it easier for traders to execute buy and sell orders. By incorporating these variables, the model aims to provide a reliable AXS price prediction framework.
                </p>
                <div className="text-center my-6">
                    <Image src="/diagrams/ipo-model.png" alt="IPO Model" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">Fig. 3 - IPO Model Diagram</p>
                </div>
                <h3 className="text-3xl text-blue-300 font-semibold mb-4">IPO Model</h3>
                <p className="text-gray-300 text-md mb-4 ml-4">
                    The IPO Model integrates data from two sources: the website and user inputs. The model processes this data to train and validate predictions using RMSE. Additionally, it scrapes financial news for AXS market trends and gathers user feedback via surveys. These insights help refine the model and address key research questions effectively.
                </p>
            </div>

            {/* 1.5 Objectives */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Objectives</h2>
                <h3 className='text-2xl text-blue-300 font-semibold mb-4'>General Objective</h3>
                <p className='text-white text-lg mb-4 ml-4'>
                    <strong>
                        Develop a predictive model using Long-Short Term Memory Neural Networks with high accuracy to assist AXS investors in identifying potential risks and making informed investment decisions.
                    </strong>
                </p>
                <h3 className='text-2xl text-blue-300 font-semibold mb-4'>Specific Objectives</h3>
                <ol className="list-decimal text-gray-300 ml-4">
                    <li>Process and clean raw data, train the model, evaluate accuracy using RMSE, and deploy the predictive model on a user-accessible website.</li><br />
                    <li>Collect user feedback through questionnaires to assess satisfaction, usability, and compliance with ISO/IEC 9126 standards.</li>
                </ol>
            </div>

            {/* 1.6 Scope and Limitations */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Scope and Limitations</h2>
                <p className="text-gray-300 mb-4">
                    This study focuses on AXS price prediction using deep learning models. External economic factors such as government regulations and macroeconomic trends are beyond the study&apos;s scope. The dataset is sourced from publicly available AXS trading data from cryptocurrency exchanges.
                </p>
            </div>
        </div>
    );
}
