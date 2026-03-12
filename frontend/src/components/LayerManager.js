import React, { useState } from 'react';

const LayerManager = ({ onLayerToggle }) => {
  const [layers, setLayers] = useState([
    { id: 'antennas', name: 'Antennes', visible: true, color: '#1E3A8A' },
    { id: 'towers', name: 'Tours', visible: false, color: '#E63946' },
    { id: 'offices', name: 'Bureaux', visible: false, color: '#32CD32' },
    { id: 'future', name: 'Futurs sites', visible: false, color: '#FFA500' }
  ]);

  const toggleLayer = (layerId) => {
    const updated = layers.map(l => 
      l.id === layerId ? { ...l, visible: !l.visible } : l
    );
    setLayers(updated);
    onLayerToggle(updated);
  };

  return (
    <div className="layer-manager">
      <h4>🗺️ Couches de données</h4>
      {layers.map(layer => (
        <label key={layer.id} className="layer-item">
          <input 
            type="checkbox" 
            checked={layer.visible}
            onChange={() => toggleLayer(layer.id)}
          />
          <span style={{ color: layer.color }}>●</span>
          {layer.name}
        </label>
      ))}
    </div>
  );
};

export default LayerManager;