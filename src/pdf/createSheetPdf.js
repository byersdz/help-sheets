const PdfPrinter = require( 'pdfmake' );
const fs = require( 'fs' );
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
    placeName,
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

  const linkColor = '#187e20';

  const docDefinition = {
    content: [
      {
        table: {
          widths: ['auto', '*'],
          body: [[
            {
              text: `${ placeName } - Help Sheet`,
              style: 'headerPlace',
              border: [false, false, false, false],
            },
            {
              text: 'HelpSheets.org',
              style: 'headerLink',
              border: [false, false, false, false],
              link: 'https://helpsheets.org',
            },
          ]],
        },
      },
      [...accessPointSection],
      [...basicNeedsSection],
      [...resourcesSection],
    ],
    defaultStyle: {
      fontSize: 10,
    },
    styles: {
      headerPlace: {
        fontSize: 12,
        bold: true,
      },
      headerLink: {
        fontSize: 12,
        alignment: 'right',
        color: linkColor,
      },
      sectionHeader: {
        fontSize: 12,
        bold: true,
      },
      itemName: {
        bold: true,
      },
      itemPhone: {
        bold: true,
      },
      itemUrl: {
        color: linkColor,
      },
      providesDescription: {
        alignment: 'center',
        decoration: 'underline',
      },
      providesHours: {
        alignment: 'center',
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
