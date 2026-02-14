import InteractiveContact from '@/components/InteractiveContact';
import LocationVisual from '@/components/LocationVisual';
import EngagementTimeline from '@/components/EngagementTimeline';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 bg-dark-bg">
            <InteractiveContact />
            <EngagementTimeline />
            <LocationVisual />
        </main>
    );
}
