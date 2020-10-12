import Model from '@ember-data/model';
import { hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class TreeModel extends Model {
  @attr('string') title;
  @hasMany('tree-node') topLevelNodes;
}
