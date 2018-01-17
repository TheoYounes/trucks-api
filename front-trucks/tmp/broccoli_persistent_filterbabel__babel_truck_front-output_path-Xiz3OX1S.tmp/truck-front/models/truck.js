define('truck-front/models/truck', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('String'),
    user: _emberData.default.belongsTo('user'),
    delivering: _emberData.default.attr('Boolean')

  });
});