import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Tcell from '../Tcell/Tcell';
import typeLabels from '../../data/type-labels';
import efficacyLabels from '../../data/efficacy-labels';
import efficacyMatches from '../../data/efficacy-matches';

const Trow = (props)=> {
  const matches = efficacyMatches.get(props.type);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Button
          onClick={()=> props.setEfficacy(props.type)}
          style={{
            color: `#fff`,
            backgroundColor: props.bg
          }}
        >
          {props.name}
          <span style={{ visibility: props.picked ? `visible` : `hidden` }}>
            ✔︎
          </span>
        </Button>
      </TableCell>
      {Array.from(typeLabels).map(([typeSymbol], cellIndex)=> (
        <Tcell
          key={cellIndex}
          color={
            matches.has(typeSymbol)
              ? efficacyLabels.get(matches.get(typeSymbol)).color
              : ``
          }
          glyph={
            matches.has(typeSymbol)
              ? efficacyLabels.get(matches.get(typeSymbol)).glyph
              : ``
          }
        />
      ))}
    </TableRow>
  );
};

Trow.propTypes = {
  type: PropTypes.symbol,
  matches: PropTypes.object,
  setEfficacy: PropTypes.func,
  bg: PropTypes.string,
  name: PropTypes.string,
  picked: PropTypes.bool
};

export default pure(Trow);
