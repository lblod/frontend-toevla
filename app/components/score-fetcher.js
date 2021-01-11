import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

/**
 * Fetches the ExperienceTreeNodeScore for a TreeNode and an
 * Experience.
 *
 * The construction here is unconventional.  We want to monitor both
 * the experience as well as the treenode.  If either of both
 * arguments change, we should fetch the corresponding
 * ExperienceTreeNodeScore.  Monitoring these properties would
 * normally be done using render-modifiers.  However, this approach
 * injects a new element in the DOM tree.  Because the ScoreFetcher is
 * nested under a UL element, it should not create a div or other
 * element, but rather be a tagless component.  That makes
 * render-modifiers a no-go.
 *
 * The approach taken kicks off a calculation function in the
 * constructor.  Should everything be available at that time, we're
 * good to go.  We set up a dependency by fetching the experience and
 * the node in the `get experienceTreeNodeScore` function.  This means
 * that this getter will be recalculated whenever either changes.
 * This property also depends on the storedExperienceTreeNodeScore.
 * As such, when getExperienceTreeNodeScore finishes its calculations
 * and sets storedExperienceTreeNodeScore, the getter updates itself.
 *
 * This last approach would mean that the calculation is kicked off
 * again.  We therefore check if the experience or node have changed
 * since the last calculation.  When we start.  In order to make sure
 * there is no race condition, we also check this when the new value
 * pops in.
 */
export default class ScoreFetcherComponent extends Component {
  @tracked storedTreeNodeScore
  @service nodeScoreStateManager

  lastSubjectId = null;
  lastNodeId = null;

  constructor() {
    super( ...arguments );
    this.updateTreeNodeScore(this.args.subject, this.args.node);
  }

  get treeNodeScore() {
    this.updateTreeNodeScore( this.args.subject, this.args.node );
    return this.storedTreeNodeScore;
  }

  async updateTreeNodeScore(subject, node) {
    if( subject && node
        && ( subject.id != this.lastSubjectId
             || node.id != this.lastNodeId ) ) {
      this.lastSubjectId = subject.id;
      this.lastNodeId = node.id;
      const storedTreeNodeScore = await this.nodeScoreStateManager.fetch( this.args.subject, this.args.node );
      if( this.lastSubjectId == subject.id && this.lastNodeId == node.id )
        this.storedTreeNodeScore = storedTreeNodeScore;
    }
  }
}
