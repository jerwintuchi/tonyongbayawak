import { motion } from 'framer-motion'
import React from 'react'

export default function ThankYouPanelists() {
    return (
        <motion.div
            className="mt-16 text-center p-8 rounded-lg shadow-2xl max-w-3xl mx-4 border border-cyan-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_0_20px_yellow] uppercase tracking-widest">
                Thank You to Our Panelists
            </h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
                We sincerely appreciate the time, effort, and expertise of our esteemed panelists. Your valuable insights and feedback have helped us grow and refine our work. Thank you for being part of the <strong className="text-cyan-300">CS Expo 2023</strong> and for inspiring the next generation of tech innovators!
            </p>
        </motion.div>
    )
}
