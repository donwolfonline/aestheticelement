'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const testimonials = [
    { id: 'ceo', company: 'LuxMart', role: 'CEO' },
    { id: 'founder', company: 'PayFlow', role: 'Founder' },
    { id: 'cto', company: 'UrbanKey', role: 'CTO' }
];

export default function Testimonials() {
    const t = useTranslations('portfolio.testimonials');
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aesthetic-purple/5 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg text-white mb-4">{t('title')}</h2>
                    <p className="text-white/60 text-lg">{t('subtitle')}</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-aesthetic-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <blockquote className="text-xl md:text-2xl text-white/90 text-center font-light italic mb-8 leading-relaxed">
                            "{t(`items.${testimonials[activeIndex].id}.quote`)}"
                        </blockquote>

                        <div className="text-center">
                            <p className="text-white font-semibold text-lg mb-1">
                                {t(`items.${testimonials[activeIndex].id}.name`)}
                            </p>
                            <p className="text-aesthetic-teal text-sm">
                                {t(`items.${testimonials[activeIndex].id}.role`)} · {testimonials[activeIndex].company}
                            </p>
                        </div>
                    </motion.div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                        ? 'bg-gradient-to-r from-aesthetic-purple to-aesthetic-teal w-8'
                                        : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
