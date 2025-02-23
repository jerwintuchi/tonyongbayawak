"use client";

import TeamMembers from '@/components/TeamMembers';
import TimelineItem from '@/components/TimeLineItem';
import { timelineData } from '@/data/timelineData';
import React from 'react'

export default function AboutClient() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6">
            {/* Team Members Section */}
            <TeamMembers />

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 pt-12 px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Journey</h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    Follow our progress from initial concept to a fully-realized AI-powered forecasting solution.
                </p>
            </div>

            {/* Timeline Section */}
            <div className="max-w-7xl mx-auto relative flex flex-col items-center px-4">
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        isLeft={index % 2 === 0}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}
