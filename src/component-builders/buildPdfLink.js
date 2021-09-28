function buildPdfLink( pdfLink, assetsPrefix ) {
  return `
  <div class="pdf-link do-not-print">
    <div>
      <a href="${ pdfLink }">
        Click here to open the print optimized PDF version of this sheet.
      </a>
    </div>
    <div>
      <a href="${ pdfLink }">
        <img src="${ assetsPrefix }images/pdf-icon.png" />
      </a>
    </div>
  </div>
  `;
}

module.exports = buildPdfLink;
