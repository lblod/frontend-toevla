import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class ScoreFetcherComponent extends Component {
  @tracked experienceTreeNodeScore
  @service nodeScoreStateManager

  constructor() {
    super( ...arguments );
    // this.getExperienceTreeNodeScore();
  }

  @action
  async getExperienceTreeNodeScore() {
    this.experienceTreeNodeScore = await this.nodeScoreStateManager.fetch( this.args.experience, this.args.node );
  }
}
