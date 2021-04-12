import EmberRouter from '@ember/routing/router';
import config from 'frontend-toevla/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scoring');
  this.route('icons');
  this.route('musea', function() {
    this.route('show', { path: ":museum_id" }, function() {
      this.route('widget');
    });
  });
  this.route('embeddable-widget', { path: "embeddable-widget/:widget_uri" });

  this.route('widgets', function() {
    this.route('show', { path: ":widget_id" });
  });
});
