import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect (() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h1>Welcome to Rest Countries API</h1>
            <h2>Total Countries: {countries.length}</h2>

            {
                countries.map(country => <Country></Country>)
            }
        </div>
    );
};

export default Countries;