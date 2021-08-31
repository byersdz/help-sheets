const { priorities, keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const concat = require( 'lodash/concat' );

function combineItems( itemLists ) {
  const normalPriorityItems = [];
  const lowPriorityItems = [];

  forEach( itemLists, list => {
    forEach( list, item => {
      const priority = get( item, keys.PRIORITY, priorities.NORMAL );

      if ( priority === priorities.LOW ) {
        lowPriorityItems.push( item );
      }
      else {
        normalPriorityItems.push( item );
      }
    } );
  } );

  return concat( normalPriorityItems, lowPriorityItems );
}

module.exports = combineItems;
