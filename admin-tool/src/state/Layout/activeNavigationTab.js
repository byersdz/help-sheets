
// Constants
export const SELECT_DATA = 'SELECT_DATA';
export const LOCATION_DATA = 'LOCATION_DATA';

// Actions
export const SELECT_NAVIGATION_TAB = 'SELECT_NAVIGATION_TAB';

// Reducer
export default function reducer( state = LOCATION_DATA, action ) {
  switch ( action.type ) {
    case SELECT_NAVIGATION_TAB: {
      return action.payload;
    }
    default:
      return state;
  }
}

// Action Creators
export function selectNavigationTab( tab ) {
  return {
    type: SELECT_NAVIGATION_TAB,
    payload: tab,
  };
}
