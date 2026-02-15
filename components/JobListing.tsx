'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';

const roles = ['marketing', 'software', 'sales', 'photographer', 'social', 'uiux'];

export default function JobListing() {
    const t = useTranslations('careers');
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-24 bg-dark-bg relative z-10">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="heading-md mb-16 text-center"
                >
                    {t('openings')}
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative h-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-aesthetic-purple via-aesthetic-gold to-aesthetic-teal rounded-3xl opacity-0 group-hover:opacity-75 blur transition duration-500" />

                            <div className="relative h-full glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all cursor-default">
                                <div>
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {{
                                            marketing: '📊',
                                            software: '💻',
                                            sales: '🤝',
                                            photographer: '📸',
                                            social: '📱',
                                            uiux: '🎨'
                                        }[role]}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-aesthetic-gold transition-colors">
                                        {t(`jobs.${role}.title`)}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                                            {t(`jobs.${role}.type`)}
                                        </span>
                                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                                            {t(`jobs.${role}.location`)}
                                        </span>
                                    </div>

                                    <p className="text-white/70 text-sm mb-6 line-clamp-2">
                                        {t(`jobs.${role}.description`)}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedRole(role)}
                                    className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-dark-bg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                >
                                    {t('apply')}
                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Modal */}
                {mounted && createPortal(
                    <AnimatePresence>
                        {selectedRole && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
                            >
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedRole(null)} />

                                <motion.div
                                    layoutId={selectedRole}
                                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.95, opacity: 0, y: 30 }}
                                    className="relative bg-[#111] border border-white/10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl p-6 md:p-10"
                                >
                                    <button
                                        onClick={() => setSelectedRole(null)}
                                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                                    >
                                        ✕
                                    </button>

                                    <div className="mb-8">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t(`jobs.${selectedRole}.title`)}</h2>
                                        <div className="flex gap-4 text-white/60">
                                            <span>{t(`jobs.${selectedRole}.type`)}</span>
                                            <span>•</span>
                                            <span>{t(`jobs.${selectedRole}.location`)}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8 text-white/80">
                                        <p className="text-lg leading-relaxed">
                                            {t(`jobs.${selectedRole}.description`)}
                                        </p>

                                        <div>
                                            <h3 className="text-aesthetic-gold font-bold mb-4 uppercase tracking-wider text-sm">{t('job_details.responsibilities')}</h3>
                                            <ul className="space-y-2">
                                                {[0, 1, 2, 3].map(i => (
                                                    <li key={i} className="flex gap-3">
                                                        <span className="text-aesthetic-gold">›</span>
                                                        {t(`jobs.${selectedRole}.responsibilities.${i}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-aesthetic-gold font-bold mb-4 uppercase tracking-wider text-sm">{t('job_details.requirements')}</h3>
                                            <ul className="space-y-2">
                                                {[0, 1, 2, 3].map(i => (
                                                    <li key={i} className="flex gap-3">
                                                        <span className="text-aesthetic-gold">›</span>
                                                        {t(`jobs.${selectedRole}.requirements.${i}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                                        <button className="btn-primary w-full md:w-auto px-12">
                                            {t('job_details.apply_button')}
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </section>
    );
}
