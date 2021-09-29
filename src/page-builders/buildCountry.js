const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildState = require( './buildState' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const buildPageDescription = require( '../component-builders/buildPageDescription' );
const buildPageFooter = require( '../component-builders/buildPageFooter' );
const buildStateList = require( '../component-builders/buildStateList' );
const buildPdfLink = require( '../component-builders/buildPdfLink' );
const buildPdfLinkLargeFormat = require( '../component-builders/buildPdfLinkLargeFormat' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const buildEmergencySheltersSection = require( '../component-builders/buildEmergencySheltersSection' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildCountry( country ) {
  const urlName = get( country, keys.URL_NAME );
  const name = get( country, keys.NAME );
  const states = get( country, keys.STATES );
  const accessPoints = get( country, keys.ACCESS_POINTS, [] );
  const resources = get( country, keys.RESOURCES, [] );
  const basicNeeds = get( country, keys.BASIC_NEEDS, [] );
  const emergencyShelters = get( country, keys.EMERGENCY_SHELTERS );

  const countryDirectoryPath = `${ build.DIST_PATH }/${ urlName }`;
  const countryPagePath = `${ countryDirectoryPath }/index.html`;

  const pdfFileName = `${ urlName }-help-sheet.pdf`;
  const largePdfFileName = `${ urlName }-help-sheet-large.pdf`;

  fs.mkdirSync( countryDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  let pageContent = '';

  pageContent += `
  <h1>
  ${ name } - Help Sheet
  </h1>
  `;

  pageContent += buildPageDescription();

  const stateList = buildStateList( {
    country,
    linkPrefix: './',
  } );

  if ( stateList ) {
    pageContent += `
    <div class="toc country-toc do-not-print">
    <div class="toc-header">
    ${ name } - State / City Sheets:
    </div>
    ${ stateList }
    </div>
    `;
  }

  pageContent += buildPdfLink( `./${ pdfFileName }`, build.ASSETS_COUNTRY_PREFIX );

  const accessPointsSection = buildAccessPointSection( accessPoints );
  pageContent += accessPointsSection;

  const basicNeedsSection = buildBasicNeedsSection( basicNeeds );
  pageContent += basicNeedsSection;

  const emergencySheltersSection = buildEmergencySheltersSection( emergencyShelters );
  pageContent += emergencySheltersSection;

  const resourcesSection = buildResourcesSection( resources );
  pageContent += resourcesSection;

  pageContent += buildPdfLinkLargeFormat( `./${ largePdfFileName }`, build.ASSETS_COUNTRY_PREFIX );

  pageContent += buildPageFooter();

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( build.COUNTRY_HOME_DIRECTORY, build.ASSETS_COUNTRY_PREFIX, pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( countryPagePath, pageHTML );

  createSheetPdf( {
    directory: countryDirectoryPath,
    fileName: pdfFileName,
    placeName: name,
    isLargePrint: false,
    accessPoints,
    basicNeeds,
    resources,
  } );

  createSheetPdf( {
    directory: countryDirectoryPath,
    fileName: largePdfFileName,
    placeName: name,
    isLargePrint: true,
    accessPoints,
    basicNeeds,
    emergencyShelters,
    resources,
  } );

  if ( states ) {
    forEach( states, state => {
      buildState( state, country );
    } );
  }
}

module.exports = buildCountry;
