import React from 'react';
import { pure } from 'recompose';

import TableBody from '@material-ui/core/TableBody';

import efficacyMatches from '../../data/efficacy-matches';
import typeLabels from '../../data/type-labels';
import { Consumer } from '../Store';
import Trow from '../Trow/Trow';

const Tbody = ()=> (
  <Consumer>
    {({ state, actions })=> (
      <TableBody>
        {Array.from(efficacyMatches).map(([symbol], index)=> (
          <Trow
            key={index}
            type={symbol}
            setEfficacy={actions.setEfficacy}
            bg={typeLabels.get(symbol).color}
            name={typeLabels.get(symbol).name}
            picked={state.picked.has(symbol)}
          />
        ))}
      </TableBody>
    )}
  </Consumer>
);

export default pure(Tbody);
