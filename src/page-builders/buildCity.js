const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const combineItems = require( './combineItems' );
const createSheetPdf = require( '../pdf/createSheetPdf' );

function buildCity( city, state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const countryAccessPoints = get( country, keys.ACCESS_POINTS, [] );
  const countryResources = get( country, keys.RESOURCES, [] );
  const countryBasicNeeds = get( country, keys.BASIC_NEEDS, [] );

  const stateUrlName = get( state, keys.URL_NAME );
  const stateName = get( state, keys.NAME );
  const stateAccessPoints = get( state, keys.ACCESS_POINTS, [] );
  const stateResources = get( state, keys.RESOURCES, [] );
  const stateBasicNeeds = get( state, keys.BASIC_NEEDS );

  const urlName = get( city, keys.URL_NAME );
  const name = get( city, keys.NAME );
  const accessPoints = get( city, keys.ACCESS_POINTS, [] );
  const resources = get( city, keys.RESOURCES, [] );
  const basicNeeds = get( city, keys.BASIC_NEEDS, [] );

  const cityDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ stateUrlName }/${ urlName }`;
  const cityPagePath = `${ cityDirectoryPath }/index.html`;

  fs.mkdirSync( cityDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }, ${ stateName }`;
  let pageContent = name;

  const combinedAccessPoints = combineItems( [countryAccessPoints, stateAccessPoints, accessPoints] );
  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const combinedBasicNeeds = combineItems( [countryBasicNeeds, stateBasicNeeds, basicNeeds] );
  const basicNeedsSection = buildBasicNeedsSection( combinedBasicNeeds );
  pageContent += basicNeedsSection;

  const combinedResources = combineItems( [countryResources, stateResources, resources] );
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
    fileName: `${ urlName }-help-sheet.pdf`,
  } );
}

module.exports = buildCity;
