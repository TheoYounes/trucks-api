define('ember-leaflet/macros/to-lat-lng', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var latKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'lat';
    var lngKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lng';

    return Ember.computed(latKey, lngKey, {
      get: function get() {
        var _ref = [this.get(latKey), this.get(lngKey)],
            lat = _ref[0],
            lng = _ref[1];

        return this.L.latLng(lat, lng);
      },
      set: function set(key, value) {
        var _setProperties;

        this.setProperties((_setProperties = {}, _defineProperty(_setProperties, latKey, value ? value.lat : value), _defineProperty(_setProperties, lngKey, value ? value.lng : value), _setProperties));
        return value;
      }
    });
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
});