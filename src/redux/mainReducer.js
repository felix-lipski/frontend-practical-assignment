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

// REDUCER
const mainReducer = (state, action) => {
  switch (action.type) {
    case GET_TABLE:
      return state;
    case ADD_TO_FAVS:
      return state;
    case DEL_FROM_FAVS:
      return state;
    case DEL_ALL_FAVS:
      return state;
    default:
      return state;
  }
};

export default mainReducer;
