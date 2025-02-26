import React from 'react'

export default function Phase3() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl text-blue-300 font-semibold mb-2">Phase 3: Deployment</h3>
            <p className="text-gray-300">
                After training, the model is deployed into an interactive web application. The system provides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Real-time AXS price vs. predicted price comparison</li>
                <li>News scraping for market insights</li>
                <li>User interaction for customized forecasts</li>
            </ul>
        </div>
    )
}
