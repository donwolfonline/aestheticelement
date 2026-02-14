'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ServiceCard from './ui/ServiceCard';

const services = [
    {
        key: 'marketing',
        icon: '📱',
        gradient: 'from-aesthetic-purple to-purple-600',
    },
    {
        key: 'software',
        icon: '💻',
        gradient: 'from-aesthetic-teal to-cyan-600',
    },
    {
        key: 'mobile',
        icon: '📲',
        gradient: 'from-aesthetic-gold to-orange-600',
    },
];

export default function Services() {
    const t = useTranslations('services');

    const serviceData = [
        {
            key: 'marketing',
            icon: '🚀',
            gradient: 'from-pink-500 to-rose-500',
            features: ['seo', 'social', 'ads', 'content']
        },
        {
            key: 'software',
            icon: '⚡',
            gradient: 'from-cyan-500 to-blue-500',
            features: ['web', 'api', 'cloud', 'saas']
        },
        {
            key: 'mobile',
            icon: '📱',
            gradient: 'from-amber-400 to-orange-500',
            features: ['ios', 'android', 'flutter', 'uiux']
        },
        {
            key: 'branding',
            icon: '🎨',
            gradient: 'from-purple-500 to-indigo-500',
            features: ['logo', 'guidelines', 'visuals', 'print']
        },
        {
            key: 'uiux',
            icon: '✨',
            gradient: 'from-teal-400 to-emerald-500',
            features: ['research', 'wireframe', 'prototype', 'testing']
        },
        {
            key: 'consulting',
            icon: '💡',
            gradient: 'from-blue-600 to-indigo-700',
            features: ['transformation', 'audit', 'growth', 'security']
        }
    ];

    return (
        <section id="services" className="section-container perspective-1000">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="heading-lg text-gradient mb-6 inline-block"
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-white/60 max-w-2xl mx-auto"
                >
                    {t('subtitle')}
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
                {serviceData.map((service, index) => (
                    <ServiceCard
                        key={service.key}
                        index={index}
                        title={t(`${service.key}.title`)}
                        description={t(`${service.key}.description`)}
                        icon={service.icon}
                        gradient={service.gradient}
                        features={service.features.map(f => t(`${service.key}.features.${f}`))}
                    />
                ))}
            </div>
        </section>
    );
}
