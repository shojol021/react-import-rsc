import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, flags} = props.country;
    console.log(props)
    return (
        <div className='country bg-primary-subtle'>
            <h1>Name: {name.common}</h1>
            <h2>Capital: {capital}</h2>
            <img src={flags.png} alt="" />

        </div>
    );
};

export default Country;