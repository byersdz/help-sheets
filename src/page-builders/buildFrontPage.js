const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );
const buildPageDescription = require( '../component-builders/buildPageDescription' );
const buildPageFooter = require( '../component-builders/buildPageFooter' );
const buildCountryList = require( '../component-builders/buildCountryList' );

function buildFrontPage( data ) {
  const countries = get( data, keys.COUNTRIES );

  let pageContent = '';

  pageContent += `
  <h1>
    Welcome to HelpSheets.org
  </h1>
  `;

  pageContent += buildPageDescription();

  pageContent += buildCountryList( {
    countries,
    linkPrefix: './',
  } );

  pageContent += buildPageFooter();

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );
  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( './', './assets/', pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, 'HelpSheets.org' );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  const pagePath = `${ build.DIST_PATH }/index.html`;
  fs.writeFileSync( pagePath, pageHTML );
}

module.exports = buildFrontPage;
