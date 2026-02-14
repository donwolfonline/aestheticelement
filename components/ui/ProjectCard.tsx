'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    outcome: string;
    color: string;
    index: number;
    image?: string;
}

import Image from 'next/image';

export default function ProjectCard({ title, category, description, outcome, color, index, image }: ProjectCardProps) {
    return (
        <div className="group relative h-[450px] w-[350px] md:w-[450px] flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-aesthetic-purple/20">
            {/* Project Image */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-dark-bg/40 mix-blend-multiply group-hover:bg-dark-bg/60 transition-colors duration-500" />
                </div>
            )}

            {/* Background Gradient Fallback (if no image) or Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${image ? 'mix-blend-overlay' : ''}`} />

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-90" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10">
                        {category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg">
                        {title}
                    </h3>

                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                        <p className="text-white/80 mt-4 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 drop-shadow-md">
                            {description}
                        </p>
                        <div className="mt-6 pt-6 border-t border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            <p className="text-aesthetic-gold font-bold flex items-center gap-2 drop-shadow-md">
                                <span className="text-lg">🏆</span> {outcome}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Hover Reveal Effect */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white z-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
    );
}
