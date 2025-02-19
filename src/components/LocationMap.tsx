
import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

type Location = {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

const locations: Location[] = [
  {
    name: "Like Kar - Unidade 333",
    address: "Av. Bartolomeu de Carlos, 333 - Jardim Flor da Montanha, Guarulhos - SP",
    coordinates: {
      lat: -23.4445,
      lng: -46.5307
    }
  },
  {
    name: "Like Kar - Unidade 245",
    address: "Av. Bartolomeu de Carlos, 245 - Jardim Flor da Montanha, Guarulhos - SP",
    coordinates: {
      lat: -23.4447,
      lng: -46.5307
    }
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -23.4446,
  lng: -46.5307
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
  streetViewControl: true,
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#333333" }]
    }
  ]
};

const LocationMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<Location | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [markerIcon, setMarkerIcon] = useState<google.maps.Icon | undefined>(undefined);

  const onLoad = useCallback(() => {
    if (window.google && window.google.maps) {
      setMarkerIcon({
        url: "data:image/svg+xml;base64," + btoa(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFDE00"/>
            <circle cx="12" cy="12" r="10" fill="#FFDE00" stroke="white" stroke-width="2"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32),
        anchor: new window.google.maps.Point(16, 16)
      });
    }
    setIsLoaded(true);
  }, []);

  return (
    <LoadScript 
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      onLoad={onLoad}
    >
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
        >
          {isLoaded && locations.map((location, index) => (
            <Marker
              key={index}
              position={location.coordinates}
              icon={markerIcon}
              onClick={() => setSelectedPlace(location)}
            />
          ))}

          {selectedPlace && (
            <InfoWindow
              position={selectedPlace.coordinates}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div className="p-2 max-w-xs">
                <h3 className="font-bold text-gray-800 mb-1">{selectedPlace.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{selectedPlace.address}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    selectedPlace.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:text-blue-800"
                >
                  Como chegar
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default LocationMap;
