import { whenShouldDisplay } from './should-display';

export default class Criterion {
  constructor(treeNode, value) {
    this.treeNode = treeNode;
    this.value = value;
  }

  get matchScore() {
    const treeNode = this.treeNode;
    switch (this.matchedIndex) {
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
    const treeNode = this.treeNode;
    switch (this.matchedIndex) {
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
