import React from 'react';

import { Provider } from './Context.js';
import { TableView } from './TableView.js';

export default class Table extends React.Component {
  render() {
    return (
      <Provider value={this.state}>
        <TableView />
      </Provider>
    );
  }
}
