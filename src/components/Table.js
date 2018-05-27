import React, { createContext } from 'react';
import { pure } from 'recompose';

const { Provider, Consumer } = createContext();

const Table = (props)=> (
  <Provider>

  </Provider>
);

export default pure(Table);
