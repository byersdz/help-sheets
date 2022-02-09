
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { bindActionCreators } from 'redux';

import { SELECT_DATA, LOCATION_DATA, selectNavigationTab } from '../../../state/Layout/activeNavigationTab';

const drawerWidth = 240;

class NavigationDrawer extends React.Component {
  render() {
    const { activeNavigationTab, _selectNavigationTab } = this.props;

    return (
      <Drawer
        variant="permanent"
        anchor="left"
        sx={ {
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        } }
      >
        <List>
          <ListItem
            button
            selected={ activeNavigationTab === SELECT_DATA }
            onClick={ () => _selectNavigationTab( SELECT_DATA ) }
          >
            <ListItemText primary="Select Data Folder" />
          </ListItem>
          <ListItem
            button
            selected={ activeNavigationTab === LOCATION_DATA }
            onClick={ () => _selectNavigationTab( LOCATION_DATA ) }
          >
            <ListItemText primary="Location Data" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  activeNavigationTab: PropTypes.string.isRequired,
  _selectNavigationTab: PropTypes.func.isRequired,
};

function mapStateToProps( state ) {
  return {
    activeNavigationTab: state.layout.activeNavigationTab,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    _selectNavigationTab: selectNavigationTab,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( NavigationDrawer );
