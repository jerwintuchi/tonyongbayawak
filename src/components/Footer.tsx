"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Footer() {
    const pathname = usePathname();
    const isCSExpoPage = pathname === "/about/cs-expo";

    return (
        <motion.footer
            className={`w-full py-6 border-t relative overflow-hidden flex flex-col items-center text-center ${isCSExpoPage ? "bg-black text-white border-cyan-400" : "bg-gray-900 text-gray-300 border-gray-700"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                    <p className="text-sm md:text-base">
                        &copy; {isCSExpoPage ? "CS Expo 2023" : new Date().getFullYear()} | All Rights Reserved.
                    </p>
                </div>
                <div className="flex flex-row justify-center gap-2">
                    <Image src={`/logo/tb-logo.svg`} width={30} height={30} alt="TB Logo" className="w-6 h-6" />
                    <p className="text-xs text-gray-500">Made by TonyongBayawak</p>

                </div>

            </div>

            {/* Glitch Effect only for CS Expo Page */}
            {isCSExpoPage && <div className="absolute inset-0 bg-cyan-400 opacity-10 blur-lg" />}
        </motion.footer>
    );
}
