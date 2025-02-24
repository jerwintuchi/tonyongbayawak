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
    showModal: boolean;
}

export default function TimelineItem({
    title,
    date,
    description,
    isLeft,
    icon: Icon,
    showModal,
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
            <div
                className={`w-full md:w-1/2 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
            >
                <div className={`bg-blue-900 hover:bg-blue-600 cursor-pointer bg-opacity-40 p-6 rounded-xl hover:bg-opacity-30 transition-shadow ${showModal ? "shadow-xl shadow-green-300 animate-pulse" : ""} ease-in duration-1000`}>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{date}</p>
                    <p className="text-gray-300">{description}</p>
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
