import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default class ToiletModel extends Model {
  @attr('string') comment;
  @attr('boolean') hasSimpleAndLogicalRoute;
  @attr('boolean') hasSyntheticSpeechInElevator;
  @attr('boolean') hasClearSignalizationInBuilding;
  @attr('boolean') hasBabyNurturingTable;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThresholdOnRoute;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasRamps;
  @attr('number') amountOfPlateauElevators;
  @attr('string') typeOfElevator;
  @attr('number') doorWidth;
  @attr('number') turningRadiusAtDoor;
  @attr('number') spaceInFrontOfToilet;
  @attr('number') spaceNextToToilet;
  @attr('number') turningRadius;
  @attr('number') amountOfSupportBraces;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
  @belongsTo('area') sizeOfToiletRoom;
  @belongsTo('concept') canRideUnderWashbasinCategory;
  @belongsTo('concept') washbasinAvailability;
}
