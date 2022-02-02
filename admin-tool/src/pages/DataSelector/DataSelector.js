import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { bindActionCreators } from 'redux';

import { setDataDirectory } from '../../state/Data/dataDirectory';

import './DataSelector.scss';

class DataSelector extends React.Component {
  handleDirectorySelection() {
    const { _setDataDirectory } = this.props;

    const newDirectory = window.api.sendSync( 'pickDataDirectory' );

    _setDataDirectory( newDirectory );
  }

  handleLoadData() {
    const { dataDirectory } = this.props;

    const data = window.api.sendSync( 'loadData', dataDirectory );
    console.log( 'load data', data );
  }

  render() {
    const { dataDirectory } = this.props;

    return (
      <div className="data-selector-page">
        <div className="directory-display">
          { 'Data Directory: ' }
          { dataDirectory }
        </div>
        <Button
          variant="contained"
          onClick={ () => this.handleDirectorySelection() }
        >
          Select Data Folder
        </Button>
        <Button
          variant="contained"
          onClick={ () => this.handleLoadData() }
          disabled={ !dataDirectory }
        >
          Load Data
        </Button>
      </div>
    );
  }
}

DataSelector.propTypes = {
  dataDirectory: PropTypes.string.isRequired,
  _setDataDirectory: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
  return {
    dataDirectory: state.data.dataDirectory,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    _setDataDirectory: setDataDirectory,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( DataSelector );
