import Model from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ExperienceModel extends Model {
  @belongsTo('point-of-interest') pointOfInterest;
  @belongsTo('route') circulation;
  @belongsTo('guided-tour') guidedTour;
  @belongsTo('auditorium') auditorium;

  @attr('string') title;
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
  @attr('boolean') hasMovieGuide;
  @attr('boolean') hasVirtualTechnology;
  @attr('boolean') hasTouchElements;
  @attr('boolean') hasSmellElements;
  @attr('boolean') hasActionableElements;
  @attr('boolean') hasListeningElements;
  @attr('boolean') hasPlacesOfSilence;
  @attr('string') otherElements;

  async getScoreForTreeNode(treeNode){
    return await this.nodeScoreStateManager.fetch( this, treeNode );
  }
}
