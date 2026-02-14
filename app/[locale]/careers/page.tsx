import CareerHero from '@/components/CareerHero';
import JobListing from '@/components/JobListing';

export default function CareersPage() {
    return (
        <main className="min-h-screen pt-24 bg-dark-bg">
            <CareerHero />
            <JobListing />
        </main>
    );
}
