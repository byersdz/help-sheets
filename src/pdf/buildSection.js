const forEach = require( 'lodash/forEach' );
const buildPdfItem = require( './buildPdfItem' );

function buildSection( { items, header, description } ) {
  if ( !items || items.length === 0 ) {
    return [];
  }

  const result = [];

  const rows = [];
  rows.push( [
    {
      colSpan: 2,
      fillColor: '#eeeeee',
      text: [
        {
          text: header,
          style: 'sectionHeader',
        },
        {
          text: description,
          style: 'sectionDescription',
        },
      ],
    },
    {},
  ] );

  let currentRow = [];

  forEach( items, ( item, index ) => {
    const builtItem = buildPdfItem( item );
    currentRow.push( builtItem );
    if ( index === items.length - 1 ) {
      if ( currentRow.length === 1 ) {
        currentRow.push( { text: '', border: [true, true, false, false] } );
      }
      rows.push( currentRow );
    }
    else if ( currentRow.length > 1 ) {
      rows.push( currentRow );
      currentRow = [];
    }
  } );

  result.push( {
    margin: [0, 0, 0, 5],
    table: {
      widths: ['*', '*'],
      headerRows: 1,
      dontBreakRows: true,
      body: rows,
    },
  } );

  return result;
}

module.exports = buildSection;
