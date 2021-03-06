const get = require( 'lodash/get' );
const { keys } = require( '../../constants' );

function formatAddress( item ) {
  const address1 = get( item, keys.ADDRESS_1, '' );
  const address2 = get( item, keys.ADDRESS_2, '' );
  const city = get( item, keys.CITY );
  const state = get( item, keys.STATE );
  const zipCode = get( item, keys.ZIP_CODE );

  if ( !address1 && !city && !state && !zipCode ) {
    return '';
  }

  let result = address1;
  if ( address2 ) {
    result += ` ${ address2 }`;
  }

  let cityStateZip = city;
  if ( state ) {
    if ( cityStateZip ) {
      cityStateZip += `, ${ state }`;
    }
    else {
      cityStateZip = state;
    }
  }

  if ( zipCode ) {
    if ( cityStateZip ) {
      cityStateZip += ` ${ zipCode }`;
    }
    else {
      cityStateZip = zipCode;
    }
  }

  if ( cityStateZip ) {
    if ( result ) {
      result += `, ${ cityStateZip }`;
    }
    else {
      result = cityStateZip;
    }
  }

  return result;
}

module.exports = formatAddress;
