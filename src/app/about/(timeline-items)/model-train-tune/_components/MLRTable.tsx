import React from 'react'

export default function MLRTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden mt-12">
                <thead className="bg-blue-900 text-white p-6">
                    <th className="text-left p-3">
                        Model
                    </th>
                    <th className="text-left p-3">
                        Lags
                    </th>
                    <th className="text-left p-3">
                        seasonal_regressors
                    </th>
                </thead>
                <tbody className="border-b border-gray-600">
                    <tr className="border-b border-gray-600 hover:bg-blue-800">
                        <td className="p-3">
                            Multiple Linear Regression (MLR)
                        </td>
                        <td className="p-3">
                            3151
                        </td>
                        <td>
                            ‘month’,’quarter’,’year’
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
