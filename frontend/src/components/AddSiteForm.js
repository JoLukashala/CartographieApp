import React, { useState } from 'react';

const AddSiteForm = ({ onSubmit, onCancel, operators, provinces }) => {
  const [formData, setFormData] = useState({
    sap_id: '',
    site_name: '',
    operator: '',
    province: '',
    latitude: '',
    longitude: '',
    type: 'Normal Site',
    category: 'Urban',
    infrastructure: 'Greenfield',
    has_tower: false,
    height: '',
    on_air_date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.site_name || !formData.operator || !formData.province || !formData.latitude || !formData.longitude) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    onSubmit({
      ...formData,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      height: formData.height ? parseFloat(formData.height) : null
    });

    // Reset form
    setFormData({
      sap_id: '',
      site_name: '',
      operator: '',
      province: '',
      latitude: '',
      longitude: '',
      type: 'Normal Site',
      category: 'Urban',
      infrastructure: 'Greenfield',
      has_tower: false,
      height: '',
      on_air_date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="form-container">
      <h2>➕ Ajouter un nouveau site</h2>
      
      <form onSubmit={handleSubmit} className="site-form">
        <div className="form-row">
          <div className="form-group">
            <label>SAP ID <span className="optional">(optionnel)</span></label>
            <input
              type="text"
              name="sap_id"
              value={formData.sap_id}
              onChange={handleChange}
              placeholder="Ex: CDKIN12345"
            />
          </div>

          <div className="form-group">
            <label>Nom du site <span className="required">*</span></label>
            <input
              type="text"
              name="site_name"
              value={formData.site_name}
              onChange={handleChange}
              required
              placeholder="Ex: Aeroport_KIN"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Opérateur <span className="required">*</span></label>
            <select
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner un opérateur</option>
              {operators.map(op => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Province <span className="required">*</span></label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner une province</option>
              {provinces.map(prov => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Latitude <span className="required">*</span></label>
            <input
              type="number"
              step="any"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              required
              placeholder="Ex: -4.36681"
            />
          </div>

          <div className="form-group">
            <label>Longitude <span className="required">*</span></label>
            <input
              type="number"
              step="any"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              required
              placeholder="Ex: 15.35075"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Normal Site">Normal Site</option>
              <option value="RCS">RCS</option>
            </select>
          </div>

          <div className="form-group">
            <label>Catégorie</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Urban">Urbain</option>
              <option value="Suburban">Suburbain</option>
              <option value="Rural">Rural</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Infrastructure</label>
            <select name="infrastructure" value={formData.infrastructure} onChange={handleChange}>
              <option value="Greenfield">Greenfield</option>
              <option value="Rooftop">Rooftop</option>
              <option value="Water Tank">Water Tank</option>
            </select>
          </div>

          <div className="form-group">
            <label>Hauteur (mètres)</label>
            <input
              type="number"
              step="0.1"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Ex: 36"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="has_tower"
                checked={formData.has_tower}
                onChange={handleChange}
              />
              Possède une tour
            </label>
          </div>

          <div className="form-group">
            <label>Date de mise en service</label>
            <input
              type="date"
              name="on_air_date"
              value={formData.on_air_date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Enregistrer</button>
          <button type="button" className="btn btn-outline" onClick={onCancel}>Annuler</button>
        </div>
      </form>
    </div>
  );
};

export default AddSiteForm;