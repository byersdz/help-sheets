
import { combineReducers } from 'redux';

import dataDirectory from './dataDirectory';
import locationData from './locationData';
import selectedLocation from './selectedLocation';

export default combineReducers( {
  dataDirectory,
  locationData,
  selectedLocation,
} );
