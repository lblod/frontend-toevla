import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default class AreaModel extends Model {
  @attr('number') width;
  @attr('number') height;
}
