import '../../../src/App.css'; // Importing the CSS file for styling

function PHForm({ avgpH }) {
  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>pH Range (8 to 10 pH)</h3>
        <h4>Ideal pH for Spirulina : 8 to 10 pH</h4>
        <h4>Current pH for Spirulina : {avgpH} </h4>
      </div>
    </div>
  );
}

export default PHForm;
