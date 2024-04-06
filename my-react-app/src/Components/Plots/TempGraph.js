import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const LogarithmicPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const startDate = new Date('2024-02-01');
      const endDate = new Date();
      const dates = [];
      let currentDate = startDate;

      while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().slice(0, 10));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    };

    const dates = generateDates();

    const generateYData = () => {
      const yData = Array.from({ length: dates.length }, () => Math.random() * 100);
      return yData;
    };

    const traceNames = ['Temperature TL', 'Temperature TR', 'Temperature BL', 'Temperature BR', 'Avg Temperature'];

    const traces = Array.from({ length: 5 }, (_, index) => ({
      x: dates,
      y: generateYData(),
      type: 'scatter',
      mode: 'lines+markers',
      name: traceNames[index] // Set name from the array
    }));

    setData(traces);
  }, []);

  return (
    <div>
      <Plot
        data={data}
        layout={{
          // title: 'Temp Plot',B
          xaxis: { title: 'Date' },
          yaxis: { title: 'Value', type: 'log' }, // Set y-axis type to logarithmic
          showlegend: true
        }}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default LogarithmicPlot;
