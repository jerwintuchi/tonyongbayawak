
import BackToTimeline from '@/components/buttons/back-timeline-btn'
import Image from 'next/image'

export default function ModelEvaluation() {
    return (
        <>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Model Evaluation</h3>
                <p className="text-gray-300 mb-4">
                    The trained model is evaluated using <strong>Root Mean Squared Error (RMSE)</strong>, ensuring it provides accurate price predictions. Lower RMSE values indicate better predictive performance.
                </p>
                <div className='flex flex-col md:flex-row justify-center mt-4'>
                    <Image src="/diagrams/model-evaluation.png" alt="Model Evaluation" width={500} height={300} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 2 - Model Evaluation Metrics</p>
            </div>
            <div className="flex justify-center">
                <BackToTimeline />
            </div>
        </>
    )
}
