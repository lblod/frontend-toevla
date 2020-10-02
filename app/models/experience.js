import Model from '@ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';
import { editMapping, keyToPath} from '../utils/custom-component-mapping';

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
    const result = await this.store.query('experience-tree-node-score',
      {
        'filter[tree-node][:id:]':treeNode.id,
        'filter[experience][:id:]':this.id
      }
    )

    return result.firstObject;
  }

}
