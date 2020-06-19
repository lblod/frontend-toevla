import Route from '@ember/routing/route';

export default class RootRoute extends Route {
  constructor(...args){
    super(...args);
  }

  //experienceId='5EE2F30BBF5C750008000002';

  async model(params){

    const tree=await this.store.query('tree', {});

    const experience=await this.store.query('experience', {});
    //const experience=await this.store.findRecord('experience', this.experienceId);

    return {tree: tree.firstObject, experience: experience.firstObject};
  }
}
