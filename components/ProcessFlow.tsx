'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProcessFlow() {
    const t = useTranslations('services.process');

    const steps = [
        { key: 'discovery', icon: '🔍' },
        { key: 'strategy', icon: '🧠' },
        { key: 'design', icon: '🎨' },
        { key: 'development', icon: '💻' },
        { key: 'launch', icon: '🚀' },
    ];

    return (
        <section className="py-20 relative overflow-hidden">

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg text-gradient">{t('title')}</h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">{t('subtitle')}</p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-aesthetic-purple via-aesthetic-teal to-aesthetic-gold w-full opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="glass p-6 rounded-2xl md:rounded-full aspect-square flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors border border-white/10 hover:border-aesthetic-purple/50 relative z-10 bg-dark-bg/80 backdrop-blur-md">
                                    <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 block">{step.icon}</span>
                                    <h3 className="font-bold text-lg text-white mb-2">{t(`${step.key}.title`)}</h3>
                                    <p className="text-sm text-white/60">{t(`${step.key}.desc`)}</p>
                                </div>

                                {/* Pulse Effect */}
                                <div className="absolute inset-0 bg-aesthetic-purple/20 rounded-2xl md:rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
