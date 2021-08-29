const forEach = require( 'lodash/forEach' );
const buildResource = require( './buildResource' );

function buildResourcesSection( resources ) {
  let resourcesRender = '';

  forEach( resources, resource => {
    resourcesRender += buildResource( resource );
  } );

  return `
  <div class="access-points-section section">
  <div class="resources-section-header section-header">
    <h2>Resources</h2>
    <div class="section-header-description">
      Miscellaneous Resources
    </div>
  </div>
  ${ resourcesRender }
  </div>
  `;
}

module.exports = buildResourcesSection;
