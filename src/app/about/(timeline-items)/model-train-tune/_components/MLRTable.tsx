"use client";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { dracula } from 'react-code-blocks';

const CodeBlock = dynamic(() => import("react-code-blocks").then(mod => mod.CodeBlock), { ssr: false });

export default function MLRTable() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const codeSnippet = `f.add_ar_terms(3151)
f.add_seasonal_regressors('month','quarter',dummy=True)
f.add_seasonal_regressors('year')
f.add_time_trend()
f.diff() # differenced since may trend
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
                        <tr className="border-b border-gray-600 hover:bg-blue-800 cursor-pointer">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <td className="p-3 font-semibold">Multiple Linear Regression (MLR)</td>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white p-3 rounded-lg w-[600px]">
                                    {mounted && <CodeBlock text={codeSnippet} language="python" theme={dracula} />}
                                </TooltipContent>
                            </Tooltip>
                            <td className="p-3">3151</td>
                            <td className="p-3">&apos;month&apos;, &apos;quarter&apos;, &apos;year&apos;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TooltipProvider>
    );
}
