import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function HomePage() {
    return (
        <main className="relative">
            <InteractiveBackground />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </main>
    );
}
