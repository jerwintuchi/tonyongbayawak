"use client";
import React, { useEffect, useState } from "react";


import SlidingPicture from "./SlidingPicture";
import HeroSection from "./HeroSection";
import AlternatingSections from "./AlternatingSections";
import EventGalleryCarousel from "./EventGallery";
import EventGalleryDivider from "./EventGalleryDivider";
import Presentation from "./Presentation";
import SocialPost from "./SocialPost";
import CSExpoNews from "./NewsArticle";
export const images = [
    "/cs-expo/members1.jpg",
    "/cs-expo/members2.jpg",
];

export const slidingImages = [
    "/cs-expo/media-inq.jpg",
    "/cs-expo/media-pop.jpg",
    "/cs-expo/media-pinoy.jpg",
    "/cs-expo/media-sparkup.jpg",
];

export const EventGallery = [
    "/cs-expo/peoples-hd.jpg",
    "/cs-expo/pantry-view.jpg",
    "/cs-expo/pantry-view2.jpg",
    "/cs-expo/members1.jpg",
]

export const GalleryImages = [
    "/cs-expo/members1.jpg",
    "/cs-expo/pantry-view2.jpg",
    "/cs-expo/redbull.jpg",
    "/cs-expo/poster1.jpg",
    "/cs-expo/poster2.jpg",
]

export default function CSExpoClient() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center overflow-hidden ">

            {/* Hero Section */}
            {/* <div className="text-center mt-16">
                <Image src={`/cs-expo/logo-nobg.png`} alt="CS Expo Logo" width={300} height={300} className={`${isLoading ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-1000 mx-auto`} />
                <p className="text-lg md:text-xl mt-2 text-gray-300 max-w-xl mx-auto">
                    A nostalgic throwback to our thesis presentation!
                </p>
            </div> */}
            <HeroSection isLoading={isLoading} />

            {/* Alternating Sections */}
            <AlternatingSections />

            {/* Sliding Picture Section */}
            <SlidingPicture />

            {/* Presentation */}
            <Presentation />

            <div className="max-w-5xl w-full mx-auto p-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                {/* Embedded Social Media Post - Fix for Overflow & Cropping */}
                <div className="md:w-1/2 w-full flex justify-center overflow-x-auto">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <SocialPost />
                    </div>
                </div>

                {/* CS Expo News (Already Responsive) */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <CSExpoNews />
                </div>
            </div>






            {/* Image Carousel (Event Gallery) */}
            <EventGalleryDivider />
            <EventGalleryCarousel />

        </div>
    );
}
