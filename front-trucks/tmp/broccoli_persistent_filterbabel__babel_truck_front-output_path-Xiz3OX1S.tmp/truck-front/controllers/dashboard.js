define('truck-front/controllers/dashboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    mapMarkers: Ember.computed('model.@each.marker', function () {
      var tab = Ember.A([]);
      this.get('model').content.map(function (x) {
        if (x.__data.marker) {
          var marker = {
            id: x.__data.marker.name,
            lat: x.__data.marker.lat,
            lng: x.__data.marker.lng
          };
          tab.pushObject(marker);
        }
      });
      return tab;
    })
  });
});