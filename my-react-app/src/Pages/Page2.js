import React, { useState } from 'react';
import '.././App.css'; // Importing the CSS file for styling
import YoghLogo from '../Assets/images/YoghLogo.png'; // Importing the YoghLogo image
import Footer from '../Components/Footer';
import TempGraph from '../Components/Plots/TempGraph';
import TemperatureForm from '../Components/sensors/TempForm'; // Importing the TemperatureForm component

function Page2() {
  const [showTempForm, setShowTempForm] = useState(false); // State to track the visibility of the temperature form
  const [backgroundIndex, setBackgroundIndex] = useState(0); // State to track the index of the background image

  const backgrounds = [
    'url(../Assets/images/Temp_image.jpeg)', // Replace 'image1.jpg' with temp image URLs
    'url(image2.jpg)',
    'url(image3.jpg)',
  ];

  const handleSectionChange = (index) => {
    setBackgroundIndex(index);
  };

  const handleCloseButtonClick = () => {
    setShowTempForm(false);
  };

  return (
    <div className="page-container" style={{ backgroundImage: backgrounds[backgroundIndex] }}>
      <header className="header">
        {/* Logo at the top left */}
        <img src={YoghLogo} alt="Yogh Logo" className="logo" />
        <h1>Spirulina Algae</h1>
      </header>

      {/* Temperature Section */}
      <section className="section">
        <div className="status-container">
          <h2 className="sensor-title">Temperature sensor</h2> {/* Temperature header */}
          {showTempForm && (
            <TemperatureForm onClose={handleCloseButtonClick} />
          )}
        </div>
        <div className="status-graph">
          <div className="graph-container">
            <TempGraph /> {/* Temperature graph */}
          </div>
        </div>
      </section>

      {/* pH Section */}
      <section className='section'>
        <div className="status-container" onMouseEnter={() => handleSectionChange(1)}>
          <h2 className="sensor-title">pH sensor</h2> {/* pH header */}
        </div>
        <div className='status-graph'>
          <div className="graph-container">
            <TempGraph /> {/* pH graph */}
          </div>
        </div>
      </section>

      {/* O2 Section */}
      <section className='section'>
        <div className="status-container" onMouseEnter={() => handleSectionChange(2)}>
          <h2 className="sensor-title">O2 sensor</h2> {/* O2 header */}
        </div>
        <div className='status-graph'>
          <div className="graph-container">
            <TempGraph /> {/* pH graph */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page2;
