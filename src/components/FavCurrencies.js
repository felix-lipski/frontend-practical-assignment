import React from 'react';
import { useSelector } from 'react-redux';

import CurrencyItem from './CurrencyItem.js';

const FavCurrencies = () => {
  const favCurrencies = useSelector((state) => state.favCurrencies);
  return (
    <>
      <h1>Favourites</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Exchange Rate (PLN)</th>
          </tr>
        </thead>
        <tbody>
          {favCurrencies.map((code) => (
            <CurrencyItem code={code} key={code} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FavCurrencies;
