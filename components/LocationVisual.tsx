'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function LocationVisual() {
    const t = useTranslations('contact');

    // Dynamically import Map with no SSR to avoid window is not defined error
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <div className="h-full w-full bg-dark-bg animate-pulse" />,
            ssr: false
        }
    ), []);

    return (
        <section className="h-[400px] w-full relative overflow-hidden bg-dark-bg rounded-2xl border border-white/10">
            <div className="absolute inset-0 z-0">
                <Map />
            </div>

            {/* Overlay gradient for text readability and aesthetic integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none z-10" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-32 bg-dark-surface/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-center whitespace-nowrap shadow-2xl">
                        <p className="font-bold text-white">{t('locations.riyadh')}</p>
                        <p className="text-xs text-white/50">Kingdom Centre, Floor 24</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
