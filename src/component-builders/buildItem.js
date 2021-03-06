const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const formatPhone = require( '../formatters/formatPhone' );
const formatUrl = require( '../formatters/formatUrl' );
const formatServes = require( '../formatters/formatServes' );
const buildAddress = require( './buildAddress' );
const buildProvidesSection = require( './buildProvidesSection' );

function buildItem( item, className ) {
  const name = get( item, keys.NAME );
  const description = get( item, keys.DESCRIPTION );
  const serves = get( item, keys.SERVES );
  const phone = get( item, keys.PHONE );
  const phoneExtension = get( item, keys.PHONE_EXTENSION, '' );
  const countryCode = get( item, keys.COUNTRY_CODE, '' );
  const url = get( item, keys.URL, '' );
  const displayUrl = formatUrl( url );
  const altUrl = get( item, keys.ALT_URL, '' );
  const displayAltUrl = formatUrl( altUrl );

  const nameRender = name ? `
  <div class="field name">
  ${ name }
  </div>
  ` : '';

  const descriptionRender = description ? `
  <div class="field description">
  ${ description }
  </div>
  ` : '';

  const servesRender = serves ? `
  <div class="field serves">
  ${ formatServes( serves ) }
  </div>
  ` : '';

  const phoneRender = phone ? `
  <div class="field phone">
  <a href="tel:${ countryCode }${ phone }" class="phone-link">
    ${ formatPhone( phone, phoneExtension, countryCode ) }
  </a>
  </div>
  ` : '';

  const addressRender = buildAddress( item );

  const urlRender = url ? `
  <div class="field url">
  <a href="${ url }" target="_blank" rel="noopener noreferrer">
    ${ displayUrl }
  </a>
  </div>
  ` : '';

  const altUrlRender = altUrl ? `
  <div class="field url">
  <a href="${ altUrl }" target="_blank" rel="noopener noreferrer">
    ${ displayAltUrl }
  </a>
  </div>
  ` : '';

  const providesRender = buildProvidesSection( item );

  return `
    <div class="item ${ className }">
    <div class="item-top">
      ${ nameRender }
      ${ descriptionRender }
      ${ servesRender }
      ${ phoneRender }
    </div>
    ${ addressRender }
    ${ urlRender }
    ${ altUrlRender }
    ${ providesRender }
    </div>
  `;
}

module.exports = buildItem;
