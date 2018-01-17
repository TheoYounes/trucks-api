define('truck-front/routes/register', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    authentication: Ember.inject.service('authentication'),
    actions: {
      register: function register(name, password) {
        this.get('authentication').register(name, password);
      }
    }
  });
});