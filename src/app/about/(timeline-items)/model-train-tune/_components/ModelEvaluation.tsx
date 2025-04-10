import BackToTimeline from '@/components/buttons/back-timeline-btn'
import Image from 'next/image'
import BenchmarkDiscussion from './BenchMarkDIscussion'
import AllModelForecast from './AllModelForecast'
import TunedModelTable from './TunedModelTable'
import Diagram from '@/components/Diagram'
import NormalizedRMSE from './NormalizedRMSE'

import Link from 'next/link'
import NormalizedRMSEValue from './NormalizedRMSEValues'
import TunedModelPerformance from './TunedModelPerformance'

export default function ModelEvaluation() {
    return (
        <>
            <div className="max-w-6xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-blue-300 font-semibold mb-2">Model Evaluation</h3>
                <p className="text-gray-300 mb-4 m-4">
                    The Two tables above display the model’s architecture and hyperparameters configured by the proponents, which serve as the foundation for the trial-and-error training process. The evaluation aims to understand how different architectures learn and generalize based on the configured hyperparameters.
                </p>
                <div className='flex flex-col md:flex-row justify-center mt-4 gap-4'>
                    <Image src="/diagrams/layered-rnn.svg" alt="Layered RNN" quality={100} width={500} height={300} className="w-full h-auto md:w-[500px] rounded-lg shadow-md bg-white" />
                    <Image src="/diagrams/unlayered-rnn.svg" alt="Unlayered RNN" quality={100} width={500} height={300} className="w-full h-auto md:w-[500px] rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 2 - Layered vs. Unlayered RNN Model Learning Behaviour</p>

                <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl text-blue-300 font-semibold mb-2">Analysis of Model Performance</h4>
                    <p className="text-gray-300 mb-4">
                        The graphs above compare the training and validation loss of two different Recurrent Neural Network (RNN) architectures:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-4">
                        <li>
                            <strong>Layered RNN (Left Image):</strong> This model has multiple stacked RNN layers, which help capture more complex patterns. The training loss consistently decreases, indicating good learning. However, the validation loss remains relatively high, suggesting some instability and potential overfitting.
                        </li>
                        <li>
                            <strong>Unlayered RNN (Right Image):</strong> This model consists of a single RNN layer. While the training loss decreases, it does so at a slower rate compared to the layered model. Additionally, the validation loss fluctuates more, showing that the model struggles to generalize well.
                        </li>
                    </ul>
                    <p className="text-gray-300">
                        In conclusion, the <strong>layered RNN</strong> demonstrates better learning capacity but may require regularization techniques to mitigate overfitting. Meanwhile, the <strong>unlayered RNN</strong> appears more stable but may benefit from additional complexity to improve performance.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-center mt-4 gap-4'>
                    <Image src="/diagrams/layered-lstm.svg" alt="Layered LSTM" quality={100} width={500} height={300} className="w-full h-auto md:w-[500px] rounded-lg shadow-md bg-white" />
                    <Image src="/diagrams/unlayered-lstm.svg" alt="Unlayered LSTM" quality={100} width={500} height={300} className="w-full h-auto md:w-[500px] rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 3 - Layered vs. Unlayered LSTM Model Learning Behaviour</p>

                <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl text-blue-300 font-semibold mb-2">LSTM Model Evaluation</h4>
                    <p className="text-gray-300 mb-4">
                        The graphs above illustrate the training and validation loss curves for two different LSTM architectures:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-4">
                        <li>
                            <strong>Layered LSTM (Left Image):</strong> The model exhibits a smooth and stable decrease in training loss, with validation loss following closely. This indicates effective generalization and strong learning capability.
                        </li>
                        <li>
                            <strong>Unlayered LSTM (Right Image):</strong> While training loss decreases, the validation loss begins to rise after some epochs. This suggests overfitting, where the model memorizes the training data but struggles with unseen data.
                        </li>
                    </ul>
                    <p className="text-gray-300">
                        The results suggest that <strong>Layered LSTM</strong> provides better generalization, while the <strong>Unlayered LSTM</strong> faces overfitting issues. Regularization techniques such as dropout or weight decay could improve the unlayered model’s performance.
                    </p>
                </div>

                <Diagram src="all-model-perf.svg" alt="All Model Performance" width={1000} height={600} className="rounded-lg shadow-md bg-white" title="Fig. 4 - Test Set Performance of all Models" />

                <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl text-blue-300 font-semibold mb-2">Test Set Performance Analysis</h4>
                    <p className="text-gray-300 mb-4">
                        The graph above compares various models, including <strong>layered and unlayered LSTM architectures, Multiple Linear Regression (MLR), and different LSTM variants</strong> with early stopping, dropout, and dense layers.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-4">
                        <li>
                            <strong><span className='text-blue-700'>Actual Price:</span></strong> The actual price of the cryptocurrency (AXS).
                        </li>
                        <li>
                            <strong><span className='text-yellow-300'>MLR:</span></strong> Shows significant fluctuation and instability, indicating poor generalization due to its linear nature.
                        </li>
                        <li>
                            <strong><span className='text-purple-600'>Layered LSTMs:</span></strong> Learn well but tend to overfit without proper regularization.
                        </li>
                        <li>
                            <strong><span className='text-gray-400'>Unlayered RNN:</span></strong> More stable but may lack complexity for capturing intricate time-series patterns.
                        </li>
                        <li>
                            <strong><span className='text-green-700'>Early Stopping and Dense Layers:</span></strong> Improve generalization, but too much regularization can lead to underfitting.
                        </li>
                    </ul>
                    <p className="text-gray-300">
                        In conclusion, <strong>layered models</strong> provide better learning capacity but require regularization, while <strong>MLR struggles</strong> due to its linear nature. The best-performing models balance complexity with proper regularization.
                    </p>
                </div>

                <div className='flex flex-row md:flex-row justify-center mt-4 gap-4'>
                    <Image src="/diagrams/benchmark-summary.svg" alt="Benchmark Summary" quality={100} width={1000} height={600} className="rounded-lg shadow-md bg-white" />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">Fig. 5 - Model Benchmark Summary</p>
                {/* Benchmark Discussion */}
                <BenchmarkDiscussion />
                {/* All Model Forecast */}
                <AllModelForecast />
                {/* Tuned Model Section */}
                <div className="flex flex-col items-center">
                    <TunedModelTable />
                    <p className="text-sm text-gray-400 mt-2 text-center">Fig. 7 - Tuned Model Architecture</p>

                    <div className='flex flex-row md:flex-row justify-center mt-4 gap-4'>
                        <Image src="/diagrams/tuned-model-learning.svg" alt="Tuned Model Learning" quality={100} width={600} height={300} className="rounded-lg shadow-md bg-white" />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 text-center">Fig. 8 - Tuned Model Learning Behavior</p>

                    <div className="mt-4 max-w-2xl text-gray-300 text-sm text-center">
                        <h3 className="text-lg font-semibold text-gray-400">Tuned Model Learning Behavior Explanation</h3>
                        <p>
                            The graph presents the training loss (<span className="font-semibold">train_loss</span>) and validation loss (<span className="font-semibold">val_loss</span>) over the course of training.
                        </p>
                        <h4 className="mt-2 font-semibold text-gray-400">Observations:</h4>
                        <ul className="list-disc list-inside text-left">
                            <li>
                                <span className="font-semibold">Training Loss Decreases:</span> The <span className="font-semibold text-blue-500"><strong>train_loss</strong></span>  consistently declines, indicating that the model is effectively learning patterns from the training data.
                            </li>
                            <li>
                                <span className="font-semibold">Validation Loss Stability:</span> The <span className="font-semibold text-orange-400"><strong>val_loss</strong></span>  remains relatively constant, with a slight increase toward the end, which could be a sign of <span className="font-semibold">overfitting</span>.
                            </li>
                            <li>
                                <span className="font-semibold">Potential Overfitting:</span> The widening gap between training and validation loss suggests that the model is fitting too closely to the training data, reducing its ability to generalize well to unseen data.
                            </li>
                        </ul>
                    </div>
                </div>
                <Diagram src="tuned-model-eval.svg" alt="Tuned Model Learning" width={600} height={300} className="rounded-lg shadow-md bg-white" title="Fig. 9 - Tuned Model Benchmark" />
                <div className="flex flex-col items-center lg:items-center lg:w-full lg:max-w-4xl mx-auto mb-4">
                    <h3 className="text-lg font-semibold text-white">Model Performance Evaluation</h3>
                    <p>The table provides key performance metrics of the <span className="font-semibold">{"lstm_elite"}</span> model for both the test set and in-sample (training) data.</p>

                    <h4 className="mt-2 font-semibold text-white">Key Observations:</h4>
                    <ul className="list-disc list-inside text-left">
                        <li>
                            <span className="font-semibold">Test Set Performance:</span>
                            <ul className="list-disc pl-5 text-gray-300">
                                <li><span className="font-semibold">MAE:</span> 1.838 → Model predictions deviate by ~1.838 units on average.</li>
                                <li><span className="font-semibold text-green-600">RMSE:</span> 2.395 → Typical error is about 2.395 units.</li>
                                <li><span className="font-semibold">R²:</span> -0.229 → Negative value indicates poor generalization.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:items-center lg:w-full lg:max-w-4xl mx-auto">
                    <p className="text-gray-300">
                        The initial <span className='text-green-600'><strong>RMSE </strong></span>(2.395) value obtained from the lstm_elite model is a measure of how widely distributed the predicted data from the actual data points.
                        In this context it measures the deviation of predicted price and the actual price from the test set.
                    </p>
                </div>
                <NormalizedRMSE />
                <div id="normalized-rmse" className="flex flex-col items-center lg:items-center lg:w-full lg:max-w-4xl mx-auto">
                    <p className="text-gray-300">
                        The RMSE is normalized according to the range of maximum value and minimum value from the test set in order to acquire a value that only ranges
                        from 0 to 1 to be appropriately interpreted from the RMSE Accuracy Table (see. <Link className='text-blue-400 hover:underline' href={`/about/research-phase#rmse-accuracy-table`}>RMSE Accuracy Table</Link>) which results to
                    </p>
                </div>
                <NormalizedRMSEValue />
                <div className='flex flex-col items-center lg:items-center lg:w-full lg:max-w-4xl mx-auto'>
                    <p className='text-gray-300 m-6'>
                        which proves that the tuned lstm_elite model is acceptably ‘Accurate’ when it comes to forecasting unseen datasets,
                        the absolute fit of the model to the actual price is as close as <strong>2.4</strong>.
                    </p>
                </div>
                <TunedModelPerformance />

            </div>


            <div className="flex justify-center">
                <BackToTimeline />
            </div>
        </>
    )
}
