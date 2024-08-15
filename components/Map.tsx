'use client';

import L from 'leaflet';
import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

const Map = () => {
    const [coord] = useState([20.5937, 78.9629]);

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
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 41],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
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
