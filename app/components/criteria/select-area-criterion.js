import Component from '@glimmer/component';
import { valueMatchesAreaString } from '../../utils/criterion-matching';
import { whenShouldDisplay } from '../../utils/should-display';

export default class CriteriaSelectAreaCriterionComponent extends Component {
  get matchedIndex() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
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

  get matchPositive() {
    return this.matchedIndex === 1;
  }

  get matchScore() {
    const treeNode = this.args.treeNode;
    switch( this.matchedIndex ) {
    case 1:
      return treeNode.firstScore;
    case 2:
      return treeNode.secondScore;
    case 3:
      return treeNode.thirdScore;
    default:
      return null;
    }
  }

  get rawTemplateString() {
    const treeNode = this.args.treeNode;
    switch ( this.matchedIndex ) {
    case 1:
      return treeNode.firstLabel;
    case 2:
      return treeNode.secondLabel;
    case 3:
      return treeNode.thirdLabel;
    default:
      return null;
    }
  }

  get templateString() {
    return whenShouldDisplay(this.rawTemplateString);
  }
}
