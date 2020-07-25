import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class PointOfInterestModel extends Model {
  @attr('string') label;

  @attr('boolean') hasMovableElectronicPaymentSystem;
  @attr('boolean') wifiAlwaysAvailable;
  @attr('boolean') assistanceForGuideDogs;
  @attr('boolean') websiteHasScreenreader;
  @attr('boolean') websiteSupportsWcag2;
  @attr('boolean') websiteAllowsTextIncrease;
  @attr('boolean') publicTransportGuidanceAvailable;
  @attr('boolean') websiteHasAccessibleContrast;
  @attr('boolean') websiteHasSignLanguage;
  @attr('boolean') wheelchairAvailable;
  @attr('boolean') hasClearlyRecognizableBuilding;
  @attr('boolean') hasClearlyRecognizableEntrance;
  @attr('boolean') hasVisibleGuidelines;
  @attr('boolean') hasMarkingsOrContrastsOnGlassDoors;
  @attr('boolean') extraAttentionGivenToAcoustics;
  @attr('boolean') hasAlternativeEntranceForWheelchair;

  @hasMany('experience') experiences;
  @hasMany('entrance') entrances;
  @hasMany('parking') parkings;
  @hasMany('toilet') toilets;
}
