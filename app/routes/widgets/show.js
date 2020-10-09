import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class WidgetsShowRoute extends Route {
  @service store

  async model({widget_id}) {
    const widgets =
          await this.store.query("widget",
                                 { include: "point-of-interest.experiences" },
                                 { "filter[:id:]": widget_id } );
    const widget = widgets.firstObject;
    const tree = (await this.store.findAll("tree")).firstObject;

    return {
      widget,
      poi: widget.pointOfInterest,
      experience: await widget.get('pointOfInterest.experiences.firstObject'),
      tree
    };
  }
}
