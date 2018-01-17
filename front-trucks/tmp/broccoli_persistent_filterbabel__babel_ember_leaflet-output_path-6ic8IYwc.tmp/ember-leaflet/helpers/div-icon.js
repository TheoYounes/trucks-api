define('ember-leaflet/helpers/div-icon', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var isFastBoot = typeof FastBoot !== 'undefined';

  var divIcon = exports.divIcon = isFastBoot ? function () {} : function divIcon(_, hash) {
    return L.divIcon(hash);
  };

  exports.default = Ember.Helper.helper(divIcon);
});