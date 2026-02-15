'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const detailedServices = [
    {
        id: 'branding',
        image: '/images/services/branding_abstract.png', // Placeholder, will need generative AI or assets
        color: 'from-purple-600 to-indigo-600'
    },
    {
        id: 'uiux',
        image: '/images/services/uiux_abstract.png',
        color: 'from-teal-500 to-emerald-500'
    },
    {
        id: 'software',
        image: '/images/services/software_abstract.png',
        color: 'from-blue-600 to-cyan-500'
    },
    {
        id: 'marketing',
        image: '/images/services/marketing_abstract.png',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'mobile',
        image: '/images/services/mobile_abstract.png',
        color: 'from-amber-500 to-orange-500'
    },
    {
        id: 'consulting',
        image: '/images/services/consulting_abstract.png',
        color: 'from-indigo-600 to-blue-800'
    }
];

export default function DetailedServices() {
    const t = useTranslations('services');
    const [activeService, setActiveService] = useState('branding');

    const activeData = detailedServices.find(s => s.id === activeService) || detailedServices[0];

    return (
        <section className="py-24 bg-dark-surface relative overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${activeData.color} opacity-5 blur-[150px] transition-colors duration-700`} />

            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Navigation Sidebar */}
                    <div className="lg:w-1/3">
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                            {t('title')}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {detailedServices.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    className={`text-right px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-end gap-4 group ${activeService === service.id
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/40 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className="text-lg font-medium">
                                        {t(`${service.id}.title`)}
                                    </span>
                                    <div
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeService === service.id
                                            ? `bg-gradient-to-r ${service.color} scale-150`
                                            : 'bg-white/20 group-hover:bg-white/60'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative rounded-3xl overflow-hidden glass border border-white/10 min-h-[500px]"
                            >
                                {/* Abstract Visual Header */}
                                <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${activeData.color} opacity-20`} />

                                <div className="relative p-8 md:p-12">
                                    <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gradient-to-r ${activeData.color} text-white`}>
                                        {t(`${activeService}.title`)}
                                    </div>

                                    <h2 className="heading-md text-white mb-6">
                                        {t(`${activeService}.description`)}
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        {[...Array(4)].map((_, i) => {
                                            // Mapping dynamic keys based on existing structure "features" object keys would be ideal, 
                                            // but for now we iterate assuming the translation file keys structure matches the Services.tsx expanded list order or generic indexing?
                                            // Actually, in Services.tsx we explicitly listed keys. Let's do the same trick or use a helper.
                                            // For simplicity in this demo component without duplicating the keys array again:
                                            const featureKeys = ['seo', 'social', 'ads', 'content']; // This is wrong for all services.
                                            // Better approach: Re-use the keys from the serviceData in Services.tsx or just define them here.
                                            // To keep it clean, let's just use the `features` object from the translation by accessing keys dynamically if possible, 
                                            // or just map the specific know keys for each service.

                                            // Let's use a simpler UI approach: "Key Deliverables" title
                                            return null;
                                        })}

                                        {/* Since we can't easily iterate keys without defined arrays, let's hardcode the feature render based on the service ID 
                                            or simpler: just render the description and a call to action for now, 
                                            OR better: defined feature list in this component too.
                                        */}
                                    </div>

                                    {/* Feature List (Re-defining specific feature keys for detailed view) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {getFeatureKeys(activeService).map((featureKey) => (
                                            <div key={featureKey} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${activeData.color} bg-opacity-20`}>
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-white/80 font-medium">
                                                    {t(`${activeService}.features.${featureKey}`)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                                        <p className="text-white/40 text-sm">
                                            Ready to scale?
                                        </p>
                                        <button className={`px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105 bg-gradient-to-r ${activeData.color} shadow-lg shadow-aesthetic-purple/20`}>
                                            {t('start_project')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper to get keys based on service ID (matching what we put in messages/ar.json)
function getFeatureKeys(serviceId: string) {
    const map: Record<string, string[]> = {
        marketing: ['seo', 'social', 'ads', 'content'],
        software: ['web', 'api', 'cloud', 'saas'],
        mobile: ['ios', 'android', 'flutter', 'uiux'],
        branding: ['logo', 'guidelines', 'visuals', 'print'],
        uiux: ['research', 'wireframe', 'prototype', 'testing'],
        consulting: ['transformation', 'audit', 'growth', 'security']
    };
    return map[serviceId] || [];
}
