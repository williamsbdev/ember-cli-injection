import Ember from 'ember';

var injection = function(key) {
    return function(name) {
        return Ember.computed(function(propertyName) {
            var objectName = name || propertyName;
            return this.container.lookup(key + ':' + objectName);
        });
    };
};

export default injection;
