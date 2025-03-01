import { motion } from 'framer-motion'
import React from 'react'
import { images } from './CSExpoClient'
import Image from 'next/image'

export default function SlidingPicture() {
    return (
        <div className="w-full overflow-hidden mt-16 mb-24">
            <motion.div
                className="flex gap-6"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {images.concat(images).map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Sliding Image ${index + 1}`}
                        width={300}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
                ))}
            </motion.div>
        </div>
    )
}
