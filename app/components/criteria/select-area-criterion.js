import Component from '@glimmer/component';
import { valueMatchesAreaString } from '../../utils/criterion-matching';

export default class CriteriaSelectAreaCriterionComponent extends Component {
  // this.args.treeNode
  // this.args.value

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
        console.log({ msg: "No value found", value, treeNode });
        return null;
      }
    }
  }

  get matchPositive() {
    return this.matchedIndex === 1;
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
    return ["undefined","geen weergave"].includes( this.rawTemplateString )
      ? null
      : this.rawTemplateString;
  }
}
