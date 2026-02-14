'use client';

import { motion } from 'framer-motion';

interface InteractiveStoryProps {
    title: string;
    content: string;
}

export default function InteractiveStory({ title, content }: InteractiveStoryProps) {
    const words = content.split(" ");

    return (
        <div className="relative glass p-10 rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-aesthetic-purple/20 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-aesthetic-gold/10 blur-3xl rounded-full transform -translate-x-10 translate-y-10 group-hover:scale-150 transition-transform duration-700" />

            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-6 relative z-10"
            >
                {title}
            </motion.h3>

            <div className="relative z-10 leading-relaxed text-lg text-white/80">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                        className="inline-block mr-1.5"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-aesthetic w-full origin-left"
            />
        </div>
    );
}
