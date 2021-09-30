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
    isLargePrint,
    accessPoints,
    basicNeeds,
    emergencyShelters,
    resources,
  } = options;

  const accessPointSection = buildSection( {
    items: accessPoints,
    header: 'Access Points',
    description: ' - Entry points to find and access local resources.',
    isLargePrint,
  } );

  const basicNeedsSection = buildSection( {
    items: basicNeeds,
    header: 'Basic Needs',
    description: ' - Basic needs such as food pantries, meals, showers, or clothing.',
    isLargePrint,
  } );

  const emergencySheltersSection = buildSection( {
    items: emergencyShelters,
    header: 'Emergency Shelters',
    description: '',
    isLargePrint,
  } );

  const resourcesSection = buildSection( {
    items: resources,
    header: 'Resources',
    description: '',
    isLargePrint,
  } );

  const linkColor = '#127748';

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
      [...emergencySheltersSection],
      [...resourcesSection],
      {
        text: 'Available services can change often.'
        + ' Please email support@HelpSheets.org with any updates to the information provided.',
        style: 'footer',
      },
      {
        text: 'HelpSheets.org does not manage any of the organizations listed, please contact each agency for details.',
        style: 'footer',
      },
    ],
    defaultStyle: {
      fontSize: isLargePrint ? 18 : 10,
    },
    styles: {
      headerPlace: {
        fontSize: isLargePrint ? 18 : 12,
        bold: true,
      },
      headerLink: {
        fontSize: isLargePrint ? 18 : 12,
        alignment: 'right',
        color: linkColor,
      },
      sectionHeader: {
        fontSize: isLargePrint ? 18 : 12,
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
      footer: {
        fontSize: isLargePrint ? 18 : 9,
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
