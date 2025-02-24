"use client";

import TeamMembers from '@/components/TeamMembers';
import TimelineItem from '@/components/TimeLineItem';
import { timelineData } from '@/data/timelineData';
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useInView } from "react-intersection-observer";

export default function AboutClient() {
    const [showModal, setShowModal] = useState(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState(
        () => window.sessionStorage.getItem('doNotShowAgain') === 'true'
    );
    const { ref: timelineRef, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (window.location && inView && !doNotShowAgain) {
            setShowModal(true);
        }
    }, [inView, doNotShowAgain]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setDoNotShowAgain(isChecked);
        window.sessionStorage.setItem('doNotShowAgain', isChecked.toString());
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden">
            {/* Info Modal */}
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="fixed top-28 mr-4 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 w-80 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-blue-500 rounded-lg p-4 md:p-6">
                    <DialogHeader>
                        <DialogTitle className='text-white'>Hey there!</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-white">You can click on any Progress Card to navigate to a related page and explore more details!</p>
                    <div className='flex flex-row justify-start'>
                        <input
                            className='mr-2'
                            type="checkbox"
                            id="doNotShowAgain"
                            checked={doNotShowAgain}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="doNotShowAgain" className='text-sm text-gray-200'>Do not show again</label>
                    </div>
                    <DialogClose asChild>
                        <Button variant="outline" className="w-full">Got it!</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>

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
                    <div ref={index === 1 ? timelineRef : null} key={index} className="w-full">
                        <TimelineItem
                            title={item.title}
                            date={item.date}
                            description={item.description}
                            isLeft={index % 2 === 0}
                            icon={item.icon}
                            showModal={showModal}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

