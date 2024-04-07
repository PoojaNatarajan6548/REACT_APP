import React from "react";
import ".././App.css"; // Importing the CSS file for styling
import YoghLogo from "../Assets/images/YoghLogo.png"; // Importing the YoghLogo image
import TempGraph from "../Components/Plots/TempGraph";
import PHGraph from "../Components/Plots/pHGraph";
import O2Graph from "../Components/Plots/O2Graph";
import TemperatureForm from "../Components/sensors/TempForm";
import PHForm from "../Components/sensors/pHForm";
import O2Form from "../Components/sensors/O2Form";

function NextPage() {
  return (
    <div className="page-container">
      <div className="mainHeader">
        <div className="header1">
          {/* Logo at the top left */}
          <img src={YoghLogo} alt="Yogh Logo" className="logo" />
          <h1>Spirulina Algae</h1>
        </div>
      </div>

      {/* Temperature Section */}
      <div className="full-page-temp">
        <div className="status-container">
          <h2 className="sensor-title">Temperature sensor</h2>
          {/* Temperature header */}
        </div>
        <div className="mainDiv">
          <div className="subDiv">
            <TemperatureForm />
            {/* Render the TemperatureForm component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <TempGraph />
              {/* Temperature graph */}
            </div>
          </div>
        </div>
      </div>

      {/* pH Section */}
      <div className="full-page-pH">
        <div className="status-container">
          <h2>pH sensor</h2>
          {/* pH header */}
        </div>
        <div className="mainDiv">
          <div className="subDiv">
            <PHForm />
            {/* Render the PHForm component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <PHGraph />
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
            <O2Form />
            {/* Render the O2Form component */}
          </div>
          <div className="subDiv status-graph">
            <div>
              <O2Graph />
              {/* O2 graph */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPage;
