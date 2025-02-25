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

export default function MeanFormula() {
    return (
        <MathJaxContext>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg text-gray-100">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">
                    Question Item Mean Formula
                </h2>
                <p className="text-gray-300 mb-4">
                    The researchers formulated a method for calculating the{" "}
                    <strong>general response</strong> of participants on key usability
                    aspects such as <strong>Design, Content, Navigation, and Performance</strong>.
                    It also evaluates investor sentiment when it comes to <strong>Liquidating, Holding, Buying, and Selling</strong>.
                    The <strong>mean score</strong> of each questionnaire item is repeatedly averaged
                    to derive insights.
                </p>

                {/* Render the formula */}
                <div className="text-xl font-semibold text-center mb-4">
                    <MathJax>{"\\[ \\sum_{i=1}^{n} x_i \\Rightarrow \\frac{x_i}{n - i} \\]"}</MathJax>
                </div>

                <p className="text-gray-300 mt-4">
                    Where:
                    <ul className="list-disc pl-6">
                        <li><strong>∑</strong> = Summation symbol (sum of all question items)</li>
                        <li><strong>i</strong> = Starting index of summation</li>
                        <li><strong>n</strong> = Total number of question items</li>
                        <li><strong>xᵢ</strong> = Score of the question item</li>
                    </ul>
                </p>
            </div>
        </MathJaxContext>
    );
}
