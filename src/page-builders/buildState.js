const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildCity = require( './buildCity' );

function buildState( state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const urlName = get( state, keys.URL_NAME );
  const name = get( state, keys.NAME );
  const cities = get( state, keys.CITIES );

  const stateDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ urlName }`;
  const statePagePath = `${ stateDirectoryPath }/index.html`;

  fs.mkdirSync( stateDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  const pageContent = name;

  const normalizeCssPath = `${ build.ASSETS_STATE_PREFIX }${ build.NORMALIZE_CSS_PATH }`;
  const stylesCssPath = `${ build.ASSETS_STATE_PREFIX }${ build.STYLES_CSS_PATH }`;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;
  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.NORMALIZE_CSS, normalizeCssPath );
  pageHTML = pageHTML.replace( templates.STYLES_CSS, stylesCssPath );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( statePagePath, pageHTML );

  if ( cities ) {
    forEach( cities, city => {
      buildCity( city, state, country );
    } );
  }
}

module.exports = buildState;
