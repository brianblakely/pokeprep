import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import typeNames from '../../data/type-names';
import efficacyLabels from '../../data/efficacy-labels';
import * as efficacy from '../../constants/efficacy';

const effectiveAgainst = new Set();

const firstIndex = 0,
      abbr = 3;

const TheadView = ()=> (
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      {Array.from(typeNames).map(([symbol, name], index)=> (
        <TableCell key={index} component="th" scope="col">
          {
            effectiveAgainst.has(symbol)
                  && efficacyLabels.get(efficacy.EFFICACY_STRONG).glyph
          }
          <br />
          {name.substr(firstIndex, abbr).toUpperCase()}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

TheadView.propTypes = { state: PropTypes.func };

export default pure(TheadView);
