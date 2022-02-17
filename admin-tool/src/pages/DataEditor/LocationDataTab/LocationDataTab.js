
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

import LocationDisplay from '../../../components/LocationDisplay/LocationDisplay';

import getLocationFromPath from '../../../utils/getLocationFromPath';

class LocationDataTab extends React.Component {
  render() {
    const { locationData } = this.props;

    return (
      <Box>
        <LocationDisplay
          locationData={ locationData }
        />
      </Box>
    );
  }
}

LocationDataTab.propTypes = {
  locationData: PropTypes.object.isRequired,
};

function mapStateToProps( state ) {
  const locationData = getLocationFromPath( state.data.locationData, state.data.selectedLocation );
  return {
    locationData,
  };
}

export default connect( mapStateToProps )( LocationDataTab );
