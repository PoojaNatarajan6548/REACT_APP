// import React, { useState, useEffect } from 'react';
// import { csv } from 'd3-fetch';
// import './App.css'; // Importing the CSS file for styling

// function TemperatureForm({ onClose }) {
//   // State to store Spirulina data
//   const [spirulinaData, setSpirulinaData] = useState(null);

//   // Effect to fetch data from CSV when the component mounts
//   useEffect(() => {
//     const fetchSpirulinaDataFromCSV = async () => {
//       try {
//         // Fetch data from the CSV file
//         const data = await csv('/AlgoHelix.csv');
//         // Filter data for Spirulina
//         const spirulinaEntry = data.find(row => row.Chlorella === 'Spirulina');
//         // Set the Spirulina data state
//         setSpirulinaData(spirulinaEntry);
//       } catch (error) {
//         // Handle any errors that occur during fetching
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchSpirulinaDataFromCSV function when the component mounts
//     fetchSpirulinaDataFromCSV();
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className="status-container">
//       <div className="status-box1">
//         <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
//         <h3>Spirulina Data</h3>
//         {spirulinaData && (
//           <ul>
//             {Object.entries(spirulinaData).map(([key, value]) => (
//               <li key={key}><strong>{key}:</strong> {value}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TemperatureForm;


import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('AlgoHelix.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const csvData = await response.text();
        setData(csvData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV Data</h1>
      {data && (
        <pre>{data}</pre>
      )}
    </div>
  );
}

export default App;