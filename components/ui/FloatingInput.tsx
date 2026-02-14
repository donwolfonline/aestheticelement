'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, ChangeEvent } from 'react';

interface FloatingInputProps {
    label: string;
    name?: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextArea?: boolean;
}

export default function FloatingInput({ label, name, type = "text", value, onChange, isTextArea = false }: FloatingInputProps) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative mb-6">
            <motion.label
                initial={{ y: 0, scale: 1, color: "rgba(255,255,255,0.5)" }}
                animate={{
                    y: focused || value ? -28 : 12,
                    scale: focused || value ? 0.85 : 1,
                    color: focused ? "#FBBF24" : "rgba(255,255,255,0.5)",
                    originX: 0
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-0 pointer-events-none"
            >
                {label}
            </motion.label>

            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-aesthetic-gold/50 transition-colors min-h-[150px] resize-none"
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-aesthetic-gold/50 transition-colors"
                />
            )}

            {/* Animated Bottom Border */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-aesthetic-gold origin-left rounded-b-xl"
            />
        </div>
    );
}
