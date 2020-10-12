import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | node-score-state-manager', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:node-score-state-manager');
    assert.ok(service);
  });
});
