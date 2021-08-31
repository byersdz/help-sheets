const forEach = require( 'lodash/forEach' );
const buildItem = require( './buildItem' );

function buildResourcesSection( resources ) {
  if ( !resources || resources.length === 0 ) {
    return '';
  }

  let resourcesRender = '';

  forEach( resources, resource => {
    resourcesRender += buildItem( resource, 'resource' );
  } );

  return `
  <div class="access-points-section section">
  <div class="resources-section-header section-header">
    <h2>Resources</h2>
  </div>
    <div class="items">
    ${ resourcesRender }
    </div>
  </div>
  `;
}

module.exports = buildResourcesSection;
