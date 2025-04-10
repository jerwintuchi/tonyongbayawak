"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";
import Link from "next/link";

export interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    isLeft: boolean;
    icon: IconType;
    link: string;
    showModal: boolean;
}

export default function TimelineItem({
    title,
    date,
    description,
    isLeft,
    icon: Icon,
    link,
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

    const isCsExpo = link.includes("cs-expo");

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
                <Link passHref href={link}>
                    <div className={`cursor-pointer p-6 rounded-xl transition-shadow ease-in duration-1000 
                        ${isCsExpo ? "bg-gradient-to-r from-purple-900 via-pink-700 to-purple-700 border-2 border-cyan-400 text-cyan-400 font-bold shadow-[0_0_15px_rgba(255,0,255,0.6)] animate-pulse"
                            : "bg-blue-900 hover:bg-blue-600 text-blue-400"}
                            ${showModal ? "shadow-lg shadow-green-400 animate-pulse transition-shadow ease-in duration-1000" : ""}`}>
                        <h3 className={`text-2xl font-bold mb-2 ${isCsExpo ? "text-neon-pink" : "text-blue-400"}`}>{title}</h3>
                        <p className={`text-sm mb-2 ${isCsExpo ? "text-white" : "text-gray-400"}`}>{date}</p>
                        <p className={`text-gray-300 ${isCsExpo ? "text-white" : "text-gray-300"}`}>{description}</p>
                    </div>
                </Link>
            </div>

            {/* Icon */}
            <div className="relative flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 
                    ${isCsExpo ? "bg-neon-pink shadow-[0_0_10px_rgba(255,0,255,0.8)]" : "bg-blue-500"}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`absolute w-0.5 h-full ${isCsExpo ? "bg-neon-pink bg-opacity-75" : "bg-blue-500 bg-opacity-25"}`}></div>
            </div>

            {/* Empty space to balance layout */}
            <div className="w-1/3"></div>
        </motion.div>
    );
}
