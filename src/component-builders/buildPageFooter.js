function buildPageFooter() {
  return `
  <div class="page-footer">
  <p>
    Available services can change often, please email
    <a href="mailto:support@HelpSheets.org">support@HelpSheets.org</a>
    with any updates to the information provided or new services that may be useful.
  </p>
  <p>
    HelpSheets.org does not manage any of the organizations listed, please contact
    each agency for details.
  </p>
  <p class="do-not-print">
    HelpSheets.org is open source. You can view the source code and contribute on
    <a href="https://github.com/byersdz/help-sheets" target="_blank" rel="noopener noreferrer">GitHub</a>.
  </p>
  </div>
  `;
}

module.exports = buildPageFooter;
