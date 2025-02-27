import React from "react";

const BenchmarkDiscussion = () => {
    return (
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md overflow-auto">
            <h2 className="text-xl font-bold mb-2">Model Evaluation Discussion</h2>
            <p className="mb-4">
                The table presents a comparison of different machine learning models based on three evaluation metrics:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>LevelTestSetMAE (Mean Absolute Error):</strong> Measures the average absolute difference between
                    predicted and actual values. Lower values indicate better performance.
                </li>
                <li>
                    <strong>LevelTestSetRMSE (Root Mean Squared Error):</strong> Similar to MAE but penalizes larger errors more
                    heavily. Lower values indicate better performance.
                </li>
                <li>
                    <strong>LevelTestSetR2 (R-squared Score):</strong> Represents how well the model explains variance in the
                    data. Higher values are better, but negative values indicate poor predictive power.
                </li>
                <li>
                    <strong>best_model:</strong> Indicates whether a model is considered the best based on the evaluation metrics.
                </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Discussion</h3>
            <h4 className="text-md font-medium mt-2">Best Model (lstm_vanilla)</h4>
            <ul className="list-disc list-inside mb-2">
                <li>Achieves the lowest MAE (20.47) and RMSE (20.71), indicating strong predictive accuracy.</li>
                <li>The R² score (-72.75) is negative but better compared to other models.</li>
                <li>Marked as the best model (<strong>True</strong>).</li>
            </ul>

            <h4 className="text-md font-medium mt-2">Layered and Dense Models</h4>
            <ul className="list-disc list-inside mb-2">
                <li><strong>lstm_layered_dense_earlystop</strong> performs relatively well but has a slightly higher error than lstm_vanilla.</li>
                <li><strong>lstm_layered</strong> and <strong>rnn_layered_dense</strong> show much higher errors, suggesting overfitting or poor generalization.</li>
            </ul>

            <h4 className="text-md font-medium mt-2">MLR Model</h4>
            <ul className="list-disc list-inside mb-2">
                <li><strong>mlr</strong> has the second-best MAE (19.87) but higher RMSE (25.22), meaning it struggles with larger errors.</li>
                <li>Poor R² score (-108.38), indicating a weak fit.</li>
            </ul>

            <h4 className="text-md font-medium mt-2">Worst Performers</h4>
            <ul className="list-disc list-inside">
                <li><strong>lstm_layered_dense</strong> and <strong>lstm_layered_dense_earlystop_nodropout</strong> exhibit extreme errors and very low R² values, meaning they fail to generalize well.</li>
                <li><strong>rnn_unlayered</strong> and <strong>lstm_base</strong> also perform poorly.</li>
            </ul>
        </div>
    );
}

export default BenchmarkDiscussion;
