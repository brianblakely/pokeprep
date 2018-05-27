import React from 'react';
import { pure } from 'recompose';

import { Consumer } from './Context.js';

const TableView = (props)=> (
  <Consumer>
    {props}
  </Consumer>
);

export default pure(TableView);
