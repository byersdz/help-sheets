const get = require( 'lodash/get' );
const { keys } = require( '../../constants' );

function buildAddress( item ) {
  const address1 = get( item, keys.ADDRESS_1, '' );
  const address2 = get( item, keys.ADDRESS_2, '' );
  const city = get( item, keys.CITY );
  const state = get( item, keys.STATE );
  const zipCode = get( item, keys.ZIP_CODE );

  if ( !address1 && !city && !state && !zipCode ) {
    return '';
  }

  const line1Render = address1 ? `
  <div class="line line-1">
    ${ address1 }
  </div>
  ` : '';

  const line2Render = address2 ? `
  <div class="line line-2">
    ${ address2 }
  </div>
  ` : '';

  let line3 = city || '';

  if ( city && state ) {
    line3 += `, ${ state }`;
  }
  else {
    line3 += state;
  }

  if ( city || state ) {
    line3 += ' ';
  }

  line3 += zipCode;

  const line3Render = line3 ? `
  <div class="line line-3">
    ${ line3 }
  </div>
  ` : '';

  return `
  <div class="field address">
    ${ line1Render }
    ${ line2Render }
    ${ line3Render }
  </div>
  `;
}

module.exports = buildAddress;
