'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import InteractiveStory from './ui/InteractiveStory';

export default function About() {
    const t = useTranslations('about');

    const stats = [
        { value: '50+', label: t('stats.projects'), color: 'text-aesthetic-purple' },
        { value: '30+', label: t('stats.clients'), color: 'text-aesthetic-teal' },
        { value: '5+', label: t('stats.experience'), color: 'text-aesthetic-gold' },
    ];

    return (
        <section id="about" className="section-container relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-aesthetic-purple/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="heading-lg text-white mb-8">
                        {t('title')} <span className="text-aesthetic-gold">.</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-12 leading-relaxed">
                        {t('description')}
                    </p>

                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="relative">
                    <InteractiveStory
                        title={t('story.title')}
                        content={t('story.content')}
                    />

                    {/* Floating Value Cards */}
                    <div className="absolute -bottom-10 -right-10 hidden md:block">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-dark-surface border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl max-w-xs"
                        >
                            <div className="text-3xl mb-2">💡</div>
                            <h4 className="text-white font-bold mb-1">{t('values.innovation').split(':')[0]}</h4>
                            <p className="text-white/60 text-xs">{t('values.innovation').split(':')[1]}</p>
                        </motion.div>
                    </div>

                    <div className="absolute -top-10 -left-10 hidden md:block z-20">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="bg-dark-surface border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl max-w-xs"
                        >
                            <div className="text-3xl mb-2">💎</div>
                            <h4 className="text-white font-bold mb-1">{t('values.quality').split(':')[0]}</h4>
                            <p className="text-white/60 text-xs">{t('values.quality').split(':')[1]}</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Team/DNA Section could go here later */}
        </section>
    );
}
