# Reset Query Parameters

[![Build Status](https://travis-ci.org/Dhaulagiri/ember-reset-query-params.svg)](https://travis-ci.org/Dhaulagiri/ember-reset-query-params)

[By default](http://guides.emberjs.com/v1.13.0/routing/query-params/#toc_sticky-query-param-values), query params are sticky between route transitions in Ember.  This addon provides a mixin that can be added to a route you want to have reset query params on transition.

# Installation

`ember install ember-reset-query-params`

## Usage

`route.js`
```javascript
import Ember from 'ember';
import ResetQueryParams from 'ember-reset-query-params/mixins/reset-query-params';

export default Ember.Route.extend(ResetQueryParams, {
});

```

# Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
