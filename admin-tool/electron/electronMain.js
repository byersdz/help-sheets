/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */

const {
  app,
  BrowserWindow,
  shell,
  Menu,
  ipcMain,
  dialog,
} = require( 'electron' );
const isDev = require( 'electron-is-dev' );
const path = require( 'path' );
const fs = require( 'fs' );


function createWindow() {
  const win = new BrowserWindow( {
    width: 1360,
    height: 720,
    show: false,
    webPreferences: {
      preload: path.join( __dirname, 'preload.js' ),
      enableRemoteModule: true,
    },
  } );

  // eslint-disable-next-line new-cap
  const menu = new Menu.buildFromTemplate( [
    {
      label: 'Window',
      submenu: [
        {
          label: 'Toggle Dev Tools',
          click: () => {
            win.toggleDevTools();
          },
          accelerator: 'F12',
        },
      ],
    },
  ] );

  win.setMenu( menu );

  if ( isDev ) {
    win.loadURL( 'http://localhost:9001' );
    win.webContents.openDevTools();
  }
  else {
    win.loadFile( './electron/react-build/index.html' );
  }

  win.maximize();
  win.show();

  // open all links in user's browser
  win.webContents.on( 'new-window', ( event, url ) => {
    event.preventDefault();
    shell.openExternal( url );
  } );
}

function getLocationData( directory ) {
  try {
    const data = {};
    data.countries = [];

    const countries = fs.readdirSync( `${ directory }` );
    countries.forEach( country => {
      const countryDirectory = path.join( directory, country );
      const countryDataPath = path.join( countryDirectory, `${ country }.json` );

      let countryData = fs.readFileSync( countryDataPath );
      countryData = JSON.parse( `${ countryData }` );
      countryData.children = [];
      data.countries.push( countryData );

      const states = fs.readdirSync( countryDirectory );
      states.forEach( state => {
        const extension = path.extname( state );
        if ( extension ) {
          return;
        }

        const stateDirectory = path.join( countryDirectory, state );
        const stateDataPath = path.join( stateDirectory, `${ state }.json` );

        let stateData = fs.readFileSync( stateDataPath );
        stateData = JSON.parse( `${ stateData }` );
        stateData.parent = countryData;
        countryData.children.push( stateData );
        stateData.children = [];

        const cities = fs.readdirSync( stateDirectory );
        cities.forEach( city => {
          const cityExtension = path.extname( city );
          if ( cityExtension ) {
            return;
          }

          const cityDirectory = path.join( stateDirectory, city );
          const cityDataPath = path.join( cityDirectory, `${ city }.json` );

          let cityData = fs.readFileSync( cityDataPath );
          cityData = JSON.parse( `${ cityData }` );
          cityData.parent = stateData;
          stateData.children.push( cityData );
        } );
      } );
    } );

    return data;
  }
  catch ( err ) {
    console.error( 'error loading data', err );
    return '';
  }
}

ipcMain.on( 'pickDataDirectory', ( event ) => {
  const directory = dialog.showOpenDialogSync( { properties: ['openDirectory'] } );
  if ( directory ) {
    event.returnValue = directory[0];
  }
  else {
    event.returnValue = '';
  }
} );

ipcMain.on( 'loadData', ( event, directory ) => {
  if ( directory ) {
    const data = getLocationData( directory );
    event.returnValue = data;
  }
  else {
    event.returnValue = '';
  }
} );

app.on( 'ready', createWindow );
