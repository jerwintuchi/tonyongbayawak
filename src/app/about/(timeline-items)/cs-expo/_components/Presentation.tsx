import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const panelMembers = [
    {
        name: "Mr. Abraham Magpantay",
        background: "Computer Science Faculty & ACM Adviser, FEU Tech",
        description: (
            <>
                A passionate tech enthusiast with expertise in <strong>computer vision</strong>, <strong>image processing</strong>, <strong>remote sensing</strong>, <strong>algorithms</strong>, and <strong>software engineering</strong>. Holds a <strong>Master&apos;s in Computer Science</strong> from <strong>Ateneo de Manila University</strong>.
            </>
        ),
        image: "/cs-expo/sir-abe.jpg"
    },
    {
        name: "Dr. Manuel B. Garcia",
        background: "Professor & Founding Director, EdITH - FEU Tech",
        description: (
            <>
                A distinguished <strong>IT professor and researcher</strong> with a <strong>Doctorate in Information Technology</strong>. His expertise spans <strong>education, information technology</strong>, and <strong>interdisciplinary research</strong>. He is the <strong>first-ever recipient of the Ramon Dimacali Award for IT</strong> and has been recognized among the <strong>World&apos;s Top 2% Scientists (2023 & 2024)</strong>.
            </>
        ),
        image: "/cs-expo/doc-manuel.webp"
    },
    { name: "Dr. Marc Reyes", background: "Cybersecurity Expert, IBM", image: "/cs-expo/panel3.jpg" },
];

export default function Presentation() {
    return (
        <>
            {/* Panel Details Section */}
            <motion.div
                className="mt-16 text-center mb-36 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-semibold text-green-400 drop-shadow-[0_0_20px_rgba(60,238,100,1.0)] mb-6">
                    Meet the Panel
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {panelMembers.map((panel, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
                            <Image
                                src={panel.image}
                                alt={panel.name}
                                width={150}
                                height={150}
                                className="rounded-full mx-auto mb-4 object-cover w-[150px] h-[150px]"
                            />
                            <h3 className="text-xl font-bold text-white">{panel.name}</h3>
                            <p className="text-gray-400 text-sm mt-2">{panel.background}</p>
                            <p className="text-gray-400 text-xs mt-2">{panel.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-8 pb-12 px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="md:w-1/2 flex justify-center">
                    <Image src="/cs-expo/solo-present-close.jpg" alt="Presenter Presenting" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 text-left">
                    <h2 className="text-4xl font-semibold text-pink-400 drop-shadow-[0_0_20px_rgba(238,60,211,1.0)]">
                        Presenting Our Work
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Delivering our thesis presentation was a defining moment. It was the culmination of months of hard work, teamwork, and innovation.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 px-4 mt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="md:w-1/2 flex justify-center">
                    <Image src="/cs-expo/panels.jpg" alt="Panel Judges" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 text-left">
                    <h2 className="text-4xl font-semibold text-blue-400 drop-shadow-[0_0_20px_rgba(60,211,238,1.0)]">
                        The Panel’s Feedback
                    </h2>
                    
                    <p className="text-gray-400 mt-2">
                        Our panel of judges provided insightful feedback and questions, ensuring our presentation was well-received.<br />
                        It then became more of like a podcast/kwentuhan with the panelists together discussing our work.
                    </p>
                </div>
            </motion.div>
        </>
    );
}
