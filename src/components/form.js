import React from 'react';

const Form = props => (
    <div className='weather_form'>
        <form onSubmit={props.weatherMethod} className='weather_form__container'>
            <input type="text" name="city" placeholder="City" className='weather_form__input' />
            <button className='weather_form__btn'>Get weather</button>
        </form>
    </div>
);

export default Form;