import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../src/App.css'; // Importing the CSS file for styling

function TemperatureForm({ avgTemperature }) {
  // State to manage the temperature input
  const [temperature, setTemperature] = useState(0);

  // Function to handle changes in the temperature input field
  const handleTemperatureChange = (event) => {
    const value = parseFloat(event.target.value);
    setTemperature(isNaN(value) ? 0 : value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send POST request to the API endpoint
      const response = await fetch('http://localhost:5003/http://localhost:5001/setTemperature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ temperature }), // Send temperature data in JSON format
      });

      if (!response.ok) {
        throw new Error('Failed to submit temperature data');
      }

      // Show success message as toast
      toast.success('Temperature data submitted successfully', {
        position: "top-center"
      });

      // Clear the input field after 2 seconds
      setTimeout(() => {
        setTemperature(0);
      }, 2000);
    } catch (error) {
      // Show error message as toast
      toast.error('Failed to submit temperature data', {
        position: "top-center"
      });
      console.error('Error submitting temperature data:', error);
    }
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    // Clear input if the current value is 0
    if (temperature === 0) {
      setTemperature('');
    }
  };

  return (
    <div className="status-container">
      <div className="status-box1">
        <h3>Temperature Range (81 to 98 °F)</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Temperature:
            <input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
              onFocus={handleInputFocus}
              min={81}
              max={98}
              step="0.01"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h4>Ideal Temperature for Spirulina : 95 to 98 °F</h4>
        <h4>Current Temperature for Spirulina : {avgTemperature ? avgTemperature.toFixed(2) : 'Loading...'} °F</h4> 
      </div>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default TemperatureForm;
