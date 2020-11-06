import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default class ParkingModel extends Model {
  @attr('string') comment;
  @attr('boolean') isPartOfLocation;
  @attr('boolean') hasDriveOnPossibility;
  @attr('boolean') isWellLit;
  @attr('boolean') hasDetailedRouteDescription;
  @attr('boolean') detailedRouteDescriptionHasScreenReader;
  @attr('boolean') detailedRouteDescriptionIsAvailableInFlemishSignLanguage;
  @attr('number') numberOfWheelchairFriendlySpots;
  @attr('boolean') onPublicDomain;
  @attr('boolean') hasWheelchairFriendlyTerrain;
  @attr('number') parkingSpaceLength;
  @attr('number') parkingSpaceWidth;
  @attr('number') maxVehicleHeight;
  @belongsTo('path') pathToEntrance;
}
