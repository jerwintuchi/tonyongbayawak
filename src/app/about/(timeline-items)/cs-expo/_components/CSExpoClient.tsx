"use client";
import React, { useEffect, useState } from "react";


import SlidingPicture from "./SlidingPicture";
import HeroSection from "./HeroSection";
import AlternatingSections from "./AlternatingSections";
import EventGalleryCarousel from "./EventGallery";
import EventGalleryDivider from "./EventGalleryDivider";
import Presentation from "./Presentation";

export const images = [
    "/cs-expo/members1.jpg",
    "/cs-expo/members2.jpg",
];

export const EventGallery = [
    "/cs-expo/peoples-hd.jpg",
    "/cs-expo/pantry-view.jpg",
    "/cs-expo/pantry-view2.jpg",
    "/cs-expo/members1.jpg",
]

export const SlidingImages = [
    "/cs-expo/members1.jpg",
    "/cs-expo/members2.jpg",
    "/cs-expo/members3.jpg",
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

            {/* Embedded Social Media Post */}
            <div className="mt-16 mb-16">
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/csexpo2024/posts/pfbid02kK2LyDfFrEQMPKUCcPhZY1Sg3Qg4fQRcpwGR2utyvm9kStwLHRpfh12BZ4wDdhZhl&show_text=true&width=500"
                    width="500"
                    height="699"
                    style={{
                        border: "none",
                        overflow: "hidden",
                        backgroundColor: "white",
                    }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>

            {/* Image Carousel (Event Gallery) */}
            <EventGalleryDivider />
            <EventGalleryCarousel />
        </div>
    );
}
