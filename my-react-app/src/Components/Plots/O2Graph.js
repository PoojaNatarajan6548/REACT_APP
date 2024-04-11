import Plot from 'react-plotly.js';

const AnimatedPlot = ({data}) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const dates = data.map(record => record.timestamp);
  const O2 = data.map(record => record.O2);

  return (
    <div>
      <Plot
        data={[
          { x: dates, y: O2, type: 'scatter', mode: 'lines+markers', name: 'O2' },
        ]}
        layout={{
          xaxis: { title: 'Date' },
          yaxis: { title: 'O2', type: 'log' }, // Set y-axis type to logarithmic
          showlegend: true,
          width: 700,
          height: 300,
        }}
      />
    </div>
  );
};

export default AnimatedPlot;
