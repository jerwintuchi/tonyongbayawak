import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import Image from 'next/image';
import { GalleryImages } from './CSExpoClient';
import ScrollIndicator from './ScrollIndicator';

export default function EventGalleryCarousel() {
    return (
        <div className="relative w-full max-w-2xl px-4 pb-12">
            {/* Scroll Indicator fixed on top */}
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
                <ScrollIndicator />
            </div>

            <Carousel>
                <CarouselContent>
                    {GalleryImages.map((src, index) => (
                        <CarouselItem key={index}>
                            <Image
                                width={500}
                                height={500}
                                src={src}
                                alt={`CS Expo Image ${index + 1}`}
                                className="rounded-lg w-full h-auto"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
