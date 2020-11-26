import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';
import { valueMatchesNumericString as valueMatchesString } from '../utils/criterion-matching';

class Matcher extends Criterion {

  get matchedIndex() {
    const value = this.value;
    const treeNode = this.treeNode;

    if( treeNode ) {
      if( valueMatchesString( value, treeNode.firstLimit ) ) {
        return 1;
      } else if( valueMatchesString( value, treeNode.secondLimit ) ) {
        return 2;
      } else if( valueMatchesString( value, treeNode.thirdLimit ) ) {
        return 3;
      }
    }
    return null;
  }
}

function numericCriterion(treeNode, value) {
  const matcher = new Matcher(treeNode, value);
  return {
    templateString: matcher.templateString,
    score: matcher.matchScore
  };
}

export { numericCriterion };

export default helper(([treeNode, value]) => numericCriterion(treeNode, value));
