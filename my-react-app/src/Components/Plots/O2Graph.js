import Plot from 'react-plotly.js';

const AnimatedPlot = () => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    // Function to generate dates from February 1st, 2024, till today
    const generateDates = () => {
      const startDate = new Date('2024-02-01');
      const endDate = new Date(); // Today's date
      const dates = [];
      let currentDate = startDate;

      while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().slice(0, 10)); // Format: YYYY-MM-DD
        currentDate.setDate(currentDate.getDate() + 1); // Increment date by 1 day
      }

      return dates;
    };

    // Generate dates
    const dates = generateDates();

    // Generate random y values
    const yData = Array.from({ length: dates.length }, () => Math.random() * 100);

    // Create initial frame
    const initialFrame = {
      data: [{ x: [], y: [] }],
      name: 'frame 0'
    };
    

    // Create frames
    const frames = [];
    for (let i = 0; i < dates.length; i++) {
      const slicedX = dates.slice(0, i + 1);
      const slicedY = yData.slice(0, i + 1);

      frames.push({
        name: `frame ${i + 1}`,
        data: [{ x: slicedX, y: slicedY }]
      });
    }

    // Set initial data, layout, and frames
    setData([{ x: dates, y: yData }]);
    setLayout({
    //   title: 'Animated Plot',
      xaxis: { title: 'Date' }, // Update x-axis title
      yaxis: { title: 'Y Axis' }
    });
    setFrames([initialFrame, ...frames]);
  }, []);

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
