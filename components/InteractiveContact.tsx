'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const steps = ['name', 'email', 'type', 'details'];

export default function InteractiveContact() {
    const t = useTranslations('contact.interactive');
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: '',
        details: ''
    });

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Submit form
            console.log('Form Submitted', formData);
            setCurrentStep(prev => prev + 1); // Move to success state
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [steps[currentStep]]: e.target.value });
    };

    return (
        <section className="py-24 bg-dark-bg min-h-[600px] flex items-center justify-center">
            <div className="section-container max-w-2xl w-full">
                <div className="bg-dark-surface border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-1 bg-aesthetic-gold transition-all duration-500" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />

                    <AnimatePresence mode="wait">
                        {currentStep < steps.length ? (
                            <motion.div
                                key={steps[currentStep]}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="heading-md mb-6">{t(`steps.${steps[currentStep]}.question`)}</h3>

                                {steps[currentStep] === 'details' ? (
                                    <textarea
                                        className="w-full bg-transparent border-b-2 border-white/20 hover:border-white/50 focus:border-aesthetic-gold outline-none text-2xl md:text-3xl py-4 resize-none h-40 transition-colors"
                                        placeholder={t(`steps.${steps[currentStep]}.placeholder`)}
                                        value={formData.details}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                ) : steps[currentStep] === 'type' ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        {['branding', 'web', 'app', 'marketing'].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setFormData({ ...formData, type })}
                                                className={`p-6 rounded-xl border-2 text-left transition-all ${formData.type === type ? 'border-aesthetic-gold bg-aesthetic-gold/10' : 'border-white/10 hover:border-white/30'}`}
                                            >
                                                <span className="block text-xl font-bold mb-2">{t(`types.${type}`)}</span>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <input
                                        type={steps[currentStep] === 'email' ? 'email' : 'text'}
                                        className="w-full bg-transparent border-b-2 border-white/20 hover:border-white/50 focus:border-aesthetic-gold outline-none text-3xl md:text-4xl py-4 transition-colors"
                                        placeholder={t(`steps.${steps[currentStep]}.placeholder`)}
                                        value={formData[steps[currentStep] as keyof typeof formData]}
                                        onChange={handleChange}
                                        autoFocus
                                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                                    />
                                )}

                                <div className="mt-12 flex justify-end">
                                    <button
                                        onClick={handleNext}
                                        disabled={!formData[steps[currentStep] as keyof typeof formData] && steps[currentStep] !== 'type'}
                                        className="btn-primary flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {currentStep === steps.length - 1 ? t('finish') : t('next')}
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="text-6xl mb-6">🎉</div>
                                <h3 className="heading-md mb-4">{t('success.title')}</h3>
                                <p className="text-white/60 text-xl">{t('success.message')}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
