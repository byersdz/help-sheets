
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopBar from './TopBar/TopBar';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';
import DataSelector from '../DataSelector/DataSelector';
import LocationDataTab from './LocationDataTab/LocationDataTab';

import { SELECT_DATA, LOCATION_DATA } from '../../state/Layout/activeNavigationTab';

import './DataEditor.scss';

class DataEditor extends React.Component {
  render() {
    const { activeNavigationTab } = this.props;

    let tabRender = null;

    switch ( activeNavigationTab ) {
      case SELECT_DATA: {
        tabRender = <DataSelector />;
        break;
      }
      case LOCATION_DATA: {
        tabRender = <LocationDataTab />;
        break;
      }
      default: break;
    }

    return (
      <div className="data-editor-page">
        <TopBar />
        <NavigationDrawer />
        <div className="main-content">
          { tabRender }
        </div>
      </div>
    );
  }
}

DataEditor.propTypes = {
  activeNavigationTab: PropTypes.string.isRequired,
};

function mapStateToProps( state ) {
  return {
    activeNavigationTab: state.layout.activeNavigationTab,
  };
}

export default connect( mapStateToProps )( DataEditor );
