'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const milestones = [
    { year: '2019', key: 'founding' },
    { year: '2021', key: 'expansion' },
    { year: '2023', key: 'awards' },
    { year: '2025', key: 'future' },
];

export default function CompanyTimeline() {
    const t = useTranslations('about.timeline');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-dark-bg relative overflow-hidden">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="heading-md mb-16 text-center"
                >
                    {t('title')}
                </motion.h2>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10" />
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-aesthetic-purple via-aesthetic-gold to-aesthetic-teal origin-top"
                    />

                    <div className="flex flex-col gap-24 md:gap-32">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5 opacity-50 absolute -z-10 select-none">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">
                                        {t(`${item.key}.title`)}
                                    </h3>
                                    <p className="text-white/60 text-sm md:text-base">
                                        {t(`${item.key}.description`)}
                                    </p>
                                </div>

                                {/* Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-bg border-2 border-aesthetic-gold rounded-full z-10 box-content p-1 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                    <div className="w-full h-full bg-aesthetic-gold rounded-full" />
                                </div>

                                {/* Spacer */}
                                <div className="w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
