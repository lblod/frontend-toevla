import Route from '@ember/routing/route';

export default class RootRoute extends Route {
  constructor(...args){
    super(...args);
  }
  async model(params){
    const db=await this.store.query('tree', {
      //include: 'top-level-nodes.children.children.children.children'
    });
    return db.firstObject;
  }
}
