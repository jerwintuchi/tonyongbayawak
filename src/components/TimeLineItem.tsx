"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    isLeft: boolean;
    icon: IconType;
}

export default function TimelineItem({
    title,
    date,
    description,
    isLeft,
    icon: Icon,
}: TimelineItemProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`flex items-center gap-4 mb-10 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* Content */}
            <div className={`w-full md:w-2/3 ${isLeft ? "text-right pr-6" : "text-left pl-6"}`}>
                <div className="bg-gray-800 bg-opacity-15 p-5 rounded-lg hover:bg-opacity-25 transition-all">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 mb-1">{date}</p>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>

            {/* Icon */}
            <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute w-0.5 h-full bg-blue-500 bg-opacity-25"></div>
            </div>

            {/* Empty space to balance layout */}
            <div className="w-1/3"></div>
        </motion.div>
    );
}
