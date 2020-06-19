import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class PointOfInterestModel extends Model {
  @attr('string') label;

  @hasMany('experience') experiences;

}
