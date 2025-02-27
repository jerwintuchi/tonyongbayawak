
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function NormalizedRMSE() {
    const formula = `\\frac{\\text{RMSE}}{(\\max \\text{ value} - \\min \\text{ value})}`;

    return (
        <MathJaxContext>
            <div className="flex justify-center items-center p-4">
                <MathJax className="text-lg">{`\\[ ${formula} \\]`}</MathJax>
            </div>
        </MathJaxContext>
    );
}
