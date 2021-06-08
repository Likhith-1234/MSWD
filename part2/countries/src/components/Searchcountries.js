import React from 'react';

const Searchcountries = ({country, setCountry}) => {
    return (
        <div>
            <label htmlFor='find-country'>Search countries: </label>
            <input id='find-country' value={country} autoFocus autoComplete='off'
                onChange={event => setCountry(event.target.value)}
            />
        </div>
    );
};

export default Searchcountries;