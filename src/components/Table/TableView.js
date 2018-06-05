import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import Thead from '../Thead/Thead';
import Tbody from '../Tbody/Tbody';

const TableView = (props)=> (
  <Paper>
    <Table>
      <Thead />
      <Tbody state={props.state} />
    </Table>
  </Paper>
);

TableView.propTypes = { state: PropTypes.func };

export default pure(TableView);
