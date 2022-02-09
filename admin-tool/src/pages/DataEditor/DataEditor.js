
import React from 'react';

import TopBar from './TopBar/TopBar';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';
import DataSelector from '../DataSelector/DataSelector';

class DataEditor extends React.Component {
  render() {
    return (
      <div className="data-editor-page">
        <TopBar />
        <NavigationDrawer />
        <div className="main-content">
          <DataSelector />
        </div>
      </div>
    );
  }
}

export default DataEditor;
