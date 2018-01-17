define('truck-front/routes/index', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    model: function model() {
      return Ember.RSVP.hash({
        users: this.get('store').findAll('user')
      });
    },

    actions: {
      createUser: function createUser(name, password) {
        var user = this.get('store').createRecord('user', { name: name }, { password: password });
        user.save();
      }
    }
  });
});