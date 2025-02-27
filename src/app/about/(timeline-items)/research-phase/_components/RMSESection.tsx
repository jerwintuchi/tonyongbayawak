import React from 'react'
import RMSEFormula from './RMSEFormula'
import Link from 'next/link'

export default function RMSESection() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-blue-300 font-semibold mb-4">Root Mean Squared Error</h2>
            <RMSEFormula />
            <h2 id="rmse-accuracy-table" className="rmse-accuracy-table text-3xl text-blue-300 font-semibold mb-4">RMSE Accuracy Table</h2>
            <table className="w-full text-gray-300 border mb-4 border-gray-600 rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                    <tr>
                        <th className="text-left p-3">Interpretation</th>
                        <th className="text-left p-3">Range</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">Very Accurate</td>
                        <td className="p-3">{"< 0.2"}</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">Accurate</td>
                        <td className="p-3">0.2 - 0.5</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">Inaccurate</td>
                        <td className="p-3">{"> 0.5"}</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-gray-300 pb-4'>
                We computed the accuracy of the predictive model and refer to the <strong>Root Mean Squared Error (RMSE)</strong> accuracy table.
                <strong> RMSE (Root Mean Squared Error)</strong> measures the
                accuracy of a forecast by quantifying the deviation between the predicted and actual prices. A lower RMSE value indicates a
                more precise prediction, while a higher value suggests greater errors in forecasting.  Unlike other evaluation metric like MAE, R-Squared, MSE it is particularly suitable for AXS price forecasting because it squares the errors
                before averaging them, giving higher penalties to larger errors. This ensures that significant deviations in price predictions
                are properly accounted for, making RMSE a reliable metric for financial forecasting most especially for a crypto asset such as AXS. (see. <Link className='text-blue-400 hover:underline' href="/about/model-train-tune#normalized-rmse">Normalized RMSE</Link>)
            </p>

        </div>

    )
}
