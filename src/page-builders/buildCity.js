const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );

function buildCity( city, state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const stateUrlName = get( state, keys.URL_NAME );
  const stateName = get( state, keys.NAME );
  const stateAccessPoints = get( state, keys.ACCESS_POINTS );
  const urlName = get( city, keys.URL_NAME );
  const name = get( city, keys.NAME );
  const accessPoints = get( city, keys.ACCESS_POINTS );

  const cityDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ stateUrlName }/${ urlName }`;
  const cityPagePath = `${ cityDirectoryPath }/index.html`;

  fs.mkdirSync( cityDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }, ${ stateName }`;
  let pageContent = name;

  const combinedAccessPoints = [];
  forEach( stateAccessPoints, point => {
    combinedAccessPoints.push( point );
  } );
  forEach( accessPoints, point => {
    combinedAccessPoints.push( point );
  } );

  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const normalizeCssPath = `${ build.ASSETS_CITY_PREFIX }${ build.NORMALIZE_CSS_PATH }`;
  const stylesCssPath = `${ build.ASSETS_CITY_PREFIX }${ build.STYLES_CSS_PATH }`;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;
  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.NORMALIZE_CSS, normalizeCssPath );
  pageHTML = pageHTML.replace( templates.STYLES_CSS, stylesCssPath );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( cityPagePath, pageHTML );
}

module.exports = buildCity;
