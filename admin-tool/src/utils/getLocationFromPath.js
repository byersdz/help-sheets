
import get from 'lodash/get';

import { keys } from '../../constants';

function getLocationFromPath( locationData, path ) {
  if ( !path || path.length === 0 ) {
    return locationData;
  }

  let currentLocation = locationData;

  for ( let i = 0; i < path.length; i += 1 ) {
    const currentPath = path[i];

    const currentChildren = get( currentLocation, keys.CHILDREN, [] );

    for ( let j = 0; j < currentChildren.length; j += 1 ) {
      if ( currentChildren[j][keys.URL_NAME] === currentPath ) {
        currentLocation = currentLocation.children[j];
      }
    }
  }

  return currentLocation;
}

export default getLocationFromPath;
