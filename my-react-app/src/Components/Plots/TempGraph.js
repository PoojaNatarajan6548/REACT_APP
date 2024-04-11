import React from 'react';
import Plot from 'react-plotly.js';

const LogarithmicPlot = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const dates = data.map(record => record.timestamp);
  const temp1 = data.map(record => record.temp1);
  const temp2 = data.map(record => record.temp2);
  const temp3 = data.map(record => record.temp3);
  const temp4 = data.map(record => record.temp4);
  const avg = data.map(record => record.avg);

  return (
    <div>
      <Plot
        data={[
          { x: dates, y: temp1, type: 'scatter', mode: 'lines+markers', name: 'Temperature TL' },
          { x: dates, y: temp2, type: 'scatter', mode: 'lines+markers', name: 'Temperature TR' },
          { x: dates, y: temp3, type: 'scatter', mode: 'lines+markers', name: 'Temperature BL' },
          { x: dates, y: temp4, type: 'scatter', mode: 'lines+markers', name: 'Temperature BR' },
          { x: dates, y: avg, type: 'scatter', mode: 'lines+markers', name: 'Avg Temperature' },
        ]}
        layout={{
          xaxis: { title: 'Date' },
          yaxis: { title: 'Temperature', type: 'log' }, // Set y-axis type to logarithmic
          showlegend: true,
          width: 700,
          height: 300,
        }}
      />
    </div>
  );
};

export default LogarithmicPlot;
