import React, { useState } from 'react';
import '.././App.css'; // Importing the CSS file for styling
import TemperatureForm from '../Components/sensors/TempForm'; // Importing the TemperatureForm component
import YoghLogo from '../Assets/images/YoghLogo.png'; // Importing the YoghLogo image
import { Line } from 'rc-progress';
import O2Form from '../Components/sensors/O2Form'; 
import PHForm from '../Components/sensors/pHForm';
import Footer from '../Components/Footer';

function NewPagetry() {
  const [showTempForm, setShowTempForm] = useState(false); // State to track the visibility of the form
  const [showpHForm, setShowpHForm] = useState(false); // State to track the visibility of the form
  const [showO2Form, setShowO2Form] = useState(false); // State to track the visibility of the form
  const [progress, setProgress] = useState(0);

  function handleDataFromTemperatureForm(data) {
    setProgress(data);
  }

  const handleStatusBoxClick = (sensor) => {
    if (sensor === "Temperature") {
      setShowTempForm(true);
      setShowO2Form(false);
      setShowpHForm(false);
    } else if (sensor === "pH") {
      setShowTempForm(false);
      setShowO2Form(false);
      setShowpHForm(true);
    } else if (sensor === "O2") {
      setShowTempForm(false);
      setShowO2Form(true);
      setShowpHForm(false);
    }
  };

  const handleCloseButtonClick = (sensor) => {
    if (sensor === "Temperature") {
      setShowTempForm(false);
    } else if (sensor === "pH") {
      setShowpHForm(false);
    } else if (sensor === "O2") {
      setShowO2Form(false);
    }
  };

  return (
    <div>
      <header className="header">
        {/* Logo at the top left */}
        <img src={YoghLogo} alt="Yogh Logo" className="logo" />
        <h1>Spirulina Algae</h1>
      </header>

      <div className="status-container">
        <div className="status-box" onClick={() => handleStatusBoxClick("Temperature")}>
        <Line
          className='color-bar'
          style={{ height: "10px", marginTop: "20px" }}
          strokeWidth={2}
          strokeColor={progress >= 30 ? "#f50" : progress >= 20 ? "#2db7f5" : "#00a626"}
          percent={100}
        />
        </div>

        <div className="status-box" onClick={() => handleStatusBoxClick("pH")}>
          <Line
            className='color-bar'
            style={{ height: "10px", marginTop: "20px" }}
            strokeWidth={2}
            strokeColor={progress === 100 ? "#00a626" : "#2db7f5"}
            percent={100}
          />
        </div>

        <div className="status-box" onClick={() => handleStatusBoxClick("O2")}>
          <Line
            className='color-bar'
            style={{ height: "10px", marginTop: "20px" }}
            strokeWidth={2}
            strokeColor={progress === 100 ? "#00a626" : "#2db7f5"}
            percent={100}
          />
        </div>
      </div>

      {showTempForm && (
        <TemperatureForm
          sendTemperatureFromForm={handleDataFromTemperatureForm}
          onClose={() => handleCloseButtonClick("Temperature")}
        />
      )}

      {showpHForm && (
        <PHForm onClose={() => handleCloseButtonClick("pH")} />
      )}

      {showO2Form && (
        <O2Form onClose={() => handleCloseButtonClick("O2")} />
      )}

      <Footer />
    </div>
  );
}

export default NewPagetry;


