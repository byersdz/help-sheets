
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DataSelector from '../../pages/DataSelector/DataSelector';
import DataEditor from '../../pages/DataEditor/DataEditor';

import { setDataDirectory } from '../../state/Data/dataDirectory';
import { setLocationData } from '../../state/Data/locationData';

import { loadDataDirectory } from '../../utils/localStorage';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    const { _setDataDirectory, _setLocationData } = this.props;

    const dataDirectory = loadDataDirectory();

    if ( dataDirectory ) {
      _setDataDirectory( dataDirectory );

      const data = window.api.sendSync( 'loadData', dataDirectory );

      if ( data ) {
        _setLocationData( data );
      }
    }
  }

  render() {
    const { locationData } = this.props;

    let appRender = null;

    if ( locationData ) {
      appRender = <DataEditor />;
    }
    else {
      appRender = <DataSelector />;
    }

    return appRender;
  }
}

App.propTypes = {
  locationData: PropTypes.object,
  _setDataDirectory: PropTypes.func.isRequired,
  _setLocationData: PropTypes.func.isRequired,
};

App.defaultProps = {
  locationData: null,
};

function mapStateToProps( state ) {
  return {
    locationData: state.data.locationData,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    _setDataDirectory: setDataDirectory,
    _setLocationData: setLocationData,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
