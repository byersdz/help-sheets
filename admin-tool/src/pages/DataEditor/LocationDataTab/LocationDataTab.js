
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';

import LocationDisplay from '../../../components/LocationDisplay/LocationDisplay';

import getLocationFromPath from '../../../utils/getLocationFromPath';

import { pushLocationToSelection } from '../../../state/Data/selectedLocation';

class LocationDataTab extends React.Component {
  render() {
    const { locationData, _pushLocationToSelection } = this.props;

    return (
      <Box>
        <LocationDisplay
          locationData={ locationData }
          onChildSelected={ v => _pushLocationToSelection( v ) }
        />
      </Box>
    );
  }
}

LocationDataTab.propTypes = {
  locationData: PropTypes.object.isRequired,
  _pushLocationToSelection: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
  const locationData = getLocationFromPath( state.data.locationData, state.data.selectedLocation );
  return {
    locationData,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    _pushLocationToSelection: pushLocationToSelection,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( LocationDataTab );
