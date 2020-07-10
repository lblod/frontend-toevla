import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  Inflector.inflector.irregular('point-of-interest', 'points-of-interest');
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  initialize
};
