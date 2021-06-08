import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchcountries from './components/Searchcountries';
import Countrylist from './components/Countrylist';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  }, []);

  return (
    <div>
      {
        countries.length ?
        <>
          <Searchcountries country={country} setCountry={setCountry} />
          { country && <Countrylist country={country} countries={countries} setCountry={setCountry} /> }
        </>
        :
        <p>Loading application...</p>
      }
    </div>
  );
};

export default App;