'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function Philosophy() {
    const t = useTranslations('about.philosophy');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

    return (
        <section ref={containerRef} className="py-32 overflow-hidden bg-dark-surface/30 relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>

            <div className="flex flex-col gap-12">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                    <span className="text-[10vw] md:text-[8vw] font-black text-white/5 uppercase leading-none tracking-tighter">
                        {t('line1')} · {t('line1')}
                    </span>
                </motion.div>

                <motion.div style={{ x: x2 }} className="whitespace-nowrap">
                    <span className="text-[10vw] md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-aesthetic-purple to-aesthetic-teal uppercase leading-none tracking-tighter opacity-80">
                        {t('line2')} · {t('line2')}
                    </span>
                </motion.div>
            </div>

            <div className="section-container mt-16 text-center relative z-10">
                <p className="text-2xl md:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed">
                    &quot;{t('quote')}&quot;
                </p>
            </div>
        </section>
    );
}
