import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import typeLabels from '../../data/type-labels';
import efficacyLabels from '../../data/efficacy-labels';
import * as efficacy from '../../constants/efficacy';
import { Consumer } from '../Store';

const firstIndex = 0,
      abbr = 3;

const TheadView = ()=> (
  <Consumer>
    {({ state })=> (
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          {Array.from(typeLabels).map(([symbol, typeLabelData], index)=> (
            <TableCell
              key={index}
              component="th"
              scope="col"
              style={{
                color: `#fff`,
                backgroundColor: typeLabelData.color
              }}
            >
              {
                state.effectiveAgainst.has(symbol)
                  && efficacyLabels.get(efficacy.EFFICACY_STRONG).glyph
              }
              {
                state.weakAgainst.has(symbol)
                  && efficacyLabels.get(efficacy.EFFICACY_WEAK).glyph
              }
              <br />
              {typeLabelData.name.substr(firstIndex, abbr).toUpperCase()}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )}
  </Consumer>
);

TheadView.propTypes = { state: PropTypes.func };

export default pure(TheadView);
