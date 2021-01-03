import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class MuseaShowWidgetRoute extends Route {
  async model() {
    const museum = this.modelFor('musea.show');

    const experiences = await museum.experiences;
    if( experiences ) {
      return {
        experience: experiences && experiences.firstObject,
        tree: (await
               this.store.query('concept-scheme', {"filter[:uri:]": museaTree})
              ).firstObject
      };
    }
  }
}
