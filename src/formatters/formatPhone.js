function formatPhone( phone, extension = '', countryCode = '' ) {
  let result = '';

  if ( countryCode ) {
    result = `${ countryCode } `;
  }

  if ( phone.length === 10 ) {
    result += `(${ phone.slice( 0, 3 ) }) ${ phone.slice( 3, 6 ) }-${ phone.slice( 6 ) }`;
  }
  else if ( phone.length === 3 ) {
    result = `call ${ phone }`;
  }
  else {
    result += phone;
  }

  if ( extension ) {
    result += ` ext: ${ extension }`;
  }

  return result;
}

module.exports = formatPhone;
