const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );

function buildPdfProvidesSection( item ) {
  const provides = get( item, keys.PROVIDES );

  if ( !provides || provides.length === 0 ) {
    return null;
  }

  const widths = [];
  const items = [];

  forEach( provides, ( p, index ) => {
    const cell = {
      border: [false, false, index < provides.length - 1, false],
      stack: [],
    };
    const description = get( p, keys.DESCRIPTION );
    const hours = get( p, keys.HOURS );
    cell.stack.push( {
      text: description,
      style: 'providesDescription',
    } );

    cell.stack.push( {
      text: hours,
      style: 'providesHours',
    } );

    widths.push( '*' );
    items.push( cell );
  } );

  return {
    table: {
      widths,
      body: [items],
    },
  };
}

module.exports = buildPdfProvidesSection;
