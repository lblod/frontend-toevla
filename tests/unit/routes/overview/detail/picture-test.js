import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | overview/detail/picture', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:overview/detail/picture');
    assert.ok(route);
  });
});
