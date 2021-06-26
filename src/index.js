import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import PropertyCard from './ui/property_card/property_card';

ReactDOM.render(
  <React.StrictMode>
    <PropertyCard price={50}  mainImage='https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg' />
  </React.StrictMode>,
  document.getElementById('root')
);
