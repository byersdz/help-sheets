const forEach = require( 'lodash/forEach' );
const buildItem = require( './buildItem' );

function buildAccessPointSection( accessPoints ) {
  let accessPointsRender = '';

  forEach( accessPoints, point => {
    accessPointsRender += buildItem( point, 'access-point' );
  } );

  return `
  <div class="access-points-section section">
  <div class="access-points-section-header section-header">
    <h2>Access Points</h2>
    <div class="section-header-description">
      Entry points to find and access local resources
    </div>
  </div>
  ${ accessPointsRender }
  </div>
  `;
}

module.exports = buildAccessPointSection;
