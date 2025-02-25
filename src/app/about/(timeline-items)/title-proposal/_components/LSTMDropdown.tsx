"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const LSTMDropdown = () => {
    const questions = [
        {
            question: "How does LSTM decide what to forget?",
            answer: (
                <span>
                    It uses the <strong>Forget Gate (Fₜ)</strong> to filter out unnecessary information from previous states,
                    keeping only relevant details for future predictions.
                </span>
            )
        },
        {
            question: "How does LSTM decide what new information to remember?",
            answer: (
                <span>
                    The <strong>Input Gate (Iₜ)</strong> determines which new information should be added to the cell state,
                    ensuring important updates are retained.
                </span>
            )
        },
        {
            question: "How does LSTM update its memory?",
            answer: (
                <span>
                    The <strong>Candidate Memory (C̃ₜ)</strong> stores new meaningful information, ensuring older data is modified and updated effectively.
                </span>
            )
        },
        {
            question: "How does LSTM decide what to output?",
            answer: (
                <span>
                    It uses the <strong>Output Gate (Oₜ)</strong> to determine what information should be passed to the next layer,
                    much like summarizing key insights from a complex report.
                </span>
            )
        },
    ];

    return (
        <div className="max-w-6xl mx-auto bg-blue-500 bg-opacity-10 p-8 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-blue-300 font-semibold mb-4 text-center">More about LSTM</h2>
            <Accordion type="single" collapsible>
                {questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default LSTMDropdown;
