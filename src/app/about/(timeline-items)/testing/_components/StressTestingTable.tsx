import React from 'react'

export default function StressTestingTable() {
    return (
        <div className="flex justify-center">
            <table className=" border border-gray-600 rounded-lg overflow-hidden mt-12">
                <thead className="bg-blue-900 text-white">
                    <tr>
                        <th className="px-6 py-4 text-center font-semibold">Action</th>
                        <th className="px-6 py-4 text-center font-semibold">Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-600 even:bg-gray-800">
                        <td className="px-6 py-4 text-center">Click</td>
                        <td className="px-6 py-4">
                            The action of clicking on a URL from the URL list and sending a request to the server, which will request any necessary redirects, frames, or images.
                        </td>
                    </tr>
                    <tr className="border-b border-gray-600 even:bg-gray-800">
                        <td className="px-6 py-4 text-center">Hit</td>
                        <td className="px-6 py-4">
                            A completed HTTP request (i.e., sent to the server and answered completely). Hits can be the PAGE request of a &quot;click&quot; or its frames, images, etc.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
