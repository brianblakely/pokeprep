import * as types from '../constants/types.js';
import * as typeColors from '@material-ui/core/colors/';

const typeLabels = new Map([
  [types.TYPE_NORMAL, {
    name: `normal`,
    color: typeColors.brown[`200`]
  }],
  [types.TYPE_FIRE, {
    name: `fire`,
    color: typeColors.yellow[`900`]
  }],
  [types.TYPE_WATER, {
    name: `water`,
    color: typeColors.blue.A200
  }],
  [types.TYPE_ELECTRIC, {
    name: `electric`,
    color: typeColors.amber[`400`]
  }],
  [types.TYPE_GRASS, {
    name: `grass`,
    color: typeColors.lightGreen[`500`]
  }],
  [types.TYPE_ICE, {
    name: `ice`,
    color: typeColors.teal[`100`]
  }],
  [types.TYPE_FIGHTING, {
    name: `fighting`,
    color: typeColors.red[`800`]
  }],
  [types.TYPE_POISON, {
    name: `poison`,
    color: typeColors.purple[`400`]
  }],
  [types.TYPE_GROUND, {
    name: `ground`,
    color: typeColors.orange[`300`]
  }],
  [types.TYPE_FLYING, {
    name: `flying`,
    color: typeColors.deepPurple.A100
  }],
  [types.TYPE_PSYCHIC, {
    name: `psychic`,
    color: typeColors.pink[`300`]
  }],
  [types.TYPE_BUG, {
    name: `bug`,
    color: typeColors.lime[`700`]
  }],
  [types.TYPE_ROCK, {
    name: `rock`,
    color: typeColors.lime[`800`]
  }],
  [types.TYPE_GHOST, {
    name: `ghost`,
    color: typeColors.deepPurple[`400`]
  }],
  [types.TYPE_DRAGON, {
    name: `dragon`,
    color: typeColors.deepPurple.A400
  }],
  [types.TYPE_DARK, {
    name: `dark`,
    color: typeColors.brown[`500`]
  }],
  [types.TYPE_STEEL, {
    name: `steel`,
    color: typeColors.blueGrey[`200`]
  }]
]);

export default typeLabels;
