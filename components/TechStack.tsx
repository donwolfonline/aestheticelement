'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const technologies = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'React', icon: '🔵' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Figma', icon: '🎨' },
    { name: 'AWS', icon: '☁️' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Python', icon: '🐍' },
    { name: 'Kubernetes', icon: '☸️' },
];

export default function TechStack() {
    const t = useTranslations('services.techStack');

    return (
        <section className="py-20 bg-dark-surface/30 overflow-hidden">
            <div className="section-container mb-12 text-center">
                <h2 className="heading-md text-white mb-4">{t('title')}</h2>
                <p className="text-white/60">{t('subtitle')}</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors"
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="text-lg font-medium text-white/80">{tech.name}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 px-4">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={`${tech.name}-duplicate-${index}`}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors"
                        >
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="text-lg font-medium text-white/80">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Add these keyframes to your globals.css if not present
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// @keyframes marquee2 {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(0); }
// }
