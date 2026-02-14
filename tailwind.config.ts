import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'aesthetic-purple': {
                    DEFAULT: '#8B5CF6',
                    light: '#A78BFA',
                    dark: '#6D28D9',
                },
                'aesthetic-teal': {
                    DEFAULT: '#14B8A6',
                    light: '#2DD4BF',
                    dark: '#0D9488',
                },
                'aesthetic-gold': {
                    DEFAULT: '#F59E0B',
                    light: '#FBBF24',
                    dark: '#D97706',
                },
            },
            backgroundImage: {
                'gradient-aesthetic': 'linear-gradient(135deg, #8B5CF6 0%, #14B8A6 50%, #F59E0B 100%)',
                'gradient-purple-teal': 'linear-gradient(to right, #8B5CF6, #14B8A6)',
            },
            animation: {
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow': {
                    '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
                    '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(20, 184, 166, 0.6)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
