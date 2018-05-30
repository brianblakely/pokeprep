import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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

const TbodyView = (props)=> (
  <TableBody>
    {Array.from(efficacyMatches).map(([symbol, matches], index)=> (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          <Button onClick={()=> setEffectiveAgainst(symbol, props.state)}>
            {typeNames.get(symbol)}
            <span style={{ visibility: picked.has(symbol) ? `visible` : `hidden` }}>
              &nbsp;✸
            </span>
          </Button>
        </TableCell>
        {Array.from(typeNames).map(([typeSymbol], cellIndex)=> (
          <TableCell key={cellIndex}>
            {
              matches.has(typeSymbol)
                ? efficacyLabels.get(matches.get(typeSymbol)).glyph
                : ``
            }
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

TbodyView.propTypes = { state: PropTypes.func };

export default pure(TbodyView);
