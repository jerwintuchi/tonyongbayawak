import React from 'react'

export default function ImportantInfo() {
    return (
        <div>

            {/* 1.5 Objectives */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Objectives</h2>
                <h3 className='text-2xl text-blue-300 font-semibold mb-4'>General Objective</h3>
                <p className='text-white text-lg mb-4 ml-4'>
                    <strong>
                        To develop a predictive model using Long-Short Term Memory Neural  Network with an
                        acceptable accuracy to guide  AXS
                        investors in identifying potential risks involved in investing in AXS
                    </strong>
                </p>
                <h3 className='text-2xl text-blue-300 font-semibold mb-4'>Specific Objectives</h3>
                <ol className="list-decimal text-gray-300 ml-4">
                    <li> The proponents will clean and split the raw data to develop the predictive model,
                        train the model using that data, measure the model&apos;s accuracy using RMSE, and
                        deploy the predictive model on a website for users to use.</li><br />
                    <li>A questionnaire for users of the website to collect feedback and satisfaction for
                        indicating whether if the predictive model deployed as a web-based prototype
                        guides the users, as well as assessing the project&apos;s compliance with ISO/IEC 9126
                        by assessing user satisfaction after use.</li>

                </ol>
            </div>

            {/* 1.6 Scope and Limitations */}
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl text-blue-300 font-semibold mb-4">Scope and Limitations</h2>
                <p className="text-gray-300 mb-4">
                    This study focuses on AXS price prediction using deep learning models. It does not account for external economic factors
                    such as government regulations or macroeconomic trends. The dataset is limited to publicly available AXS trading data
                    from cryptocurrency exchanges.
                </p>
            </div>
        </div>
    )
}
