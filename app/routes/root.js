import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class RootRoute extends Route {
  constructor(...args){
    super(...args);
  }

  //experienceId='5EE2F30BBF5C750008000002';

  async model(params){

    const tree=await this.store.query('tree', {"filter[:uri:]": museaTree});

    const experience=await this.store.query('experience', {});
    //const experience=await this.store.findRecord('experience', this.experienceId);

    return {tree: tree.firstObject, experience: experience.firstObject};
  }
}
