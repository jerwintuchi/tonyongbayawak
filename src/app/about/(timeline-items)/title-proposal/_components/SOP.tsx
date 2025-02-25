import React from 'react'

export default function SOP() {
    return (
        <div>
            <h3 className="text-2xl text-blue-300 font-semibold mb-2">The Volatility Problem</h3>
            <p className="text-gray-300 mb-4">
                Unlike traditional assets, cryptocurrencies experience <strong>Extreme Price Movements (EPMs)</strong> due to speculation,
                media influence, and regulatory changes. Studies (Conrad et al., 2018; Manahov, 2020) show that these fluctuations
                are unpredictable using conventional statistical models.
            </p>


            <h2 className="text-3xl mx-auto text-center text-blue-300 font-semibold mb-4">Statement of the Problem</h2>
            <p className="text-gray-300 mb-4 mx-auto max-w-5xl">
                Since cryptocurrencies are volatile in nature, they do not fully serve themselves as a currency. Many investors,
                especially newcomers, are highly prone to losing significant amounts of their investment without understanding
                fundamental analysis and the volatility of the asset they are investing in. This paper aims to develop a predictive
                model that will guide them in investing in AXS, particularly for Filipinos. To do so, the researchers are interested
                in answering the following:
            </p>

            <ol className="list-decimal mx-auto max-w-2xl text-left space-y-3">
                <li>Is the prototype helpful to investors in terms of liquidating, holding, buying, or selling AXS?</li>
                <li>What features could be used to develop an accurate forecast of AXS price?</li>
            </ol>
        </div>
    )
}
