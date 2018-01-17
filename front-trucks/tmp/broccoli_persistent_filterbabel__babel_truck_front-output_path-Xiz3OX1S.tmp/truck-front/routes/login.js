define('truck-front/routes/login', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    authentication: Ember.inject.service('authentication'),
    actions: {
      login: function login(name, password) {
        this.get('authentication').authenticate(name, password);
      }
    }
  });
});