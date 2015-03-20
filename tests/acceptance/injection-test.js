import Ember from 'ember';
import {
    module,
    test
} from 'qunit';
import startApp from '../helpers/start-app';
import lookup from 'ember-cli-test-helpers/tests/helpers/lookup';

var application;

module('Acceptance: Injection', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('Objects can be injected with specified name', function(assert) {
    var controller = lookup('controller:foo');
    assert.equal(controller.bar(), 'bar return value');
});

test('Objects can be injected without name, using name of property', function(assert) {
    var controller = lookup('controller:wat');
    assert.equal(controller.baz(), 'baz return value');
});

test('injections are found for that specific type', function(assert) {
    var route = lookup('route:wat');
    assert.equal(route.doTask(), 'task complete');
});

test('multiple injections of different types can be made into the same object', function(assert) {
    var controller = lookup('controller:foo');
    assert.equal(controller.bar(), 'bar return value');
    assert.equal(controller.startTask(), 'task started');
});
