import Model, { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default class FileModel extends Model {
  @attr('string') label;
  @belongsTo('point-of-interest') pointOfInterest;
  @attr('number') order;
}
