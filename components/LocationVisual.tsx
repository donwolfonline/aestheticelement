'use client';

import { motion } from 'framer-motion';

export default function LocationVisual() {
    return (
        <section className="h-[400px] w-full relative overflow-hidden bg-dark-bg">
            <div className="absolute inset-0 bg-[url('/images/map-dark.png')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />

            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="w-4 h-4 bg-aesthetic-gold rounded-full shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-pulse" />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-dark-surface/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-center whitespace-nowrap">
                        <p className="font-bold text-white">Riyadh HQ</p>
                        <p className="text-xs text-white/50">Kingdom Centre, Floor 24</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
