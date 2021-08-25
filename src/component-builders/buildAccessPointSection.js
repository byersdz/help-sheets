const forEach = require( 'lodash/forEach' );
const buildAccessPoint = require( './buildAccessPoint' );

function buildAccessPointSection( accessPoints ) {
  let accessPointsRender = '';

  forEach( accessPoints, point => {
    accessPointsRender += buildAccessPoint( point );
  } );

  return `
  <div class="access-points-section section">
  <h2>Access Points</h2>
  ${ accessPointsRender }
  </div>
  `;
}

module.exports = buildAccessPointSection;
