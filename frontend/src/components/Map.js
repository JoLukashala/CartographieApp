import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Different colored markers for different operators
const getMarkerIcon = (operator, isSelected) => {
  const colors = {
    'Vodacom': '#E63946',
    'Airtel': '#1E3A8A',
    'Orange': '#FFA500',
    'Africell': '#32CD32',
    'Helios': '#800080',
    'East-Castle': '#FFD700',
    'TOA': '#00CED1'
  };
  
  const color = colors[operator] || '#3388ff';
  const borderColor = isSelected ? '#FF0000' : 'white';
  const size = isSelected ? 28 : 24;
  
  return L.divIcon({
    html: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="${color}" stroke="${borderColor}" stroke-width="2"/>
    </svg>`,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
};

const Map = ({ sites, selectedSites, onSiteSelect }) => {
  const position = [-2.5, 23.5]; // Center of DRC
  
  return (
    <MapContainer 
      center={position} 
      zoom={6} 
      style={{ height: '600px', width: '100%', borderRadius: '8px' }}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      {sites.map((site) => {
        const isSelected = selectedSites.includes(site.id);
        return (
          <Marker 
            key={site.id} 
            position={[site.latitude, site.longitude]}
            icon={getMarkerIcon(site.operator, isSelected)}
            eventHandlers={{
              click: () => onSiteSelect(site.id)
            }}
          >
            <Popup>
              <div className="site-popup">
                <h3>{site.site_name}</h3>
                <p><strong>SAP ID:</strong> {site.sap_id}</p>
                <p><strong>Opérateur:</strong> {site.operator}</p>
                <p><strong>Province:</strong> {site.province}</p>
                <p><strong>Type:</strong> {site.type}</p>
                <p><strong>Catégorie:</strong> {site.category}</p>
                <p><strong>Infrastructure:</strong> {site.infrastructure}</p>
                <p><strong>Tour:</strong> {site.has_tower ? 'Oui' : 'Non'}</p>
                {site.height && <p><strong>Hauteur:</strong> {site.height}m</p>}
                <p><strong>Date:</strong> {site.on_air_date}</p>
                <button 
                  className="btn btn-small"
                  onClick={() => onSiteSelect(site.id)}
                >
                  {isSelected ? 'Désélectionner' : 'Sélectionner'}
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;