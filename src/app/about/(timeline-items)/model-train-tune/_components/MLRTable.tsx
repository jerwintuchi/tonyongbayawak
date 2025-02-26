import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { CodeBlock, dracula } from "react-code-blocks";
import React from 'react';

export default function MLRTable() {
    const codeSnippet = `f.add_ar_terms(3151)
f.add_seasonal_regressors('month','quarter',dummy=True)
f.add_seasonal_regressors('year')
f.add_time_trend()
f.diff() #differenced since may trend
f.set_estimator('mlr')
f.manual_forecast()`;

    return (
        <TooltipProvider>
            <div className="overflow-x-auto">
                <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden mt-12">
                    <thead className="bg-blue-900 text-white p-6">
                        <tr>
                            <th className="text-left p-3">Model</th>
                            <th className="text-left p-3">Lags</th>
                            <th className="text-left p-3">Seasonal Regressors</th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-gray-600">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <tr className="border-b border-gray-600 hover:bg-blue-800 cursor-pointer">
                                    <td className="p-3">Multiple Linear Regression (MLR)</td>
                                    <td className="p-3">3151</td>
                                    <td className="p-3">&apos;month&apos;, &apos;quarter&apos;, &apos;year&apos;</td>
                                </tr>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 text-white p-3 rounded-lg w-[600px]">
                                <CodeBlock text={codeSnippet} language="python" theme={dracula} />
                            </TooltipContent>
                        </Tooltip>
                    </tbody>
                </table>
            </div>
        </TooltipProvider>
    );
}
