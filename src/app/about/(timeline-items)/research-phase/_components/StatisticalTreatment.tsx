import React from 'react'

export default function StatisticalTreatment() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-blue-300 font-semibold mb-4">Statistical Treatment and Sampling Techniques</h2>
            <p className="text-gray-300 mb-4">
                A total of <strong>404 respondents</strong> were selected using Slovin’s formula, ensuring a <strong>95% confidence level</strong>. RMSE values were analyzed to assess the accuracy of the model, with a score below 0.5 indicating high predictive reliability.
            </p>
        </div>
    )
}
