import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';

export default class FetchTreeNodeScoreData extends Resource {
  @tracked value;
  @service nodeScoreStateManager

  async setup() {
    const [experience, node] = this.args.positional;
    if( experience && node ) {
      try {
        this.value = await this.nodeScoreStateManager.fetch( experience, node );
      } catch( e ) {
        console.error(`Could not fetch TreeNodeScore ${e}`);
      }
    }
  }

  async teardown() { }
}
