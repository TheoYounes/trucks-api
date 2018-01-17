define('truck-front/models/journey', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    steps: _emberData.default.attr(),
    ressources: _emberData.default.attr()
  });
});