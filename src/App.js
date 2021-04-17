import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTable } from './redux/mainReducer';

import FavCurrencies from './components/FavCurrencies.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTable('A'));
    dispatch(getTable('B'));
  });

  return (
    <main className="App">
      <FavCurrencies />
    </main>
  );
}

export default App;
