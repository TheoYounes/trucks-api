define('truck-front/components/users/login-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service('session'),
    name: '',
    password: '',
    actions: {
      login: function login() {
        this.sendAction('login', this.get('name'), this.get('password'));
      }
    }
  });
});