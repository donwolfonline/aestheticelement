'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const teamMembers = [
    { key: 'ceo', image: '/images/team/member1.png' },
    { key: 'cd', image: '/images/team/member2.png' },
    { key: 'cto', image: '/images/team/member3.png' },
    { key: 'lead_dev', image: '/images/team/member4.png' },
];

export default function TeamGallery() {
    const t = useTranslations('about.team');

    return (
        <section className="py-24 bg-dark-surface">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="heading-md mb-4">{t('title')}</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">{t('subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5"
                        >
                            <Image
                                src={member.image}
                                alt={t(`members.${member.key}.name`)}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent z-10" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {t(`members.${member.key}.name`)}
                                </h3>
                                <p className="text-aesthetic-gold text-sm font-medium mb-4">
                                    {t(`members.${member.key}.role`)}
                                </p>
                                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
                                    {t(`members.${member.key}.bio`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
