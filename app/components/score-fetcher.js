import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
// import FetchTreeNodeScore from '../helpers/tree-node-score-fetcher';
import { Resource } from 'ember-could-get-used-to-this';
import { use } from 'ember-could-get-used-to-this';

class FetchTreeNodeScoreData extends Resource {
  @tracked value;
  @service nodeScoreStateManager

  async setup() {
    const [experience, node] = this.args.positional;
    if( experience && node ) {
      this.value = await this.nodeScoreStateManager.fetch( experience, node );
    }
  }

  async teardown() { }
}

/**
 * Fetches the ExperienceTreeNodeScore for a TreeNode and an
 * Experience.
 *
 * Uses Resource from ember-could-get-used-to-this, as introduced at
 * https://www.pzuraq.com/introducing-use/.
 */
export default class ScoreFetcherComponent extends Component {
  @use experienceTreeNodeScore = new FetchTreeNodeScoreData( () => [this.args.experience, this.args.node] );
}
