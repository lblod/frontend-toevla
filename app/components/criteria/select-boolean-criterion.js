import Component from '@glimmer/component';

export default class CriteriaSelectBooleanCriterionComponent extends Component {
  get matchedIndex() {
    return this.args.value ? 1 : 2;
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
    default:
      return null;
    }
  }

  get templateString() {
    return this.rawTemplateString === "undefined" || "geen weergave" ? null : this.rawTemplateString;
  }
}