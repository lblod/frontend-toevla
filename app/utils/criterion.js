/**
 * Returns the canonical form of the template string.
 *
 * If the template says undefined or geen weergave or it doesn't
 * exist, we shouldn't render it.  This function provides such
 * cleanup.
 */
function canonicalTemplateString(string) {
  if (string) {
    const lowercasedString = string.toLowerCase();
    if (["undefined", "geen weergave"].includes(string.toLowerCase()))
      return null;
    else
      return string;
  } else {
    return null;
  }
}

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
    return canonicalTemplateString(this.rawTemplateString);
  }
}

export { canonicalTemplateString };
