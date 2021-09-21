const get = require( 'lodash/get' );
const { keys } = require( '../../constants' );
const formatAddress = require( './formatAddress' );

function formatMapLink( item ) {
  const address = formatAddress( item );
  const name = get( item, keys.NAME, '' );

  const queryString = encodeURIComponent( `${ name }, ${ address }` );
  return `https://www.google.com/maps/search/?api=1&query=${ queryString }`;
}

module.exports = formatMapLink;
