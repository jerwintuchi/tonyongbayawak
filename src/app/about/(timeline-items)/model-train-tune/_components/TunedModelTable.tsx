import React from 'react';

export default function TunedModelTable() {
  return (
    <div className="overflow-x-auto w-full md:w-1/2 mt-6">
      <table className="min-w-full border border-gray-700 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="px-4 py-2 border border-gray-700">Lags</th>
            <th className="px-4 py-2 border border-gray-700">Batch Size</th>
            <th className="px-4 py-2 border border-gray-700">Epochs</th>
            <th className="px-4 py-2 border border-gray-700">Activation</th>
            <th className="px-4 py-2 border border-gray-700">Learning Rate</th>
            <th className="px-4 py-2 border border-gray-700">Dropout</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-900 text-gray-200 hover:bg-gray-700">
            <td className="px-4 py-2 border border-gray-700 text-center">6000</td>
            <td className="px-4 py-2 border border-gray-700 text-center">None</td>
            <td className="px-4 py-2 border border-gray-700 text-center">15</td>
            <td className="px-4 py-2 border border-gray-700 text-center">Tanh</td>
            <td className="px-4 py-2 border border-gray-700 text-center">0.001</td>
            <td className="px-4 py-2 border border-gray-700 text-center">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}