import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default class AreaModel extends Model {
  @attr('number') width;
  @attr('number') height;
}
