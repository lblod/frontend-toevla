import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | widget-mobile-alt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:widget-mobile-alt');
    assert.ok(route);
  });
});
