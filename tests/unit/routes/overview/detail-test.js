import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | overview/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:overview/detail');
    assert.ok(route);
  });
});
