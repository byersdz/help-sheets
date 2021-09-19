const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildState = require( './buildState' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildCountry( country ) {
  const urlName = get( country, keys.URL_NAME );
  const name = get( country, keys.NAME );
  const states = get( country, keys.STATES );
  const accessPoints = get( country, keys.ACCESS_POINTS, [] );
  const resources = get( country, keys.RESOURCES, [] );
  const basicNeeds = get( country, keys.BASIC_NEEDS, [] );

  const countryDirectoryPath = `${ build.DIST_PATH }/${ urlName }`;
  const countryPagePath = `${ countryDirectoryPath }/index.html`;

  const pdfFileName = `${ urlName }-help-sheet.pdf`;

  fs.mkdirSync( countryDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  let pageContent = '';

  const accessPointsSection = buildAccessPointSection( accessPoints );
  pageContent += accessPointsSection;

  const basicNeedsSection = buildBasicNeedsSection( basicNeeds );
  pageContent += basicNeedsSection;

  const resourcesSection = buildResourcesSection( resources );
  pageContent += resourcesSection;
  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( build.ASSETS_COUNTRY_PREFIX, pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( countryPagePath, pageHTML );

  createSheetPdf( {
    directory: countryDirectoryPath,
    fileName: pdfFileName,
    placeName: name,
    accessPoints,
    basicNeeds,
    resources,
  } );

  if ( states ) {
    forEach( states, state => {
      buildState( state, country );
    } );
  }
}

module.exports = buildCountry;
