import React from 'react';
import '../../../src/App.css'; // Importing the CSS file for styling

function pHForm({ onClose }) {
  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>O2 Range (21 to 50)</h3>
        <h4>Ideal O2 for Spirulina: 25</h4>
        <h4>Current O2 for Spirulina: 24</h4>
      </div>
    </div>
  );
}

export default pHForm;
