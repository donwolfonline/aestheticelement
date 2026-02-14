'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Extended Project Data
const projects = [
    {
        id: 'ecommerce',
        category: 'web',
        image: '/images/projects/luxmart.png',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'fintech',
        category: 'mobile',
        image: '/images/projects/payflow.png',
        color: 'from-cyan-500 to-blue-500'
    },
    {
        id: 'realestate',
        category: 'web',
        image: '/images/projects/urbankey.png',
        color: 'from-amber-400 to-orange-500'
    },
    {
        id: 'health',
        category: 'mobile',
        image: '/images/projects/healthplus.png',
        color: 'from-emerald-400 to-green-600'
    },
    {
        id: 'saas',
        category: 'web',
        image: '/images/projects/nextstep.png',
        color: 'from-purple-500 to-indigo-600'
    },
    {
        id: 'fitness',
        category: 'mobile',
        image: '/images/projects/elevate.png',
        color: 'from-orange-500 to-red-500'
    }
];

export default function PortfolioEnhanced() {
    const t = useTranslations('portfolio');
    const [filter, setFilter] = useState('all');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-dark-bg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="heading-xl text-gradient mb-6">{t('title')}</h1>
                    <p className="text-xl text-white/60 mb-12">{t('subtitle')}</p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {['all', 'web', 'mobile'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full border-2 transition-all font-medium ${filter === cat
                                    ? 'bg-gradient-to-r from-aesthetic-purple to-aesthetic-teal text-white border-transparent shadow-lg shadow-aesthetic-purple/30'
                                    : 'bg-dark-surface/50 text-white/70 border-white/20 hover:border-aesthetic-teal/50 hover:text-white hover:bg-dark-surface/80'
                                    }`}
                            >
                                {t(`filters.${cat}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedId(project.id)}
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-surface border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-aesthetic-purple/20 transition-all duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Project Image */}
                                    <Image
                                        src={project.image}
                                        alt={t(`items.${project.id}.title`)}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t(`items.${project.id}.title`)}</h3>
                                        <p className="text-aesthetic-teal mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{t(`items.${project.id}.category`)}</p>
                                        <span className="text-sm text-white/80 border-b border-aesthetic-gold pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">View Case Study</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-dark-surface border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            >
                                <div className={`h-64 bg-gradient-to-r ${projects.find(p => p.id === selectedId)?.color} relative p-8 flex items-end`}>
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                                    >
                                        ✕
                                    </button>
                                    <div>
                                        <h2 className="text-4xl font-bold text-white mb-2">{t(`items.${selectedId}.title`)}</h2>
                                        <p className="text-white/80">{t(`items.${selectedId}.category`)}</p>
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 space-y-8">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="md:col-span-2">
                                            <h3 className="text-xl font-bold text-white mb-4">Brief</h3>
                                            <p className="text-white/70 leading-relaxed mb-6">
                                                {t(`items.${selectedId}.description`)}
                                                {/* In a real app, this would be a longer description from translation */}
                                            </p>

                                            <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                                            <p className="text-white/70 leading-relaxed">
                                                Leveraging our aesthetic intelligence, we crafted a bespoke digital experience that merges form and function.
                                            </p>
                                        </div>
                                        <div className="glass p-6 rounded-xl h-fit">
                                            <h4 className="text-sm text-white/50 uppercase tracking-wider mb-4">Impact</h4>
                                            <div className="text-3xl font-bold text-aesthetic-teal mb-2">{t(`items.${selectedId}.outcome`)}</div>
                                            <p className="text-sm text-white/60">Measurable results that drive business growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
