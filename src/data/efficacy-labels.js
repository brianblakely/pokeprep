import * as efficacy from '../constants/efficacy.js';

const efficacyLabels = new Map([
  [efficacy.EFFICACY_STRONG, {
    phrase: `It's Super Effective!`,
    glyph: `▲`
  }],
  [efficacy.EFFICACY_NORMAL, {
    phrase: `Neutral`,
    glyph: ` `
  }],
  [efficacy.EFFICACY_WEAK, {
    phrase: `It's Not Very Effective…`,
    glyph: `▼`
  }],
  [efficacy.EFFICACY_NONE, {
    phrase: `It Doesn't Affect…`,
    glyph: `✖︎`
  }]
]);

export default efficacyLabels;
