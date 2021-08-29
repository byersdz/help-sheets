function formatPhone( phone ) {
  let result = phone;

  if ( phone.length === 10 ) {
    result = `(${ phone.slice( 0, 3 ) }) ${ phone.slice( 3, 6 ) }-${ phone.slice( 6 ) }`;
  }

  return result;
}

module.exports = formatPhone;
