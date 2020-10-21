import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla/utils/uris/concept-schemes';

export default class RootRoute extends Route {
  constructor(...args){
    super(...args);
  }

  async model(){
    const tree=await this.store.query('concept-scheme', {"filter[:uri:]": museaTree});
    const experience=await this.store.query('experience', {});

    return {tree: tree.firstObject, experience: experience.firstObject};
  }
}
