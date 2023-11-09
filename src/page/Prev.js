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
    const [state, setState] = useState(initialState);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [fetchedData, setFetchedData] = useState({});



    const fetchData = async () => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        try {
            const response = await fetch(`/api/sensor-data?date=${formattedDate}`);
            const data = await response.json();
            setFetchedData(data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, [selectedDate])


    const displayData = () => {
        return (
            <>
            <div className="parameter">
                <label>Soil Moisture:</label>
                <Input type="text" placeholder={fetchedData.soilMoisture} />
            </div>
            <div className="parameter">
                <label>Total Motor Running Time:</label>
                <Input type="text" placeholder={fetchedData.totalMotorRunningTime} />
            </div>
            <div className="parameter">
                <label>Total Water Outflow:</label>
                <Input type="text" placeholder={fetchedData.totalWaterOutflow} />
            </div>
            <div className="parameter">
                <label>Climate Condition:</label>
                <Input type="text" placeholder={fetchedData.climateCondition} />
            </div>
            <div className="parameter">
                <label>Total Power Consumption:</label>
                <Input type="text" placeholder={fetchedData.totalPowerConsumption} />
            </div>
        </>
        );
    };

    
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
                {displayData()}
            </Card>
        </div>
    );
};


export default Prev;
