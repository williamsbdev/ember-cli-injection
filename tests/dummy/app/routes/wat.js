import Ember from 'ember';
import {injectManagers} from 'dummy/utils/inject';

var WatRoute = Ember.Route.extend({
    taskManager: injectManagers('task'),
    doTask: function() {
        return this.get('taskManager').complete();
    }
});

export default WatRoute;
