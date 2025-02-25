"use client";

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
export default function SlovinsFormula() {
    const N = 53426; // Total population (AXS Holders as of June 2022)
    const e = 0.05; // 5% margin of error
    const n = N / (1 + N * Math.pow(e, 2)); // Slovin's formula calculation

    return (
        <MathJaxContext>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg text-gray-100">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Slovin&apos;s Formula</h2>
                <p className="text-lg text-gray-300 mb-4">
                    Slovin&apos;s formula is used to determine the appropriate sample size from a given population. It is given by:
                </p>
                <p className="text-xl font-semibold text-center">
                    <MathJax>{"\\[ n = \\frac{N}{1 + N \\cdot e^2} \\]"}</MathJax>
                </p>

                <p className="text-gray-300 mt-4">
                    Where:
                    <br />
                    <strong>N</strong> = Total Population
                    <br />
                    <strong>e</strong> = Margin of Error
                </p>

                <p className="text-gray-300 pt-8">
                    Applying Slovin’s formula to the AXS Holders as estimated by CoinMarketCap (2022) which is currently 53,426 as of June 2022, we can calculate the required sample size with N = {N} and a margin of error of {e * 100}%:
                </p>

                {/* Dynamically Render the Formula with Values */}
                <p className="text-xl font-semibold text-center">
                    <MathJax>{`\\[ n = \\frac{${N}}{1 + ${N} \\cdot ${e}^2} \\]`}</MathJax>
                </p>

                {/* Display the Computed Result */}
                <p className="text-xl font-semibold text-center">
                    <MathJax>{`\\[ n \\approx ${n.toFixed(0)} \\]`}</MathJax>
                </p>

                <p className="text-gray-300 mt-8">
                    Substituting the values N = {N} and a margin of error of {e * 100}% with a confidence level of 95%, we get <strong>{Math.round(n)}</strong> as the required sample size for the study.
                </p>
            </div>
        </MathJaxContext>
    );
}
