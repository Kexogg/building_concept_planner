import {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

const Editor = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const [polygonPoints, setPolygonPoints] = useState<mapboxgl.LngLat[]>([]);
    const [polygon, setPolygon] = useState<mapboxgl.GeoJSONFeature | null>(null);

    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [60.65, 56.84],
                zoom: 15,
                dragRotate: true
            });
            if (mapRef.current) {

                mapRef.current.on('load', () => {
                    if (!mapRef.current!.getSource('composite')) {
                        mapRef.current!.addSource('composite', {
                            type: 'vector',
                            url: 'mapbox://mapbox.mapbox-streets-v12',
                        });
                    }

                    /*if (!map.current.getLayer('2d-buildings')) {
                        map.current.addLayer({
                            'id': '2d-buildings',
                            'source': 'composite',
                            'source-layer': 'building',
                            'filter': [  "all",
                                [
                                    "match",
                                    ["id"],
                                    [18033924],
                                    true,
                                    false
                                ]],
                            'type': 'fill',
                            'minzoom': 15,
                            'paint': {
                                'fill-color': '#aaa',
                                'fill-opacity': 0.6
                            }
                        });
                    }*/

                    /* if (!map.current.getLayer('3d-buildings')) {
                         map.current.addLayer({
                             'id': '3d-buildings',
                             'source': 'composite',
                             'source-layer': 'building',
                             'filter': ['==', 'extrude', 'true'],
                             'type': 'fill-extrusion',
                             'minzoom': 15,
                             'paint': {
                                 'fill-extrusion-color': '#aaa',
                                 'fill-extrusion-height': [
                                     'interpolate',
                                     ['linear'],
                                     ['zoom'],
                                     15,
                                     0,
                                     15.05,
                                     ['get', 'height']
                                 ],
                                 'fill-extrusion-base': [
                                     'interpolate',
                                     ['linear'],
                                     ['zoom'],
                                     15,
                                     0,
                                     15.05,
                                     ['get', 'min_height']
                                 ],
                                 'fill-extrusion-opacity': 0.6
                             }
                         });
                     }*/


                });

                mapRef.current.on('click', (event) => {
                    const features = mapRef.current!.queryRenderedFeatures(event.point, {
                        layers: ['building']
                    });

                    if (features.length) {
                        console.log("Features", features);

                    } else {
                        const {lng, lat} = event.lngLat;
                        setPolygonPoints((prevPoints) => [...prevPoints, new mapboxgl.LngLat(lng, lat)]);

                        console.log(`Longitude: ${lng}, Latitude: ${lat}`);

                        new mapboxgl.Marker({color: 'red'})
                            .setLngLat([lng, lat])
                            .addTo(mapRef.current!);
                    }
                });

                return () => {
                    mapRef.current!.remove();
                };
            }
        }
    }, []);


    useEffect(() => {
        if (polygonPoints.length > 2) {
            if (polygon) {
                const source = mapRef.current!.getSource('polygon') as unknown as mapboxgl.GeoJSONSource;
                if (source) source.setData({
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [[...polygonPoints.map(point => [point.lng, point.lat]), [polygonPoints[0].lng, polygonPoints[0].lat]]]
                    }
                });
            } else {
                mapRef.current!.addSource('polygon', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Polygon',
                            coordinates: [[...polygonPoints.map(point => [point.lng, point.lat]), [polygonPoints[0].lng, polygonPoints[0].lat]]]
                        }
                    }
                });

                mapRef.current!.addLayer({
                    id: 'polygon',
                    type: 'fill',
                    source: 'polygon',
                    layout: {},
                    paint: {
                        'fill-color': '#888',
                        'fill-opacity': 0.4
                    }
                });

                setPolygon(mapRef.current!.getSource('polygon') as unknown as mapboxgl.GeoJSONFeature);
            }
        }
    }, [polygon, polygonPoints]);

    return (
        <div className="container mx-auto text-center h-[75vh] max-h-[75vh]">
            <div ref={mapContainerRef} className="map-container" style={{width: '100%', height: '100%'}}/>
        </div>
    );
};

export default Editor;