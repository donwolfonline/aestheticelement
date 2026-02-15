'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const t = useTranslations('nav');
    const locale = useLocale();

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    const navLinks = [
        { key: 'home', href: `/${locale}` },
        { key: 'services', href: `/${locale}/services` },
        { key: 'portfolio', href: `/${locale}/portfolio` },
        { key: 'about', href: `/${locale}/about` },
        { key: 'careers', href: `/${locale}/careers` },
        { key: 'contact', href: `/${locale}/contact` },
    ];

    return (
        <motion.nav
            className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className={`w-[95%] md:w-[92%] max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between rounded-full border border-white/10 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-aesthetic-purple/10' : 'bg-dark-surface/50 backdrop-blur-md'
                    }`}
            >
                {/* Logo */}
                <Link href={`/${locale}`}>
                    <motion.div
                        className="relative h-12 w-32 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={locale === 'ar' ? '/images/logo-ar.png' : '/images/logo-en.png'}
                            alt="Aesthetic Element"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 relative"
                        >
                            {t(link.key)}
                        </Link>
                    ))}
                </div>

                {/* Language Switcher */}
                <div className="pl-4 border-l border-white/10">
                    <LanguageSwitcher />
                </div>
            </div>
        </motion.nav>
    );
}
