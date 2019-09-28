import React from 'react';

const Weather = props => (
    <div className='weather_info'>
        {props.weatherState.city &&
        <div className='weather_info__elems'>
            <img src={`https://openweathermap.org/img/w/${props.weatherState.icon}.png`} alt='img' />
            <p className='weather_info__elem'>Местоположение: {props.weatherState.city}, {props.weatherState.country}</p>
            <p className='weather_info__elem'>Температура: {props.weatherState.temp} &deg;С</p>
            <p className='weather_info__elem'>Давление: {props.weatherState.pressure} мм рт.ст. </p>
            <p className='weather_info__elem'>Восход солнца: {props.weatherState.sunset}</p>
        </div>
        }
        <p>{props.weatherState.error}</p>
    </div>
);

export default Weather;