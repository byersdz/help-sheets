
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DataSelector from '../../pages/DataSelector/DataSelector';
import DataEditor from '../../pages/DataEditor/DataEditor';

import './App.scss';

class App extends React.Component {
  render() {
    const { locationData } = this.props;

    let appRender = null;

    if ( locationData ) {
      appRender = <DataEditor />;
    }
    else {
      appRender = <DataSelector />;
    }
    console.log( locationData );

    return appRender;
  }
}

App.propTypes = {
  locationData: PropTypes.object.isRequired,
};

function mapStateToProps( state ) {
  return {
    locationData: state.data.locationData,
  };
}

export default connect( mapStateToProps )( App );
