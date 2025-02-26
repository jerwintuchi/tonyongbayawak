import Image from 'next/image';

export default function AllModelForecast() {
    return (<>
        <div className='flex flex-row md:flex-row justify-center mt-4 gap-4'>
            <Image src="/diagrams/all-model-forecast.svg" alt="All Model Performance" quality={100} width={1000} height={600} className="rounded-lg shadow-md bg-white" />
        </div>
        <p className="text-sm text-gray-400 mt-2 text-center">Fig. 4 - Test Set Performance of all Models</p>

        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl text-blue-300 font-semibold mb-2">Test Set Performance Analysis</h4>
            <p className="text-gray-300 mb-4">
                The graph above compares various models, including <strong>layered and unlayered LSTM architectures, Multiple Linear Regression (MLR), and different LSTM variants</strong> with early stopping, dropout, and dense layers.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>
                    <strong><span className='text-yellow-300'>mlr -</span></strong> Shows significant divergence downward, indicating poor generalization and an inability to capture non-linear trends.
                </li>
                <li>
                    <strong><span className='text-red-600'>lstm_vanilla -</span></strong> Remains relatively stable but lacks adaptability, suggesting overfitting and an inability to adjust to new patterns.
                </li>
                <li>
                    <strong><span className='text-green-400'>rnn_layered_dense -</span></strong> Captures future trends but tends to exaggerate fluctuations, potentially due to overfitting.
                </li>
                <li>
                    <strong><span className='text-lime-800'>lstm_layered_dense -</span></strong> Shows upward movement, capturing trend shifts better than simpler models, though potentially volatile.
                </li>
                <li>
                    <strong><span className='text-[#BC8f8f]'>rnn_unlayered -</span></strong> Offers the most stable and realistic forecast, balancing trend capture and generalization well.
                </li>
                <li>
                    <strong><span className='text-slate-500'>lstm_layered -</span></strong> Improve generalization, but too much regularization can lead to underfitting.
                </li>
            </ul>
            <p className="text-gray-300">
                In conclusion, <strong>layered models</strong> tend to capture trends effectively but require regularization to avoid exaggerated predictions. <strong>MLR performs poorly</strong> due to its linear nature, while LSTM variants demonstrate stronger generalization but require careful tuning to balance complexity and stability.
            </p>
        </div>
    </>
    )
}
