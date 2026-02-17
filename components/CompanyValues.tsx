'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const values = [
    { key: 'innovation', icon: '🚀' },
    { key: 'quality', icon: '💎' },
    { key: 'integrity', icon: '🔮' }
];

export default function CompanyValues() {
    const t = useTranslations('about.values');

    return (
        <section className="py-20 relative z-20 -mt-20">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="glass p-8 rounded-2xl h-full border border-white/5 hover:border-aesthetic-teal/30 transition-colors duration-300 relative overflow-hidden">
                                {/* Glow Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-aesthetic-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aesthetic-teal transition-colors">
                                        {t(item.key).split(':')[0]}
                                    </h3>

                                    <p className="text-white/60 leading-relaxed">
                                        {t(item.key).split(':')[1] || t(item.key)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
