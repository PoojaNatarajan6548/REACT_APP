import React, { useEffect, useState } from 'react';
import TemperatureForm from '../sensors/TempForm'; // Import TemperatureForm component

function TempAvg() {
    const [avgTemperature, setAvgTemperature] = useState(0); // State for average temperature
    const [avgTemperatureC, setAvgTemperatureC] = useState(0); 

    useEffect(() => {
        const fetchTemperatureData = async () => {
            try {   
                const response = await fetch('http://localhost:5003/http://localhost:5001/getAllSensorsData?start_time=2024-04-05%2012:10:00&end_time=2024-04-11%2012:20:00');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                
                if (response.status === 304) {
                    return;
                }

                const data = await response.json(); // Parse JSON response
                console.log(data)

                const lastRecord = data[data.length - 1]; 
                const lastRecordAvgC = lastRecord.avg;
                setAvgTemperatureC(lastRecordAvgC);

                // Convert Celsius to Fahrenheit using the formula F = (9/5)C + 32
                const lastRecordAvg = (9 / 5) * lastRecordAvgC + 32;
                setAvgTemperature(lastRecordAvg);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTemperatureData();
    }, []);

    return (
        <div>
            <TemperatureForm avgTemperature={avgTemperature} /> 
        </div>
    );
}

export default TempAvg;
