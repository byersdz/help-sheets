const { priorities, keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const concat = require( 'lodash/concat' );
const filter = require( 'lodash/filter' );
const includes = require( 'lodash/includes' );

function combineItems( itemLists, excludeList = [] ) {
  let filteredItemLists = [];

  if ( !excludeList || excludeList.length === 0 ) {
    filteredItemLists = itemLists;
  }
  else {
    forEach( itemLists, list => {
      const filteredList = filter( list, item => {
        const id = get( item, keys.ID );
        if ( !id ) {
          return true;
        }

        return !includes( excludeList, id );
      } );
      filteredItemLists.push( filteredList );
    } );
  }

  const normalPriorityItems = [];
  const lowPriorityItems = [];

  forEach( filteredItemLists, list => {
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
