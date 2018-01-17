define('ember-simple-auth/authenticators/test', ['exports', 'ember-simple-auth/authenticators/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _base.default.extend({
    restore: function restore(data) {
      return Ember.RSVP.resolve(data);
    },
    authenticate: function authenticate(data) {
      return Ember.RSVP.resolve(data);
    },
    invalidate: function invalidate() {
      return Ember.RSVP.resolve();
    }
  });
});