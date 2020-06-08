import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'frontend-toevla/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  constructor(...args){
    super(...args);
    if(config.environment=='production'){
      this.host='https://embed-dev.toevla.org';
    }
  }

}
