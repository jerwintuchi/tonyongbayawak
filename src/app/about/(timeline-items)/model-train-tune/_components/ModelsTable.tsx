"use client";

import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { models } from '@/data/models';

export default function ModelsTable() {
    return (
        <TooltipProvider>
            <div className="overflow-x-auto">
                <table className="w-full text-gray-300 border border-gray-600 rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white hidden md:table-header-group">
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
                                {/* Standard Table Row (Desktop) */}
                                <TooltipTrigger asChild>
                                    <tr className="border-b border-gray-600 hover:bg-blue-800 group hidden md:table-row">
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
                                <TooltipContent className="bg-gray-900 text-white p-3 rounded-lg w-[600px]">
                                    <CodeBlock text={model.code} language="python" theme={dracula} />
                                </TooltipContent>

                                {/* Mobile View: Stacked Format */}
                                <tr className="md:hidden block border-b border-gray-600">
                                    <td colSpan={9} className="p-3">
                                        <div className="bg-blue-900 bg-opacity-20 p-4 rounded-lg shadow-md">
                                            <p className="text-lg font-semibold text-white">{model.model}</p>
                                            <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                                                <p><strong>Lags:</strong> {model.lags}</p>
                                                <p><strong>Batch Size:</strong> {model.batch_size || "None"}</p>
                                                <p><strong>Epochs:</strong> {model.epochs}</p>
                                                <p><strong>Neurons/Layer:</strong> {model.neurons_per_layer}</p>
                                                <p><strong>Activation:</strong> {model.activation_function}</p>
                                                <p><strong>Learning Rate:</strong> {model.learning_rate}</p>
                                                <p><strong>Dropout:</strong> {model.dropout_layer || "None"}</p>
                                                <p><strong>Dense Layer Neurons:</strong> {model.neurons_per_dense_layer || "None"}</p>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <CodeBlock text={model.code} language="python" theme={dracula} />
                                        </div>
                                    </td>
                                </tr>
                            </Tooltip>
                        ))}
                    </tbody>
                </table>
            </div>
        </TooltipProvider>
    );
}
