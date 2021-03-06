const get = require( 'lodash/get' );
const { keys } = require( '../../constants' );
const formatPhone = require( '../formatters/formatPhone' );
const formatAddress = require( '../formatters/formatAddress' );
const formatUrl = require( '../formatters/formatUrl' );
const formatServes = require( '../formatters/formatServes' );
const buildPdfProvidesSection = require( './buildPdfProvidesSection' );

function buildPdfItem( item ) {
  const name = get( item, keys.NAME, '' );
  const description = get( item, keys.DESCRIPTION, '' );
  const serves = get( item, keys.SERVES, '' );
  const phone = get( item, keys.PHONE );
  const phoneExtension = get( item, keys.PHONE_EXTENSION );
  const url = get( item, keys.URL );
  const altUrl = get( item, keys.ALT_URL );
  const address = formatAddress( item );

  const result = [];

  const topText = [
    {
      text: name,
      style: 'itemName',
    },
  ];

  if ( description ) {
    topText.push( {
      text: ` - ${ description }`,
      style: 'itemDescription',
    } );
  }

  if ( serves ) {
    topText.push( {
      text: ` - ${ formatServes( serves ) }`,
      style: 'itemServes',
    } );
  }

  result.push( {
    text: topText,
  } );

  if ( address ) {
    result.push( {
      text: address,
      style: 'itemAddress',
    } );
  }

  if ( phone || url ) {
    const phoneSection = { text: [] };
    if ( phone ) {
      phoneSection.text.push( {
        text: formatPhone( phone, phoneExtension ),
        style: 'itemPhone',
      } );
    }

    if ( url ) {
      const displayUrl = formatUrl( url );
      const urlText = phone ? ` - ${ displayUrl }` : displayUrl;
      phoneSection.text.push( {
        text: urlText,
        style: 'itemUrl',
        link: url,
      } );
    }

    result.push( phoneSection );
  }

  if ( altUrl ) {
    const displayUrl = formatUrl( altUrl );
    result.push( {
      text: displayUrl,
      style: 'itemUrl',
      link: altUrl,
    } );
  }

  const providesSection = buildPdfProvidesSection( item );
  if ( providesSection ) {
    result.push( providesSection );
  }

  return result;
}

module.exports = buildPdfItem;
