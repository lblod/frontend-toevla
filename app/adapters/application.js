import { inject as service } from '@ember/service';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service env;

  constructor() {
    super(...arguments);
    if( this.env.domain && this.env.domain !== '' )
      this.host = this.env.domain;
  }
}
