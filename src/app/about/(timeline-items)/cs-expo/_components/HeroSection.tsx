import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    isLoading: boolean;
}

export default function HeroSection({ isLoading }: HeroSectionProps) {
    return (
        <div className="relative w-full h-screen">
            {/* Blurred Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: "url('/cs-expo/peoples-hd.jpg')" }}
            />

            {/* Overlay & Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Logo */}
                <Image
                    src="/cs-expo/logo-nobg.png"
                    alt="CS Expo Logo"
                    width={800}
                    height={500}
                    className={`${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-1000 drop-shadow-lg relative`}
                />

                {/* Paragraph (Now Separate and Visible) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }} // 1s delay before fade-in
                    className="text-lg md:text-2xl font-thin text-white max-w-xl z-10"
                >
                    Let&apos;s take a trip to memory lane! A nostalgic throwback to our thesis presentation!
                </motion.p>
            </div>
        </div>
    );
}
