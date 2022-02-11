
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import get from 'lodash/get';
import map from 'lodash/map';

import { keys } from '../../../constants';

class ChildrenTable extends React.Component {
  renderRow( location ) {
    const name = get( location, keys.NAME, '' );
    const urlName = get( location, keys.URL_NAME, '' );

    return (
      <TableRow>
        <TableCell>
          { name }
        </TableCell>
        <TableCell>
          { urlName }
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { childrenData } = this.props;

    const rows = map( childrenData, location => {
      return ( this.renderRow( location ) );
    } );

    return (
      <TableContainer
        component={ Paper }
        sx={
          {
            maxWidth: 800,
            ml: 4,
          }
        }
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                URL Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

ChildrenTable.propTypes = {
  childrenData: PropTypes.array.isRequired,
};

export default ChildrenTable;
