import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class EmbeddableWidgetRoute extends Route {
  @service store;
  @service nodeScoreStateManager;

  async model({widget_id}) {
    const widgets =
          await this.store.query("widget",
                                 { include: "point-of-interest.experiences",
                                   "filter[:id:]": widget_id } );
    const widget = widgets.firstObject;
    const tree =
          (await this
                  .store
                  .query("concept-scheme",
                         {
                           "include": "top-level-nodes",
                           "filter[:uri:]": museaTree
                         }))
          .firstObject;

    const experience = await widget.get('pointOfInterest.experiences.firstObject');

    window.setTimeout( async () => {
      await this.nodeScoreStateManager.fetchAll( experience );
      await this.store.query("concept-scheme", {
        "include": "top-level-nodes.children.children.children.children.children",
        "filter[:uri:]": museaTree
      });
    }, 1250);

    return {
      poi: widget.pointOfInterest,
      widget,
      experience,
      tree
    };
  }
}
