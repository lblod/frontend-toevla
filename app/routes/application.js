import Route from '@ember/routing/route';
import config from 'frontend-toevla/config/environment';

export default class ApplicationRoute extends Route {
  beforeModel() {
    if(config.environment=='production'){
      this.transitionTo('root');
    }
  }
}
