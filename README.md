# Ember-cli-injection

[![Build Status][]](https://travis-ci.org/williamsbdev/ember-cli-injection)
[![NPM Downlaads][]](https://www.npmjs.org/package/ember-cli-injection)

## Description

ember-cli-injection allows the ability to inject objects registered with
the Ember application. It is a simple function that does a lookup on the
desired object and returns the singleton instance from the container.

## Installation

Install this ember-addon via npm

    npm install ember-cli-injection --save-dev

## API

To get started the objects that will be injected need to be registered with the
application, like the following:

```javascript
// app/initializers/inject

import FooRepo from 'app/repos/foo';
import BarRepo from 'app/repos/bar';
import TaskManager from 'app/managers/task';

export function initialize(container, application) {
    application.register('repos:foo', FooRepo);
    application.register('repos:bar', BarRepo);
    application.register('managers:task', TaskManager);
}

export default {
    name: 'inject',
    initialize: initialize
};
```

Once the objects have been registered, create a function that can be used
for injecting the objects of that specific type. When calling the function
`inject` with `repos`, the returned function will look for only `repos` type
objects. See example below:


```javascript
// app/utils/inject

import inject from 'ember-cli-injection/inject';

var injectRepos = inject('repos');
var injectManagers = inject('managers');

export {injectRepos, injectManagers};
```

Finally, to inject the objects, import the function(s) declared above. The
injected object can be name anything, but the if the name of the injected
object differs from how the object was registered, the registered name will
need to be provided in the `injectRepos` function.

```javascript
// app/controllers/foo

import Ember from 'ember'
import {injectRepos, injectManagers} from 'app/utils/inject';

var FooController = Ember.Controller.extend({
    // this is registered as "repos:foo" so if the property is "fooRepo"
    // injectRepos will need to take "foo" to find the correct object
    fooRepo: injectRepos('foo'),
    taskManager: injectManagers('task'),
    // because this is registered as "repos:bar" the property name of bar
    // will be passed to the injectRepos and the correct object will be found
    // this is because injectRepos is a computed property
    bar: injectRepos(),
    doAllTheThings: function() {
        this.get('fooRepo').doStuff();
        this.get('bar').doSomething();
        this.get('taskManager').finish();
    }
});

export default FooController;
```

Another example of injecting.

```javascript

// app/routes/wat

import Ember from 'ember'
import {injectManagers} from 'app/utils/inject';

var WatRoute = Ember.Controller.extend({
    task: injectManagers(),
    model: function() {
        return this.get('task').start();
    }
});

export default WatRoute;
```


Additionally, using the project
[ember-cli-auto-register](https://github.com/williamsbdev/ember-cli-auto-register)
to cut down on the boilerplate of registering all objects in a specific
directory with the application.

## Running Tests

To run the test, install dependencies:

    npm install
    bower install

Then run:

    ember test

or

    ember test --server

## Issues/Contributions

Please submit bugs to the [issues](https://github.com/williamsbdev/ember-cli-injection/issues).
PRs are welcome.

## License

Copyright © 2015 Brandon Williams http://williamsbdev.com

Licensed under the MIT License

[Build Status]: https://travis-ci.org/williamsbdev/ember-cli-injection.svg?branch=master
[NPM Downlaads]: https://img.shields.io/npm/dm/ember-cli-injection.svg
