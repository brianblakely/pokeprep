import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import efficacyMatches from '../data/efficacy-matches';
import * as efficacy from '../constants/efficacy';

const { Provider, Consumer } = createContext();

export default class Store extends React.Component {
  constructor() {
    super();

    this.state = {
      effectiveAgainst: new Set(),
      picked: new Set()
    };
  }

  render() {
    return (
      <Provider value={{
        state: this.state,

        actions: {

          setEffectiveAgainst: (pickedType)=> {
            const { picked } = this.state;

            const _picked = new Set([...picked]);

            if(picked.has(pickedType)) {
              _picked.delete(pickedType);
            } else {
              _picked.add(pickedType);
            }

            const effectiveAgainst = new Set();

            for(const pick of _picked) {
              const matches = efficacyMatches.get(pick);

              for(const [type, efficacyLevel] of matches) {
                if(efficacyLevel === efficacy.EFFICACY_STRONG) {
                  effectiveAgainst.add(type);
                }
              }
            }

            this.setState({
              effectiveAgainst,
              picked: _picked
            });
          }

        }

      }}>
        {this.props.children}
      </Provider>
    );
  }
}

Store.propTypes = { children: PropTypes.element };

export { Consumer };
