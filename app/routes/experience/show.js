import Route from '@ember/routing/route';

export default class ExperienceShowRoute extends Route {
  async model({id}){
    const experience = await this.store.findRecord( 'experience', id );
    const tree = (await this.store.query( 'tree', { 'page[size]': 1 } )).firstObject;

    return  { experience, tree };
  }
}
