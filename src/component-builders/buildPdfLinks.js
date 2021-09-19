function buildPdfLinks( pdfLink ) {
  return `
  <div class="pdf-link">
    <a href="${ pdfLink }">
      Click here to open the PDF version of this sheet.
    </a>
  </div>
  `;
}

module.exports = buildPdfLinks;
