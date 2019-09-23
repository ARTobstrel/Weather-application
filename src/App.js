import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "82b797b6ebc625032318e16f1b42c016";

// const API_KEY2 = "70e1ed322b02acbc57d443dd91065f3e";


class App extends React.Component {

    state = {
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
                let sunset_date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunset_date,
                    error: undefined
                });
                console.log(this.state);
                // console.log(sunset_date)
            } else {
                this.setState({
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
            <main>
                <Info/>
                <Info/>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather weatherState={this.state}/>
            </main>
        )
    }
}

export default App;