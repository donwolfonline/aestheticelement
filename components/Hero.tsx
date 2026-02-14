'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TextReveal } from './ui/TextReveal';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000"
        >
            {/* 3D-like Interactive Background */}
            <div className="absolute inset-0 -z-10 bg-dark-bg">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_50%)] animate-pulse-slow"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aesthetic-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-aesthetic-teal/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-aesthetic-gold/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="section-container text-center z-10">
                <div className="mb-10">
                    <TextReveal
                        text={t('title')}
                        className="heading-xl text-white justify-center"
                    />
                    <TextReveal
                        text={t('highlight')}
                        className="heading-xl text-gradient justify-center"
                        delay={0.5}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    {t('description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a href="#contact" className="btn-primary animate-glow relative overflow-hidden group">
                        <span className="relative z-10">{t('cta')}</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a href="#portfolio" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 text-white font-medium backdrop-blur-sm">
                        {t('secondaryCta')}
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
}
