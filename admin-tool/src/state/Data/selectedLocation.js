
import cloneDeep from 'lodash/cloneDeep';

// Actions
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const PUSH_LOCATION_TO_SELECTION = 'PUSH_LOCATION_TO_SELECTION';

// Reducer
export default function reducer( state = [], action ) {
  switch ( action.type ) {
    case SELECT_LOCATION: {
      return cloneDeep( action.payload );
    }
    case PUSH_LOCATION_TO_SELECTION: {
      const newLocation = cloneDeep( state );
      newLocation.push( cloneDeep( action.payload ) );
      return newLocation;
    }
    default:
      return state;
  }
}

// Action Creators
export function selectLocation( location ) {
  return {
    type: SELECT_LOCATION,
    payload: location,
  };
}

export function pushLocationToSelection( location ) {
  return {
    type: PUSH_LOCATION_TO_SELECTION,
    payload: location,
  };
}
