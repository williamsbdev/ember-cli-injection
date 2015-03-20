import Ember from 'ember';
import {injectRepos, injectManagers} from 'dummy/utils/inject';

var FooController = Ember.Object.extend({
    barRepo: injectRepos('bar'),
    task: injectManagers(),
    bar: function() {
        return this.get('barRepo').invoke();
    },
    startTask: function() {
        return this.get('task').start();
    }
});

export default FooController;
