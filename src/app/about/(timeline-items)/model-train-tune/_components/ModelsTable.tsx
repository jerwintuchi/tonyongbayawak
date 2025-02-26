"use client";

import React, { useEffect, useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { models } from '@/data/models';

export default function ModelsTable() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <TooltipProvider>
            <div className="overflow-x-auto">
                <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="p-3">Model</th>
                            <th className="p-3">Lags</th>
                            <th className="p-3">Batch Size</th>
                            <th className="p-3">Epochs</th>
                            <th className="p-3">Neurons/Layer</th>
                            <th className="p-3">Activation</th>
                            <th className="p-3">Learning Rate</th>
                            <th className="p-3">Dropout</th>
                            <th className="p-3">Dense Layer Neurons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map((model, index) => (
                            <Tooltip key={index} delayDuration={200}>
                                <TooltipTrigger asChild>
                                    <tr className="border-b border-gray-600 hover:bg-blue-800 group">
                                        <td className="p-3 font-semibold">{model.model}</td>
                                        <td className="p-3">{model.lags}</td>
                                        <td className="p-3">{model.batch_size || "None"}</td>
                                        <td className="p-3">{model.epochs}</td>
                                        <td className="p-3">{model.neurons_per_layer}</td>
                                        <td className="p-3">{model.activation_function}</td>
                                        <td className="p-3">{model.learning_rate}</td>
                                        <td className="p-3">{model.dropout_layer || "None"}</td>
                                        <td className="p-3">{model.neurons_per_dense_layer || "None"}</td>
                                    </tr>
                                </TooltipTrigger>
                                {mounted && (
                                    <TooltipContent className="bg-gray-900 text-white p-3 rounded-lg w-[600px]">
                                        <CodeBlock text={model.code} language="python" theme={dracula} />
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        ))}
                    </tbody>
                </table>
            </div>
        </TooltipProvider>
    );
}
