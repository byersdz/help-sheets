
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { SELECT_DATA, LOCATION_DATA } from '../../../state/Layout/activeNavigationTab';

const drawerWidth = 240;

class TopBar extends React.Component {
  render() {
    const { activeNavigationTab } = this.props;

    let title = '';

    switch ( activeNavigationTab ) {
      case SELECT_DATA: {
        title = 'Select Data';
        break;
      }
      case LOCATION_DATA: {
        title = 'Location Data';
        break;
      }
      default: break;
    }

    return (
      <AppBar
        sx={ { width: `calc(100% - ${ drawerWidth }px)`, ml: `${ drawerWidth }px` } }
      >
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap component="div">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  activeNavigationTab: PropTypes.string.isRequired,
};

function mapStateToProps( state ) {
  return {
    activeNavigationTab: state.layout.activeNavigationTab,
  };
}

export default connect( mapStateToProps )( TopBar );
