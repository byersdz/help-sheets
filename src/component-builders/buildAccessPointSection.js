const forEach = require( 'lodash/forEach' );
const buildAccessPoint = require( './buildAccessPoint' );

function buildAccessPointSection( accessPoints ) {
  let accessPointsRender = '';

  forEach( accessPoints, point => {
    accessPointsRender += buildAccessPoint( point );
  } );

  return `
  <div class="access-points-section">
  <h3>Access Points</h3>
  ${ accessPointsRender }
  </div>
  `;
}

module.exports = buildAccessPointSection;
