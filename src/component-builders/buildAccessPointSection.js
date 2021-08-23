const forEach = require( 'lodash/forEach' );
const buildAccessPoint = require( './buildAccessPoint' );

function buildAccessPointSection( accessPoints ) {
  let accessPointsRender = '';

  forEach( accessPoints, point => {
    accessPointsRender += buildAccessPoint( point );
  } );

  return `
  <div class="access-points-section">
  ${ accessPointsRender }
  </div>
  `;
}

module.exports = buildAccessPointSection;
