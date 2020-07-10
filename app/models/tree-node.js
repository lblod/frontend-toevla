import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class TreeNodeModel extends Model {
  @attr('string') title;
  @attr('number') order;
  @attr('string') htmlContent;
  @attr('string') uri;
  @attr('string') positiveTemplateString;
  @attr('string') negativeTemplateString;

  @hasMany('tree-node', { inverse: 'parent' }) children;
  @belongsTo('tree-node', { inverse: 'children' }) parent;

}
