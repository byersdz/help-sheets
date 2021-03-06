const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildCity = require( './buildCity' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const buildPageDescription = require( '../component-builders/buildPageDescription' );
const buildPageFooter = require( '../component-builders/buildPageFooter' );
const buildCityList = require( '../component-builders/buildCityList' );
const buildPdfLink = require( '../component-builders/buildPdfLink' );
const buildPdfLinkLargeFormat = require( '../component-builders/buildPdfLinkLargeFormat' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const buildEmergencySheltersSection = require( '../component-builders/buildEmergencySheltersSection' );
const combineItems = require( './combineItems' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildState( state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const countryName = get( country, keys.NAME );
  const countryAccessPoints = get( country, keys.ACCESS_POINTS, [] );
  const countryResources = get( country, keys.RESOURCES, [] );
  const countryBasicNeeds = get( country, keys.BASIC_NEEDS, [] );
  const countryEmergencyShelters = get( country, keys.EMERGENCY_SHELTERS, [] );

  const urlName = get( state, keys.URL_NAME );
  const name = get( state, keys.NAME );
  const cities = get( state, keys.CITIES );
  const accessPoints = get( state, keys.ACCESS_POINTS, [] );
  const resources = get( state, keys.RESOURCES, [] );
  const basicNeeds = get( state, keys.BASIC_NEEDS );
  const emergencyShelters = get( state, keys.EMERGENCY_SHELTERS, [] );
  const excludeList = get( state, keys.EXCLUDE_LIST );

  const stateDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ urlName }`;
  const statePagePath = `${ stateDirectoryPath }/index.html`;

  const pdfFileName = `${ urlName }-help-sheet.pdf`;
  const largePdfFileName = `${ urlName }-help-sheet-large.pdf`;

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
      ${ name } - City Sheets:
      </div>
      ${ cityList }
    </div>
    `;
  }

  pageContent += buildPdfLink( `./${ pdfFileName }`, build.ASSETS_STATE_PREFIX );

  const combinedAccessPoints = combineItems( [countryAccessPoints, accessPoints], excludeList );
  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const combinedBasicNeeds = combineItems( [countryBasicNeeds, basicNeeds], excludeList );
  const basicNeedsSection = buildBasicNeedsSection( combinedBasicNeeds );
  pageContent += basicNeedsSection;

  const combinedEmergencyShelters = combineItems(
    [countryEmergencyShelters, emergencyShelters],
    excludeList,
  );
  const emergencySheltersSection = buildEmergencySheltersSection( combinedEmergencyShelters );
  pageContent += emergencySheltersSection;

  const combinedResources = combineItems( [countryResources, resources], excludeList );
  const resourcesSection = buildResourcesSection( combinedResources );
  pageContent += resourcesSection;

  pageContent += buildPdfLinkLargeFormat( `./${ largePdfFileName }`, build.ASSETS_STATE_PREFIX );

  pageContent += buildPageFooter();

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( build.STATE_HOME_DIRECTORY, build.ASSETS_STATE_PREFIX, pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( statePagePath, pageHTML );

  createSheetPdf( {
    directory: stateDirectoryPath,
    fileName: pdfFileName,
    placeName: name,
    isLargePrint: false,
    accessPoints: combinedAccessPoints,
    basicNeeds: combinedBasicNeeds,
    emergencyShelters: combinedEmergencyShelters,
    resources: combinedResources,
  } );

  createSheetPdf( {
    directory: stateDirectoryPath,
    fileName: largePdfFileName,
    placeName: name,
    isLargePrint: true,
    accessPoints: combinedAccessPoints,
    basicNeeds: combinedBasicNeeds,
    emergencyShelters: combinedEmergencyShelters,
    resources: combinedResources,
  } );

  if ( cities ) {
    forEach( cities, city => {
      buildCity( city, state, country );
    } );
  }
}

module.exports = buildState;
