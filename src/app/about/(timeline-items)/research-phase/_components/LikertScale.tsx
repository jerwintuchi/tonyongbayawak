import React from 'react'

export default function LikertScale() {
    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-blue-300 font-semibold mb-4">Likert Scale Interpretation</h2>
            <p className='text-gray-300 mt-4 pb-4'>
                Is used for scoring the responses of the respondents from the questionnaire for assessing their confidence
                levels in terms of <strong>holding, liquidating, selling, or buying</strong> AXS. Additionally, it is utilized to evaluate the usability
                of the system, covering aspects such as <strong>Design, Content, Navigation, and Performance</strong>. The responses are analyzed to gain
                insight into the system’s overall quality in compliance with the <strong>ISO 9126 standard</strong>. Furthermore, the reliability of the
                questionnaire is validated using <strong>Cronbach’s Alpha (α)</strong> to measure internal consistency and ensure the credibility of the
                gathered responses.
            </p>
            <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                    <tr>
                        <th className="text-left p-3">Scale</th>
                        <th className="text-left p-3">Range</th>
                        <th className="text-left p-3">Interpretation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">5</td>
                        <td className="p-3">4.60 - 5.00</td>
                        <td className="p-3">Strongly Agree</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">4</td>
                        <td className="p-3">3.60 - 4.59</td>
                        <td className="p-3">Agree</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">3</td>
                        <td className="p-3">2.60 - 3.59</td>
                        <td className="p-3">Neither Disagree nor Agree</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">2</td>
                        <td className="p-3">1.60 - 2.59</td>
                        <td className="p-3">Disagree</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                        <td className="p-3">1</td>
                        <td className="p-3">1.00 - 1.59</td>
                        <td className="p-3">Strongly Disagree</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
