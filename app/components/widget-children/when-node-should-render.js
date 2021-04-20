import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { editMapping } from '../../utils/custom-component-mapping';
import { getInstance, property } from '../../utils/path-instances';
import { booleanCriterion } from '../../helpers/select-boolean-criterion';
import { choiceCriterion } from '../../helpers/select-choice-criterion';
import { numericCriterion } from '../../helpers/select-numeric-criterion';
import { stringCriterion } from '../../helpers/select-string-criterion';
import { areaCriterion } from '../../helpers/select-area-criterion';

export default class WidgetChildrenWhenNodeShouldRenderComponent extends Component {
  // TODO: update using @use Resource after upgrading
  @tracked lastCalculatedDoRender;
  @service nodeScoreStateManager;
  @service targetAudience;


  constructor() {
    super(...arguments);
    this.passedArguments = arguments[0];
    // TODO: move these things into tasks
    this.initDoRender();
  }

  /**
   * This variable indicates the current node should be rendered.  We
   * assume a node should be rendered if it contains a value and matches
   * the current target users, or if one of its children should be rendered.
   */
  get doRender() {
    console.log(`There are ${this.targetAudience.selectedArray.length} items selected`);
    this.initDoRender();
    return this.lastCalculatedDoRender;
  }

  async initDoRender() {
    const node = this.args.node;
    const subject = this.args.subject;
    const selectedArray = this.targetAudience.selectedArray;

    const lastNodeDiffers = node !== this.lastNode;
    const subjectDiffers = subject !== this.lastSubject;
    const audienceDiffers =
      this.lastSelectedArray
      && (
        JSON.stringify(selectedArray.map((x) => x.id))
        !== JSON.stringify(this.lastSelectedArray.map((x) => x.id))
      );

    if (lastNodeDiffers || subjectDiffers || audienceDiffers) {
      const render =
        await this.hasVisibleScore()
        || await this.hasRenderedLabel(node, subject)
        || await this.hasRenderedChildren(node, subject);

      this.lastNode = node;
      this.lastSubject = subject;
      this.lastSelectedArray = selectedArray;

      this.lastCalculatedDoRender = render;
    }
  }

  async hasVisibleScore() {
    if (this.targetAudience.shouldRenderScore(this.args.node.simplifiedTargetAudiences)) {
      const etns = await this.nodeScoreStateManager.fetch(this.args.subject, this.args.node);
      return etns && etns.score && true;
    } else {
      return false;
    }
  }

  /**
   * Yields true iff node/subject have rendered children.  Yields
   * false otherwise.
   */
  async hasRenderedChildren(node, subject) {
    const children = await node.children;
    for (const child of children.toArray() || []) {
      const shouldRenderChild = this.targetAudience.shouldRenderScore(child.simplifiedTargetAudiences);
      const hasRenderedLabel = await this.hasRenderedLabel(child, subject);
      if ( (shouldRenderChild && hasRenderedLabel)
           || await this.hasRenderedChildren(child, subject)) {
        return true;
      }
    }
    return false;
  };

  async hasRenderedLabel(node, subject) {
    if ((await node.children).length) {
      // this has children, so no detail
      return false;
    } else {
      // does this render a label?
      const componentInfo = editMapping(node.uri);
      let instance;
      try {
        instance = await getInstance(subject, componentInfo.key, { create: false });
      } catch (e) {
        // Could not find instance, this is normal
        return false;
      }
      let value = await get(instance, property(componentInfo.key));
      switch (componentInfo.component) {
        case "boolean":
          return booleanCriterion(node, value).templateString;
        case "centimeters":
          return numericCriterion(node, value).templateString;
        case "choice":
          return choiceCriterion(node, value).templateString;
        case "count":
          return numericCriterion(node, value).templateString;
        case "force":
          return numericCriterion(node, value).templateString;
        case "kilometers":
          return numericCriterion(node, value).templateString;
        case "meters":
          return numericCriterion(node, value).templateString;
        case "string":
          return stringCriterion(node, value).templateString;
        case "area":
          return value && areaCriterion(node, [get(value, "width"), get(value, "height")]).templateString;
        default:
          console.warn(`Could not find label for node: ${node.id} and subject ${subject.id}; type: ${componentInfo.component}`);
          return false;
      }
    }
  }
}
