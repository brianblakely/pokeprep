import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import efficacyMatches from '../../data/efficacy-matches';
import typeNames from '../../data/type-names';
import efficacyLabels from '../../data/efficacy-labels';
import * as efficacy from '../../constants/efficacy';

const effectiveAgainst = new Set(),
      picked = new Set();

const setEffectiveAgainst = (pickedType, state)=> {
  if(picked.has(pickedType)) {
    picked.delete(pickedType);
  } else {
    picked.add(pickedType);
  }

  effectiveAgainst.clear();

  for(const pick of picked) {
    const matches = efficacyMatches.get(pick);

    for(const [type, efficacyLevel] of matches) {
      if(efficacyLevel === efficacy.EFFICACY_STRONG) {
        effectiveAgainst.add(type);
      }
    }
  }

  state({ effectiveAgainst });
};

const firstIndex = 0,
      abbr = 3;

const TcolView = (props)=> (
  <TableCell component="th" scope="col">
    {
      effectiveAgainst.has(symbol)
        && efficacyLabels.get(efficacy.EFFICACY_STRONG).glyph
    }
    <br />
    {name.substr(firstIndex, abbr).toUpperCase()}
  </TableCell>
);

TcolView.propTypes = { state: PropTypes.func };

export default pure(TcolView);
