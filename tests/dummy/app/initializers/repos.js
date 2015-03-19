import Ember from 'ember';
import register from 'ember-cli-auto-register/register';
import injection from 'ember-cli-injection/inject';

export function initialize(_, application) {
    // this is because of the app inside of the ember-addon
    // this does not need, nor should it be done, in a real app
    application.name = 'dummy';

    register('repos', application);
    injection('repos');
}

export default {
    name: 'repos',
    initialize: initialize
};
