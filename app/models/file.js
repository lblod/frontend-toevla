import Model, { attr } from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default class FileModel extends Model {
  @attr('string') label;
  @belongsTo('point-of-interest') pointOfInterest;
}
