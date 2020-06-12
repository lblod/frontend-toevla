import Route from '@ember/routing/route';

export default class RootRoute extends Route {
  constructor(...args){
    super(...args);
  }

  experienceId='5EE2E339321A0C0008000002';

  async model(params){
    const tree=await this.store.query('tree', {
      //include: 'top-level-nodes.children.children.children.children'
    });

    const experience=await this.store.findRecord('experience', this.experienceId);

    return {tree: tree.firstObject, experience};
  }
}
