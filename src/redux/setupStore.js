import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import mainReducer from './mainReducer.js';

const enhancer = compose(install());

const initialState = {
  favCurrencies: ['USD', 'EUR', 'PHP', 'GEL'],
  currencyTable: [],
  error: null,
};

const store = createStore(mainReducer, initialState, enhancer);

export default store;
