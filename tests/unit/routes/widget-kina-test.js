import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | widget-kina', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:widget-kina');
    assert.ok(route);
  });
});