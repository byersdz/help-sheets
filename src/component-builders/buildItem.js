const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const formatPhone = require( '../formatters/formatPhone' );
const buildAddress = require( './buildAddress' );
const buildProvidesSection = require( './buildProvidesSection' );

function buildItem( item, className ) {
  const name = get( item, keys.NAME );
  const description = get( item, keys.DESCRIPTION );
  const phone = get( item, keys.PHONE );
  const phoneExtension = get( item, keys.PHONE_EXTENSION, '' );
  const url = get( item, keys.URL );

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

  const phoneRender = phone ? `
  <div class="field phone">
  ${ formatPhone( phone, phoneExtension ) }
  </div>
  ` : '';

  const addressRender = buildAddress( item );

  const urlRender = url ? `
  <div class="field url">
  <a href="${ url }" target="_blank" rel="noopener noreferrer">
    ${ url }
  </a>
  </div>
  ` : '';

  const providesRender = buildProvidesSection( item );

  return `
    <div class="item ${ className }">
    <div class="item-top">
      ${ nameRender }
      ${ descriptionRender }
      ${ phoneRender }
    </div>
    ${ addressRender }
    ${ urlRender }
    ${ providesRender }
    </div>
  `;
}

module.exports = buildItem;
