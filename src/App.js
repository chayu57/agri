import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, Input } from "react-rainbow-components";
import { Button } from 'react-rainbow-components';
import axios from 'axios';
import Prev from "./page/Prev";


const initialState = {
    range: undefined,
    isPrevPageVisible: false,
    sensorData: []
    
};

const App = (props) => {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        
        const intervalId = setInterval(fetchSensorData, 5000); 
        return () => {
            clearInterval(intervalId);
        };
    }, []);

   
    const fetchSensorData = async () => {
        try {
            const response = await axios.get('https://agriculture-rxkg.onrender.com/api/livesensordata');
            console.log('Response Data:', response.data);
    
            setState((prevState) => ({
                ...prevState,
                sensorData: response.data, 
            }));
        } catch (error) {
            console.error('Error fetching sensor data', error);
        }
    };
    
    
    


    const showPrevPage = () => {
        setState({ ...state, isPrevPageVisible: true });
    }

    const goBack = () => {
        setState({ ...state, isPrevPageVisible: false });
    }

    const { sensorData, isPrevPageVisible } = state;
    if (state.isPrevPageVisible) {
        return <Prev goBack={goBack} />;
    }



    return (
        <>
            <div>
                <Card className='abc bb'>
                    <div className="skyblue">
                        <h1 className="main-heading"><center>SMART AGRICULTURE SYSTEM</center></h1>

                        <p className="quote"><center>(Smarter farming for a better tomorrow)</center></p>
                    </div>


                    
                    <Card className='nested-card' style={{ top: '12rem', left: '5%', width: '40%' }}>
                        <div className="nested-content"><center><h3>Location 1</h3></center><br />

                            <div className="parameter">
                                <label className='temp'>Temperature:</label>
                                <Input type="text" value={sensorData.temperature} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='humid'>Humidity:</label>
                                <Input type="text" value={sensorData.humidity} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='soil'>Soil Moisture:</label>
                                <Input type="text" value={sensorData.soilMoisture} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='clim'>Climate Condition:</label>
                                <Input type="text" value={sensorData.climateCondition}style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='soil-mo'>Soil Moisture Level:</label>
                                <Input type="text"value={sensorData.soilMoistureLevel} style={{ width: '25%' }} />
                            </div>


                        </div>
                    </Card>


                    <Card className='nested-card' style={{ top: '-22rem', left: '50%', width: '40%' }}>
                        <div className="nested-content"><center><h3>Location 2</h3></center><br />
                            <div className="parameter">
                                <label className='temp'>Temperature:</label>
                                <Input type="text" value={sensorData.temperature} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='humid'>Humidity:</label>
                                <Input type="text"  value={sensorData.humidity}    style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label  className='soil'>Soil Moisture:</label>
                                <Input type="text" value={sensorData.soilMoisture} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='clim'>Climate Condition:</label>
                                <Input type="text" value={sensorData.climateCondition} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='soil-mo'>Soil Moisture Level:</label>
                                <Input type="text" value={sensorData.soilMoistureLevel} style={{ width: '25%' }} />
                            </div>

                        </div>
                    </Card>

                    <Card className='nested-card' style={{ top: '-9rem', left: '5%', width: '40%' }}>
                        <div className="nested-content"><center><h3>Location 3</h3></center><br />
                            <div className="parameter">
                                <label className='temp'>Temperature:</label>
                                <Input type="text" value={sensorData.temperature} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='humid'>Humidity:</label>
                                <Input type="text" value={sensorData.humidity}  style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label  className='soil'>Soil Moisture:</label>
                                <Input type="text" value={sensorData.soilMoisture} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='clim'>Climate Condition:</label>
                                <Input type="text" value={sensorData.climateCondition} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='soil-mo'>Soil Moisture Level:</label>
                                <Input type="text" value={sensorData.soilMoistureLevel} style={{ width: '25%' }} />
                            </div>

                        </div>
                    </Card>



                    <Card className='nested-card' style={{ top: '-43rem', left: '50%', width: '40%' }}>
                        <div className="nested-content"><center><h3>Location 4</h3></center><br />
                            <div className="parameter">
                                <label className='temp'>Temperature     :</label>
                                <Input type="text" value={sensorData.temperature} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='humid'>Humidity:</label>
                                <Input type="text" value={sensorData.humidity}  style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label  className='soil'>Soil Moisture:</label>
                                <Input type="text" value={sensorData.soilMoisture} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='clim'>Climate Condition:</label>
                                <Input type="text" value={sensorData.climateCondition} style={{ width: '25%' }} />
                            </div><br />
                            <div className="parameter">
                                <label className='soil-mo'>Soil Moisture Level:</label>
                                <Input type="text" value={sensorData.soilMoistureLevel} style={{ width: '25%' }} />
                            </div>
                        </div>
                    </Card>



                    <Card className='nested-card' style={{ top: '-27rem', left: '5%', width: '85%' }}><center><h4>Live Motor Data </h4></center>
                        <br />
                        <div className="Live">
                            <label className='volt'>Voltage :</label>   <Input type="text" value={sensorData.voltage}  style={{ width: '30%' }} />
                            <br />

                            <label  className='curr'>Current :</label> <Input type="text"value={sensorData.current}  style={{ width: '30%' }} />
                            <br /></div>
                        <br /><br />
                        <div className="Live">  <label  className='volt'>Water quantity:</label><Input type="text" value={sensorData.waterQuantity}  style={{ width: '30%' }} />
                            <br />

                            <label  className='volt'>Power Consumption:</label> <Input type="text" value={sensorData.powerConsumption}  style={{ width: '30%' }} />
                            <br /></div><br /><br />
                        <center><label><h6 className='volt'>Motor Status:</h6></label> <Input type="text" value={sensorData.motorStatus} style={{ width: '9%' }} /></center>

                       <div className='but12'> <Button className='but ' onClick={showPrevPage}>Previous Data</Button></div>
                    </Card>

                </Card>


            </div>
        </>
    );
}

export default App;

