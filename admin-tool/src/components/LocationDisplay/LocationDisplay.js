
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import ChildrenTable from '../ChildrenTable/ChildrenTable';

class LocationDisplay extends React.Component {
  render() {
    const { locationData, onChildSelected } = this.props;

    const childrenData = get( locationData, 'children', [] );

    return (
      <div className="location-display">
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
  onChildSelected: PropTypes.func.isRequired,
};

export default LocationDisplay;
