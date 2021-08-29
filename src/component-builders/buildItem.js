const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const formatPhone = require( '../formatters/formatPhone' );
const buildProvidesSection = require( './buildProvidesSection' );

function buildItem( item, className ) {
  const name = get( item, keys.NAME );
  const description = get( item, keys.DESCRIPTION );
  const phone = get( item, keys.PHONE );
  const url = get( item, keys.URL );

  const nameRender = name ? `
  <div class="name">
  ${ name }
  </div>
  ` : '';

  const descriptionRender = description ? `
  <div class="description">
  ${ description }
  </div>
  ` : '';

  const phoneRender = phone ? `
  <div class="phone">
  ${ formatPhone( phone ) }
  </div>
  ` : '';

  const urlRender = url ? `
  <div class="url">
  <a href="${ url }" target="_blank" rel="noopener noreferrer">
    ${ url }
  </a>
  </div>
  ` : '';

  const providesRender = buildProvidesSection( item );

  return `
    <div class="item ${ className }">
    ${ nameRender }
    ${ descriptionRender }
    ${ phoneRender }
    ${ urlRender }
    ${ providesRender }
    </div>
  `;
}

module.exports = buildItem;
