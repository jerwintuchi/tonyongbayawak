import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import Image from 'next/image'
import { SlidingImages } from './CSExpoClient'

export default function EventGalleryCarousel() {
    return (
        <div className="w-full max-w-2xl px-4">
            <Carousel>
                <CarouselContent>
                    {SlidingImages.map((src, index) => (
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
    )
}
