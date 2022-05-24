/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import get from 'lodash/get';
import map from 'lodash/map';
import Typography from '@mui/material/Typography';

import { keys } from '../../../constants';

class ItemTable extends React.Component {
  renderRow( item ) {
    const { onItemSelected } = this.props;

    const id = get( item, keys.ID, '' );
    const name = get( item, keys.NAME, '' );
    const description = get( item, keys.DESCRIPTION, '' );

    return (
      <TableRow key={ id }>
        <TableCell>
          <Link
            component="button"
            onClick={ () => onItemSelected( id ) }
          >
            { id }
          </Link>
        </TableCell>
        <TableCell>
          { name }
        </TableCell>
        <TableCell>
          { description }
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { title, items } = this.props;

    console.log( items );

    const rows = map( items, item => {
      return ( this.renderRow( item ) );
    } );

    return (
      <div className="item-table">
        <Typography
          variant="h6"
          sx={
            {
              mt: '24px',
            }
          }
        >
          { title }
        </Typography>
        <TableContainer
          component={ Paper }
          sx={
          {
            mt: '8px',
          }
        }
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                ID
                </TableCell>
                <TableCell>
                Name
                </TableCell>
                <TableCell>
                Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { rows }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

ItemTable.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemTable;
