import Ember from 'ember';

var BazRepo = Ember.Object.extend({
    invoke: function() {
        return 'baz return value';
    }
});

export default BazRepo;
