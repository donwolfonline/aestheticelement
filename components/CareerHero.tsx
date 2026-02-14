'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CareerHero() {
    const t = useTranslations('careers');

    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Video/Image Placeholder - using CSS gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg z-0" />

            {/* Animated Particles or Grid could go here */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="section-container relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="heading-xl mb-6 text-gradient"
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
                >
                    {t('subtitle')}
                </motion.p>
            </div>
        </section>
    );
}
