import PortfolioEnhanced from '@/components/PortfolioEnhanced';
import PortfolioStats from '@/components/PortfolioStats';
import Testimonials from '@/components/Testimonials';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen">
            <PortfolioEnhanced />
            <PortfolioStats />
            <Testimonials />
        </main>
    );
}
