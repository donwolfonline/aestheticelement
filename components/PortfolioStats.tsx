'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const stats = [
    { key: 'projects', end: 120, suffix: '+' },
    { key: 'clients', end: 87, suffix: '' },
    { key: 'awards', end: 15, suffix: '' },
    { key: 'satisfaction', end: 98, suffix: '%' }
];

function AnimatedNumber({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function PortfolioStats() {
    const t = useTranslations('portfolio.stats');

    return (
        <section className="py-20 bg-dark-surface/30 border-y border-white/5">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-lg text-white mb-4">{t('title')}</h2>
                    <p className="text-white/60 text-lg">{t('subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.key}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: 'spring' }}
                            className="text-center group"
                        >
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-aesthetic-purple to-aesthetic-teal blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-aesthetic-purple to-aesthetic-teal mb-2">
                                    <AnimatedNumber end={stat.end} suffix={stat.suffix} />
                                </div>
                            </div>
                            <p className="text-white/70 uppercase tracking-wider text-sm font-medium">
                                {t(`${stat.key}.label`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
