import React, { useEffect, useState } from 'react';
import PHplot from '../Plots/pHGraph';

function PHData() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchPHData = async () => {
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

        fetchPHData();
    }, []);

    return (
        <div>
            <PHplot data={records} />
        </div>
    );
}

export default PHData;
