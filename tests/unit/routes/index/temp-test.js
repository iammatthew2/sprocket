import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/temp', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/temp');
    assert.ok(route);
  });
});
