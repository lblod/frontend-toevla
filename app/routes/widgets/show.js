import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class WidgetsShowRoute extends Route {
  @service store;
  @service nodeScoreStateManager;

  async model({widget_id}) {
    const widgets =
          await this.store.query("widget",
                                 { include: "point-of-interest.experiences" },
                                 { "filter[:id:]": widget_id } );
    const widget = widgets.firstObject;
    const tree = (await this.store.query("tree", { "include": "top-level-nodes" })).firstObject;

    const experience = await widget.get('pointOfInterest.experiences.firstObject');

    window.setTimeout( async () => {
      await this.nodeScoreStateManager.fetchAll( experience );
      await this.store.query("tree", { "include": "top-level-nodes.children.children.children.children.children" });
    }, 1250);

    return {
      poi: widget.pointOfInterest,
      widget,
      experience,
      tree
    };
  }
}
