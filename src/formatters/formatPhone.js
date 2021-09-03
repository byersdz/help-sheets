function formatPhone( phone ) {
  let result = phone;

  if ( phone.length === 11 ) {
    result = `${ phone.slice( 0, 1 ) } `;
    result += `(${ phone.slice( 1, 4 ) }) `;
    result += `${ phone.slice( 4, 7 ) }-${ phone.slice( 7 ) }`;
  }
  else if ( phone.length === 10 ) {
    result = `(${ phone.slice( 0, 3 ) }) ${ phone.slice( 3, 6 ) }-${ phone.slice( 6 ) }`;
  }
  else if ( phone.length === 3 ) {
    result = `call ${ phone }`;
  }

  return result;
}

module.exports = formatPhone;
