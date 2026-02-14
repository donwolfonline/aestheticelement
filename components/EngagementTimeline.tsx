'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function EngagementTimeline() {
    const t = useTranslations('contact.timeline');

    const steps = [
        { key: 'contact', icon: '📬' },
        { key: 'discovery', icon: '☕' },
        { key: 'proposal', icon: '📝' },
        { key: 'kickoff', icon: '🚀' }
    ];

    return (
        <section className="py-20 border-t border-white/5 bg-dark-surface/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-md text-white mb-4">{t('title')}</h2>
                    <p className="text-white/60">{t('subtitle')}</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Horizontal Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>

                    {/* Vertical Line (Mobile) */}
                    <div className="absolute top-0 left-8 w-0.5 h-full bg-white/10 md:hidden"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative flex md:flex-col items-center gap-6 md:gap-4 md:text-center pl-16 md:pl-0"
                            >
                                {/* Dot/Icon Circle */}
                                <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-16 h-16 rounded-full glass flex items-center justify-center text-3xl border border-white/10 z-10 bg-dark-bg">
                                    {step.icon}
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{t(`${step.key}.title`)}</h3>
                                    <p className="text-sm text-white/50">{t(`${step.key}.desc`)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
