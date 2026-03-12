import React from 'react';

const DeleteModal = ({ count, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>🗑️ Confirmer la suppression</h3>
        <p>Êtes-vous sûr de vouloir supprimer <strong>{count}</strong> site(s) ?</p>
        <p className="warning">Cette action est irréversible.</p>
        
        <div className="modal-actions">
          <button className="btn btn-danger" onClick={onConfirm}>
            Oui, supprimer
          </button>
          <button className="btn btn-outline" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;