import { loop, Cmd } from 'redux-loop';

// TYPES
const GET_TABLE = 'GET_TABLE';
const ADD_TO_FAVS = 'ADD_TO_FAVS';
const DEL_FROM_FAVS = 'DEL_FROM_FAVS';
const DEL_ALL_FAVS = 'DEL_ALL_FAVS';

// ACTIONS
export const getTable = (tableId) => ({ type: GET_TABLE, payload: { tableId } });
export const addToFavs = (code) => ({ type: ADD_TO_FAVS, payload: { code } });
export const delFromFavs = (code) => ({ type: DEL_FROM_FAVS, payload: { code } });
export const delAllFavs = (code) => ({ type: DEL_ALL_FAVS, payload: { code } });

const fetchTable = (tableId) =>
  fetch(`http://api.nbp.pl/api/exchangerates/tables/${tableId}/`, {
    headers: { Accept: 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => data);

// REDUCER
const mainReducer = (state, action) => {
  switch (action.type) {
    case GET_TABLE:
      return loop(
        state,
        Cmd.run(() => fetchTable(action.payload.tableId), {
          successActionCreator: (table) => ({
            type: 'TABLE_FETCH_SUCCESSFUL',
            payload: { table },
          }),
          failActionCreator: (error) => ({ type: 'TABLE_FETCH_FAILED', error }),
        })
      );
    case 'TABLE_FETCH_SUCCESSFUL':
      return {
        ...state,
        currencyTable: [...state.currencyTable, ...action.payload.table[0].rates],
      };
    case 'TABLE_FETCH_FAILED':
      return { ...state, error: action.error };

    case ADD_TO_FAVS:
      return state;

    case DEL_FROM_FAVS:
      return {
        ...state,
        favCurrencies: state.favCurrencies.filter((code) => code !== action.payload.code),
      };

    case DEL_ALL_FAVS:
      return state;
    default:
      return state;
  }
};

export default mainReducer;
