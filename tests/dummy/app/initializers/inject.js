import register from 'ember-cli-auto-register/register';

export function initialize() {
    // this is because of the app inside of the ember-addon
    // this does not need, nor should it be done, in a real app
    var application = arguments[1] || arguments[0];
    application.name = 'dummy';

    register('repos', application);
    register('managers', application);
}

export default {
    name: 'inject',
    initialize: initialize
};
