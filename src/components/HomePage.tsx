"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-blue-900 text-white px-4`}>
            <div className={`flex flex-col items-center justify-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-1000`}>
                {/* Logo */}
                <div className="mb-6">
                    <Image src="/tb_logo.png" alt="Team Logo" width={250} height={250} className="drop-shadow-lg" />
                </div>

                {/* Title & Description */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
                    Welcome to Our Forecasting App
                </h1>
                <p className="text-lg md:text-xl text-center mb-6 max-w-2xl">
                    Predict future trends with our AI-powered forecasting model. Stay ahead of the market with real-time insights.
                </p>

                {/* Call to Action Button */}
                <Link href="/about">
                    <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition text-lg">
                        Get Started
                    </button>
                </Link>

                {/* Decorative Background Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-white bg-opacity-20 rounded-full blur-lg"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            </div>
        </div>
    )
}
