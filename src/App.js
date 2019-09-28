import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'
import './App.css'

const API_KEY = "82b797b6ebc625032318e16f1b42c016";

// const API_KEY2 = "70e1ed322b02acbc57d443dd91065f3e";


class App extends React.Component {

    state = {
        icon: undefined,
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    };


    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);

            if (data.cod == "200") {
                let sunset = data.sys.sunset;
                let date = new Date();
                date.setTime(sunset);
                let sunset_date = `${("0"+date.getHours()).slice(-2)}:${("0"+date.getMinutes()).slice(-2)}:${("0"+date.getSeconds()).slice(-2)}`;

                this.setState({
                    icon: data.weather[0].icon,
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: undefined
                });
                console.log(this.state.icon);
            } else {
                this.setState({
                    icon: undefined,
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    pressure: undefined,
                    sunset: undefined,
                    error: "Неправильный город."
                })
            }
        } else {
            this.setState({
                icon: undefined,
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города."
            })
        }

    };

    render() {
        return (
            <main className='main_frame'>
                <div className='title_frame'>
                    <Info/>
                </div>
                <div className='info_frame'>
                    <Form weatherMethod={this.gettingWeather}/>
                    <Weather weatherState={this.state}/>
                </div>

            </main>
        )
    }
}

export default App;