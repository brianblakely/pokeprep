import React from 'react';
import { pure } from 'recompose';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import typeLabels from '../../data/type-labels';
import { Consumer } from '../Store';
import Tcol from '../Tcol/Tcol';
import Tcell from '../Tcell/Tcell';

const Thead = ()=> (
  <Consumer>
    {({ state })=> (
      <TableHead>
        <TableRow>
          <Tcell></Tcell>
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

export default pure(Thead);
