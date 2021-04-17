import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavs } from '../redux/mainReducer';

const currToString = (curr) => `${curr.code} - ${curr.currency}`;

const SearchCurrency = ({ setSearching }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const currencyTable = useSelector((state) => state.currencyTable);
  const searchResults = currencyTable.filter((curr) =>
    currToString(curr).toUpperCase().includes(searchTerm.toUpperCase())
  );
  const confirmSearch = (code) => {
    searchResults.length > 0 && dispatch(addToFavs(code));
    setSearching(false);
  };
  return (
    <>
      <input
        autoFocus={true}
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && confirmSearch(searchResults[0].code)}
      />

      <ul className="searchbox">
        {searchResults.map((curr) => (
          <li onClick={() => confirmSearch(curr.code)} key={curr.code}>
            {currToString(curr)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchCurrency;
