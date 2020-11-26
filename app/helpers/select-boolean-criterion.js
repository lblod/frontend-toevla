import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';

class Matcher extends Criterion {

  get matchedIndex() {
    return this.value ? 1 : 2;
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
