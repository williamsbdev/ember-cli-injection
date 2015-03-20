import Ember from "ember";
import {injectRepos} from 'dummy/utils/inject';

var WatController = Ember.Object.extend({
    "baz-repo": injectRepos(),
    baz: function() {
        return this.get('baz-repo').invoke();
    }
});

export default WatController;
