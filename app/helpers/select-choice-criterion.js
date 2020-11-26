import { get } from '@ember/object';
import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';

class Matcher extends Criterion {
  get matchScore() {
    return get(this, "value.score");
  }

  get rawTemplateString() {
    return get(this, "value.title");
  }
}

function choiceCriterion(treeNode, value) {
  const matcher = new Matcher(treeNode, value);
  return {
    templateString: matcher.templateString,
    score: matcher.matchScore
  };
}

export { choiceCriterion };

export default helper(([treeNode, value]) => choiceCriterion(treeNode, value));
