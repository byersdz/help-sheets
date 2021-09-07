const forEach = require( 'lodash/forEach' );
const buildPdfItem = require( './buildPdfItem' );

function buildPdfAccessPointSection( accessPoints ) {
  if ( !accessPoints || accessPoints.length === 0 ) {
    return [];
  }

  const result = [];

  const rows = [];
  rows.push( [
    {
      colSpan: 2,
      text: [
        {
          text: 'Access Points',
          style: 'sectionHeader',
        },
        {
          text: ' Entry points to find and access local resources',
          style: 'sectionDescription',
        },
      ],
    },
    {},
  ] );

  let currentRow = [];

  forEach( accessPoints, ( item, index ) => {
    const builtItem = buildPdfItem( item );
    currentRow.push( builtItem );
    if ( index === accessPoints.length - 1 ) {
      if ( currentRow.length === 1 ) {
        currentRow.push( {} );
      }
      rows.push( currentRow );
    }
    else if ( currentRow.length > 1 ) {
      rows.push( currentRow );
      currentRow = [];
    }
  } );

  console.log( rows );

  result.push( {
    table: {
      widths: ['*', '*'],
      body: rows,
    },
  } );

  return result;
}

module.exports = buildPdfAccessPointSection;
