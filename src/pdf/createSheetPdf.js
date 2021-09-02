const PdfPrinter = require( 'pdfmake' );
const fs = require( 'fs' );

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
  const { directory, fileName } = options;

  const docDefinition = {
    content: [
      'First paragraph',
      'Another paragraph, this time little bit longer to make sure, this line will be divided into at least two lines',
    ],
  };

  const pdfDoc = printer.createPdfKitDocument( docDefinition );
  const writeStream = fs.createWriteStream( `${ directory }/${ fileName }` );
  pdfDoc.pipe( writeStream );
  pdfDoc.end();
}

module.exports = createSheetPdf;
