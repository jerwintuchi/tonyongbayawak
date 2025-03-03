import { motion } from 'framer-motion';

import Image from 'next/image';
import ThankYouPanelists from './ThankYouPanelists';
import { useEffect, useState } from 'react';

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
    {
        name: "Mr. Marc Reyes",
        background: "ML Engineering @ Angkas | ex-GCash | MS Computer Science @ UP Diliman",
        description: (
            <>
                A <strong>Senior ML Engineering Manager</strong> with hands-on experience leading <strong>machine learning projects</strong> from the ground up. As <strong>GCash’s first ML engineer</strong>, helped define and grow the ML engineering function, developing frameworks and deploying impactful solutions that make a difference.
                <br /><br />
            </>
        ),
        image: "/cs-expo/mr-marc.jpg"
    },
];


export default function Presentation() {
    const [randomValues, setRandomValues] = useState<{ x: number; y: number; delay: number; duration: number; }[]>([]);


    // Generate random values only on the client
    useEffect(() => {
        setRandomValues(
            panelMembers.map(() => ({
                x: Math.random() * 10 - 5,
                y: 50 + Math.random() * 20,
                delay: Math.random() * 0.5,
                duration: 1 + Math.random() * 0.5,
            }))
        );
    }, []);


    return (
        <>
            {/* Panel Details Section */}
            <motion.div
                className="mt-16 text-center mb-36"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-green-400 drop-shadow-[0_0_20px_green] mb-6 uppercase tracking-widest">
                    Meet the Panel
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {panelMembers.map((panel, index) => {
                        const { x, y, delay, duration } = randomValues[index] || { x: 0, y: 50, delay: 0, duration: 1 };

                        return (
                            <motion.div
                                key={index}
                                className={`relative p-6 rounded-lg shadow-2xl w-80 border border-cyan-400 overflow-hidden glitch glitch-${index}`}
                                initial={{ opacity: 0, y, x }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration, delay, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >

                                <div className="absolute inset-0 bg-cyan-400 opacity-10 blur-lg" />
                                <Image
                                    src={panel.image}
                                    alt={panel.name}
                                    width={150}
                                    height={150}
                                    className="rounded-full mx-auto mb-4 object-cover w-[150px] h-[150px] border-4 border-cyan-300 shadow-lg"
                                />
                                <h3 className="text-xl font-extrabold text-white tracking-wide drop-shadow-md">{panel.name}</h3>
                                <p className="text-cyan-200 text-sm font-medium mt-2">{panel.background}</p>
                                <p className="text-gray-300 text-xs mt-2 italic leading-relaxed">{panel.description}</p>
                            </motion.div>
                        );
                    })}
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
                    <Image src="/cs-expo/presentation2.jpg" alt="Presenter Presenting" width={500} height={300} className="rounded-lg shadow-lg" />
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
                    <Image src="/cs-expo/solo-present-close.jpg" alt="Panel Judges" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 text-left pl-20">
                    <h2 className="text-4xl font-semibold text-blue-400 drop-shadow-[0_0_20px_rgba(60,211,238,1.0)]">
                        Presenter Segment
                    </h2>

                    <p className="text-gray-400 mt-2">
                        The presenter shared their work and answered questions from the panelists. And also shared some of personal experience and insights.

                    </p>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4 mt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="md:w-1/2 flex justify-center pr-20">
                    <Image src="/cs-expo/group-close.jpg" alt="Panel Judges" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 text-left">
                    <h2 className="text-4xl font-semibold text-pink-400 drop-shadow-[0_0_20px_rgba(238,60,211,1.0)]">
                        Group Discussion
                    </h2>

                    <p className="text-gray-400 mt-2">
                        The group discussed and answered question from the panelists. It was a great opportunity to learn from others and share our ideas.

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
            {/* Thank You Section */}
            <ThankYouPanelists />
        </>
    );
}
