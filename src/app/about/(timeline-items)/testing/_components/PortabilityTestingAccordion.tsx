import React from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const images = [
    { src: "/portability/1.svg", label: "Firefox 104 - macOS Mojave" },
    { src: "/portability/2.svg", label: "Chrome 104 - macOS Mojave" },
    { src: "/portability/3.svg", label: "Edge 104 - macOS Mojave" },
    { src: "/portability/4.svg", label: "Brave 1.44 - macOS Mojave" },
    { src: "/portability/5.svg", label: "Opera 87 - MacOS Mojave" },
    { src: "/portability/6.svg", label: "Chrome 107 - Windows 11" },
    { src: "/portability/7.svg", label: "Firefox 106 - Windows 11" },
    { src: "/portability/8.svg", label: "Edge 105 - Windows 11" },
];

export default function PortabilityTestingAccordion() {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-lg border border-blue-400 mt-4">
            <div className="flex w-max space-x-4 p-4">
                <Accordion type="single" collapsible className="flex space-x-4">
                    {images.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="shrink-0 min-w-[250px]">
                            <div className="border rounded-lg border-blue-400 p-2 text-center cursor-pointer">
                                <Image
                                    width={200}
                                    height={200}
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-auto rounded-md"
                                />
                                <p className="mt-2 text-sm font-medium">{item.label}</p>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
