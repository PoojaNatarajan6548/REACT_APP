import React, { useEffect, useState } from 'react';
import TempPlotData from '../Plots/TempGraph';

function TempData() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchTemperatureData = async () => {
            try {
                const response = await fetch('http://localhost:5003/http://localhost:5001/getAllSensorsData?start_time=2024-04-05%2012:10:00&end_time=2024-04-11%2014:20:00');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                
                if (response.status === 304) {
                    console.log('Resource not modified. Using cached data.');
                    return;
                }

                const data = await response.json();
                setRecords(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTemperatureData();
    }, []);

    return (
        <div>
            <TempPlotData data={records} />
        </div>
    );
}

export default TempData;
