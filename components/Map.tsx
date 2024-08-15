'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

// Use Leaflet CDN URLs for marker icons
const markerIconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const markerShadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

const Map = () => {
    const [coord] = useState<[number, number]>([20.5937, 78.9629]);

    const markers = [
        { position: [28.6139, 77.209], label: "New Delhi" },
        { position: [19.076, 72.8777], label: "Mumbai" },
        { position: [13.0827, 80.2707], label: "Chennai" },
        { position: [22.5726, 88.3639], label: "Kolkata" },
        { position: [12.9716, 77.5946], label: "Bangalore" },
    ];

    return (
        <MapContainer
            style={{ height: '100vh', width: '100vw' }}
            center={coord}
            zoom={5}
            scrollWheelZoom={true}  
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    icon={
                        new L.Icon({
                            iconUrl: markerIconUrl,
                            iconRetinaUrl: markerIconUrl,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: markerShadowUrl,
                            shadowSize: [41, 41],
                        })
                    }
                    position={marker.position}
                >
                    <Popup>{marker.label}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
