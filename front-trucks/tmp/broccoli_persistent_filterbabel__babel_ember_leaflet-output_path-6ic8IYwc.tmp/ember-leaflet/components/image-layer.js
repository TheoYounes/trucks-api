define('ember-leaflet/components/image-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _baseLayer) {
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

  exports.default = _baseLayer.default.extend({

    leafletRequiredOptions: ['url', 'bounds'],

    leafletOptions: ['attribution', 'opacity'],

    leafletProperties: ['url', 'opacity', 'bounds'],

    init: function init() {
      var imageUrl = this.get('imageUrl');
      if (Ember.isPresent(imageUrl)) {
        Ember.deprecate('ember-leaflet/image-layer: The `imageUrl` attribute has been deprecated in favor of the observed attribute `url`.', false, {
          id: 'ember-leaflet.image-layer.imageUrl',
          until: '4.0.0',
          url: 'https://github.com/miguelcobain/ember-leaflet/pull/143'
        });
        this.set('url', imageUrl);
      }

      this._super.apply(this, arguments);
    },
    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).imageOverlay.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});