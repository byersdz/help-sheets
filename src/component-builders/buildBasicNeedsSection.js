const forEach = require( 'lodash/forEach' );
const buildItem = require( './buildItem' );

function buildBasicNeedsSection( items ) {
  if ( !items || items.length === 0 ) {
    return '';
  }

  let itemsRender = '';

  forEach( items, item => {
    itemsRender += buildItem( item, 'basic-need' );
  } );

  return `
  <div class="basic-needs-section section">
  <div class="basic-needs-section-header section-header">
    <h2>Basic Needs</h2>
    <div class="section-header-description">
      Basic needs such as food pantries, meals, showers, or clothing.
    </div>
  </div>
    <div class="items">
    ${ itemsRender }
    </div>
  </div>
  `;
}

module.exports = buildBasicNeedsSection;
