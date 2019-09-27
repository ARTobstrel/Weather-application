import React from 'react';

const Weather = props => (
    <div className='weather_info'>
        {props.weatherState.city &&
        <div>
            <p>Местоположение: {props.weatherState.city}, {props.weatherState.country}</p>
            <p>Температура: {props.weatherState.temp}</p>
            <p>Давление: {props.weatherState.pressure}</p>
            <p>Заход солнца: {props.weatherState.sunset}</p>
        </div>
        }
        <p>{props.weatherState.error}</p>
    </div>
);

export default Weather;