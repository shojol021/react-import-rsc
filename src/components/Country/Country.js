import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Name: {props.Capital}</h1>
        </div>
    );
};

export default Country;