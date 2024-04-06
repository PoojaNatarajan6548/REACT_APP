import '../../../src/App.css'; // Importing the CSS file for styling

function O2Form({ onClose }) {
  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>pH Range (8 to 11)</h3>
        <h4>Ideal pH for Spirulina : 9</h4>
        <h4>Current pH for Spirulina : 9</h4>
      </div>
    </div>
  );
}

export default O2Form;
