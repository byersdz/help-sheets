const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );

function buildResource( resource ) {
  const name = get( resource, keys.NAME );
  const description = get( resource, keys.DESCRIPTION );
  const phone = get( resource, keys.PHONE );
  const url = get( resource, keys.URL );

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
  ${ phone }
  </div>
  `;

  const urlRender = `
  <div class="url">
  ${ url }
  </div>
  `;

  return `
    <div class="resource item">
    ${ nameRender }
    ${ descriptionRender }
    ${ phoneRender }
    ${ urlRender }
    </div>
  `;
}

module.exports = buildResource;
