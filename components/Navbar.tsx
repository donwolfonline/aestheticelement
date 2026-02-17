'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const t = useTranslations('nav');
    const locale = useLocale();
    const pathname = usePathname();

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname, locale]);

    const navLinks = [
        { key: 'home', href: `/${locale}` },
        { key: 'services', href: `/${locale}/services` },
        { key: 'portfolio', href: `/${locale}/portfolio` },
        { key: 'about', href: `/${locale}/about` },
        { key: 'careers', href: `/${locale}/careers` },
        { key: 'contact', href: `/${locale}/contact` },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className={`w-[95%] md:w-[92%] max-w-[1600px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between rounded-full border border-white/10 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'glass shadow-lg shadow-aesthetic-purple/10' : 'bg-dark-surface/50 backdrop-blur-md'
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

                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="pl-4 md:border-l border-white/10">
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-50"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white block origin-center transition-transform"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-full h-0.5 bg-white block transition-opacity"
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-white block origin-center transition-transform"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl md:hidden pt-32 pb-10 px-6 flex flex-col items-center justify-start overflow-y-auto"
                    >
                        <motion.div
                            className="w-full max-w-md space-y-4"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.key}
                                    variants={{
                                        open: { y: 0, opacity: 1 },
                                        closed: { y: 20, opacity: 0 }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full py-4 text-center text-2xl font-bold text-white hover:text-aesthetic-teal transition-colors border-b border-white/5"
                                    >
                                        {t(link.key)}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 text-white/50 text-sm"
                        >
                            © 2024 Aesthetic Element
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
