import { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';

export default class RestaurantModel extends PointOfInterest {
  get restaurant() {
    return this;
  }

  @attr('string') comment;
  @attr('number') heightUnderTarraceTableForWheelchairInConsumptionSpace;
  @attr('number') highestThresholdForTerrace;
  @attr('number') smallestPointOnRouteForTarrace;
  @attr('number') mostNarrowDoorWidthForTerrace;
  @attr('number') heightUnderTableForWheelchairInConsumptionSpace;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('number') highestThresholdOnRouteToConsumptionSpace;
  @attr('number') smallestPointOnRouteToConsumptionSpace;
  @attr('number') mostNarrowDoorWidthInConsumptionSpace;
  @attr('boolean') hasChildSeat;
  @attr('boolean') hasChildrenMenu;
  @attr('boolean') hasInformationOnAllergenics;
  @attr('boolean') hasDietBasedMeasAdjustment;
  @attr('boolean') hasMenuAvailableWithPictures;
  @attr('boolean') hasMenuAvailableInBraille;
  @attr('boolean') hasMenuVisuallyClearToRead;
  @attr('boolean') hasMenuAvailableOnline;
  @attr('boolean') hasSpaceSuitedForGroupsWithMobileLimitation;
  @attr('number') amountOfSeatingPlaces;
  @attr('boolean') hasPaymentWithFixedElectronicPaymentSystem;
  @attr('boolean') hasPaymentWithMovableElectronicPaymentSystem;
  @attr('boolean') hasCashPayment;
  @attr('boolean') hasOnlineOrderingAndPaymentOption;

  // new for resto
  @attr('boolean', { allowNull: true }) hasTakeAwayService;
  @attr('boolean', { allowNull: true }) hasHomeDelivery;
  @attr('boolean', { allowNull: true }) onlySelfService;
  @attr('boolean', { allowNull: true }) hasMicrowaveAvailable;
  @attr('boolean', { allowNull: true }) hasKidPlayCorner;
  @attr('boolean', { allowNull: true }) everythingOnGroundFloorOrWithPlateauElevator;
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTable;
  @attr('number') heightUnderTableForWheelchairInConsumptionSpace;
  @attr('boolean', { allowNull: true }) onlyHasHighTables;
  @attr('boolean', { allowNull: true }) hasTableSquareWithSupportsOnCorners;
  @attr('boolean', { allowNull: true }) hasTableSquareWithCentralSupport;
  @attr('boolean', { allowNull: true }) hasTableRoundWithCentralSupport;
  @attr('string') commentOnConsumptionSpace;
  @attr('boolean', { allowNull: true }) hasCoveredTerrace;
  @attr('boolean', { allowNull: true }) terraceAccessibleFromOutside;
  @attr('boolean', { allowNull: true }) tarraceAccessibleThroughConsumptionSpace;
  @attr('boolean', { allowNull: true }) noTarraceAvailable;
  @attr('boolean', { allowNull: true }) onlyHasHighTablesOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableSquareWithSupportsOnCornersOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableSquareWithCentralSupportOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableRoundWithCentralSupportOnTerrace;
  @attr('boolean', { allowNull: true }) heightUnderTableForWheelchairOnTerrace;
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTableOnTerrace;
  @attr('string') commentOnTerrace;
  @attr('boolean', { allowNull: true }) hasConferenceRoom;
  @attr('boolean', { allowNull: true }) hasPlayground;
  @attr('boolean', { allowNull: true }) hasBallroom;
  @attr('string') commentOnExtraFacilities;

  @belongsTo('concept') reservationOptions;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
}
