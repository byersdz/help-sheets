function buildPdfLinks( pdfLink ) {
  return `
  <div class="pdf-link do-not-print">
    <a href="${ pdfLink }">
      Click here to open the print optimized PDF version of this sheet.
    </a>
  </div>
  `;
}

module.exports = buildPdfLinks;
