define('truck-front/mixins/columns-truck', ['exports'], function (exports) {
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
        label: 'name',
        valuePath: 'name',
        verticalAlign: 'middle'
      }, {
        label: 'User',
        valuePath: 'user.name',
        verticalAlign: 'middle'
      }, {
        label: 'Delivering',
        valuePath: 'delivering',
        verticalAlign: 'middle'
      }];
    })
  });
});