const PdfPrinter = require( 'pdfmake' );
const fs = require( 'fs' );
const buildPdfAccessPointSection = require( './buildPdfAccessPointSection' );

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
  const { directory, fileName, accessPoints } = options;

  const accessPointSection = buildPdfAccessPointSection( accessPoints );

  const docDefinition = {
    content: [
      'First paragraph',
      [...accessPointSection],
    ],
    defaultStyle: {
      fontSize: 12,
    },
    styles: {
      sectionHeader: {
        fontSize: 14,
        bold: true,
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
