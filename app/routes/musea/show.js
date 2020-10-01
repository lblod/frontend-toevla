import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class MuseaShowRoute extends Route {
  @service store;

  model( { museum_id } ) {
    return this.store.find( 'point-of-interest', museum_id );
  }
}
