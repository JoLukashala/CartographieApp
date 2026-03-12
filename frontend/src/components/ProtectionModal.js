import React, { useState } from 'react';

const ProtectionModal = ({ onAuthorize, attempts }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthorize(password);
  };

  return (
    <div className="protection-modal-overlay">
      <div className="protection-modal">
        <h2>🔒 Accès Protégé</h2>
        <p>Cette application est une démo pour le client.</p>
        <p className="warning">Veuillez entrer le mot de passe pour continuer:</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            autoFocus
          />
          
          <div className="attempts">
            Tentatives: {attempts}/3
          </div>
          
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">
              Accéder
            </button>
          </div>
        </form>
        
        <p className="demo-note">
          ⏱️ La démo expire dans 2 heures<br/>
          🔢 Limité à 5 utilisations
        </p>
      </div>
    </div>
  );
};

export default ProtectionModal;