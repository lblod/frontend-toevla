import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class WidgetsIndexRoute extends Route {
  @service store

  model(){
    return this.store.query('widget', { "page[size]": 100 });
  }
}
