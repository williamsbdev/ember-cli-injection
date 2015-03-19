import Ember from 'ember';

var FooController = Ember.Object.extend({
    barRepo: Ember.inject.repos('bar'),
    bar: function() {
        return this.get('barRepo').invoke();
    }
});

export default FooController;
