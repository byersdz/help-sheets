const PdfPrinter = require( 'pdfmake' );
const fs = require( 'fs' );
const cloneDeep = require( 'lodash/cloneDeep' );
const buildSection = require( './buildSection' );

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

const printer = new PdfPrinter( fonts );

function createSheetPdf( options ) {
  const {
    directory,
    fileName,
    accessPoints,
    basicNeeds,
    resources,
  } = options;

  const accessPointSection = buildSection( {
    items: accessPoints,
    header: 'Access Points',
    description: ' - Entry points to find and access local resources.',
  } );

  const basicNeedsSection = buildSection( {
    items: basicNeeds,
    header: 'Basic Needs',
    description: ' - Basic needs such as food pantries, meals, showers, or clothing.',
  } );

  const resourcesSection = buildSection( {
    items: resources,
    header: 'Resources',
    description: '',
  } );

  const testSection = cloneDeep( resourcesSection );

  const docDefinition = {
    content: [
      [...accessPointSection],
      [...basicNeedsSection],
      [...resourcesSection],
      [...testSection],
    ],
    defaultStyle: {
      fontSize: 11,
    },
    styles: {
      sectionHeader: {
        fontSize: 14,
        bold: true,
      },
      itemName: {
        bold: true,
      },
      itemPhone: {
        bold: true,
      },
      itemUrl: {
        color: '#187e20',
      },
    },
    pageMargins: [20, 20, 20, 20],
  };

  const pdfDoc = printer.createPdfKitDocument( docDefinition );
  const writeStream = fs.createWriteStream( `${ directory }/${ fileName }` );
  pdfDoc.pipe( writeStream );
  pdfDoc.end();
}

module.exports = createSheetPdf;
