import Ember from 'ember';

const { getOwner } = Ember;

var injection = function(key) {
    return function(name) {
        return Ember.computed(function(propertyName) {
            var objectName = name || propertyName;
            return getOwner(this).lookup(key + ':' + objectName);
        });
    };
};

export default injection;
