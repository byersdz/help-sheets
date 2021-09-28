function buildPdfLinks( pdfLink, largePdfLink ) {
  return `
  <div class="pdf-link do-not-print">
    <a href="${ pdfLink }">
      Click here to open the print optimized PDF version of this sheet.
    </a>
    - also available in
    <a href="${ largePdfLink }">
      large print
    </a>
  </div>
  `;
}

module.exports = buildPdfLinks;
