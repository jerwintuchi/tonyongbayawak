import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const NormalizedRMSEValue = () => {
    return (
        <MathJaxContext>
            <div className="flex flex-col items-center p-4">
                <div className="flex flex-row items-center justify-center w-full">
                    <MathJax className="text-center">
                        {`\\[
                        \\frac{2.3952}{19.99 - 10.39} = 0.2495
                        \\]`}
                    </MathJax>
                    <span className="text-sm text-gray-400 ml-6">
                        The 10.39 and 19.99<br /> values represent the minimum and maximum<br /> price of the dataset (AXS), respectively. <br />
                        It is obtained in this excel sheet<br /> which contains the test set data (AXS Prices):
                        <a
                            href="/files/MIN-MAX(LATEST).xlsx"
                            download="price_data.xlsx"
                            className="text-blue-400 hover:underline mt-4 block"
                        >
                            Download Price Data (XLSX)
                        </a>
                    </span>
                </div>
            </div>
        </MathJaxContext>
    );
};

export default NormalizedRMSEValue;
