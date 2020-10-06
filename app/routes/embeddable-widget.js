import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class EmbeddableWidgetRoute extends Route {
  @service store;

  async model( { widget_uri } ) {
    const uri = decodeURIComponent( widget_uri );
    const widgets =
          await this
          .store
          .query('widget',
                 { filter: { ":uri:": uri } },
                 { include: "point-of-interest.experiences" } );
    const widget = widgets.firstObject;
    if( ! widget )
      return null;

    const museum = await widget.pointOfInterest;
    const experiences = await museum.experiences;
    if( experiences ) {
      return {
        experience: experiences && experiences.firstObject,
        tree: (await this.store.query('tree', {})).firstObject
      };
    }
  }
}
