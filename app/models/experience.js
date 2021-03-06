import Scorable from './scorable';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ExperienceModel extends Scorable {
  @belongsTo('point-of-interest') pointOfInterest;
  @belongsTo('route') circulation;
  @belongsTo('guided-tour') guidedTour;
  @belongsTo('auditorium') auditorium;

  @attr('string') title;
  @attr('string') comment;
  @attr('boolean') hasMultipleElementsToDriveUnder;
  @attr('boolean') hasGoodLighting;
  @attr('boolean') hasMagnifyingGlass;
  @attr('boolean') brochureHasAccessibleContrast;
  @attr('boolean') brochureIsAvailableInBraille;
  @attr('boolean') brochureIsAvailableInLargePrint;
  @attr('boolean') signsHaveAccessibleContrast;
  @attr('boolean') signsHaveNoReflection;
  @attr('boolean') signsHaveBraille;
  @attr('boolean') signsInLargePrint;
  @attr('boolean') audioGuideOnlyInDutch;
  @attr('boolean') audioGuideAvailableInMultipleLanguages;
  @attr('boolean') audioGuideAvailableViaHeadset;
  @attr('boolean') audioGuideAvailableViaSmartphone;
  @attr('boolean') audioGuideAvailableViaOtherMeans;
  @attr('boolean') hasMovieGuide;
  @attr('boolean') hasVirtualTechnology;
  @attr('boolean') hasTouchElements;
  @attr('boolean') hasSmellElements;
  @attr('boolean') hasActionableElements;
  @attr('boolean') hasListeningElements;
  @attr('boolean') hasPlacesOfSilence;
  @attr('string') otherElements;
}
