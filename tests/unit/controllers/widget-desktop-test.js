import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | widget-desktop', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:widget-desktop');
    assert.ok(controller);
  });
});
