const { keys, build, templates } = require( '../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );

function buildCountry( country ) {
  const urlName = get( country, keys.URL_NAME );
  const name = get( country, keys.NAME );

  const countryDirectoryPath = `${ build.DIST_PATH }/${ urlName }`;
  const countryPagePath = `${ countryDirectoryPath }/index.html`;

  fs.mkdirSync( countryDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  const pageContent = name;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;
  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( countryPagePath, pageHTML );
}

module.exports = buildCountry;
