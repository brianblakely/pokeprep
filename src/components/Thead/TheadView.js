import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import typeLabels from '../../data/type-labels';
import { Consumer } from '../Store';
import Tcol from '../Tcol/Tcol';

const TheadView = ()=> (
  <Consumer>
    {({ state })=> (
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          {Array.from(typeLabels).map(([symbol, typeLabelData], index)=> (
            <Tcol
              key={index}
              strong={state.effectiveAgainst.has(symbol)}
              weak={state.weakAgainst.has(symbol)}
              bg={typeLabelData.color}
              name={typeLabelData.name}
            />
          ))}
        </TableRow>
      </TableHead>
    )}
  </Consumer>
);

TheadView.propTypes = { state: PropTypes.func };

export default pure(TheadView);
