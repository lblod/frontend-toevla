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
  this.route('scoring');
  this.route('widget-future');
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
