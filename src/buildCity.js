const { keys, build, templates } = require( '../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );

function buildCity( city, state, country ) {
  const countryUrlName = get( country, keys.URL_NAME );
  const stateUrlName = get( state, keys.URL_NAME );
  const stateName = get( state, keys.NAME );
  const urlName = get( city, keys.URL_NAME );
  const name = get( city, keys.NAME );

  const cityDirectoryPath = `${ build.DIST_PATH }/${ countryUrlName }/${ stateUrlName }/${ urlName }`;
  const cityPagePath = `${ cityDirectoryPath }/index.html`;

  fs.mkdirSync( cityDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }, ${ stateName }`;
  const pageContent = name;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;
  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( cityPagePath, pageHTML );
}

module.exports = buildCity;
