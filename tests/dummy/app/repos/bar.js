import Ember from 'ember';

var BarRepo = Ember.Object.extend({
    invoke: function() {
        return 'bar return value';
    }
});

export default BarRepo;
