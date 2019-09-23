import React from 'react';

const Weather = (props) => {
    return (
        <div>
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
    )
};

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.name &&
//                     <p>City: {this.props.name}</p>
//                 }
//                 <p>{this.props.error}</p>
//             </div>
//         )
//     }
// }

export default Weather;