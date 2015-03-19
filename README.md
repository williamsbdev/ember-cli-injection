# Ember-cli-injection

[![Build Status][]](https://travis-ci.org/williamsbdev/ember-cli-injection)
[![NPM Downlaads][]](https://www.npmjs.org/package/ember-cli-injection)

## Description

ember-cli-injection allows you to add your own key to the Ember.inject API for
injection of objects where needed. These available objects are objects
registered with the application.

## Installation

You install this ember-addon via npm

    npm install ember-cli-injection --save-dev

## API

You can use this by creating an initializer for your application. Let's take
the example that you have some "repos" that you would like to inject into
controllers, routes, or wherever else you might need them. You would create an
initializer like the following example:

```javascript
import FooRepo from 'app/repos/foo';
import BarRepo from 'app/repos/bar';
import injection from 'ember-cli-injection/inject';

export function initialize(_, application) {
    application.register('repos:foo', FooRepo);
    application.register('repos:bar', BarRepo);
    injection('repos');
}

export default {
    name: 'inject',
    initialize: initialize
};
```

Additionally, you can use the project
[ember-cli-auto-register](https://github.com/williamsbdev/ember-cli-auto-register)
to cut down on the boilerplate of registering all your objects with the
application.

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
