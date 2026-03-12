import React from 'react';

const SiteTable = ({ sites, selectedSites, onSiteSelect, onSelectAll }) => {
  return (
    <div className="site-table-container">
      <div className="table-header">
        <h3>📋 Liste des Sites</h3>
        <button className="btn btn-outline" onClick={onSelectAll}>
          {selectedSites.length === sites.length ? 'Tout désélectionner' : 'Tout sélectionner'}
        </button>
      </div>
      
      <div className="table-responsive">
        <table className="site-table">
          <thead>
            <tr>
              <th>Sélectionner</th>
              <th>SAP ID</th>
              <th>Nom du site</th>
              <th>Opérateur</th>
              <th>Province</th>
              <th>Type</th>
              <th>Catégorie</th>
              <th>Infrastructure</th>
              <th>Tour</th>
              <th>Hauteur</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sites.map(site => (
              <tr key={site.id} className={selectedSites.includes(site.id) ? 'selected-row' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedSites.includes(site.id)}
                    onChange={() => onSiteSelect(site.id)}
                  />
                </td>
                <td>{site.sap_id}</td>
                <td>{site.site_name}</td>
                <td>{site.operator}</td>
                <td>{site.province}</td>
                <td>{site.type}</td>
                <td>{site.category}</td>
                <td>{site.infrastructure}</td>
                <td>{site.has_tower ? 'Oui' : 'Non'}</td>
                <td>{site.height ? `${site.height}m` : '-'}</td>
                <td>{site.on_air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiteTable;