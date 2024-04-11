import React, { useState } from 'react';
import '../../App.css'; // Importing the CSS file for styling

function ToggleHeatingElement() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = async () => {
    try {
      const url = 'http://localhost:5003/http://localhost:5001/toggleHeatingElement';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Element: 'Heating Element', set_Value: !isOn }),
      });

      if (response.ok) {
        setIsOn(!isOn);
        console.log(`Heating Element ${isOn ? 'turned off' : 'turned on'}`);
      } else {
        console.error('Failed to toggle Heating Element');
      }
    } catch (error) {
      console.error('Error toggling Heating Element:', error);
    }
  };

  return (
    <div className='center-container'>
      <button className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div></div>
      </button>
      <div>Heating Element</div>
    </div>
  );
}

export default ToggleHeatingElement;
