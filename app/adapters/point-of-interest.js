import ApplicationAdapter from './application';

export default class PointOfInterestAdapter extends ApplicationAdapter {
  findHasMany(store, snapshot, relatedLink, relationship) {
    const additionalQueryParameter = "page[size]=100";

    const queryParameterPrefix = relatedLink.includes("?") ? "&" : "?";

    relatedLink =
      relatedLink
      + queryParameterPrefix
      + additionalQueryParameter;

    return super.findHasMany(store, snapshot, relatedLink, relationship);
  }
}
