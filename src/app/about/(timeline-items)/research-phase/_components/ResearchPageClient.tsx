"use client";

import React from "react";
import BackToTimeline from '@/components/buttons/back-timeline-btn';

import HeroSection from "./HeroSection";


import { StatisticalTreatment } from "./StatisticalTreatment";
import { Methodology } from "./Methodology";
import { RRL } from "./RRL";

export default function ResearchPageClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden text-gray-100">
            {/* Hero Section */}
            <HeroSection />
            {/* Review of Related Literature and Studies */}
            <RRL />
            {/* Methodology */}
            <Methodology />
            {/* Statistical Treatment and Sampling Techniques */}
            <StatisticalTreatment />
            {/* Navigation */}
            <div className="text-center mt-10">
                <BackToTimeline />
            </div>
        </div>
    );
}
