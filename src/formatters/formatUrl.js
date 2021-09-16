function formatUrl( url ) {
  let result = url;

  if ( url.startsWith( 'http://' ) ) {
    result = url.slice( 7 );
  }
  else if ( url.startsWith( 'https://' ) ) {
    result = url.slice( 8 );
  }

  if ( result.startsWith( 'www.' ) ) {
    result = result.slice( 4 );
  }

  return result;
}

module.exports = formatUrl;
