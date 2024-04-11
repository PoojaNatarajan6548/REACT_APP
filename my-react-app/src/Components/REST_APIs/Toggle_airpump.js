import React, { useState } from 'react';
import '../../App.css'; // Importing the CSS file for styling

function AirPumpToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = async () => {
    try {
      const url = 'http://localhost:5003/http://localhost:5001/toggleAirPump';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Element: 'AirPump', set_Value: !isOn }),
      });

      if (response.ok) {
        setIsOn(!isOn);
        console.log(`Air Pump ${isOn ? 'turned off' : 'turned on'}`);
      } else {
        console.error('Failed to toggle Air Pump');
      }
    } catch (error) {
      console.error('Error toggling Air Pump:', error);
    }
  };

  return (
    <div className='center-container'>
      <button className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div></div>
      </button>
      <div>Air Pump</div>
    </div>
  );
}

export default AirPumpToggle;
