/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import ChildrenTable from '../ChildrenTable/ChildrenTable';
import ItemTable from '../ItemTable/ItemTable';

import { keys, languageCodes } from '../../../constants';

import './LocationDisplay.scss';

class LocationDisplay extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      tempData: {},
    };

    this.setTempData = this.setTempData.bind( this );
  }

  componentDidMount() {
    this.setTempData();
  }

  componentDidUpdate( prevProps ) {
    const { selectedLocation } = this.props;
    const { selectedLocation: prevLocation } = prevProps;

    if ( selectedLocation !== prevLocation ) {
      this.setTempData();
    }
  }

  setTempData() {
    const { locationData } = this.props;
    const tempData = {};

    tempData[keys.URL_NAME] = get( locationData, keys.URL_NAME, 'url-name' );
    tempData[keys.NAME] = get( locationData, keys.NAME, 'Name' );
    tempData[keys.DEFAULT_LANGUAGE] = get( locationData, keys.DEFAULT_LANGUAGE, languageCodes.ENGLISH );
    tempData[keys.SUPPORTED_LANGUAGES] = cloneDeep(
      get( locationData, keys.SUPPORTED_LANGUAGES, [languageCodes.ENGLISH] ),
    );
    tempData[keys.EXCLUDE_LIST] = cloneDeep( get( locationData, keys.EXCLUDE_LIST, [] ) );
    tempData[keys.ACCESS_POINTS] = cloneDeep( get( locationData, keys.ACCESS_POINTS, [] ) );
    tempData[keys.BASIC_NEEDS] = cloneDeep( get( locationData, keys.BASIC_NEEDS, [] ) );
    tempData[keys.EMERGENCY_SHELTERS] = cloneDeep( get( locationData, keys.EMERGENCY_SHELTERS, [] ) );
    tempData[keys.RESOURCES] = cloneDeep( get( locationData, keys.RESOURCES, [] ) );

    this.setState( { tempData } );
  }

  render() {
    const {
      locationData,
      selectedLocation,
      onChildSelected,
      onLocationChange,
    } = this.props;

    const { tempData } = this.state;

    console.log( tempData );

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

    let locationDataRender = null;

    if ( selectedLocation.length > 0 ) {
      locationDataRender = (
        <Grid sx={ { mt: '16px' } } container>
          <Grid item xs={ 6 }>
            <TextField
              label="Name"
              fullWidth
              value={ tempData[keys.NAME] }
              onChange={ e => {
                this.setState( {
                  tempData: { ...tempData, [keys.NAME]: e.target.value },
                } );
              } }
            />
          </Grid>
        </Grid>
      );
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
        { locationDataRender }
        <ChildrenTable
          childrenData={ childrenData }
          onItemSelected={ v => onChildSelected( v ) }
        />
        <ItemTable
          title="Access Points"
          items={ tempData[keys.ACCESS_POINTS] }
        />
        <ItemTable
          title="Basic Needs"
          items={ tempData[keys.BASIC_NEEDS] }
        />
        <ItemTable
          title="Emergency Shelters"
          items={ tempData[keys.EMERGENCY_SHELTERS] }
        />
        <ItemTable
          title="Resources"
          items={ tempData[keys.RESOURCES] }
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
