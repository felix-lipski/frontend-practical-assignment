import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CurrencyItem = ({ code }) => {
  const currencyTable = useSelector((state) => state.currencyTable);
  const [currObj, setCurrObj] = useState(undefined);

  useEffect(() => {
    setCurrObj(currencyTable.find((curr) => curr.code === code));
    console.log(currencyTable);
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
      <td>
        <button>x</button>
      </td>
    </tr>
  );
};

export default CurrencyItem;
