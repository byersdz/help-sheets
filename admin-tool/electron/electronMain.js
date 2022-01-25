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
  console.log( fs.readdirSync( directory ) );
}

ipcMain.on( 'pickDataDirectory', ( event ) => {
  const directory = dialog.showOpenDialogSync( { properties: ['openDirectory'] } );
  if ( directory ) {
    getLocationData( directory[0] );
    event.returnValue = directory[0];
  }
  else {
    event.returnValue = '';
  }
} );

app.on( 'ready', createWindow );
