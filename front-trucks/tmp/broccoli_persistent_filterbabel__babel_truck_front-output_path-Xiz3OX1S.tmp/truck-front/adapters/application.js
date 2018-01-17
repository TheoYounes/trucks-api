define('truck-front/adapters/application', ['exports', 'ember-data', 'truck-front/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: '' + _environment.default.APP.API_HOST,
    namespace: 'api'
  });
});