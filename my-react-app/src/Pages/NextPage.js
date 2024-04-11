import React from 'react';
import '.././App.css'; // Importing the CSS file for styling
import YoghLogo from '../Assets/images/YoghLogo.png'; // Importing the YoghLogo image
import O2Data from '../Components/REST_APIs/O2Data';
import Spectrometer from '../Components/Plots/spectrometer';
import TempAvg from '../Components/REST_APIs/TempAvg';
import TempData from '../Components/REST_APIs/TempData';
import AirPumpToggle from '../Components/REST_APIs/Toggle_airpump';
import ToggleHeatingElement from '../Components/REST_APIs/Toggle_heatingelement';
import O2Avg from '../Components/REST_APIs/O2Avg';
import PHAvg from '../Components/REST_APIs/pHAvg';
import PHData from '../Components/REST_APIs/pHData';

function NextPage() {
  return (
    <div className="page-container">
      <div className="mainHeader">
      <header className="header1">
        {/* Logo at the top left */}
        <img src={YoghLogo} alt="Yogh Logo" className="logo" />
        <h1>Spirulina Algae</h1>
      </header>
      </div>

      {/* Temperature Section */}
      <div className='full-page-temp'>
      <div className="status-container1">
        <AirPumpToggle />
        <ToggleHeatingElement />
        </div>
        <div className="status-container">
          <h2 className="sensor-title">Temperature sensor</h2>
          {/* Temperature header */}
        </div>
        <div className='mainDiv'>
          <div className='subDiv'>
          <TempAvg/>
            {/* Render the TemperatureForm component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <TempData />
              {/* Temperature graph */}
            </div>
          </div>
        </div>
      </div>

      <div className="full-page-pH">
        <div className="status-container">
          <h2>pH sensor</h2>
          {/* pH header */}
        </div>
        <div className="mainDiv">
          <div className="subDiv">
            <PHAvg />
            {/* Render the PHForm component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <PHData />
              {/* pH graph */}
            </div>
          </div>
        </div>
      </div>

      {/* O2 Section */}
      <div className="full-page-O2">
        <div className="status-container">
          <h2>O2 sensor</h2>
          {/* O2 header */}
        </div>
        <div className="mainDiv">
          <div className="subDiv">
            <O2Avg />
            {/* Render the O2Form component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <O2Data/>
              {/* O2 graph */}
            </div>
          </div>
        </div>
      </div>

      {/* spectrometer Section */}
      <div className='full-page-spectrometer'>
        <div className="status-container">
          <h2>Spectrometer sensor</h2>
          {/* spectrometer header */}
        </div>
        <div className="status-graph">
          <div className="graph-container">
            <Spectrometer />
            {/* sprectrometer graph */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPage;
