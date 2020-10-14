import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default class PathModel extends Model {
  @attr('boolean') hasWheelchairFriendlyTerrain;
  @attr('number') narrowestPoint;
  @attr('number') highestThreshold;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasRamp;

}
