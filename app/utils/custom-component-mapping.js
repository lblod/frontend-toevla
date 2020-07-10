const eMapping={
  "https://data.toevla.org/id/concepts/74837ebc-fb5f-4333-81f5-bd92db6861f2": { component: "view-components/boolean", key: "pointOfInterest.hasClearlyRecognizableBuilding" },
  "https://data.toevla.org/id/concepts/82e3201c-60d4-4eb6-88c1-90bcc5f87910": { component: "view-components/boolean", key: "pointOfInterest.hasClearlyRecognizableEntrance" },
  "https://data.toevla.org/id/concepts/3c06fec6-3a7c-483d-b53f-e3c0a5caf179": { component: "view-components/boolean", key: "pointOfInterest.hasVisibleGuidelines" },
  "https://data.toevla.org/id/concepts/dd04f96d-71c9-4686-bb9f-ecf91ff6a67f": { component: "view-components/boolean", key: "pointOfInterest.hasMarkingsOrContrastsOnGlassDoors" },
  "https://data.toevla.org/id/concepts/3aa2c3d0-6635-40ae-bfd5-ad15b6553096": { component: "view-components/boolean", key: "pointOfInterest.extraAttentionGivenToAcoustics" },
  "https://data.toevla.org/id/concepts/ac946973-bfa8-446a-8066-05ee7185ebfb": { component: "view-components/boolean", key: "pointOfInterest.entrances.firstObject.hasMannedDesk" },
  "https://data.toevla.org/id/concepts/f0abf682-daae-4b49-bfa1-0a63da8b680b": { component: "view-components/boolean", key: "pointOfInterest.entrances.firstObject.hasTeleloopAtCounter" },
  "https://data.toevla.org/id/concepts/994e6c27-2449-4363-aa7e-cc6e899e4f55": { component: "view-components/boolean", key: "pointOfInterest.hasAlternativeEntranceForWheelchair" },
  "https://data.toevla.org/id/concepts/4db32cec-4315-4ce1-8c2f-c752652a7f40": { component: "view-components/centimeters", key: "pointOfInterest.entrances.firstObject.highestThreshold" },
  "https://data.toevla.org/id/concepts/0c43ed99-f7bb-4654-b1e0-a93a6d3af26f": { component: "view-components/count", key: "pointOfInterest.entrances.firstObject.amountOfStairs" },
  "https://data.toevla.org/id/concepts/6ce49390-b3d5-4b8e-9c56-d9fc193823a2": { component: "view-components/count", key: "pointOfInterest.entrances.firstObject.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/e431f79f-21f9-4b1a-95a0-6200a743fea7": { component: "view-components/boolean", key: "pointOfInterest.entrances.firstObject.hasEntranceGutters" },
  "https://data.toevla.org/id/concepts/6c49fb53-908d-4344-afe7-abaf86d3e461": { component: "view-components/boolean", key: "pointOfInterest.entrances.firstObject.hasRevolvingDoor" },
  "https://data.toevla.org/id/concepts/25e9674f-2222-4377-b115-9b4c25b67f67": { component: "view-components/centimeters", key: "pointOfInterest.entrances.firstObject.doorWidth" },
  "https://data.toevla.org/id/concepts/10764c3c-4142-4c6c-8c75-e3723c6fae23": { component: "view-components/centimeters", key: "pointOfInterest.entrances.firstObject.hasEntranceCheck" },
  "https://data.toevla.org/id/concepts/8a7b8177-59a8-417d-8dee-e5dcb3fedbf8": { component: "view-components/centimeters", key: "pointOfInterest.entrances.firstObject.turningRadiusAtDoor" },
  "https://data.toevla.org/id/concepts/bba57566-133e-49e6-a151-303ae5f0ece8": { component: "view-components/boolean", key: "pointOfInterest.entrances.firstObject.forceForOpeningDoor" },
  "https://data.toevla.org/id/concepts/c0a131bb-78a4-4b16-a2e9-f2fb252fc1c9": { component: "view-components/centimeters", key: "pointOfInterest.entrances.firstObject.hasLoweredCounter" },
};
export function viewMapping(uri){
  if( uri && eMapping[uri] ){
    return eMapping[uri];
  }
  return null;
}
