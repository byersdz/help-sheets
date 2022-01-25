
// Actions
export const SET_DATA_DIRECTORY = 'SET_DATA_DIRECTORY';

// Reducer
export default function reducer( state = '', action ) {
  switch ( action.type ) {
    case SET_DATA_DIRECTORY: {
      return action.payload;
    }
    default:
      return state;
  }
}

// Action Creators
export function setDataDirectory( directory ) {
  return {
    type: SET_DATA_DIRECTORY,
    payload: directory,
  };
}
