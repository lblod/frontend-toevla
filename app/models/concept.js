import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ConceptModel extends Model {
  @attr('string') title;
  @attr('number') order;
  @attr('string') htmlContent;
  @attr('string') criterionType;

  @attr('string') uri;
  @attr('string') positiveTemplateString;
  @attr('string') negativeTemplateString;

  @attr('string') firstScore;
  @attr('string') firstLimit;
  @attr('string') firstLabel;
  @attr('string') secondScore;
  @attr('string') secondLimit;
  @attr('string') secondLabel;
  @attr('string') thirdScore;
  @attr('string') thirdLimit;
  @attr('string') thirdLabel;

  // we don't manipulate these in the app, setting inverse to null for
  // consistent responses
  @hasMany('concept', { inverse: null }) children;
  @belongsTo('concept', { inverse: null }) parent;
}