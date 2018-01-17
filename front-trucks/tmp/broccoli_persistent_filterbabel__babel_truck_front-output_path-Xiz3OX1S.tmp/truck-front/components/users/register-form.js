define('truck-front/components/users/register-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    name: '',
    password: '',

    actions: {
      register: function register() {
        this.sendAction('register', this.get('name'), this.get('password'));
      }
    }
  });
});