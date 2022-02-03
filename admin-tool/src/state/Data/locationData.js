
import cloneDeep from 'lodash/cloneDeep';

// Actions
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';

// Reducer
export default function reducer( state = null, action ) {
  switch ( action.type ) {
    case SET_LOCATION_DATA: {
      return cloneDeep( action.payload );
    }
    default:
      return state;
  }
}

// Action Creators
export function setLocationData( locationData ) {
  return {
    type: SET_LOCATION_DATA,
    payload: locationData,
  };
}
