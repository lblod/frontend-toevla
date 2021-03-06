import Model, { attr } from '@ember-data/model';

export default class RestaurantModel extends Model {
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
}
