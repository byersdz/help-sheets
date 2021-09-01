const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );

function buildProvidesSection( item ) {
  const provides = get( item, keys.PROVIDES );

  let result = '';

  if ( !provides || provides.length === 0 ) {
    return result;
  }

  result += `<div class="field provides">
  <div class="provides-items">
  `;

  forEach( provides, p => {
    const description = get( p, keys.DESCRIPTION );
    const hours = get( p, keys.HOURS );

    const descriptionRender = description ? `
    <div class="description">
    ${ description }
    </div>
    ` : '';

    const hoursRender = hours ? `
    <div class="hours">
    ${ hours }
    </div>
    ` : '';

    result += `
    <div class="provides-item">
    ${ descriptionRender }
    ${ hoursRender }
    </div>
    `;
  } );

  result += '</div></div>\n';

  return result;
}

module.exports = buildProvidesSection;
