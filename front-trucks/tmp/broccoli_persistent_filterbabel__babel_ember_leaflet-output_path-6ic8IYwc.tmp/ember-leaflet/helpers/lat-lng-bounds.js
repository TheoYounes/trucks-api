define('ember-leaflet/helpers/lat-lng-bounds', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var isFastBoot = typeof FastBoot !== 'undefined';

  var latLngBounds = exports.latLngBounds = isFastBoot ? function () {} : function (latLngs) {
    return L.latLngBounds(latLngs);
  };

  exports.default = Ember.Helper.helper(latLngBounds);
});