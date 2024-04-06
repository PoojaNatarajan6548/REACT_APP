import React, { useState } from 'react';
import '../../../src/App.css'; // Importing the CSS file for styling

function TemperatureForm({ onClose, sendTemperatureFromForm }) {
  // State to manage the temperature input
  const [temperature, setTemperature] = useState(0);

  // Function to handle changes in the temperature input field
  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    sendTemperatureFromForm(temperature);
    // performing any action with the temperature value, such as sending it to an API or processing it further
    console.log('Temperature submitted:', temperature);
    // Clear the input field after submission
    setTemperature('');
  };

  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>Temperature Range (0 to 30 degrees)</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Temperature:
            <input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
              min={0}
              max={30}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h4>Ideal Temperature for Spirulina : 25 degrees</h4>
        <h4>Current Temperature for Spirulina : 19 degrees</h4>
      </div>
    </div>
  );
}

export default TemperatureForm;
