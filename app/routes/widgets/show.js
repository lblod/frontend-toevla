import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class WidgetsShowRoute extends Route {
  @service store;
  @service nodeScoreStateManager;

  async model({ widget_id }) {
    const widgets =
      await this.store.query("widget",
        {
          include: "point-of-interest.experiences,point-of-interest.summary-icons",
          "filter[:id:]": widget_id
        });
    const widget = widgets.firstObject;
    const tree =
      (await this
        .store
        .query("concept-scheme",
          {
            "include": "top-level-nodes.children.children.children.children.children",
            "filter[:uri:]": museaTree
          }))
        .firstObject;

    const experience = (
      await this.store.query('experience', {
        "filter[is-main-experience]": true,
        "filter[point-of-interest][:id:]": (await widget.pointOfInterest).id,
        include: "point-of-interest.images,point-of-interest.experiences,point-of-interest.toilets,circulation,point-of-interest.public-transport-route-description,point-of-interest.shop,point-of-interest.restaurant,point-of-interest.bus-stops,point-of-interest.parkings,point-of-interest.entrances,point-of-interest.type-of-glass-door-decoration,guided-tour,point-of-interest.tram-stops,auditorium,point-of-interest.train-stops"
      })
    ).firstObject;

    window.setTimeout(async () => {
      await this.nodeScoreStateManager.fetchAll(experience);
      // await this.store.query("concept-scheme", {
      //   "include": "top-level-nodes.children.children.children.children.children",
      //   "filter[:uri:]": museaTree
      // });
    }, 1250);

    return {
      poi: widget.pointOfInterest,
      widget,
      experience,
      tree
    };
  }
}
