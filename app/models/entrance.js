import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default class EntranceModel extends Model {

  @attr('boolean') hasMannedDeskl;
  @attr('boolean') hasTeleloopAtCounterl;
  @attr('number') highestThreshold;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasEntranceGuttersl;
  @attr('boolean') hasRevolvingDoorl;
  @attr('number') doorWidth;
  @attr('number') hasEntranceCheck;
  @attr('number') turningRadiusAtDoor;
  @attr('number') forceForOpeningDoor;
  @attr('number') hasLoweredCounter;

  @belongsTo('point-of-interest') pointOfInterest;
}
