const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const buildPageDescription = require( '../component-builders/buildPageDescription' );
const buildPdfLinks = require( '../component-builders/buildPdfLinks' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const combineItems = require( './combineItems' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildCity( city, state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const countryName = get( country, keys.NAME );
  const countryAccessPoints = get( country, keys.ACCESS_POINTS, [] );
  const countryResources = get( country, keys.RESOURCES, [] );
  const countryBasicNeeds = get( country, keys.BASIC_NEEDS, [] );

  const stateUrlName = get( state, keys.URL_NAME );
  const stateName = get( state, keys.NAME );
  const stateAccessPoints = get( state, keys.ACCESS_POINTS, [] );
  const stateResources = get( state, keys.RESOURCES, [] );
  const stateBasicNeeds = get( state, keys.BASIC_NEEDS );
  const stateExcludeList = get( state, keys.EXCLUDE_LIST, [] );

  const urlName = get( city, keys.URL_NAME );
  const name = get( city, keys.NAME );
  const accessPoints = get( city, keys.ACCESS_POINTS, [] );
  const resources = get( city, keys.RESOURCES, [] );
  const basicNeeds = get( city, keys.BASIC_NEEDS, [] );
  const excludeList = get( city, keys.EXCLUDE_LIST, [] );

  const combinedExcludeList = [...stateExcludeList, ...excludeList];

  const cityDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ stateUrlName }/${ urlName }`;
  const cityPagePath = `${ cityDirectoryPath }/index.html`;

  const pdfFileName = `${ urlName }-help-sheet.pdf`;

  fs.mkdirSync( cityDirectoryPath );

  const placeName = `${ name }, ${ stateName }`;

  const pageTitle = `Help Sheets - ${ placeName }`;
  let pageContent = '';

  const breadCrumbs = `
  <div class="breadcrumbs do-not-print">
  <a href="../../">${ countryName }</a> /
  <a href="../">${ stateName }</a> /
  ${ name }
  </div>
  `;

  pageContent += breadCrumbs;

  pageContent += `
  <h1>
  ${ placeName } - Help Sheet
  </h1>
  `;

  pageContent += buildPageDescription();

  pageContent += buildPdfLinks( `./${ pdfFileName }` );

  const combinedAccessPoints = combineItems(
    [countryAccessPoints, stateAccessPoints, accessPoints],
    combinedExcludeList,
  );
  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const combinedBasicNeeds = combineItems(
    [countryBasicNeeds, stateBasicNeeds, basicNeeds],
    combinedExcludeList,
  );
  const basicNeedsSection = buildBasicNeedsSection( combinedBasicNeeds );
  pageContent += basicNeedsSection;

  const combinedResources = combineItems(
    [countryResources, stateResources, resources],
    combinedExcludeList,
  );
  const resourcesSection = buildResourcesSection( combinedResources );
  pageContent += resourcesSection;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;
  pageHTML = addAssetsToTemplate( build.ASSETS_CITY_PREFIX, pageHTML );
  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( cityPagePath, pageHTML );

  createSheetPdf( {
    directory: cityDirectoryPath,
    fileName: pdfFileName,
    placeName,
    accessPoints: combinedAccessPoints,
    basicNeeds: combinedBasicNeeds,
    resources: combinedResources,
  } );
}

module.exports = buildCity;
