const mapping = {
  "https://data.toevla.org/id/concepts/02ab2a7a-128f-468f-9021-2174181b3e13": "tree-components/circulation",
  "https://data.toevla.org/id/concepts/38e68fe4-4a19-4fae-b4a8-309e8c74fb7c": "tree-components/experience"
};

export default function customComponentMapping(uri){
  if( uri && mapping[uri] )
    return  mapping[uri];
  return null;
}

const eMapping = {
  "https://data.toevla.org/id/concepts/172da2d4-4114-465b-a083-7b7644618838":	{ component: "edit-components/boolean", key: "pointOfInterest.publicTransportGuidanceAvailable" },
  "https://data.toevla.org/id/concepts/254027e0-9015-424b-a05f-60b0e33e5808":	{ component: "edit-components/boolean", key: "pointOfInterest.hasFreeEntranceForGuide" },
  "https://data.toevla.org/id/concepts/481f153a-d901-4edc-af87-fa35cbed1057":	{ component: "edit-components/boolean", key: "pointOfInterest.acceptsMuseumPass" },
  "https://data.toevla.org/id/concepts/76329315-c2ba-4309-b4f1-0233e10eec7b":	{ component: "edit-components/boolean", key: "pointOfInterest.acceptsUitpas" },
  "https://data.toevla.org/id/concepts/fab3d846-a393-4c89-a2db-0ee075406f66":	{ component: "edit-components/boolean", key: "pointOfInterest.acceptsCityPass" },
  "https://data.toevla.org/id/concepts/b60c0fd6-61ce-4461-824d-efd6cb2055bd":	{ component: "edit-components/boolean", key: "pointOfInterest.acceptsEdc" },
  "https://data.toevla.org/id/concepts/fc8bb9f5-76f0-47a5-a628-858037dcc076":	{ component: "edit-components/boolean", key: "pointOfInterest.wheelchairAvailable" },
  "https://data.toevla.org/id/concepts/4bd0372b-314b-43c1-8295-7114b6f08443":	{ component: "edit-components/choice", key: "pointOfInterest.wifiAvailability", conceptScheme: "https://data.toevla.org/id/concept-schemes/e623da8d-3495-4bd4-a691-53c3637f406e" },
  "https://data.toevla.org/id/concepts/0545c86a-5d54-463c-b161-c1b8946b13cd":	{ component: "edit-components/boolean", key: "pointOfInterest.assistanceForGuideDogs" },
  "https://data.toevla.org/id/concepts/5d0ccee1-065d-4ce1-923f-d9c13b600d60": { component: "edit-components/boolean", key: "pointOfInterest.hasVisualVisitPreparationPlan" },
  "https://data.toevla.org/id/concepts/9ae90bc9-2f2f-47b6-b7fc-a542172e6ac5":	{ component: "edit-components/boolean", key: "pointOfInterest.websiteSupportsWcag2" },
  "https://data.toevla.org/id/concepts/0dd0cc1d-630d-445e-80a6-100d32ef460f":	{ component: "edit-components/boolean", key: "pointOfInterest.websiteAllowsTextIncrease" },
  "https://data.toevla.org/id/concepts/eea322d2-e0ec-40f2-8d11-5774435ca067":	{ component: "edit-components/boolean", key: "pointOfInterest.websiteHasAccessibleContrast" },
  "https://data.toevla.org/id/concepts/790d70c6-6fd3-4a7b-8536-0813f3e54888":	{ component: "edit-components/boolean", key: "pointOfInterest.websiteHasScreenreader" },
  "https://data.toevla.org/id/concepts/1f169010-d9ab-40f9-89f9-4033b569dd0f":	{ component: "edit-components/boolean", key: "pointOfInterest.websiteHasSignLanguage" },
  "https://data.toevla.org/id/concepts/c104d695-8623-4015-b119-ce74be01cbd3": { component: "edit-components/boolean", key: "pointOfInterest.hasCashPayment"},
  "https://data.toevla.org/id/concepts/07920816-de6e-4338-9e4e-9d112e7c740a": { component: "edit-components/boolean", key: "pointOfInterest.hasPaymentWithMovableElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/7004c39e-5e7e-42f1-a945-8927343ad838": { component: "edit-components/boolean", key: "pointOfInterest.hasPaymentWithFixedElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/aea52fef-c650-4519-ae36-783a7b8d2920": { component: "edit-components/string", key: "pointOfInterest.comment"},

  "https://data.toevla.org/id/concepts/f4fc7b9f-1c55-415a-96ff-28fbda94881e": { component: "edit-components/boolean", key: "pointOfInterest.publicTransportRouteDescription.hasDetailedDescription" },
  "https://data.toevla.org/id/concepts/0964f472-4c5a-43ff-a0c2-b89eee5f5650": { component: "edit-components/boolean", key: "pointOfInterest.publicTransportRouteDescription.hasScreenreader" },
  "https://data.toevla.org/id/concepts/a44288c3-78d2-4896-a49c-c37ac215a9b3": { component: "edit-components/boolean", key: "pointOfInterest.publicTransportRouteDescription.hasFlemishSignLanguage" },
  "https://data.toevla.org/id/concepts/d0b9ea46-e065-4ee0-9cfa-2463ba4a3027": { component: "edit-components/kilometers", key: "pointOfInterest.trainStop.distanceFromLocation" },
  "https://data.toevla.org/id/concepts/306fa11e-a804-4b27-9dcd-4bb7f20ba8d4": { component: "edit-components/string", key: "pointOfInterest.trainStop.stopName" },
  "https://data.toevla.org/id/concepts/bf7e42d6-dda7-4de7-a82c-8f8d5b031b42": { component: "edit-components/meters", key: "pointOfInterest.busStop.distanceFromLocation" },
  "https://data.toevla.org/id/concepts/0273e136-173c-4a35-89c2-d07ac6ab22f7": { component: "edit-components/string", key: "pointOfInterest.busStop.stopName" },
  "https://data.toevla.org/id/concepts/a15c7289-8906-4b12-8f49-1d8bf7b3b0ac": { component: "edit-components/meters", key: "pointOfInterest.tramStop.distanceFromLocation" },
  "https://data.toevla.org/id/concepts/e2b6e01b-adb0-4dcd-b29d-e32366ec74bf": { component: "edit-components/string", key: "pointOfInterest.tramStop.stopName" },
  "https://data.toevla.org/id/concepts/79a7ccdc-be9b-4493-af0e-41903bd1c39a": { component: "edit-components/string", key: "pointOfInterest.commentOnPublicTransport" },

  "https://data.toevla.org/id/concepts/74837ebc-fb5f-4333-81f5-bd92db6861f2": { component: "edit-components/boolean", key: "pointOfInterest.hasClearlyRecognizableBuilding" },
  "https://data.toevla.org/id/concepts/82e3201c-60d4-4eb6-88c1-90bcc5f87910": { component: "edit-components/boolean", key: "pointOfInterest.hasClearlyRecognizableEntrance" },
  "https://data.toevla.org/id/concepts/3c06fec6-3a7c-483d-b53f-e3c0a5caf179": { component: "edit-components/boolean", key: "pointOfInterest.hasVisibleGuidelines" },
  "https://data.toevla.org/id/concepts/dd04f96d-71c9-4686-bb9f-ecf91ff6a67f": { component: "edit-components/choice", key: "pointOfInterest.typeOfGlassDoorDecoration", conceptScheme: "https://data.toevla.org/id/concept-schemes/bd0cb7ef-ffa3-4b07-8829-ed1aa68a0125" },
  "https://data.toevla.org/id/concepts/3aa2c3d0-6635-40ae-bfd5-ad15b6553096": { component: "edit-components/boolean", key: "pointOfInterest.extraAttentionGivenToAcoustics" },
  "https://data.toevla.org/id/concepts/ac946973-bfa8-446a-8066-05ee7185ebfb": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasMannedDesk" },
  "https://data.toevla.org/id/concepts/f0abf682-daae-4b49-bfa1-0a63da8b680b": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasTeleloopAtCounter" },
  "https://data.toevla.org/id/concepts/994e6c27-2449-4363-aa7e-cc6e899e4f55": { component: "edit-components/boolean", key: "pointOfInterest.hasAlternativeEntranceForWheelchair" },
  "https://data.toevla.org/id/concepts/4db32cec-4315-4ce1-8c2f-c752652a7f40": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.highestThreshold" },
  "https://data.toevla.org/id/concepts/0c43ed99-f7bb-4654-b1e0-a93a6d3af26f": { component: "edit-components/count", key: "pointOfInterest.entrance.amountOfStairs" },
  "https://data.toevla.org/id/concepts/6ce49390-b3d5-4b8e-9c56-d9fc193823a2": { component: "edit-components/count", key: "pointOfInterest.entrance.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/e431f79f-21f9-4b1a-95a0-6200a743fea7": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasEntranceGutters" },
  "https://data.toevla.org/id/concepts/6c49fb53-908d-4344-afe7-abaf86d3e461": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasRevolvingDoor" },
  "https://data.toevla.org/id/concepts/25e9674f-2222-4377-b115-9b4c25b67f67": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.doorWidth" },
  "https://data.toevla.org/id/concepts/10764c3c-4142-4c6c-8c75-e3723c6fae23": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.hasEntranceCheck" },
  "https://data.toevla.org/id/concepts/8a7b8177-59a8-417d-8dee-e5dcb3fedbf8": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.turningRadiusAtDoor" },
  "https://data.toevla.org/id/concepts/bba57566-133e-49e6-a151-303ae5f0ece8": { component: "edit-components/choice", key: "pointOfInterest.entrance.forceForOpeningDoorCategory", conceptScheme: "https://data.toevla.org/id/concept-schemes/9f029773-b480-49bf-9df5-d5e23810c7dd" },
  "https://data.toevla.org/id/concepts/c0a131bb-78a4-4b16-a2e9-f2fb252fc1c9": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.heightOfLoweredCounter" },
  "https://data.toevla.org/id/concepts/30092095-b73a-4544-b651-9bf77affe38c": { component: "edit-components/string", key: "pointOfInterest.commentOnEntrance" },
  "https://data.toevla.org/id/concepts/1591a03f-4be5-4c2a-a192-7bd62d72fffb": { component: "edit-components/boolean", key: "pointOfInterest.parking.isPartOfLocation" },
  "https://data.toevla.org/id/concepts/078b35cc-81ce-420a-bb5b-18ba6b65caf1": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasDriveOnPossibility" },
  "https://data.toevla.org/id/concepts/15e473f5-7d2f-4777-aeb9-9d551adce7eb": { component: "edit-components/boolean", key: "pointOfInterest.parking.isWellLit" },
  "https://data.toevla.org/id/concepts/4c5a3e36-28b5-4ab2-b9d6-330bd2af67c4": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasDetailedRouteDescription" },
  "https://data.toevla.org/id/concepts/60031a1d-cee8-4d02-a745-930de16f7c5e": { component: "edit-components/boolean", key: "pointOfInterest.parking.detailedRouteDescriptionHasScreenReader" },
  "https://data.toevla.org/id/concepts/1015eff1-2a00-4cc5-a0ac-59eee06602fa": { component: "edit-components/boolean", key: "pointOfInterest.parking.detailedRouteDescriptionIsAvailableInFlemishSignLanguage" },
  "https://data.toevla.org/id/concepts/6a31ce16-1e0d-4d01-96b5-4a976c849bc8": { component: "edit-components/count", key: "pointOfInterest.parking.numberOfWheelchairFriendlySpots" },
  "https://data.toevla.org/id/concepts/09eacace-66b4-41b6-959d-60316e83bf6a": { component: "edit-components/boolean", key: "pointOfInterest.parking.onPublicDomain" },
  "https://data.toevla.org/id/concepts/9cf0259c-b038-4691-a113-0ae9c47ea407": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasWheelchairFriendlyTerrain" },
  "https://data.toevla.org/id/concepts/2e2ce9ba-cc64-4e1c-8171-35f0915e4784": { component: "edit-components/centimeters", key: "pointOfInterest.parking.parkingSpaceWidth" },
  "https://data.toevla.org/id/concepts/4cf4c693-4217-4e90-ac3c-81ac12c68c0b": { component: "edit-components/centimeters", key: "pointOfInterest.parking.parkingSpaceLength" },
  "https://data.toevla.org/id/concepts/566b1966-811b-43a6-8c7b-7a5b628e8e21": { component: "edit-components/centimeters", key: "pointOfInterest.parking.maxVehicleHeight" },
  "https://data.toevla.org/id/concepts/14e814b5-4e0f-4d29-b92f-4027bb844ee0": { component: "edit-components/boolean", key: "pointOfInterest.parking.pathToEntrance.hasWheelchairFriendlyTerrain" },
  "https://data.toevla.org/id/concepts/de9eb3bc-46fc-452d-bfb2-c53ef3d22e25": { component: "edit-components/centimeters", key: "pointOfInterest.parking.pathToEntrance.narrowestPoint" },
  "https://data.toevla.org/id/concepts/5e3e1229-ba91-47ba-a672-fdfc11aa0a70": { component: "edit-components/centimeters", key: "pointOfInterest.parking.pathToEntrance.highestThreshold" },
  "https://data.toevla.org/id/concepts/060a522e-bb22-4e31-9220-5f8c22e616c4": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfThresholds" },
  "https://data.toevla.org/id/concepts/e6a08853-59f4-4308-8211-9ba75f6404fc": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfStairs" },
  "https://data.toevla.org/id/concepts/eb456081-cf65-4f5e-aaeb-92f3b91247a0": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/ab2942e4-bfd2-4410-973a-a99d61bff979": { component: "edit-components/boolean", key: "pointOfInterest.parking.pathToEntrance.hasRamp" },
  "https://data.toevla.org/id/concepts/2236d7d2-a50b-4045-a555-7ba9a2116ba1": { component: "edit-components/string", key: "pointOfInterest.parking.comment" },

  // TOILET
  "https://data.toevla.org/id/concepts/79804c21-ba2d-4b3a-8633-447ffbc77fce": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasSimpleAndLogicalRoute" },
  "https://data.toevla.org/id/concepts/fadff95d-20b7-422f-b402-3317bd747129": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasSyntheticSpeechInElevator" },
  "https://data.toevla.org/id/concepts/7a16f2ea-abbf-4367-9e2e-33af82336928": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasClearSignalizationInBuilding" },
  "https://data.toevla.org/id/concepts/b3f68ed9-d415-4704-a3be-5f366077b80c": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasBabyNurturingTable" },
  "https://data.toevla.org/id/concepts/8c400682-6f97-410a-8791-996c498e212c": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfElevator" },
  "https://data.toevla.org/id/concepts/f32a0e76-853b-40bb-86c8-81894cdb70bb": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.smallestPointOnRoute" },
  "https://data.toevla.org/id/concepts/bf1005f6-10f1-4afb-8bec-cd55e52fdba9": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.highestThresholdOnRoute" },
  "https://data.toevla.org/id/concepts/a70ec038-cdc7-43eb-9a52-7e6083e81947": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfThresholds" },
  "https://data.toevla.org/id/concepts/b8b0ca23-c64e-4dfb-96be-3084b62b1e5d": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfStairs" },
  "https://data.toevla.org/id/concepts/5dc312ae-d003-433b-b281-0cea6b125088": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/8a171198-7826-4fe8-8e94-1bcae36277e8": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasRamps" },
  "https://data.toevla.org/id/concepts/8e15a179-2fb3-4c56-b81d-f82bdfe7b7f9": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfPlateauElevator" },
  "https://data.toevla.org/id/concepts/954d684f-bba6-4e64-90bb-1e1f712a3a07": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfPlateauElevators" },
  "https://data.toevla.org/id/concepts/f1568429-0d10-41df-8fd5-a7579dc6be85": { component: "edit-components/string", key: "pointOfInterest.toilet.typeOfElevator" },
  "https://data.toevla.org/id/concepts/e7d25ab8-8660-4e7f-a1d5-aede97aa6883": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.doorWidth" },
  "https://data.toevla.org/id/concepts/b3a5395a-3a3e-42cf-a140-c456f2a52237": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.turningRadiusAtDoor" },
  "https://data.toevla.org/id/concepts/1ba08c83-b8f3-4c64-9320-fd04ee30c183": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfToiletRoom" },
  "https://data.toevla.org/id/concepts/4a3cfa2c-ac2d-419e-a48e-a85c8bbb3c66": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.spaceInFrontOfToilet" },
  "https://data.toevla.org/id/concepts/319b7eeb-5f07-4174-8342-4e2fdb601d9d": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.spaceNextToToilet" },
  "https://data.toevla.org/id/concepts/d02bbcf1-338d-4cc1-b2be-2c7af896b13a": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.turningRadius" },
  "https://data.toevla.org/id/concepts/4bcfc144-a0d8-4461-bacb-35831af7ee4c": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfSupportBraces" },
  "https://data.toevla.org/id/concepts/77612036-856f-4579-b6ed-06537d4d2c6f": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasWashbasin" },
  "https://data.toevla.org/id/concepts/846960af-ba55-4b56-a92a-861a88160204": { component: "edit-components/choice", key: "pointOfInterest.toilet.canRideUnderWashbasinCategory", conceptScheme: "https://data.toevla.org/id/concept-schemes/290a3bd5-f6ce-49d1-85c3-da7356cdec8b" },
  "https://data.toevla.org/id/concepts/36d9f853-4cb5-4021-9322-5d8f658f9b3a": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeHeightUnderWashbasin" },
  "https://data.toevla.org/id/concepts/eefaadc4-9732-48aa-b9da-7472f348990c": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeDepthUnderWashbasin" },
  "https://data.toevla.org/id/concepts/972c27b2-c27b-4b25-9fc9-93a367c23f28": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeWidthUnderWashbasin" },
  "https://data.toevla.org/id/concepts/d05326d4-eed9-4c10-b916-d701838f28e3": { component: "edit-components/string", key: "pointOfInterest.toilet.comment" },

  "https://data.toevla.org/id/concepts/0139638d-8a35-4d51-b179-681984c055eb": { component: "edit-components/boolean", key: "circulation.isSimpleAndLogical" },
  "https://data.toevla.org/id/concepts/6baf48b5-924b-4a1d-ae13-b5925c3f7618": { component: "edit-components/boolean", key: "circulation.hasClearSignalizationInBuilding" },
  "https://data.toevla.org/id/concepts/e92a8c73-9740-4fec-b12c-470add4fc7b7": { component: "edit-components/boolean", key: "circulation.hasSyntheticSpeechInElevator" },
  "https://data.toevla.org/id/concepts/3dfde9e0-724c-4728-8b16-ec50582038d3": { component: "edit-components/choice", key: "circulation.multipleLevelsCategory", conceptScheme: "https://data.toevla.org/id/concept-schemes/b61da8ed-989d-4690-be20-12061da74998" },
  "https://data.toevla.org/id/concepts/b858bc05-bef3-4abd-9fc9-0eeb389403be": { component: "edit-components/area", key: "circulation.sizeOfElevator" },
  "https://data.toevla.org/id/concepts/d8f84769-3533-484f-8c7b-93a5ee5868cc": { component: "edit-components/centimeters", key: "circulation.smallestPointOnRoute" },
  "https://data.toevla.org/id/concepts/1ba31d12-5a34-4224-876d-af8c87f834cc": { component: "edit-components/centimeters", key: "circulation.highestThresholdOnRoute" },
  "https://data.toevla.org/id/concepts/3fdb7539-c5e1-4ba8-a54e-e0a813614af6": { component: "edit-components/count", key: "circulation.amountOfThresholds" },
  "https://data.toevla.org/id/concepts/ff8a2110-dbc2-4c41-88c7-c6f16fc7baa0": { component: "edit-components/count", key: "circulation.amountOfStairs" },
  "https://data.toevla.org/id/concepts/f0c27a68-f298-4b4b-ac7b-ca56b11d384b": { component: "edit-components/count", key: "circulation.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/3a8e9b83-107e-4ceb-bacb-b3808d062e00": { component: "edit-components/boolean", key: "circulation.hasRamps" },
  "https://data.toevla.org/id/concepts/7993ccd5-de76-4893-9b1f-110bb11912c4": { component: "edit-components/area", key: "circulation.sizeOfPlateauElevator" },
  "https://data.toevla.org/id/concepts/8d2b6701-43be-4283-9c52-aadcc8324133": { component: "edit-components/count", key: "circulation.amountOfPlateauElevators" },
  "https://data.toevla.org/id/concepts/1c75758c-af92-467a-98c6-453d6bfdec29": { component: "edit-components/string", key: "circulation.typeOfElevator" },
  "https://data.toevla.org/id/concepts/62360987-e5e8-48e0-a30c-8a678b7d8845": { component: "edit-components/string", key: "circulation.comment" },

  // EXPERIENCE
  "https://data.toevla.org/id/concepts/17351f8d-7d2f-44db-8522-d729ded6d1fb": { component: "edit-components/boolean", key: "tour.hasSupportForVisualHandicap" },
  "https://data.toevla.org/id/concepts/08874e58-be7d-44e8-9b95-956680fd6558": { component: "edit-components/boolean", key: "tour.hasSupportForAuditiveHandicap" },
  "https://data.toevla.org/id/concepts/d0633bea-4776-4ddc-a29b-157fa1a66146": { component: "edit-components/boolean", key: "tour.hasSupportForMentalHandicap" },
  "https://data.toevla.org/id/concepts/d1d5a75e-7490-4978-a665-a809f152579d": { component: "edit-components/boolean", key: "tour.isDementiaFriendly" },
  "https://data.toevla.org/id/concepts/b74390d3-81b7-4b16-b64a-c7992ca17432": { component: "edit-components/boolean", key: "tour.isAutismFriendly" },
  "https://data.toevla.org/id/concepts/bf837efd-7353-4742-9821-fe67626857a2": { component: "edit-components/boolean", key: "tour.hasAdaptationsForElderly" },
  "https://data.toevla.org/id/concepts/043d0943-d5de-488b-9471-83453ac02ce4": { component: "edit-components/boolean", key: "tour.hasAdaptationsForChildren" },
  "https://data.toevla.org/id/concepts/51bfb01f-912a-4f19-83aa-6ff0afdb7be0": { component: "edit-components/boolean", key: "tour.hasImageInterpreter" },
  "https://data.toevla.org/id/concepts/ebfc1d01-807d-4f0b-8a79-a276ab2d760e": { component: "edit-components/boolean", key: "tour.hasFlemishSignLanguageInterpreter" },
  "https://data.toevla.org/id/concepts/9068439f-4c51-4695-8329-33edcff02bda": { component: "edit-components/boolean", key: "tour.isAvailableOnQuietMoments" },
  "https://data.toevla.org/id/concepts/eccda7cb-56cd-4072-8983-709be079723d": { component: "edit-components/boolean", key: "tour.isAvailableTailorMade" },
  "https://data.toevla.org/id/concepts/d8e7f89e-c8c4-48cb-871b-46f6eda7c529": { component: "edit-components/boolean", key: "circulation.hasClearSignalizationOnRoute" },
  "https://data.toevla.org/id/concepts/2ab19f33-3edc-4e6c-9175-bb6d39e4efcc": { component: "edit-components/boolean", key: "circulation.hasVenuePlan" },
  "https://data.toevla.org/id/concepts/df6b875a-e8b4-4e0a-9690-79e78497eda6": { component: "edit-components/boolean", key: "circulation.hasPlanForAdvisedPath" },
  "https://data.toevla.org/id/concepts/47517788-0fda-4a62-a4ac-9fdfb55ac149": { component: "edit-components/boolean", key: "circulation.hasAlternativePathForHardToAccessSpaces" },
  "https://data.toevla.org/id/concepts/e7d88100-aa67-4273-bfef-7d08f7ee456e": { component: "edit-components/boolean", key: "circulation.hasMultipleRestingAndSittingOpportunities" },
  "https://data.toevla.org/id/concepts/deac4522-8cf5-4ebb-907a-5965cb8d1603": { component: "edit-components/boolean", key: "circulation.hasExtraAttentionForAcoustics" },
  "https://data.toevla.org/id/concepts/59c0ed54-9c98-4217-a687-695d1247f2ad": { component: "edit-components/boolean", key: "hasMultipleElementsToDriveUnder" },
  "https://data.toevla.org/id/concepts/82c2fd8c-3aef-4a45-af4a-2283a46fa2fd": { component: "edit-components/boolean", key: "hasGoodLighting" },
  "https://data.toevla.org/id/concepts/a8ab7895-3273-48b5-a3ca-f29ddbf7da6d": { component: "edit-components/boolean", key: "hasMagnifyingGlass" },
  "https://data.toevla.org/id/concepts/d4057a41-676e-4372-b1dd-62926ee927e4": { component: "edit-components/boolean", key: "auditorium.hasAccessibleSeating" },
  "https://data.toevla.org/id/concepts/7b9452db-d596-43d1-88a9-4aa26a945062": { component: "edit-components/boolean", key: "auditorium.extraAttentionGivenToAcoustics" },
  "https://data.toevla.org/id/concepts/c10fb641-ba9a-4f05-874c-5e4eec8e083c": { component: "edit-components/boolean", key: "auditorium.hasTeleloop" },
  "https://data.toevla.org/id/concepts/fd0b2bf4-e149-4d11-8910-7ea2cfaf7af5": { component: "edit-components/boolean", key: "brochureHasAccessibleContrast" },
  "https://data.toevla.org/id/concepts/884b5148-6c06-4528-9e5d-0300713a9e21": { component: "edit-components/boolean", key: "brochureIsAvailableInBraille" },
  "https://data.toevla.org/id/concepts/003c24ce-d9a7-4ffa-bcc8-8ec1b574e81b": { component: "edit-components/boolean", key: "brochureIsAvailableInLargePrint" },
  "https://data.toevla.org/id/concepts/6c58e8e4-f2a4-443a-af92-8619f387101d": { component: "edit-components/boolean", key: "signsHaveAccessibleContrast" },
  "https://data.toevla.org/id/concepts/9fdf7a77-45aa-42c3-b5d1-37191fa60a69": { component: "edit-components/boolean", key: "signsHaveNoReflection" },
  "https://data.toevla.org/id/concepts/3b01f301-5101-49b4-9917-773f41ef97b7": { component: "edit-components/boolean", key: "signsHaveBraille" },
  "https://data.toevla.org/id/concepts/8a6d1137-2d17-40cb-8936-844beaab6299": { component: "edit-components/boolean", key: "signsInLargePrint" },
  "https://data.toevla.org/id/concepts/e0eb73b6-b995-4135-8773-b05dd108386e": { component: "edit-components/boolean", key: "audioGuideOnlyInDutch" },
  "https://data.toevla.org/id/concepts/83c1f185-3444-464c-8f6e-9bf6bfa7b5e5": { component: "edit-components/boolean", key: "audioGuideAvailableInMultipleLanguages" },
  "https://data.toevla.org/id/concepts/098995c7-d5e2-46c8-946a-bad2ce826310": { component: "edit-components/boolean", key: "hasMovieGuide" },
  "https://data.toevla.org/id/concepts/ceaee1d5-0292-453a-93f5-bc7bedaa823d": { component: "edit-components/boolean", key: "hasVirtualTechnology" },
  "https://data.toevla.org/id/concepts/866f3b45-7f2c-4edb-8e49-bb3fdd3b9a4a": { component: "edit-components/boolean", key: "hasTouchElements" },
  "https://data.toevla.org/id/concepts/4635c64f-f28c-4ac1-ba40-45161d856903": { component: "edit-components/boolean", key: "hasSmellElements" },
  "https://data.toevla.org/id/concepts/bb428539-e486-4f30-a6c9-ad5f673bb82d": { component: "edit-components/boolean", key: "hasActionableElements" },
  "https://data.toevla.org/id/concepts/4f8c2535-4bdd-44b8-a55d-7e312d14a725": { component: "edit-components/boolean", key: "hasListeningElements" },
  "https://data.toevla.org/id/concepts/7eaa513a-4179-477d-8852-44ec1e674bba": { component: "edit-components/boolean", key: "hasPlacesOfSilence" },
  "https://data.toevla.org/id/concepts/316287ec-83fd-4bd1-aeff-750486dd24ea": { component: "edit-components/string", key: "otherElements" },
  "https://data.toevla.org/id/concepts/bf1ef7ef-05b8-41ab-af53-aeedd454327a": { component: "edit-components/string", key: "comment" },

  "https://data.toevla.org/id/concepts/0a0bb258-18cb-4eca-8c10-925fb34236a5": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasCashPayment"},
  "https://data.toevla.org/id/concepts/92955e7c-ecb8-4a91-9981-04085d264f20": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasPaymentWithMovableElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/09f40a74-67de-4ee0-8de1-4b338cc0cb91": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasPaymentWithFixedElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/25ea8a39-9e7b-401b-8618-e4143a53890b": { component: "edit-components/count", key: "pointOfInterest.restaurant.amountOfSeatingPlaces"},
  "https://data.toevla.org/id/concepts/cfe3f887-9bec-4fdf-bde8-b2401f486b58": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasSpaceSuitedForGroupsWithMobileLimitation"},
  "https://data.toevla.org/id/concepts/6515cae2-20e3-4d79-8a8a-abbba38fd28b": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasMenuAvailableOnline"},
  "https://data.toevla.org/id/concepts/05d2a6bc-676c-44a2-b635-73cf4a4f104e": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasMenuVisuallyClearToRead"},
  "https://data.toevla.org/id/concepts/761e9cbe-3f82-4acc-bc8f-b84d871bd8c5": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasMenuAvailableInBraille"},
  "https://data.toevla.org/id/concepts/4776282f-fade-4c36-8d34-e704b377a707": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasMenuAvailableWithPictures"},
  "https://data.toevla.org/id/concepts/abe7b28d-4e30-4207-8e90-3d10426b2058": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasDietBasedMeasAdjustment"},
  "https://data.toevla.org/id/concepts/126d9a97-5894-4eb9-be75-899585ac605d": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasInformationOnAllergenics"},
  "https://data.toevla.org/id/concepts/21a0ab4c-f6c1-4607-9a60-f0d0a34466cf": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasChildrenMenu"},
  "https://data.toevla.org/id/concepts/5b2caa29-50e2-4f6a-bbce-59d0d5176e04": { component: "edit-components/boolean", key: "pointOfInterest.restaurant.hasChildSeat"},
  "https://data.toevla.org/id/concepts/2c166982-72cc-4e38-97cf-60fca6729f4d": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.mostNarrowDoorWidthInConsumptionSpace"},
  "https://data.toevla.org/id/concepts/5f62b99c-511a-4b84-9627-f8f93827b605": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.smallestPointOnRouteToConsumptionSpace"},
  "https://data.toevla.org/id/concepts/de657184-94b8-4ff9-a2bd-a6ac977d4cee": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.highestThresholdOnRouteToConsumptionSpace"},
  "https://data.toevla.org/id/concepts/7b41bfb8-3061-43e3-9cc5-fbd5bbf9f708": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.heightUnderTableForWheelchairInConsumptionSpace"},
  "https://data.toevla.org/id/concepts/05d70577-2f6c-4646-b76e-e73905c70e2e": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.mostNarrowDoorWidthForTerrace"},
  "https://data.toevla.org/id/concepts/de42f05b-0bd3-4e70-97d0-1662296b7253": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.smallestPointOnRouteForTarrace"},
  "https://data.toevla.org/id/concepts/b744373b-c6a1-4efd-adbc-e4055db9e5ef": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.highestThresholdForTerrace"},
  "https://data.toevla.org/id/concepts/f6f41d4e-ca21-4e0c-93eb-fc7383a72922": { component: "edit-components/centimeters", key: "pointOfInterest.restaurant.heightUnderTarraceTableForWheelchairInConsumptionSpace"},
  "https://data.toevla.org/id/concepts/b73f5b6c-caaa-4644-9f92-7872e2361ea0": { component: "edit-components/string", key: "pointOfInterest.restaurant.comment" },
  "https://data.toevla.org/id/concepts/26908822-cdbc-4042-b9c0-b2d6ec4722de": { component: "edit-components/boolean", key: "pointOfInterest.shop.hasCashPayment"},
  "https://data.toevla.org/id/concepts/9afe8957-784c-427f-b2c8-beab0e94e806": { component: "edit-components/boolean", key: "pointOfInterest.shop.hasPaymentWithMovableElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/1ae11b42-f51b-4fe6-903e-6f5212f5ecdb": { component: "edit-components/boolean", key: "pointOfInterest.shop.hasPaymentWithFixedElectronicPaymentSystem"},
  "https://data.toevla.org/id/concepts/6de525c0-d19e-4d64-82fa-d5943dc34c1b": { component: "edit-components/centimeters", key: "pointOfInterest.shop.smallestPointOnRoute"},
  "https://data.toevla.org/id/concepts/5624ac20-cea6-4113-8505-15b90c2240e6": { component: "edit-components/centimeters", key: "pointOfInterest.shop.highestThreshold"},
  "https://data.toevla.org/id/concepts/3fbe6052-1521-4062-8a5e-ed4f2f450206": { component: "edit-components/centimeters", key: "pointOfInterest.shop.mostNarrowDoorwidth"},
  "https://data.toevla.org/id/concepts/77880df0-09fb-4f45-9657-df3a187ba7f6": { component: "edit-components/centimeters", key: "pointOfInterest.shop.accessControlWidth"},
  "https://data.toevla.org/id/concepts/083e50eb-d479-4abe-9303-20b38a7ae14d": { component: "edit-components/centimeters", key: "pointOfInterest.shop.heightOfLoweredCounter"},
  "https://data.toevla.org/id/concepts/e9606594-1b5d-4cb2-a11e-e4014caab6b0": { component: "edit-components/string", key: "pointOfInterest.shop.comment" },

  // "http://data.toevla.org/77253484-8a8d-4662-b0c9-b533ba192358": { component: "edit-components/boolean", key: "pointOfInterest.publicTransportGuidanceAvailable" },
  // "http://data.toevla.org/d1fbdb7e-104c-4493-8275-62ef73af8460": { component: "edit-components/boolean", key: "pointOfInterest.wifiAlwaysAvailable" },
  // "http://data.toevla.org/ff67e72c-0b06-4b92-884d-47665c3a443e": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasAccessibleContrast" },
  // "http://data.toevla.org/8fcf7ea8-5180-482c-923c-495f783855db": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasSignLanguage" },
  // "http://data.toevla.org/0a02fdb7-cde1-4795-a4e1-13e9db270ca5": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasScreenreader" },
  // "http://data.toevla.org/970baa13-9bc3-4233-9bc4-2e2ea15499c7": { component: "edit-components/boolean", key: "pointOfInterest.websiteSupportsWcag2" },
  // "http://data.toevla.org/c6965262-9ce4-44cf-bb53-57f4a5fd47fc": { component: "edit-components/boolean", key: "pointOfInterest.websiteAllowsTextIncrease" },
  // "http://data.toevla.org/19783462-9921-40eb-92c8-b62116a7e359": { component: "edit-components/boolean", key: "pointOfInterest.wheelchairAvailable" },
  // "http://data.toevla.org/bebe20d0-0d82-419f-bfcd-49834a7db8a5": { component: "edit-components/electronic-payment-system-movable" },
  // "http://data.toevla.org/01d13e86-bdbb-4893-841e-d0d2aebd2b3d": { component: "edit-components/boolean", key: "pointOfInterest.assistanceForGuideDogs" },
};

export function editMapping(uri){
  if( uri && eMapping[uri] )
    return eMapping[uri];
  return null;
}
