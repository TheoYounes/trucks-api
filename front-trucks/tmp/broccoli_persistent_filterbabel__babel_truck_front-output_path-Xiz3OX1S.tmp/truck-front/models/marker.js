define('truck-front/models/marker', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    typeMarker: _emberData.default.attr('string'),
    marker: _emberData.default.attr()
  });
});