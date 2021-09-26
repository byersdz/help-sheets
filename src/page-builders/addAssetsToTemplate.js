const { build, templates } = require( '../../constants' );

function addAssetsToTemplate( homeDirectory, assetsPrefix, template ) {
  let result = template;
  const normalizeCssPath = `${ assetsPrefix }${ build.NORMALIZE_CSS_PATH }`;
  const stylesCssPath = `${ assetsPrefix }${ build.STYLES_CSS_PATH }`;

  result = result.replace( templates.HOME_LINK, homeDirectory );
  result = result.replace( templates.NORMALIZE_CSS, normalizeCssPath );
  result = result.replace( templates.STYLES_CSS, stylesCssPath );

  return result;
}

module.exports = addAssetsToTemplate;
