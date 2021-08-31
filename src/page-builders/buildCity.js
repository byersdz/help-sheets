const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const buildAccessPointSection = require( '../component-builders/buildAccessPointSection' );
const buildResourcesSection = require( '../component-builders/buildResourcesSection' );
const buildBasicNeedsSection = require( '../component-builders/buildBasicNeedsSection' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const combineItems = require( './combineItems' );

function buildCity( city, state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const countryResources = get( country, keys.RESOURCES, [] );

  const stateUrlName = get( state, keys.URL_NAME );
  const stateName = get( state, keys.NAME );
  const stateAccessPoints = get( state, keys.ACCESS_POINTS, [] );
  const stateResources = get( state, keys.RESOURCES, [] );

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

  const combinedAccessPoints = combineItems( [stateAccessPoints, accessPoints] );
  const accessPointsSection = buildAccessPointSection( combinedAccessPoints );
  pageContent += accessPointsSection;

  const basicNeedsSection = buildBasicNeedsSection( basicNeeds );
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
}

module.exports = buildCity;
