import { motion, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { slidingImages } from "./CSExpoClient";
import Image from "next/image";

export default function SlidingPicture() {
    const [ref, { width }] = useMeasure(); // Measure container width
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        const totalWidth = width; // Ensure full row movement
        const loopThreshold = -totalWidth / 2; // Triggers wrap earlier

        // eslint-disable-next-line prefer-const
        controls = animate(xTranslation, [0, loopThreshold], {
            ease: "linear",
            duration: 14,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            onUpdate: (latest) => {
                if (latest <= loopThreshold) {
                    xTranslation.set(latest + totalWidth / 2); // **Shifts smoothly instead of resetting**
                }
            },
        });

        return () => controls.stop();
    }, [width, xTranslation]);

    return (
        <div className="w-full overflow-hidden mt-16 mb-24 relative">
            <motion.div
                ref={ref}
                style={{ x: xTranslation }}
                className="flex gap-4 flex-nowrap w-max"
            >
                {/* Tripling images ensures continuous looping */}
                {[...slidingImages, ...slidingImages, ...slidingImages].map((src, index) => (
                    <div key={index} className="w-[300px] flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Sliding Image ${index + 1}`}
                            width={300}
                            height={200}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
