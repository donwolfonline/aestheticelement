import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const cairo = Cairo({
    subsets: ['arabic'],
    variable: '--font-cairo',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'Aesthetic Element | عنصر الجمال',
    description:
        'Digital Marketing, Software Engineering & Mobile Apps Development in Saudi Arabia',
    keywords:
        'digital marketing, software engineering, mobile apps, Saudi Arabia, Riyadh',
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({
    children,
    params,
}: Props) {
    const { locale } = await params;
    const messages = await getMessages();
    const isRTL = locale === 'ar';

    return (
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
            <body
                className={`${isRTL ? cairo.className : inter.className} antialiased`}
                suppressHydrationWarning
            >
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
