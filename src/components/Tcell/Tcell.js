import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import TableCell from '@material-ui/core/TableCell';

const Tcell = (props)=> (
  <TableCell
    style={{ color: props.color }}
  >
    {props.glyph}
  </TableCell>
);

Tcell.propTypes = {
  color: PropTypes.string,
  glyph: PropTypes.string
};

export default pure(Tcell);
