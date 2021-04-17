import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { delFromFavs } from '../redux/mainReducer';

const CurrencyItem = ({ code }) => {
  const dispatch = useDispatch();
  const currencyTable = useSelector((state) => state.currencyTable);
  const [currObj, setCurrObj] = useState(undefined);

  useEffect(() => {
    setCurrObj(currencyTable.find((curr) => curr.code === code));
  }, [currencyTable, code]);

  return (
    <tr>
      <td>{code}</td>

      {currObj ? (
        <>
          <td>{currObj.currency}</td>
          <td>{currObj.mid}</td>
        </>
      ) : (
        <>
          <td>Loading...</td>
          <td>Loading...</td>
        </>
      )}
      <td className="col-del">
        <button
          className="btn-del"
          onClick={() => window.confirm(`Delete currency ${code}?`) && dispatch(delFromFavs(code))}
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default CurrencyItem;
