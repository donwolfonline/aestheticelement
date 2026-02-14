'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('footer');
    const navT = useTranslations('nav');
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { key: 'home', href: `/${locale}/home` },
        { key: 'services', href: `/${locale}/services` },
        { key: 'portfolio', href: `/${locale}/portfolio` },
        { key: 'about', href: `/${locale}/about` },
        { key: 'contact', href: `/${locale}/contact` },
    ];

    return (
        <footer className="pt-12 pb-8 px-4">
            <div className="w-[95%] md:w-[92%] max-w-[1600px] mx-auto glass rounded-[3rem] px-8 md:px-12 lg:px-16 py-12 border border-white/10">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <div className="md:pr-8">
                        <div className="relative h-12 w-32 mb-6 opacity-80 hover:opacity-100 transition-opacity">
                            <Image
                                src={locale === 'ar' ? '/images/logo-ar.png' : '/images/logo-en.png'}
                                alt="Aesthetic Element"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white/60 leading-relaxed">{t('tagline')}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 relative inline-block">
                            {t('quickLinks')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-aesthetic-purple rounded-full"></span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 text-sm border border-white/5 hover:border-white/20"
                                >
                                    {navT(link.key)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 relative inline-block">
                            {t('followUs')}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-aesthetic-gold rounded-full"></span>
                        </h4>
                        <div className="flex gap-4">
                            {['🔗', '📸', '🐦'].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                                >
                                    <span className="text-xl group-hover:animate-bounce">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    © {currentYear} Aesthetic Element. {t('rights')}.
                </div>
            </div>
        </footer>
    );
}
