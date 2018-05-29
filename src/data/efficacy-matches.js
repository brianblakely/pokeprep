import * as types from '../constants/types.js';
import * as efficacy from '../constants/efficacy.js';

const efficacyMatches = new Map([
  [types.TYPE_NORMAL, new Map([
    [types.TYPE_ROCK, efficacy.EFFICACY_WEAK],
    [types.TYPE_GHOST, efficacy.EFFICACY_NONE],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_FIRE, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_WEAK],
    [types.TYPE_WATER, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_STRONG],
    [types.TYPE_ICE, efficacy.EFFICACY_STRONG],
    [types.TYPE_BUG, efficacy.EFFICACY_STRONG],
    [types.TYPE_ROCK, efficacy.EFFICACY_WEAK],
    [types.TYPE_DRAGON, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_STRONG]
  ])],
  [types.TYPE_WATER, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_STRONG],
    [types.TYPE_WATER, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_STRONG],
    [types.TYPE_ROCK, efficacy.EFFICACY_STRONG],
    [types.TYPE_DRAGON, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_ELECTRIC, new Map([
    [types.TYPE_WATER, efficacy.EFFICACY_STRONG],
    [types.TYPE_ELECTRIC, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_NONE],
    [types.TYPE_FLYING, efficacy.EFFICACY_STRONG],
    [types.TYPE_DRAGON, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_GRASS, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_WEAK],
    [types.TYPE_WATER, efficacy.EFFICACY_STRONG],
    [types.TYPE_GRASS, efficacy.EFFICACY_WEAK],
    [types.TYPE_POISON, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_STRONG],
    [types.TYPE_FLYING, efficacy.EFFICACY_WEAK],
    [types.TYPE_BUG, efficacy.EFFICACY_WEAK],
    [types.TYPE_ROCK, efficacy.EFFICACY_STRONG],
    [types.TYPE_DRAGON, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_ICE, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_WEAK],
    [types.TYPE_WATER, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_STRONG],
    [types.TYPE_ICE, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_STRONG],
    [types.TYPE_FLYING, efficacy.EFFICACY_STRONG],
    [types.TYPE_DRAGON, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_FIGHTING, new Map([
    [types.TYPE_NORMAL, efficacy.EFFICACY_STRONG],
    [types.TYPE_ICE, efficacy.EFFICACY_STRONG],
    [types.TYPE_POISON, efficacy.EFFICACY_WEAK],
    [types.TYPE_FLYING, efficacy.EFFICACY_WEAK],
    [types.TYPE_PSYCHIC, efficacy.EFFICACY_WEAK],
    [types.TYPE_BUG, efficacy.EFFICACY_WEAK],
    [types.TYPE_ROCK, efficacy.EFFICACY_STRONG],
    [types.TYPE_GHOST, efficacy.EFFICACY_NONE],
    [types.TYPE_DARK, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_STRONG]
  ])],
  [types.TYPE_POISON, new Map([
    [types.TYPE_GRASS, efficacy.EFFICACY_STRONG],
    [types.TYPE_POISON, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_WEAK],
    [types.TYPE_ROCK, efficacy.EFFICACY_WEAK],
    [types.TYPE_GHOST, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_NONE]
  ])],
  [types.TYPE_GROUND, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_STRONG],
    [types.TYPE_ELECTRIC, efficacy.EFFICACY_STRONG],
    [types.TYPE_GRASS, efficacy.EFFICACY_WEAK],
    [types.TYPE_POISON, efficacy.EFFICACY_STRONG],
    [types.TYPE_FLYING, efficacy.EFFICACY_NONE],
    [types.TYPE_BUG, efficacy.EFFICACY_WEAK],
    [types.TYPE_ROCK, efficacy.EFFICACY_WEAK],
    [types.TYPE_GHOST, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_NONE]
  ])],
  [types.TYPE_FLYING, new Map([
    [types.TYPE_ELECTRIC, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_STRONG],
    [types.TYPE_FIGHTING, efficacy.EFFICACY_STRONG],
    [types.TYPE_BUG, efficacy.EFFICACY_STRONG],
    [types.TYPE_ROCK, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_PSYCHIC, new Map([
    [types.TYPE_FIGHTING, efficacy.EFFICACY_STRONG],
    [types.TYPE_POISON, efficacy.EFFICACY_STRONG],
    [types.TYPE_PSYCHIC, efficacy.EFFICACY_WEAK],
    [types.TYPE_DARK, efficacy.EFFICACY_NONE],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_BUG, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_WEAK],
    [types.TYPE_GRASS, efficacy.EFFICACY_STRONG],
    [types.TYPE_FIGHTING, efficacy.EFFICACY_WEAK],
    [types.TYPE_POISON, efficacy.EFFICACY_WEAK],
    [types.TYPE_FLYING, efficacy.EFFICACY_WEAK],
    [types.TYPE_PSYCHIC, efficacy.EFFICACY_STRONG],
    [types.TYPE_GHOST, efficacy.EFFICACY_WEAK],
    [types.TYPE_DARK, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_ROCK, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_STRONG],
    [types.TYPE_ICE, efficacy.EFFICACY_STRONG],
    [types.TYPE_FIGHTING, efficacy.EFFICACY_WEAK],
    [types.TYPE_GROUND, efficacy.EFFICACY_WEAK],
    [types.TYPE_FLYING, efficacy.EFFICACY_STRONG],
    [types.TYPE_BUG, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_DRAGON, new Map([
    [types.TYPE_DRAGON, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_DARK, new Map([
    [types.TYPE_FIGHTING, efficacy.EFFICACY_WEAK],
    [types.TYPE_PSYCHIC, efficacy.EFFICACY_STRONG],
    [types.TYPE_GHOST, efficacy.EFFICACY_STRONG],
    [types.TYPE_DARK, efficacy.EFFICACY_WEAK],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])],
  [types.TYPE_STEEL, new Map([
    [types.TYPE_FIRE, efficacy.EFFICACY_WEAK],
    [types.TYPE_WATER, efficacy.EFFICACY_WEAK],
    [types.TYPE_ELECTRIC, efficacy.EFFICACY_WEAK],
    [types.TYPE_ICE, efficacy.EFFICACY_STRONG],
    [types.TYPE_ROCK, efficacy.EFFICACY_STRONG],
    [types.TYPE_STEEL, efficacy.EFFICACY_WEAK]
  ])]
]);

export default efficacyMatches;
