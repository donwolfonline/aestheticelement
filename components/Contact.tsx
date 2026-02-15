'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import FloatingInput from './ui/FloatingInput';

export default function Contact() {
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section-container bg-dark-bg relative overflow-hidden">
            {/* Map Background Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center pointer-events-none mix-blend-overlay"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="heading-lg text-gradient">{t('title')}</h2>
                <p className="text-xl text-white/70">{t('subtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24 relative z-10">
                {/* Contact Form */}
                <div className="glass p-8 rounded-2xl min-h-[500px] flex items-center justify-center relative overflow-hidden">
                    {isSuccess ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <div className="w-24 h-24 bg-aesthetic-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-aesthetic-teal/50">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                    className="text-4xl"
                                >
                                    📡
                                </motion.div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('form.success')}</h3>
                            <p className="text-white/60">We will establish a connection shortly.</p>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            onSubmit={handleSubmit}
                            className="w-full space-y-6"
                        >
                            <FloatingInput
                                label={t('form.name')}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <FloatingInput
                                label={t('form.email')}
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <FloatingInput
                                label={t('form.phone')}
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <FloatingInput
                                label={t('form.message')}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                isTextArea
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full group relative overflow-hidden"
                            >
                                <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                    {t('form.submit')}
                                </span>
                                {isSubmitting && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-aesthetic-purple/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </motion.form>
                    )}
                </div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('info.labels.email')}</h3>
                            <a href={`mailto:${t('info.email')}`} className="text-white/60 hover:text-aesthetic-gold transition-colors">
                                {t('info.email')}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('info.labels.phone')}</h3>
                            <a href={`tel:${t('info.phone')}`} className="text-white/60 hover:text-aesthetic-gold transition-colors" dir="ltr">
                                {t('info.phone')}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('info.labels.address')}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {t('info.address')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
                <h3 className="heading-md text-white text-center mb-12">{t('faq.title')}</h3>
                <div className="space-y-6">
                    {['q1', 'q2'].map((q, index) => (
                        <motion.div
                            key={q}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass p-6 rounded-xl"
                        >
                            <h4 className="text-lg font-bold text-white mb-2">
                                {t(`faq.${q}`)}
                            </h4>
                            <p className="text-white/70">
                                {t(`faq.a${index + 1}`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
