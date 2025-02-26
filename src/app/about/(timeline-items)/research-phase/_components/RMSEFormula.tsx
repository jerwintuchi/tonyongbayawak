"use client";

import React from "react";
import dynamic from "next/dynamic";

// Disable SSR for MathJax
const MathJaxContext = dynamic(
    () => import("better-react-mathjax").then((mod) => mod.MathJaxContext),
    { ssr: false }
);
const MathJax = dynamic(
    () => import("better-react-mathjax").then((mod) => mod.MathJax),
    { ssr: false }
);

export default function RMSEFormula() {
    return (
        <MathJaxContext>
            <div className="max-w-6xl mx-auto  p-8 mt-8 rounded-lg text-gray-100">
                <p className="text-gray-300 mb-4">
                    Root Mean Squared Error (RMSE) is a commonly used metric to measure the
                    difference between values predicted by a model and the actual observed values.
                    A lower RMSE value indicates a better fit of the model to the data.
                </p>

                {/* Render the RMSE formula */}
                <div className="text-xl font-semibold text-center mb-4">
                    <MathJax>
                        {"\\[ RMSE = \\sqrt{ \\frac{\\sum_{i=1}^{n} (\\hat{y}_i - y_i)^2}{n} } \\]"}
                    </MathJax>
                </div>

                <p className="text-gray-300 mt-4">
                    Where:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>∑</strong> = Summation symbol (sum of squared errors)</li>
                    <li><strong>ŷᵢ</strong> = Predicted value for the i-th observation</li>
                    <li><strong>yᵢ</strong> = Observed (actual) value for the i-th observation</li>
                    <li><strong>n</strong> = Total number of observations in the dataset</li>
                </ul>

            </div>
        </MathJaxContext >
    );
}
