import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CurrencyItem from './CurrencyItem.js';
import { delAllFavs } from '../redux/mainReducer';

const FavCurrencies = () => {
  const dispatch = useDispatch();
  const favCurrencies = useSelector((state) => state.favCurrencies);
  return (
    <>
      <h1>Favourites</h1>
      {favCurrencies.length > 0 ? (
        <>
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
          <button
            onClick={() => window.confirm(`Delete all currencies?`) && dispatch(delAllFavs())}
          >
            Delete all
          </button>
        </>
      ) : (
        <p>Nothing to show!</p>
      )}
    </>
  );
};

export default FavCurrencies;
