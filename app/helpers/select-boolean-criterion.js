import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';

class Matcher extends Criterion {

  get matchedIndex() {
    if (this.value === true)
      return 1;
    else if (this.value === false)
      return 2;
    else return 3;
  }
}

function booleanCriterion(treeNode, value) {
  const matcher = new Matcher(treeNode, value);
  return {
    templateString: matcher.templateString,
    score: matcher.matchScore
  };
}

export { booleanCriterion };

export default helper(([treeNode, value]) => booleanCriterion(treeNode, value));
