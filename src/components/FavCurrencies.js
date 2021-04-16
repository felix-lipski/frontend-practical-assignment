import React from 'react';
import { useSelector } from 'react-redux';

import CurrencyItem from './CurrencyItem.js';

const FavCurrencies = () => {
  const favCurrencies = useSelector((state) => state.favCurrencies);
  return (
    <>
      <h1>Favourites</h1>
      <table>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Exchange Rate (PLN)</th>
        </tr>
        {favCurrencies.map((code) => (
          <CurrencyItem code={code} key={code} />
        ))}
      </table>
    </>
  );
};

export default FavCurrencies;
