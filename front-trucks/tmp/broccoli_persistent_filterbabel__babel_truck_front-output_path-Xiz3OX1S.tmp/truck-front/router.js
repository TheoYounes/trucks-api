define('truck-front/router', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('/');
    this.route('login');
    this.route('register');
    this.route('dashboard');
  });

  exports.default = Router;
});