import React, { useEffect, useState } from 'react';
import PHForm from '../sensors/pHForm';

function PHAvg() {
    const [avgpH, setavgpH] = useState(0); // State for average temperature

    useEffect(() => {
        const fetchpHData = async () => {
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
                const lastRecordAvg = lastRecord.pH;
                setavgpH(lastRecordAvg);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchpHData();
    }, []);

    return (
        <div>
            <PHForm avgpH={avgpH} /> 
        </div>
    );
}

export default PHAvg;
