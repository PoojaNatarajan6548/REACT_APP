import Plot from 'react-plotly.js';

const AnimatedPlot = ({data}) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const dates = data.map(record => record.timestamp);
  const pH = data.map(record => record.pH);

  return (
    <div>
      <Plot
        data={[
          { x: dates, y: pH, type: 'scatter', mode: 'lines+markers', name: 'pH' },
        ]}
        layout={{
          xaxis: { title: 'Date' },
          yaxis: { title: 'pH', type: 'log' }, // Set y-axis type to logarithmic
          showlegend: true,
          width: 700,
          height: 300,
        }}
      />
    </div>
  );
};

export default AnimatedPlot;
