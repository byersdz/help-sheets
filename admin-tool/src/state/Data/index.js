
import { combineReducers } from 'redux';

import dataDirectory from './dataDirectory';
import locationData from './locationData';

export default combineReducers( {
  dataDirectory,
  locationData,
} );
