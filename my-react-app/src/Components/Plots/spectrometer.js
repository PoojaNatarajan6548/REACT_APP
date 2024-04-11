import React from 'react';
import Plot from 'react-plotly.js';

const MultiTraceContoursPlot = () => {
  const data = [
    {
      z: [
        [10, 10.625, 12.5, 15.625, 20],
        [5.625, 6.25, 8.125, 11.25, 15.625],
        [2.5, 3.125, 5.0, 8.125, 12.5],
        [0.625, 1.25, 3.125, 6.25, 10.625],
        [0, 0.625, 2.5, 5.625, 10]
      ],
      type: 'contour',
      colorscale: 'Viridis',
      name: 'Trace 1'
    },
    {
      z: [
        [1, 2.125, 4, 6.125, 8],
        [0, 1.125, 3, 5.125, 7],
        [0, 0.125, 2, 4.125, 6],
        [0, 1, 3, 5.125, 7],
        [1, 2.125, 4, 6.125, 8]
      ],
      type: 'contour',
      colorscale: 'Viridis',
      name: 'Trace 2'
    },
    {
      z: [
        [0, 1.625, 3.75, 6.375, 9],
        [0, 0.625, 2.75, 5.375, 8],
        [0, 0.625, 2.75, 5.375, 8],
        [0, 1.625, 3.75, 6.375, 9],
        [0, 3.25, 6.5, 10.125, 14.25]
      ],
      type: 'contour',
      colorscale: 'Viridis',
      name: 'Trace 3'
    }
  ];

  return (
    <div>
      <Plot
        data={data}
        layout={{
          title: 'Multi-Trace Contours Plot',
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' }
        }}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default MultiTraceContoursPlot;
