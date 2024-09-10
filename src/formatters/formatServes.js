const forEach = require( 'lodash/forEach' );
const { serves } = require( '../../constants' );

const displayStrings = {};
displayStrings[serves.MEN] = 'Men';
displayStrings[serves.WOMEN] = 'Women';
displayStrings[serves.WOMEN_WITH_CHILDREN] = 'Women w/ Children';
displayStrings[serves.PREGNANT_WOMEN] = 'Pregnant Women';
displayStrings[serves.VETERANS] = 'Veterans';
displayStrings[serves.YOUTH] = 'Youth';
displayStrings[serves.COUPLES] = 'Couples';
displayStrings[serves.FAMILIES] = 'Families';
displayStrings[serves.FAMILIES_WITHOUT_CHILDREN] = 'Families without Children';
displayStrings[serves.FAMILIES_WITH_CHILDREN] = 'Families with Children';
displayStrings[serves.AGE_14_TO_24] = 'Ages 14 to 24';
displayStrings[serves.AGE_18_TO_24] = 'Ages 18 to 24';
displayStrings[serves.AGE_12_TO_27] = 'Ages 12 to 17';

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
