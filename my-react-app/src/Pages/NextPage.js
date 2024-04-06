import React from 'react';
import '.././App.css'; // Importing the CSS file for styling
import YoghLogo from '../Assets/images/YoghLogo.png'; // Importing the YoghLogo image
import TempGraph from '../Components/Plots/TempGraph';
import PHGraph from '../Components/Plots/pHGraph';
import O2Graph from '../Components/Plots/O2Graph';
import TemperatureForm from '../Components/sensors/TempForm';
import PHForm from '../Components/sensors/pHForm';
import O2Form from '../Components/sensors/O2Form';

function NextPage() {
  return (
    <div className="page-container">
      <header className="header1">
        {/* Logo at the top left */}
        <img src={YoghLogo} alt="Yogh Logo" className="logo" />
        <h1>Spirulina Algae</h1>
      </header>

      {/* Temperature Section */}
      <section className='full-page-temp'>
        <div className="status-container">
          <h2 className="sensor-title">Temperature sensor</h2>
          {/* Temperature header */}
        </div>
        <div className='mainDiv'>
          <div>
            <TemperatureForm />
            {/* Render the TemperatureForm component */}
          </div>
          <div className="status-graph">
            <div className="graph-container">
              <TempGraph />
              {/* Temperature graph */}
            </div>
          </div>
        </div>
      </section>

      {/* pH Section */}
      <section className='full-page-pH'>
        <div className="status-container">
          <h2>pH sensor</h2>
          {/* pH header */}
        </div>
        <div className='mainDiv'>
          <div>
            <PHForm />
            {/* Render the PHForm component */}
          </div>
          <div className="status-graph">
            <div className="graph-container">
              <PHGraph />
              {/* pH graph */}
            </div>
          </div>
        </div>
      </section>

      {/* O2 Section */}
      <section className='full-page-O2'>
        <div className="status-container">
          <h2>O2 sensor</h2>
          {/* O2 header */}
        </div>
        <div className='mainDiv'>
          <div>
            <O2Form />
            {/* Render the O2Form component */}
          </div>
          <div className="status-graph">
            <div className="graph-container">
              <O2Graph />
              {/* O2 graph */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NextPage;
