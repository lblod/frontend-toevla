import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ConceptModel extends Model {
  @attr('string') uri;

  @attr('string') title;
  @attr('string') selectableLabel;
  @attr('string') score;

  @attr('number') order;
  @attr('string') criterionType;

  @attr('string') firstScore;
  @attr('string') firstLimit;
  @attr('string') firstLabel;
  @attr('string') secondScore;
  @attr('string') secondLimit;
  @attr('string') secondLabel;
  @attr('string') thirdScore;
  @attr('string') thirdLimit;
  @attr('string') thirdLabel;

  @attr('boolean') isCriteriumForMentallyChallenged;
  @attr('boolean') isCriteriumForHearingImpaired;
  @attr('boolean') isCriteriumForDeaf;
  @attr('boolean') isCriteriumForVisuallyImpaired;
  @attr('boolean') isCriteriumForBlind;
  @attr('boolean') isCriteriumForBobilityProblems;
  @attr('boolean') isCriteriumForWheelchair;
  @attr('boolean') isCriteriumForAutism;

  // we don't manipulate these in the app, setting inverse to null for
  // consistent responses
  @hasMany('concept', { inverse: null }) children;
  @belongsTo('concept', { inverse: null }) parent;
}
