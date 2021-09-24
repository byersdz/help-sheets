const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const orderBy = require( 'lodash/orderBy' );
const { keys } = require( '../../constants' );

function buildCityList( data ) {
  const { state, linkPrefix } = data;
  const cities = get( state, keys.CITIES );

  if ( !cities || cities.length === 0 ) {
    return '';
  }

  const orderedCities = orderBy( cities, [keys.NAME] );

  let itemsRender = '';

  forEach( orderedCities, city => {
    itemsRender += `
    <div class="list-item city-list-item">
    <a href="${ linkPrefix }${ get( city, keys.URL_NAME, '' ) }">
     ${ get( city, keys.NAME, '' ) }
    </a>
    </div>
    `;
  } );

  return `
  <div class="list city-list">
    ${ itemsRender }
  </div>
  `;
}
module.exports = buildCityList;
