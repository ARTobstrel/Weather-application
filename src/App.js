import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "82b797b6ebc625032318e16f1b42c016";
// const API_KEY2 = "70e1ed322b02acbc57d443dd91065f3e";


class App extends React.Component {

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data)
    };

    render() {
        return (
            <main>
                <Info />
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather />
            </main>
        )
    }
}

export default App;