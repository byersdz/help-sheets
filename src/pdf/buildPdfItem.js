const get = require( 'lodash/get' );
const { keys } = require( '../../constants' );

function buildPdfItem( item ) {
  const name = get( item, keys.NAME, '' );

  return {
    text: name,
  };
}

module.exports = buildPdfItem;
