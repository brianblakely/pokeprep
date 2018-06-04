import React from 'react';

import Store from '../Store';
import TableView from './TableView';

export default class Table extends React.Component {
  render() {
    return (
      <Store>
        <TableView state={this.setState.bind(this)} />
      </Store>
    );
  }
}
