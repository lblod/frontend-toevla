import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default class EntranceModel extends Model {

  @attr('boolean') hasMannedDesk;
  @attr('boolean') hasTeleloopAtCounter;
  @attr('number') highestThreshold;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasEntranceGutters;
  @attr('boolean') hasRevolvingDoor;
  @attr('number') doorWidth;
  @attr('number') hasEntranceCheck;
  @attr('number') turningRadiusAtDoor;
  @attr('number') forceForOpeningDoor;
  @attr('number') heightOfLoweredCounter;

  @belongsTo('point-of-interest') pointOfInterest;
}
