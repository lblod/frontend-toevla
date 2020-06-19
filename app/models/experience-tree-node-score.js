import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ExperienceTreeNodeScoreModel extends Model {
  @attr('string') score;

  @belongsTo('experience') experience;
  @belongsTo('tree-node') treeNode;
}
