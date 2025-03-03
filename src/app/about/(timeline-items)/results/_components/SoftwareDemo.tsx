"use client";
import React from "react";

export default function SoftwareDemo() {


    return (
        <div className="relative w-full max-w-3xl mx-auto mt-6">

            {/* Video Player */}
            <video
                src='/files/web-app-demo.mp4'
                className={`w-full rounded-lg shadow-lg border border-gray-700 transition-opacity duration-500`}
                controls
                preload="auto"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
