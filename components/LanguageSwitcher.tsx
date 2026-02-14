'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        const path = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(path);
    };

    return (
        <motion.button
            onClick={toggleLocale}
            className="glass px-4 py-2 rounded-full text-sm font-semibold hover:glass-light transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span>{locale === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
            <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
        </motion.button>
    );
}
