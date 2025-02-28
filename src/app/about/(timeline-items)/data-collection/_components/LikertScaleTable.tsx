import React from 'react';

const TableData = [
    {
        "interpretation": "Strongly Agree",
        "scale": 5,
        "range": "4.60 - 5.00"
    },
    {
        "interpretation": "Agree",
        "scale": 4,
        "range": "3.60 - 4.59"
    },
    {
        "interpretation": "Neutral",
        "scale": 3,
        "range": "2.60 - 3.59"
    },
    {
        "interpretation": "Disagree",
        "scale": 2,
        "range": "1.60 - 2.59"
    },
    {
        "interpretation": "Strongly Disagree",
        "scale": 1,
        "range": "0.60 - 1.59"
    }
];

export default function LikertScaleTable() {
    return (
        <div className='overflow-x-auto'>
            <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden mt-12">
                <thead className="bg-blue-900 text-white">
                    <tr className="border-b border-gray-600">
                        <th className="text-left p-3">Interpretation</th>
                        <th className="text-left p-3">Scale</th>
                        <th className="text-left p-3">Range</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-600 hover:bg-blue-500 hover:bg-opacity-25">
                            <td className="p-3">{item.interpretation}</td>
                            <td className="p-3">{item.scale}</td>
                            <td className="p-3">{item.range}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
