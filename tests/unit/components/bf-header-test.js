import {
  moduleForComponent,
  test
} from 'ember-qunit';

import ENV from "dummy/config/environment";

moduleForComponent('bf-header', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('check if bonfire is in config', function(assert) {
  assert.equal(Object.hasOwnProperty.call(ENV.APP, 'bonfire'), true);
});

test('check if bonfire title is in config', function(assert) {
  assert.equal(Object.hasOwnProperty.call(ENV.APP.bonfire, 'title'), true);
});
