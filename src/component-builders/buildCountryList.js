const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const { keys } = require( '../../constants' );
const buildStateList = require( './buildStateList' );

function buildCountryList( data ) {
  const { countries, linkPrefix } = data;

  if ( !countries || countries.length === 0 ) {
    return '';
  }

  let itemsRender = '';

  forEach( countries, country => {
    const countryUrlName = get( country, keys.URL_NAME, '' );
    const countryLinkPrefix = `${ linkPrefix }${ countryUrlName }/`;
    const statesRender = buildStateList( { country, linkPrefix: countryLinkPrefix } );

    itemsRender += `
    <div class="list-item country-list-item">
    <a href="${ countryLinkPrefix }">
      ${ get( country, keys.NAME ) }
    </a>
    ${ statesRender }
    </div>
    `;
  } );

  return `
  <div class="list country-list do-not-print">
    ${ itemsRender }
  </div>
  `;
}

module.exports = buildCountryList;
