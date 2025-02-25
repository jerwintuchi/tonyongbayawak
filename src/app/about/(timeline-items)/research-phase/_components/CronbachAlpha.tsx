"use client";


import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function CronbachAlpha() {
    return (
        <MathJaxContext>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Cronbach’s Alpha (α)</h2>
                <p className="text-gray-300 mb-4">
                    Cronbach’s Alpha is a measure of <strong>internal consistency</strong>, showing how closely related a set of items are as a group.
                    In this study, it evaluates the inter-correlation among items in the <strong>questionnaire</strong>.
                </p>
                <p className="text-gray-300 mb-4">
                    The questionnaire used in this study consists of a <strong>5-point Likert scale</strong> evaluating various aspects such as <strong>design, content, navigation, and performance</strong>.
                    Cronbach’s Alpha is applied to assess the reliability of the questionnaire, ensuring that all items measure the same underlying construct consistently.
                </p>
                <p className="text-gray-300 mb-4">
                    The reliability coefficient is computed using <strong>IBM SPSS</strong>. A higher value (typically above 0.7) indicates strong internal consistency, meaning the questionnaire effectively captures the intended metrics.
                    This validation ensures that the collected responses provide meaningful insights into the usability and effectiveness of the system.
                </p>
                <p className="text-gray-300 mb-4">
                    The formula for Cronbach’s Alpha is given as:
                </p>
                <p className="text-xl font-semibold text-center">
                    <MathJax>{"\\[ \\alpha = \\frac{k}{k - 1} \\left( 1 - \\frac{\\sum \\sigma^2_i}{\\sigma^2_t} \\right) \\]"} </MathJax>
                </p>
                <p className="text-gray-300 mt-4">Where:</p>
                <ul className="list-disc list-inside text-gray-300 ml-6">
                    <li><strong>k</strong> = Number of items</li>
                    <li><strong>σ²ᵢ</strong> = Variance of each individual item</li>
                    <li><strong>σ²ₜ</strong> = Total variance of all items combined</li>
                </ul>

                <p className="text-gray-300 mt-8">
                    In this study, Cronbach’s Alpha was used to confirm the reliability of the survey instrument, ensuring accurate
                    measurement of respondent attitudes towards the usability and effectiveness of the predictive model. The
                    actual value of the cronbach alpha will be shown on the results page.
                </p>
            </div>
        </MathJaxContext>
    );
}
