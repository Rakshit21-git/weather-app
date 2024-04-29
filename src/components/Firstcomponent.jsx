import { useState } from 'react'
import getWeather from './api';
import React from 'react';
import dateFormat from 'dateformat';
import './Firststyle.css';


function Firstcomponent() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeatherbycity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  }
  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd,mmmm dS, h:MM TT")
  }
 return (
    <>
      <div style={{height:"80vh"}}>
        <div className='input-div text-right pt-2 pr-4 'style={{height:"10%"}}>
          <input className='bg-transparent text-orange-100 pr-3 focus:outline-none border-b-2 border-zinc-300' type="text" placeholder='Search Location...' value={city} onChange={(e) => setCity(e.target.value)} />
          <button className=' but mx-2' onClick={() => getWeatherbycity()}> <i class="fa-solid fa-magnifying-glass " style={{ color: "#ffffff", }}></i></button>
        </div>
        {weather && weather.weather &&
          <div className='italic ' style={{height:"90%"}}>
            <div className=' first_Div flex items-end  ms-14 pb-7 lg:items-center h-1/2'>
              <div className='location flex items-end'>
                <h1 className='text-orange-100 text-7xl me-2 not-italic'>{Math.floor(weather.main.temp)}&deg; </h1>
              </div>
              <div>
                <h1 className='text-orange-100'>{weather.name} <span>({weather.sys.country}) <i class="fa-solid fa-location-dot"></i></span></h1>
                <p className='datetext italic text-orange-100'>{renderDate()}</p>
              </div>
              <div className='img'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className='justify-items-center' />
                {/* <h3 className='text-zinc-300'>{weather.weather[0].description}</h3> */}
              </div>
            </div>
            <div className='Second_DIV text-rigt backdrop-blur h-3/4 ' >
              <h1 className='text-orange-100 text-center text-lg my-5 pt-5'>Weather Deatils...</h1>

              <div className='wind lg:text-2xl text-xl pt-px-2px text-orange-100 pt-5 italic justify-between'>
                <div className='flex justify-between max-w-lg mx-auto'>    <h3>Wind  </h3><h3> {weather.wind.speed}km/h  <i class="fa -solid fa-wind text-blue-700" ></i></h3> </div>

                <div className='flex justify-between max-w-lg mx-auto mt-2'><h3 className='text-orange-100'>Temp Min </h3>   <h3> {weather.main.temp_min}  <i class="fa-solid fa-temperature-empty text-blue-500"></i></h3></div>

                <div className='flex justify-between max-w-lg mx-auto mt-2'><h3 className='text-orange-100'>Temp Max </h3>   <h3> {weather.main.temp_max}  <i class="fa-solid fa-temperature-empty text-red-500"></i></h3></div>

                <div className='flex justify-between max-w-lg mx-auto mt-2'> <h3 className='text-orange-100'>Humidity </h3>   <h3> {weather.main.humidity}%  <i class="fa-solid fa-droplet text-blue-500"></i></h3></div>

                <div className='flex justify-between max-w-lg mx-auto mt-2'> <h3 className='text-orange-100'>Pressure </h3>   <h3> {weather.main.pressure}</h3></div>
              </div>
              <hr className='h-px mt-7 mb-8 bg-white border-0 max-w-xl mx-auto  ' />
            </div>
            {!weather.weather && <div className='content'>
              Data Not Found
            </div>}
          </div> }
      </div>
    </>
  )
}
export default Firstcomponent;
