import React, { useEffect, useState } from 'react';
import O2Form from '../sensors/O2Form';

function O2Avg() {
    const [avgO2, setavgO2] = useState(0); // State for average temperature

    useEffect(() => {
        const fetchO2Data = async () => {
            try {   
                const response = await fetch('http://localhost:5003/http://localhost:5001/getAllSensorsData?start_time=2024-04-05%2012:10:00&end_time=2024-04-11%2012:20:00');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                
                if (response.status === 304) {
                    return;
                }

                const data = await response.json(); // Parse JSON response

                const lastRecord = data[data.length - 1]; 
                const lastRecordAvg = lastRecord.O2;
                setavgO2(lastRecordAvg);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchO2Data();
    }, []);

    return (
        <div>
            <O2Form avgO2={avgO2} /> 
        </div>
    );
}

export default O2Avg;
