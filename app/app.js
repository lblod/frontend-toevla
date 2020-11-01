import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'frontend-toevla/config/environment';

export default class App extends Application {
  constructor(...args){
    super(...args);
    if(config.environment=='production'){
      this.autoboot=false;
    }
  }
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
