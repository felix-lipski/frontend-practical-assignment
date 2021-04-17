import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CurrencyItem from './CurrencyItem';
import SearchCurrency from './SearchCurrency';
import { delAllFavs } from '../redux/mainReducer';

const FavCurrencies = () => {
  const dispatch = useDispatch();
  const favCurrencies = useSelector((state) => state.favCurrencies);
  const [searching, setSearching] = useState(false);
  return (
    <>
      <h1>Favourites</h1>

      <table>
        {favCurrencies.length > 0 && (
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Exchange Rate (PLN)</th>
            </tr>
          </thead>
        )}
        <tbody>
          {favCurrencies.map((code) => (
            <CurrencyItem code={code} key={code} />
          ))}
        </tbody>
      </table>
      {searching ? (
        <SearchCurrency setSearching={setSearching} />
      ) : (
        <div className="btns-under-list">
          <button onClick={() => setSearching(true)}>add currency</button>
          <button
            className="btn-delall"
            onClick={() => window.confirm(`Delete all currencies?`) && dispatch(delAllFavs())}
          >
            delete all
          </button>
        </div>
      )}
    </>
  );
};

export default FavCurrencies;
