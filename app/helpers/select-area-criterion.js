import { helper } from '@ember/component/helper';
import Criterion from '../utils/criterion';
import { valueMatchesAreaString } from '../utils/criterion-matching';

class Matcher extends Criterion {

  get matchedIndex() {
    const value = this.value;
    const treeNode = this.treeNode;

    if( this.treeNode && this.value && this.value.length ) {
      if( valueMatchesAreaString( value, treeNode.firstLimit ) ) {
        return 1;
      } else if( valueMatchesAreaString( value, treeNode.secondLimit ) ) {
        return 2;
      } else if( valueMatchesAreaString( value, treeNode.thirdLimit ) ) {
        return 3;
      } else {
        // eslint-disable-next-line no-console
        if( console && console.warn ) {
          // eslint-disable-next-line no-console
          console.warn({ msg: "No value found", value, treeNode });
        }
        return null;
      }
    }
    return null;
  }
}

function areaCriterion(treeNode, value) {
  const matcher = new Matcher(treeNode, value);
  return {
    templateString: matcher.templateString,
    score: matcher.matchScore
  };
}

export { areaCriterion };

export default helper(([treeNode, value]) => areaCriterion(treeNode, value));
