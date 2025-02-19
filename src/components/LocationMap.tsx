
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Definindo o tipo correto para as coordenadas
type Location = {
  name: string;
  address: string;
  coordinates: [number, number]; // Usando tuple type para garantir exatamente 2 números
};

// Localizações da Like Kar
const locations: Location[] = [
  {
    name: "Like Kar - Unidade 333",
    address: "Av. Bartolomeu de Carlos, 333 - Jardim Flor da Montanha, Guarulhos - SP",
    coordinates: [-46.5307, -23.4445] as [number, number]
  },
  {
    name: "Like Kar - Unidade 245",
    address: "Av. Bartolomeu de Carlos, 245 - Jardim Flor da Montanha, Guarulhos - SP",
    coordinates: [-46.5307, -23.4447] as [number, number]
  }
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Inicializar mapa
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Substitua pelo seu token do Mapbox
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.5307, -23.4446] as [number, number], // Usando type assertion aqui também
      zoom: 15
    });

    // Adicionar marcadores para cada localização
    locations.forEach(location => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <strong>${location.name}</strong><br>
          ${location.address}
        `);

      new mapboxgl.Marker({ color: '#ffde00' })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Adicionar controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default LocationMap;
