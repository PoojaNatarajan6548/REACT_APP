import React, { useEffect, useState } from 'react';
import O2plot from '../Plots/O2Graph';

function O2Data() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchO2Data = async () => {
            try {
                const response = await fetch('http://localhost:5003/http://localhost:5001/getAllSensorsData?start_time=2024-04-08%2012:10:00&end_time=2024-04-11%2014:20:00');
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

        fetchO2Data();
    }, []);

    return (
        <div>
            <O2plot data={records} />
        </div>
    );
}

export default O2Data;
