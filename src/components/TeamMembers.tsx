"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember, teamMembers } from '../data/teamMemberData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';


const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-opacity-5 rounded-xl p-6 hover:bg-opacity-10 transition-all"
        >
            <div className="bg-blue-500 text-red-300 p-4">
                This should have a blue background and white text.
            </div>
            <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden flex justify-center">
                <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={192}  // Set width (e.g., 48 * 4)
                    height={192} // Set height
                    className="rounded-full object-cover"
                />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
            <p className="text-blue-400 font-medium mb-4 text-center">{member.role}</p>
            <p className="text-gray-300 text-center mb-6">{member.description}</p>

            <div className="flex justify-center gap-4 ">
                {member.links.github && (
                    <Link
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 "
                    >
                        <FaGithub className="github-icon w-6 h-6" />
                    </Link>
                )}
                {member.links.linkedin && (
                    <Link
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-700 "
                    >
                        <FaLinkedin className="linkedin-icon w-6 h-6" />
                    </Link>
                )}
                {member.links.email && (
                    <Link
                        href={`mailto:${member.links.email}`}
                        className="text-gray-400 hover:text-purple-600  "
                    >
                        <MdOutlineEmail className="email-icon w-6 h-6" />
                    </Link>
                )}
            </div>

        </motion.div>
    );
};

export default function TeamMembers() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto pb-10">
                        Get to know the brilliant minds behind our AI-powered forecasting solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}