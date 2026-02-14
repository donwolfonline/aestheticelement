'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const team = [
    {
        id: 'ceo',
        image: '/images/team1.jpg', // Placeholder
        role: 'Chief Architect'
    },
    {
        id: 'cd',
        image: '/images/team2.jpg', // Placeholder
        role: 'Head of Design'
    },
    {
        id: 'cto',
        image: '/images/team3.jpg', // Placeholder
        role: 'Tech Lead'
    }
];

export default function TeamSection() {
    const t = useTranslations('about.team');

    return (
        <section className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-aesthetic-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-aesthetic-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg text-white mb-4">{t('title')}</h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">{t('subtitle')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-dark-surface border border-white/5 group-hover:border-aesthetic-gold/30 transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 z-10"></div>

                                {/* Placeholder Gradient for Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 group-hover:scale-105 transition-transform duration-700"></div>

                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-aesthetic-gold transition-colors">{t(`members.${member.id}.name`)}</h3>
                                    <p className="text-white/60 text-sm tracking-widest uppercase">{t(`members.${member.id}.role`)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
