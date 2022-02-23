
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';

import LocationDisplay from '../../../components/LocationDisplay/LocationDisplay';

import getLocationFromPath from '../../../utils/getLocationFromPath';

import { pushLocationToSelection, selectLocation } from '../../../state/Data/selectedLocation';

class LocationDataTab extends React.Component {
  render() {
    const {
      locationData,
      selectedLocation,
      _pushLocationToSelection,
      _selectLocation,
    } = this.props;

    return (
      <Box>
        <LocationDisplay
          locationData={ locationData }
          selectedLocation={ selectedLocation }
          onChildSelected={ v => _pushLocationToSelection( v ) }
          onLocationChange={ v => _selectLocation( v ) }
        />
      </Box>
    );
  }
}

LocationDataTab.propTypes = {
  locationData: PropTypes.object.isRequired,
  selectedLocation: PropTypes.array.isRequired,
  _pushLocationToSelection: PropTypes.func.isRequired,
  _selectLocation: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
  const locationData = getLocationFromPath( state.data.locationData, state.data.selectedLocation );
  return {
    locationData,
    selectedLocation: state.data.selectedLocation,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    _pushLocationToSelection: pushLocationToSelection,
    _selectLocation: selectLocation,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( LocationDataTab );
