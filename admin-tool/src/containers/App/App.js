
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DataSelector from '../../pages/DataSelector/DataSelector';

import './App.scss';

class App extends React.Component {
  render() {
    const { locationData } = this.props;

    console.log( locationData );

    return (
      <div>
        <DataSelector />
      </div>
    );
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
