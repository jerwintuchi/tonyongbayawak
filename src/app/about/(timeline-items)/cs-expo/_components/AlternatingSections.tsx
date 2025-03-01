import React from 'react';
import { images } from './CSExpoClient';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AlternatingSections() {
    return (
        <div className="max-w-full w-full px-6 mt-16 space-y-16">
            {/* Section 1: Left Text, Right Image */}
            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="md:w-1/2 text-left pl-4 xl:pl-48">
                    <h2 className="text-4xl font-semibold text-cyan-400 drop-shadow-[0_0_24px_rgba(60,211,238,1.0)]">
                        Our Journey
                    </h2>
                    <p className="text-gray-400 mt-2">
                        The CS Expo 2023 showcased innovative projects from the brightest minds in our batch. Here’s a look at our journey!
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image src={images[0]} alt="Expo Members" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </motion.div>

            {/* Section 2: Right Text, Left Image */}
            <motion.div
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="md:w-1/2 text-left">
                    <h2 className="text-4xl font-semibold text-purple-400 drop-shadow-[0_0_16px_rgba(300,211,238,1.0)]">
                        Innovative Projects
                    </h2>
                    <p className="text-gray-400 mt-2">
                        From AI solutions to groundbreaking web applications, our projects pushed the boundaries of technology and creativity.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image src={images[1]} alt="Project Presentation" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </motion.div>
        </div>
    );
}
