/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ChildrenTable from '../ChildrenTable/ChildrenTable';

import './LocationDisplay.scss';

class LocationDisplay extends React.Component {
  render() {
    const {
      locationData,
      selectedLocation,
      onChildSelected,
      onLocationChange,
    } = this.props;

    const childrenData = get( locationData, 'children', [] );

    const breadCrumbLinks = [];
    const currentLocation = [];

    for ( let i = 0; i < selectedLocation.length; i += 1 ) {
      currentLocation.push( selectedLocation[i] );
      const linkLocation = cloneDeep( currentLocation );
      if ( i < selectedLocation.length - 1 ) {
        breadCrumbLinks.push( (
          <Link
            key={ i }
            component="button"
            onClick={ () => onLocationChange( linkLocation ) }
          >
            { selectedLocation[i] }
          </Link>
        ) );
      }
      else {
        breadCrumbLinks.push( (
          <Typography
            key={ i }
            color="text.primary"
          >
            { selectedLocation[i] }
          </Typography>
        ) );
      }
    }
    return (
      <div className="location-display">
        <Breadcrumbs>
          <Link
            component="button"
            onClick={ () => onLocationChange( [] ) }
          >
            home
          </Link>
          { breadCrumbLinks }
        </Breadcrumbs>
        <ChildrenTable
          childrenData={ childrenData }
          onItemSelected={ v => onChildSelected( v ) }
        />
      </div>
    );
  }
}

LocationDisplay.propTypes = {
  locationData: PropTypes.object.isRequired,
  selectedLocation: PropTypes.array.isRequired,
  onChildSelected: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationDisplay;
