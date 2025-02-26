"use client";

import React from 'react';
import Image from 'next/image';

export function RRL() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-blue-300 font-semibold mb-4">Review of Related Literature and Studies</h2>
            <p className="text-gray-300 mb-4">
                Various studies have explored the volatility of cryptocurrency markets and the potential of AI-based forecasting methods. Previous research by Chen et al. (2020) and Mudassir et al. (2020) demonstrated the effectiveness of Long Short-Term Memory (LSTM) networks in predicting cryptocurrency price trends. Unlike traditional models like ARIMA and SVM, LSTMs can capture long-term dependencies, making them ideal for financial time-series forecasting.
            </p>
            <p className="text-gray-300 mb-4">
                Additionally, studies have shown a strong correlation between Bitcoin&apos;s price and the price of other altcoins, including AXS. Understanding these relationships is crucial for improving forecasting accuracy and developing more reliable predictive models.
            </p>

            <h3 className="text-2xl text-blue-300 font-semibold mb-2">Reasons for Cryptocurrency and NFT Investment in the Philippines</h3>
            <p className="text-gray-300 mb-4">
                The main reason why many people invest in cryptocurrencies and NFTs, especially in the Philippines, is due to the following findings from local studies of Francisco et al. (2022), Esteban et al. (2022), and De Jesus et al.:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
                <li><strong>Remuneration for Supplication of Necessities</strong></li>
                <li><strong>For Entertainment Purposes</strong></li>
                <li><strong>Short-Term Income Convenience</strong></li>
            </ul>
            <p className="text-gray-300 mb-4">
                Among the respondents of Francisco et al. (2022), the majority played the game and got their return on investment in 1 to 3 months, concluding that most Filipino players engaging and investing in crypto gaming are looking for short-term income return rather than long-term investments. Part of the reason is that culturally, Filipinos are not inclined towards long-term investments (Tiongson, 2017).
            </p>

            {/* Image Example */}
            <div className="text-center my-6">
                <Image src="/diagrams/ROI.svg" alt="Crypto Investment in the Philippines" width={600} height={350} className="rounded-lg shadow-md mx-auto" />
                <p className="text-sm text-gray-400 mt-2">Fig. 1 - Range of the Return of Investment among players</p>
            </div>
            <p className="text-gray-300 mb-4">
                Also, social pressure factor, dominance through social media platforms, and curiosity of crypto players were the major influence as to why they invested in such despite knowing the risks of the implications of cryptocurrency’s high volatility, still because the majority of Filipinos highly expect a massive investment gain in a short period.
                Furthermore, one of the results from a study by De Jesus et al., (2022) supports the findings by Francisco et al., (2022) that since most Filipinos that are invested in crypto and NFTs (specifically Axie) aim for short-term return of investment, the findings from the study of De Jesus et al., (2022) in which all of their respondents did not consider axie as a permanent source of stable income therefore implying that Filipinos mostly invest in crypto or NFTs mainly for quick income.

            </p>
        </div>
    );
}