import React from 'react'

export default function LSTMExplanation() {
    return (
        <>
            {/* LSTM Explanation Section */}
            <h2 className="text-3xl text-blue-300 font-semibold mb-4" > Why LSTM for Cryptocurrency Prediction ?</h2>
            <p className="text-gray-300 mb-4">
                LSTMs are widely used for tasks that require learning long-term dependencies, such as <strong>stock price prediction</strong>,
                <strong> speech recognition</strong>, and <strong> natural language processing (NLP)</strong>. In financial applications, LSTMs have been successful in identifying patterns
                that traditional models fail to capture. For example, while a basic statistical model might struggle to predict sudden spikes in stock prices due to market sentiment,
                an LSTM can learn from past trends, news sentiment, and trading volumes to better anticipate price movements. Companies like JPMorgan and hedge funds use LSTM-based models
                to forecast stock trends and automate trading strategies, demonstrating its effectiveness in real-world financial markets.
            </p>
            <p className="text-gray-300 mb-4">
                <strong>Long Short-Term Memory (LSTM)</strong> is a type of <strong>Recurrent Neural Network (RNN)</strong> designed to handle sequential data over long periods.
                Unlike standard RNNs, LSTM solves the <strong>vanishing gradient problem</strong>, which occurs in traditional RNNs when gradients shrink exponentially as
                they are backpropagated through many layers—like trying to pass a whispered message through a long line of people, where the message gets quieter and eventually lost.
                LSTM prevents this by using memory cells that selectively retain important information, allowing it to learn meaningful trends from historical data.
            </p>
        </>
    )
}
