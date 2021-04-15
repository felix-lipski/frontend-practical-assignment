import React from 'react';
import { useSelector } from 'react-redux';

const FavCurrencies = () => {
  const favCurrencies = useSelector((state) => state.favCurrencies);
  return (
    <ul>
      {favCurrencies.map((code) => (
        <li key={code}>{code}</li>
      ))}
    </ul>
  );
};

export default FavCurrencies;
