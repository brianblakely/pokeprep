import * as efficacy from '../constants/efficacy.js';

const efficacyLabels = new Map([
  [efficacy.EFFICACY_STRONG, {
    phrase: `It's Super Effective!`,
    glyph: `✸`,
    color: `#ff0000`
  }],
  [efficacy.EFFICACY_NORMAL, {
    phrase: `Neutral`,
    glyph: `◼`,
    color: `#cccccc`
  }],
  [efficacy.EFFICACY_WEAK, {
    phrase: `It's Not Very Effective…`,
    glyph: `▼`,
    color: `#0000ff`
  }],
  [efficacy.EFFICACY_NONE, {
    phrase: `It Doesn't Affect…`,
    glyph: `✖︎`,
    color: `#000000`
  }]
]);

export default efficacyLabels;
