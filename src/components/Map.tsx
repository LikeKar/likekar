
import { useEffect, useRef } from 'react';

// Interface para as props do componente
interface MapProps {
  className?: string;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

const Map = ({ className = "" }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para carregar o mapa
    const initMap = () => {
      if (!mapRef.current) return;

      const location = { lat: -23.591002, lng: -46.569402 }; // Coordenadas da Av. Bartolomeu de Carlos, 333
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#000000" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 2 }],
          },
        ],
      });

      // Adiciona um marcador na localização
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Like Kar",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png", // Marcador amarelo para combinar com a identidade visual
        },
      });
    };

    // Carrega a API do Google Maps com a chave fornecida
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDMhG_DptDwtfsUt2zbDP1Efb1L4g5_qYw`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-[400px] rounded-lg shadow-lg ${className}`}
    />
  );
};

export default Map;
