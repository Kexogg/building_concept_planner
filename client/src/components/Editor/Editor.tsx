import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

const Editor = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-74.5, 40],
                zoom: 9
            });

            return () => {
                map.remove();
            };
        }
    }, []);

    return (
        <div className="container mx-auto text-sm h-full max-h-[75vh]">
            <div ref={mapContainerRef} className="map-container" style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default Editor;