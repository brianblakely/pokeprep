import * as types from '../constants/types.js';
import * as efficacy from '../constants/efficacy.js';

const efficacyMatches = new Map([
  [types.TYPE_NORMAL, {
    [types.TYPE_ROCK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GHOST]: efficacy.EFFICACY_NONE,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_FIRE, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_WATER]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ICE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_BUG]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ROCK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_DRAGON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_STRONG
  }],
  [types.TYPE_WATER, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_WATER]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ROCK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_DRAGON]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_ELECTRIC, {
    [types.TYPE_WATER]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ELECTRIC]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_NONE,
    [types.TYPE_FLYING]: efficacy.EFFICACY_STRONG,
    [types.TYPE_DRAGON]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_GRASS, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_WATER]: efficacy.EFFICACY_STRONG,
    [types.TYPE_GRASS]: efficacy.EFFICACY_WEAK,
    [types.TYPE_POISON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FLYING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_BUG]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ROCK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_DRAGON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_ICE, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_WATER]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ICE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FLYING]: efficacy.EFFICACY_STRONG,
    [types.TYPE_DRAGON]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_FIGHTING, {
    [types.TYPE_NORMAL]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ICE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_POISON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_FLYING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_PSYCHIC]: efficacy.EFFICACY_WEAK,
    [types.TYPE_BUG]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ROCK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_GHOST]: efficacy.EFFICACY_NONE,
    [types.TYPE_DARK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_STRONG
  }],
  [types.TYPE_POISON, {
    [types.TYPE_GRASS]: efficacy.EFFICACY_STRONG,
    [types.TYPE_POISON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ROCK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GHOST]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_NONE
  }],
  [types.TYPE_GROUND, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ELECTRIC]: efficacy.EFFICACY_STRONG,
    [types.TYPE_GRASS]: efficacy.EFFICACY_WEAK,
    [types.TYPE_POISON]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FLYING]: efficacy.EFFICACY_NONE,
    [types.TYPE_BUG]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ROCK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GHOST]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_NONE
  }],
  [types.TYPE_FLYING, {
    [types.TYPE_ELECTRIC]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FIGHTING]: efficacy.EFFICACY_STRONG,
    [types.TYPE_BUG]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ROCK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_PSYCHIC, {
    [types.TYPE_FIGHTING]: efficacy.EFFICACY_STRONG,
    [types.TYPE_POISON]: efficacy.EFFICACY_STRONG,
    [types.TYPE_PSYCHIC]: efficacy.EFFICACY_WEAK,
    [types.TYPE_DARK]: efficacy.EFFICACY_NONE,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_BUG, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GRASS]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FIGHTING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_POISON]: efficacy.EFFICACY_WEAK,
    [types.TYPE_FLYING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_PSYCHIC]: efficacy.EFFICACY_STRONG,
    [types.TYPE_GHOST]: efficacy.EFFICACY_WEAK,
    [types.TYPE_DARK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_ROCK, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ICE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_FIGHTING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_GROUND]: efficacy.EFFICACY_WEAK,
    [types.TYPE_FLYING]: efficacy.EFFICACY_STRONG,
    [types.TYPE_BUG]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_DRAGON, {
    [types.TYPE_DRAGON]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_DARK, {
    [types.TYPE_FIGHTING]: efficacy.EFFICACY_WEAK,
    [types.TYPE_PSYCHIC]: efficacy.EFFICACY_STRONG,
    [types.TYPE_GHOST]: efficacy.EFFICACY_STRONG,
    [types.TYPE_DARK]: efficacy.EFFICACY_WEAK,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }],
  [types.TYPE_STEEL, {
    [types.TYPE_FIRE]: efficacy.EFFICACY_WEAK,
    [types.TYPE_WATER]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ELECTRIC]: efficacy.EFFICACY_WEAK,
    [types.TYPE_ICE]: efficacy.EFFICACY_STRONG,
    [types.TYPE_ROCK]: efficacy.EFFICACY_STRONG,
    [types.TYPE_STEEL]: efficacy.EFFICACY_WEAK
  }]
]);

export default efficacyMatches;
