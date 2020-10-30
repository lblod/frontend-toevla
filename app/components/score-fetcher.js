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
 * since the last calculation.  There is a minimal risk of a race
 * condition here which should be tackled still.
 */
export default class ScoreFetcherComponent extends Component {
  @tracked storedExperienceTreeNodeScore
  @service nodeScoreStateManager

  lastExperienceId = null;
  lastNodeId = null;

  constructor() {
    super( ...arguments );
    this.getExperienceTreeNodeScore(this.args.experience, this.args.node);
  }

  get experienceTreeNodeScore() {
    this.getExperienceTreeNodeScore( this.args.experience, this.args.node );
    return this.storedExperienceTreeNodeScore;
  }

  async getExperienceTreeNodeScore(experience, node) {
    if( experience && node
        && ( experience.id != this.lastExperienceId
             || node.id != this.lastNodeId ) ) {
      this.lastExperienceId = experience.id;
      this.lastNodeId = node.id;
      this.storedExperienceTreeNodeScore = await this.nodeScoreStateManager.fetch( this.args.experience, this.args.node );
    }
  }
}
