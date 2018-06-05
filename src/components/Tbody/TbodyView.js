import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import efficacyMatches from '../../data/efficacy-matches';
import typeLabels from '../../data/type-labels';
import efficacyLabels from '../../data/efficacy-labels';
import { Consumer } from '../Store';

const TbodyView = ()=> (
  <Consumer>
    {({ state, actions })=> (
      <TableBody>
        {Array.from(efficacyMatches).map(([symbol, matches], index)=> (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              <Button
                onClick={()=> actions.setEfficacy(symbol)}
                style={{
                  color: `#fff`,
                  backgroundColor: typeLabels.get(symbol).color
                }}
              >
                {typeLabels.get(symbol).name}
                <span style={{ visibility: state.picked.has(symbol) ? `visible` : `hidden` }}>
                &nbsp;✔︎
                </span>
              </Button>
            </TableCell>
            {Array.from(typeLabels).map(([typeSymbol], cellIndex)=> (
              <TableCell
                key={cellIndex}
                style={{
                  color: matches.has(typeSymbol)
                    ? efficacyLabels.get(matches.get(typeSymbol)).color
                    : ``
                }}
              >
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
    )}
  </Consumer>
);

TbodyView.propTypes = { state: PropTypes.func };

export default pure(TbodyView);
