'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useTranslations } from 'next-intl';

// Fix for default marker icon in Next.js
const buffer = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function Map() {
    const t = useTranslations('contact');
    const riyadhCoords: [number, number] = [24.7136, 46.6753]; // Riyadh coordinates

    return (
        <MapContainer
            center={riyadhCoords}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
            style={{ background: '#111' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={riyadhCoords} icon={buffer}>
                <Popup className="text-black">
                    {t('locations.riyadh')}<br />
                    Kingdom Centre, Floor 24
                </Popup>
            </Marker>
        </MapContainer>
    );
}
