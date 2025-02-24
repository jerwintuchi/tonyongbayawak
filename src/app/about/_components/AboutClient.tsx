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
    const [doNotShowAgain, setDoNotShowAgain] = useState(false);
    const { ref: timelineRef, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (window.location && inView) {
            // Check if the doNotShowAgain state variable is set to true in session storage
            const sessionStorageValue = window.sessionStorage.getItem('doNotShowAgain');
            if (sessionStorageValue === 'true') {
                setShowModal(false);
            } else {
                setShowModal(true)
            }

        }

        // Show the modal when the timeline is in view
        /*         if (inView) {
                    setShowModal(true);
                } */
    }, [inView]);

    const handleClick = () => {
        window.sessionStorage.setItem('doNotShowAgain', 'true');
        setDoNotShowAgain(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 py-24 px-6 relative overflow-hidden">
            {/* Info Modal */}
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="fixed top-28 mr-4 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 w-80 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <DialogHeader>
                        <DialogTitle>Did You Know?</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-gray-700">Click on any timeline item to navigate to a related page and explore more details!</p>
                    <div className='flex flex-row justify-start'>
                        <input className='flex flex-row mr-2' type="checkbox" id="doNotShowAgain" checked={doNotShowAgain} onChange={(e) => e.target.checked ? handleClick() : setDoNotShowAgain(false)} />
                        <span className='text-sm flex flex-row'>Do not show again</span>
                    </div>
                    <DialogClose asChild>
                        <Button variant="outline" className=" w-full">Got it!</Button>
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
                    <div ref={index === 0 ? timelineRef : null} key={index} className="w-full">
                        <TimelineItem
                            title={item.title}
                            date={item.date}
                            description={item.description}
                            isLeft={index % 2 === 0}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
