import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('widget-desktop');
  this.route('widget-mobile');
  this.route('widget-kina');
  this.route('widget-stam');
  this.route('root');

  this.route('experience', function() {
    this.route('show', { path: "/:id" });
  });
});
