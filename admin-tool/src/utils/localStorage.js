import get from 'lodash/get';

const DATA_DIRECTORY = 'dataDirectory';

export const saveStateToLocalStorage = state => {
  const dataDirectory = get( state, 'data.dataDirectory', null );
  localStorage.setItem( DATA_DIRECTORY, dataDirectory );
};

export const loadDataDirectory = () => {
  const dataDirectory = localStorage.getItem( DATA_DIRECTORY );
  return dataDirectory;
};
