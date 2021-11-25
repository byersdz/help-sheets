
// Constants
export const TAB_1 = 'tab1';
export const TAB_2 = 'tab2';

// Actions
export const SELECT_NAVIGATION_TAB = 'SELECT_NAVIGATION_TAB';

// Reducer
export default function reducer( state = TAB_1, action ) {
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
