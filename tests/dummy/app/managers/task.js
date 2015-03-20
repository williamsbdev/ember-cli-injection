import Ember from 'ember';

var TaskManager = Ember.Object.extend({
    complete: function() {
        return 'task complete';
    },
    start: function() {
        return 'task started';
    }
});

export default TaskManager;
