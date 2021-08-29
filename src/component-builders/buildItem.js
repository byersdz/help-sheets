const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const formatPhone = require( '../formatters/formatPhone' );

function buildItem( item, className ) {
  const name = get( item, keys.NAME );
  const description = get( item, keys.DESCRIPTION );
  const phone = get( item, keys.PHONE );
  const url = get( item, keys.URL );

  const nameRender = `
  <div class="name">
  ${ name }
  </div>
  `;

  const descriptionRender = `
  <div class="description">
  ${ description }
  </div>
  `;

  const phoneRender = `
  <div class="phone">
  ${ formatPhone( phone ) }
  </div>
  `;

  const urlRender = `
  <div class="url">
  ${ url }
  </div>
  `;

  return `
    <div class="item ${ className }">
    ${ nameRender }
    ${ descriptionRender }
    ${ phoneRender }
    ${ urlRender }
    </div>
  `;
}

module.exports = buildItem;
