import Services from '@/components/Services';
import ProcessFlow from '@/components/ProcessFlow';
import TechStack from '@/components/TechStack';
import DetailedServices from '@/components/DetailedServices';

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-24 bg-dark-bg">
            <Services />
            <DetailedServices />
            <ProcessFlow />
            <TechStack />
        </main>
    );
}
