'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ProjectCard from './ui/ProjectCard';

export default function Portfolio() {
    const t = useTranslations('portfolio');
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    const projects = [
        {
            key: 'ecommerce',
            color: 'from-purple-600 to-indigo-600',
            image: '/images/projects/luxmart.png',
        },
        {
            key: 'fintech',
            color: 'from-emerald-500 to-teal-500',
            image: '/images/projects/payflow.png',
        },
        {
            key: 'realestate',
            color: 'from-orange-500 to-red-500',
            image: '/images/projects/urbankey.png',
        },
        // Duplicate for scroll effect demo
        {
            key: 'ecommerce',
            title: 'LuxMart Global', // Override for demo variety
            color: 'from-blue-600 to-cyan-500',
            image: '/images/projects/luxmart.png',
        },
    ];

    return (
        <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-dark-bg">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 md:left-20 z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="heading-lg text-white mb-2"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/60 text-xl"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 md:gap-12 pl-[5vw] md:pl-[25vw]">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`${project.key}-${index}`} // Unique key for duplicates
                            index={index}
                            title={project.title || t(`items.${project.key}.title`)}
                            category={t(`items.${project.key}.category`)}
                            description={t(`items.${project.key}.description`)}
                            outcome={t(`items.${project.key}.outcome`)}
                            color={project.color}
                            image={project.image}
                        />
                    ))}
                    {/* Call to Action Card at the end */}
                    <div className="h-[450px] w-[350px] md:w-[450px] flex-shrink-0 flex items-center justify-center">
                        <a href="#contact" className="group flex flex-col items-center gap-4 text-white">
                            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                <span className="text-4xl">👋</span>
                            </div>
                            <span className="text-2xl font-bold group-hover:text-aesthetic-gold transition-colors">
                                View All Projects
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
