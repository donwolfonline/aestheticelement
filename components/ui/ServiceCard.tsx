'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    features: string[];
    index: number;
    gradient: string;
}

export default function ServiceCard({ title, description, icon, features, index, gradient }: ServiceCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full"
        >
            <div
                className="relative h-full w-full rounded-2xl bg-white/5 border border-white/10 p-8 shadow-xl backdrop-blur-md group transition-colors duration-300 hover:bg-white/10"
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
            >
                {/* Floating Glow */}
                <div
                    className={`absolute -inset-2 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100 -z-10 bg-gradient-to-br ${gradient}`}
                />

                <div className="flex flex-col h-full" style={{ transform: "translateZ(50px)" }}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-0.5 mb-6 shadow-lg`}>
                        <div className="w-full h-full bg-black/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-3xl">{icon}</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-white/70 mb-8 leading-relaxed">{description}</p>

                    <ul className="space-y-3 mt-auto">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-white/60">
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mr-3`} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
