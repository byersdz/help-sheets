const { build, templates } = require( '../../constants' );

function addAssetsToTemplate( prefix, template ) {
  let result = template;
  const normalizeCssPath = `${ prefix }${ build.NORMALIZE_CSS_PATH }`;
  const stylesCssPath = `${ prefix }${ build.STYLES_CSS_PATH }`;

  result = result.replace( templates.NORMALIZE_CSS, normalizeCssPath );
  result = result.replace( templates.STYLES_CSS, stylesCssPath );

  return result;
}

module.exports = addAssetsToTemplate;
