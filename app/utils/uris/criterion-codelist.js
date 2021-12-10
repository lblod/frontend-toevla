const yes = "http://data.toegankelijk.vlaanderen.be/id/concepts/score-values/yes";
const no = "http://data.toegankelijk.vlaanderen.be/id/concepts/score-values/no";
const info = "http://data.toegankelijk.vlaanderen.be/id/concepts/score-values/info";

export function isYes(thing) {
  return thing === yes;
}

export function isNo(thing) {
  return thing === no;
}

export function isInfo(thing) {
  return thing === info;
}

export { yes, no, info };
