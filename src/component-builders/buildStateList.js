const get = require( 'lodash/get' );
const orderBy = require( 'lodash/orderBy' );
const forEach = require( 'lodash/forEach' );
const { keys } = require( '../../constants' );
const buildCityList = require( './buildCityList' );

function buildStateList( data ) {
  const { country, linkPrefix } = data;
  const states = get( country, keys.STATES );

  if ( !states || states.length === 0 ) {
    return '';
  }

  const orderedStates = orderBy( states, [keys.NAME] );

  let itemsRender = '';

  forEach( orderedStates, state => {
    const stateUrlName = get( state, keys.URL_NAME, '' );
    const stateLinkPrefix = `${ linkPrefix }${ stateUrlName }/`;
    const citiesRender = buildCityList( { state, linkPrefix: stateLinkPrefix } );

    itemsRender += `
    <div class="list-item state-list-item">
    <a href="${ stateLinkPrefix }">
      ${ get( state, keys.NAME ) }
    </a>
    ${ citiesRender }
    </div>
    `;
  } );

  return `
  <div class="list state-list">
    ${ itemsRender }
  </div>
  `;
}

module.exports = buildStateList;
