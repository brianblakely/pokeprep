import React from 'react';
import { pure } from 'recompose';

import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import Thead from '../Thead/Thead';
import Tbody from '../Tbody/Tbody';

const TableView = ()=> (
  <Paper>
    <Table>
      <Thead />
      <Tbody />
    </Table>
  </Paper>
);

export default pure(TableView);
