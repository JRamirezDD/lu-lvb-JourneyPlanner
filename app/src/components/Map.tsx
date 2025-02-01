'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibS1iZXJlbmdlciIsImEiOiJjbTZpYnQ2eTUwNjZ4Mm9zNTl4M2wwd2hmIn0.dypp0rb10-6yuJu1YqOjyA";

    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [12.37701425222998, 51.3406130352673],
      zoom: 9,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '700px' }} />;
};

export default Map;
