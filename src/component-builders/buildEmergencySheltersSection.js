const forEach = require( 'lodash/forEach' );
const buildItem = require( './buildItem' );

function buildEmergencySheltersSection( items ) {
  if ( !items || items.length === 0 ) {
    return '';
  }

  let itemsRender = '';

  forEach( items, item => {
    itemsRender += buildItem( item, 'basic-need' );
  } );

  return `
  <div class="emergency-shelters-section section">
  <div class="emergency-shelters-section-header section-header">
    <h2>Emergency Shelters</h2>
  </div>
    <div class="items">
    ${ itemsRender }
    </div>
  </div>
  `;
}

module.exports = buildEmergencySheltersSection;
