import React from 'react';
import '../../../src/App.css'; // Importing the CSS file for styling

function O2Form({ avgO2 }) {
  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>O2 Range [21% to 40%)</h3>
        <h4>Ideal O2 for Spirulina: 20% to 40% saturation</h4>
        {/* Display the lastO2Value */}
        <h4>Current O2 for Spirulina: {avgO2}</h4>
      </div>
    </div>
  );
}

export default O2Form;
