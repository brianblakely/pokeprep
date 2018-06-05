import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Tcell from '../Tcell/Tcell';
import typeLabels from '../../data/type-labels';
import efficacyLabels from '../../data/efficacy-labels';
import efficacyMatches from '../../data/efficacy-matches';

export default class Trow extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.picked !== this.props.picked;
  }

  render() {
    const matches = efficacyMatches.get(this.props.type);

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <Button
            onClick={()=> this.props.setEfficacy(this.props.type)}
            style={{
              color: `#fff`,
              backgroundColor: this.props.bg
            }}
          >
            {this.props.name}
            <span style={{ visibility: this.props.picked ? `visible` : `hidden` }}>
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
  }
}

Trow.propTypes = {
  type: PropTypes.symbol,
  matches: PropTypes.object,
  setEfficacy: PropTypes.func,
  bg: PropTypes.string,
  name: PropTypes.string,
  picked: PropTypes.bool
};
