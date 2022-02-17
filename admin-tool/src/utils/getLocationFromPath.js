
import { keys } from '../../constants';

function getLocationFromPath( locationData, path ) {
  if ( !path || path.length === 0 ) {
    return locationData;
  }

  let currentLocation = locationData;

  for ( let i = 0; i < path.length; i += 1 ) {
    const currentPath = path[i];
    for ( let j = 0; j < currentLocation.children.length; j += 1 ) {
      if ( currentLocation[keys.CHILDREN][j][keys.URL_NAME] === currentPath ) {
        currentLocation = currentLocation.children[j];
      }
    }
  }

  return currentLocation;
}

export default getLocationFromPath;
