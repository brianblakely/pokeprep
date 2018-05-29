import React from 'react';

import { Provider } from '../Context';
import TableView from './TableView';

export default class Table extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
        <TableView state={this.setState.bind(this)} />
      </Provider>
    );
  }
}
