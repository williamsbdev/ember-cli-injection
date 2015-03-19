import Ember from "ember";

var WatController = Ember.Object.extend({
    "baz-repo": Ember.inject.repos(),
    baz: function() {
        return this.get('baz-repo').invoke();
    }
});

export default WatController;
