import React from 'react'
import { useState,useEffect } from 'react'
function Wether() {
    const[weather,setWeather]=useState(null)
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)
    // console.log(weather.timelines.daily[0].value);
    // console.log(weather.timelines.daily[0].values.temperatureAvg,
    //             weather.timelines.daily[0].values.pressureSurfaceLevelAvg, 
    //             weather.timelines.daily[0].values.windSpeedAvg,
    //             weather.timelines.daily[0].values.humidityAvg);
    useEffect(()=>{
        setLoading(true)
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=VLQEjnwcW8JtTFM7DPR8scOBh2OvBHhO')
        .then((res)=>res.json())
        .then((data)=>setWeather(data))
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
        
    },[]);
  return (
    <div>
        <h1>Wether</h1>
        {loading?<p>loading...</p>: weather ? <div>
        <p>Temperature: {weather.timelines.daily[0].values.temperatureAvg}</p>
        <p>Pressure: { weather.timelines.daily[0].values.pressureSurfaceLevelAvg}</p>
        <p>WindSpeed: {weather.timelines.daily[0].values.windSpeedAvg}</p>
        <p>Humidity: {weather.timelines.daily[0].values.humidityAvg}</p>
        </div> :<p>{error}</p>}

    </div>
  ) 

}

export default Wether