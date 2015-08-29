import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | reset query params', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('it resets query params on exit from controller with array params', function(assert) {
  visit('/');
  click('.base-with-params');

  andThen(() => {
    assert.equal(currentURL(), '/bass?strings=4&type=fender');

    visit('/');
    click('.base-no-params');

    andThen(() => {
      assert.equal(currentURL(), '/bass?strings=null&type=null');
    });
  });
});

test('it resets query params on exit from controller with hash params', function(assert) {
  visit('/');
  click('.guitar-with-params');

  andThen(() => {
    assert.equal(currentURL(), '/guitar?strings=6&type=prs');

    visit('/');
    click('.guitar-no-params');

    andThen(() => {
      assert.equal(currentURL(), '/guitar?strings=null&type=null');
    });
  });
});
