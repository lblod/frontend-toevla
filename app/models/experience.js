import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ExperienceModel extends Model {
  @attr('string') title;

  @belongsTo('point-of-interest') pointsOfInterest;
  @hasMany('experience-tree-node-score') experienceTreeNodeScores;

  async getScoreForTreeNode(treeNode){
    const result = await this.store.query('experience-tree-node-score',
      {
        'filter[tree-node][:id:]':treeNode.id,
        'filter[experience][:id:]':this.id
      }
    )
    return result.firstObject;
  }
}