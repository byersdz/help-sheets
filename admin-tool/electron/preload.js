const { contextBridge, ipcRenderer } = require( 'electron' );

// const dialog = remote.dialog;

contextBridge.exposeInMainWorld(
  'api',
  {
    send: ( channel, data ) => {
      ipcRenderer.send( channel, data );
    },
    receive: ( channel, func ) => {
      ipcRenderer.on( channel, ( event, ...args ) => func( ...args ) );
    },
    sendSync: ( channel, data ) => {
      return ipcRenderer.sendSync( channel, data );
    },
  },
);
