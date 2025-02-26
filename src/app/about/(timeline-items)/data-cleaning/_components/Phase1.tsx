"use client";

import React from "react";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";

export default function DataCollectionClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 px-4 relative overflow-hidden text-gray-100">
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
                    <li>Moving Average</li>
                </ul>
            </div>

            {/* Batched API Requests */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Batched API Requests</h3>
                <p className="text-gray-300">
                    Due to <strong>API limitations</strong> restricting requests to <strong>2000 data points per call</strong>, the data retrieval process was executed in batches and later merged into a single dataset. The volume feature was dropped due to its low correlation with price variables.
                </p>
                <div className="my-6">
                    <CodeBlock
                        text={
                            `
                            import cryptocompare
                            import pandas as pd
                            import datetime`
                        }
                        language="python"
                        theme={dracula}
                    />
                    <p className="text-gray-300 text-center m-4">
                        Import the necessary modules
                    </p>

                    <CodeBlock
                        text={
                            `
                                axs1 = pd.DataFrame(cryptocompare.get_historical_price_hour('AXS', currency='USD', limit=2000, toTs=datetime.datetime(2021,3,26)))
                                axs1.time = pd.to_datetime(axs1.time, unit="s")
                                axs1.drop(["conversionType","conversionSymbol"], axis=1, inplace=True)

                                axs2 = pd.DataFrame(cryptocompare.get_historical_price_hour('AXS', currency='USD', limit=2000, toTs=datetime.datetime(2021,6,16)))
                                axs2.time = pd.to_datetime(axs2.time,unit="s")
                                axs2.drop(["conversionType","conversionSymbol"], axis=1, inplace=True)
                                axs2.tail()

                                axs3 = pd.DataFrame(cryptocompare.get_historical_price_hour('AXS', currency='USD', limit=2000, toTs=datetime.datetime(2021,9,7)))
                                axs3.time = pd.to_datetime(axs3.time,unit="s")
                                axs3.drop(["conversionType","conversionSymbol"], axis=1, inplace=True)
                                axs3.tail()

                                # Other fetching logic for batching fetches
                                . . . .
                        `}
                        language="python"
                        theme={dracula}
                    />
                    <p className="text-gray-300 text-center m-4">
                        Fetch the historical data (AXS Prices) from the cryptocompare object by batches <strong>(2000 every requests)</strong>
                    </p>

                    <CodeBlock
                        text={
                            `
                            axs_datasets = pd.concat([axs1,axs2,axs3,axs4,axs5,axs6,axs7,axs75,axs8,axs9,axs10]).drop_duplicates(keep="first")
                            axs_datasets.drop(["volumefrom", "volumeto"], axis=1, inplace=True)
                            axs_datasets["time"] = pd.to_datetime(axs_datasets["time"])

                            axs_datasets.reset_index(inplace=True)
                            axs_datasets.drop('index',axis=1, inplace=True)
                            axs_datasets
                            `}
                        language="python"
                        theme={dracula}
                    />
                    <p className="text-gray-300 text-center m-4">
                        Merge the datasets into a single dataframe and drop unnecessary columns.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center mt-4'>
                        <Image src="/diagrams/dataset.png" alt="Batched API Data Result" width={500} height={300} className="rounded-lg shadow-md bg-white" />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 text-center mb-4">Fig. 1 - API Data Retrieval in Batches</p>

                    <CodeBlock
                        text={
                            `
                            axs_datasets.isna().sum()
                            `}
                        language="python"
                        theme={dracula}
                    />
                    <p className="text-gray-300 text-center m-4">
                        Check for missing values.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center mt-4'>
                        <Image src="/diagrams/null-output.png" alt="Printed Result of null values" width={200} height={150} className="self-center rounded-lg shadow-md bg-white" />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 text-center mb-4">Fig. 2 - Printed Result of Null Values</p>
                    <p className="text-gray-300 text-center m-4">
                        All columns have no missing values which is good, now we can properly feed split the dataset for training and testing the model.
                    </p>

                    <CodeBlock
                        text={
                            `
                            axs_datasets.to_csv("finalfr.csv")
                            `}
                        language="python"
                        theme={dracula}
                    />
                    <p className="text-gray-300 text-center m-4">
                        Export the dataset into an excel file named &apos;finalfr.csv&apos;.
                    </p>
                </div>
            </div>
        </div>
    );
}
