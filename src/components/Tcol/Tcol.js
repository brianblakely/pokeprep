import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';

import efficacyLabels from '../../data/efficacy-labels';
import * as efficacy from '../../constants/efficacy';

const firstIndex = 0,
      abbr = 3;

const Tcol = (props)=> (
  <TableCell
    component="th"
    scope="col"
    style={{
      color: `#fff`,
      backgroundColor: props.bg
    }}
  >
    {
      props.strong
        && efficacyLabels.get(efficacy.EFFICACY_STRONG).glyph
    }
    {
      props.weak
        && efficacyLabels.get(efficacy.EFFICACY_WEAK).glyph
    }
    <br />
    {props.name.substr(firstIndex, abbr).toUpperCase()}
  </TableCell>
);

Tcol.propTypes = {
  strong: PropTypes.bool,
  weak: PropTypes.bool,
  bg: PropTypes.string,
  name: PropTypes.string
};

export default pure(Tcol);
