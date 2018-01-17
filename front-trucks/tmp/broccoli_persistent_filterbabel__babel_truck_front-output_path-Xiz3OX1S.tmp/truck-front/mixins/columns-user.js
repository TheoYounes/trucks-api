define('truck-front/mixins/columns-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    columns: Ember.computed(function () {
      return [{
        cellType: 'row-number',
        verticalAlign: 'middle'
      }, {
        label: 'id',
        valuePath: 'id',
        verticalAlign: 'middle'
      }, {
        label: 'Name',
        valuePath: 'name',
        verticalAlign: 'middle'
      }];
    })
  });
});