import Route from '@ember/routing/route';

export default class MuseaShowWidgetRoute extends Route {
  async model() {
    const museum = this.modelFor('musea.show');
    const experiences = await museum.experiences;
    if( experiences ) {
      return {
        experience: experiences && experiences.firstObject,
        tree: (await this.store.query('tree', {})).firstObject
      };
    }
  }
}
