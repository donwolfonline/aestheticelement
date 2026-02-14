import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import CompanyTimeline from '@/components/CompanyTimeline';
import TeamGallery from '@/components/TeamGallery';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 bg-dark-bg">
            <About />
            <Philosophy />
            <CompanyTimeline />
            <TeamGallery />
        </main>
    );
}
