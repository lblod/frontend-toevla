import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';

class Matcher extends Criterion {

  get matchedIndex() {
    const value = this.value;
    const treeNode = this.treeNode;

    if( treeNode ) {
      if( value && value != "" ) {
        return 1;
      } else {
        return 2;
      }
    }
    return null;
  }

  get rawTemplateString() {
    if( this.matchedIndex === 1 ) {
      return this.value;
    } else {
      return null;
    }
  }

  get templateString() {
    return this.rawTemplateString;
  }
}

function stringCriterion(treeNode, value) {
  const matcher = new Matcher(treeNode, value);
  return {
    templateString: matcher.templateString,
    score: matcher.matchScore
  };
}

export { stringCriterion };

export default helper(([treeNode, value]) => stringCriterion(treeNode, value));
