
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
      style: 'mapbox://styles/mapbox/navigation-day-v1', // Estilo mais parecido com Google Maps
      center: [-46.5307, -23.4446] as [number, number],
      zoom: 15,
      pitch: 45, // Adiciona um ângulo de visão
      bearing: -17.6, // Rotação suave do mapa
    });

    // Adicionar marcadores para cada localização
    locations.forEach(location => {
      // Criar um elemento personalizado para o marcador
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundColor = '#ffde00';
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.cursor = 'pointer';

      // Criar popup com estilo personalizado
      const popup = new mapboxgl.Popup({
        offset: 25,
        className: 'custom-popup'
      })
        .setHTML(`
          <div style="padding: 10px;">
            <h3 style="font-weight: bold; margin-bottom: 5px; color: #333;">${location.name}</h3>
            <p style="color: #666; font-size: 14px; margin: 0;">${location.address}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}" 
               target="_blank" 
               style="color: #1a73e8; text-decoration: none; font-size: 12px; display: block; margin-top: 8px;">
              Ver no Google Maps
            </a>
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Adicionar controles de navegação com estilo personalizado
    map.current.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    }), 'top-right');

    // Adicionar controle de escala
    map.current.addControl(new mapboxgl.ScaleControl({
      maxWidth: 150,
      unit: 'metric'
    }), 'bottom-right');

    // Adicionar efeito de sombra nas construções para dar mais profundidade
    map.current.on('style.load', () => {
      if (map.current) {
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
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.6
          }
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default LocationMap;
