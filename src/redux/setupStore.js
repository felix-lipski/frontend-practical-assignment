import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import mainReducer from './mainReducer.js';

const enhancer = compose(install());

const initialState = {
  favCurrencies: [],
  currencyTable: [],
  mainCurrency: null,
};

const store = createStore(mainReducer, initialState, enhancer);

export default store;
