import { inject as service } from '@ember/service';
import Model from '@ember-data/model';

export default class ScorableModel extends Model {
  @service nodeScoreStateManager;

  async getScoreForTreeNode(treeNode){
    return await this.nodeScoreStateManager.fetch( this, treeNode );
  }
}
