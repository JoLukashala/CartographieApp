import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ImportData = ({ onImport, onCancel }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      setPreview(data.slice(0, 5));
    };
    reader.readAsBinaryString(file);
  };

  const handleImport = () => {
    setLoading(true);
    // Process and import data
    setTimeout(() => {
      onImport();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="import-container">
      <h2>📥 Importer des données Excel</h2>
      <input 
        type="file" 
        accept=".xlsx, .xls, .csv" 
        onChange={handleFileUpload}
      />
      {preview.length > 0 && (
        <div className="preview">
          <h4>Aperçu:</h4>
          <pre>{JSON.stringify(preview, null, 2)}</pre>
          <button onClick={handleImport} disabled={loading}>
            {loading ? 'Importation...' : 'Confirmer import'}
          </button>
        </div>
      )}
      <button className="btn btn-outline" onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default ImportData;