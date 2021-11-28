import React from 'react';
import Button from '@mui/material/Button';

import './DataSelector.scss';

class DataSelector extends React.Component {
  render() {
    return (
      <div className="data-selector-page">
        Data Selector
        <Button variant="contained">
          Test Button
        </Button>
        <input id="myFile" type="file" webkitdirectory="true" />
      </div>
    );
  }
}

export default DataSelector;
