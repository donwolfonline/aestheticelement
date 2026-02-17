import CareerHero from '@/components/CareerHero';
import JobListing from '@/components/JobListing';
import CompanyValues from '@/components/CompanyValues';

export default function CareersPage() {
    return (
        <main className="min-h-screen pt-24 bg-dark-bg">
            <CareerHero />
            <CompanyValues />
            <JobListing />
        </main>
    );
}
