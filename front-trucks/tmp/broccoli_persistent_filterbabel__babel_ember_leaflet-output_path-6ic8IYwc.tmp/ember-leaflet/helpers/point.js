define('ember-leaflet/helpers/point', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var isFastBoot = typeof FastBoot !== 'undefined';

  var point = exports.point = isFastBoot ? function () {} : function point(params) {
    var _L;

    return (_L = L).point.apply(_L, _toConsumableArray(params));
  };

  exports.default = Ember.Helper.helper(point);
});