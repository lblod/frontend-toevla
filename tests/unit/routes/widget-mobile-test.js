import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | widget-mobile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:widget-mobile');
    assert.ok(route);
  });
});