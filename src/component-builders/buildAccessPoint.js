const { keys } = require( '../../constants' );
const get = require( 'lodash/get' );
const formatPhone = require( '../formatters/formatPhone' );

function buildAccessPoint( accessPoint ) {
  const name = get( accessPoint, keys.NAME );
  const description = get( accessPoint, keys.DESCRIPTION );
  const phone = get( accessPoint, keys.PHONE );
  const url = get( accessPoint, keys.URL );

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
    <div class="access-point item">
    ${ nameRender }
    ${ descriptionRender }
    ${ phoneRender }
    ${ urlRender }
    </div>
  `;
}

module.exports = buildAccessPoint;