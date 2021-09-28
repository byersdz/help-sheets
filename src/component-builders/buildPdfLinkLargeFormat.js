function buildPdfLinkLargeFormat( pdfLink, assetsPrefix ) {
  return `
  <div class="pdf-link do-not-print">
    <div>
      <a href="${ pdfLink }">
        This sheet is also available as a large format PDF for the visually impaired.
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

module.exports = buildPdfLinkLargeFormat;
