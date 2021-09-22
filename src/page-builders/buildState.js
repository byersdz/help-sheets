const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildCity = require( './buildCity' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const buildPageDescription = require( '../component-builders/buildPageDescription' );
const buildCityList = require( '../component-builders/buildCityList' );
const buildPdfLinks = require( '../component-builders/buildPdfLinks' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const combineItems = require( './combineItems' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildState( state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const countryName = get( country, keys.NAME );
  const countryAccessPoints = get( country, keys.ACCESS_POINTS, [] );
  const countryResources = get( country, keys.RESOURCES, [] );
  const countryBasicNeeds = get( country, keys.BASIC_NEEDS, [] );

  const urlName = get( state, keys.URL_NAME );
  const name = get( state, keys.NAME );
  const cities = get( state, keys.CITIES );
  const accessPoints = get( state, keys.ACCESS_POINTS, [] );
  const resources = get( state, keys.RESOURCES, [] );
  const basicNeeds = get( state, keys.BASIC_NEEDS );

  const stateDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ urlName }`;
  const statePagePath = `${ stateDirectoryPath }/index.html`;

  const pdfFileName = `${ urlName }-help-sheet.pdf`;

  fs.mkdirSync( stateDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  let pageContent = '';

  const breadCrumbs = `
  <div class="breadcrumbs do-not-print">
  <a href="../">${ countryName }</a> /
  ${ name }
  </div>
  `;

  pageContent += breadCrumbs;

  pageContent += `
  <h1>
  ${ name } - Help Sheet
  </h1>
  `;

  pageContent += buildPageDescription();

  const cityList = buildCityList( {
    state,
    linkPrefix: './',
  } );

  if ( cityList ) {
    pageContent += `
    <div class="toc state-toc do-not-print">
      <div class="toc-header">
      ${ name } city sheets:
      </div>
      ${ cityList }
    </div>
    `;
  }

  pageContent += buildPdfLinks( `./${ pdfFileName }` );

  const combinedAccessPoints = combineItems( [countryAccessPoints, accessPoints] );
  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const combinedBasicNeeds = combineItems( [countryBasicNeeds, basicNeeds] );
  const basicNeedsSection = buildBasicNeedsSection( combinedBasicNeeds );
  pageContent += basicNeedsSection;

  const combinedResources = combineItems( [countryResources, resources] );
  const resourcesSection = buildResourcesSection( combinedResources );
  pageContent += resourcesSection;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( build.ASSETS_STATE_PREFIX, pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( statePagePath, pageHTML );

  createSheetPdf( {
    directory: stateDirectoryPath,
    fileName: pdfFileName,
    placeName: name,
    accessPoints: combinedAccessPoints,
    basicNeeds: combinedBasicNeeds,
    resources: combinedResources,
  } );

  if ( cities ) {
    forEach( cities, city => {
      buildCity( city, state, country );
    } );
  }
}

module.exports = buildState;
