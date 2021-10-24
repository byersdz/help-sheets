const forEach = require( 'lodash/forEach' );
const { serves } = require( '../../constants' );

const displayStrings = {};
displayStrings[serves.MEN] = 'Men';
displayStrings[serves.WOMEN] = 'Women';
displayStrings[serves.WOMEN_WITH_CHILDREN] = 'Women w/ Children';
displayStrings[serves.VETERANS] = 'Veterans';

function formatServes( servesData ) {
  let result = 'Serves:';

  forEach( servesData, ( item, index ) => {
    if ( index === 0 ) {
      result += ` ${ displayStrings[item] }`;
    }
    else {
      result += `, ${ displayStrings[item] }`;
    }
  } );

  return result;
}

module.exports = formatServes;