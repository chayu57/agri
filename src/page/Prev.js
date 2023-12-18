import './Prev.css';
import React, { useState, useEffect } from 'react';
import { Card, Input } from 'react-rainbow-components';
import { DatePicker } from 'react-rainbow-components';

const initialState = {
    range: undefined,
};

const containerStyles = {
    maxWidth: 200,
};

const Prev = ({ goBack }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [fetchedData, setFetchedData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        const formattedDate = selectedDate.toISOString().split('T')[0];
        try {
            const response = await fetch(`http://localhost:5000/api/sensordata?date=${formattedDate}`);

            if (!response.ok) {
                throw new Error('No data available');
            }

            const data = await response.json();
            setFetchedData(data);
        } catch (error) {
            console.error('Error fetching data', error);
            setError('No data available');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [selectedDate]);

    const displayData = () => (
        <>
            <div className="parameter">
                <label className='humid1'>Soil Moisture:</label>
                <Input type="text" value={fetchedData.soilMoisture} />
            </div>
            <div className="parameter">
                <label className='soil-mo1'>Total Motor Running Time:</label>
                <Input type="text" value={fetchedData.totalMotorRunningTime} />
            </div>
            <div className="parameter">
                <label className='clim1'>Total Water Outflow:</label>
                <Input type="text" value={fetchedData.totalWaterOutflow} />
            </div>
            <div className="parameter">
                <label className='temp1'>Climate Condition:</label>
                <Input type="text" value={fetchedData.climateCondition} />
            </div>
            <div className="parameter">
                <label className='volt1'>Total Power Consumption:</label>
                <Input type="text" value={fetchedData.totalPowerConsumption} />
            </div>
        </>
    );

    return (
        <div className="page-container">
            <Card className="additional-card">
                <button onClick={goBack}>Go Back</button>
                <center>
                    <DatePicker
                        selectionType="single"
                        style={containerStyles}
                        variant="single"
                        value={selectedDate}
                        onChange={date => setSelectedDate(date)}
                    />
                </center>
                <br />
                <br />
                <br />
                {isLoading ? <p>Loading...</p> : (error ? <p>Error: {error}</p> : displayData())}
            </Card>
        </div>
    );
};

export default Prev;
