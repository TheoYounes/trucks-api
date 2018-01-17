define('ember-leaflet/components/geojson-layer', ['exports', 'ember-leaflet/components/base-layer', 'ember-leaflet/mixins/style', 'ember-leaflet/mixins/div-overlayable'], function (exports, _baseLayer, _style, _divOverlayable) {
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

  exports.default = _baseLayer.default.extend(_divOverlayable.default, _style.default, {
    leafletRequiredOptions: ['geoJSON'],

    leafletOptions: ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className', 'pointToLayer', 'style', 'onEachFeature', 'filter', 'coordsToLatLng'],

    leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'add', 'remove', 'popupopen', 'popupclose'],

    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);

      var geoJSON = this.get('geoJSON');
      if (geoJSON) {
        this.pushDataToLeaflet(geoJSON);
      }
    },
    pushDataToLeaflet: function pushDataToLeaflet(geoJSON) {
      if (!this._layer) {
        return;
      }

      // recall that GeoJSON layers are actually layer groups -- we have to clear
      // their contents first...
      this._layer.clearLayers();

      if (geoJSON) {
        // ...then add new data to recreate the child layers in an updated form
        this._layer.addData(geoJSON);
      }
    },
    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).geoJson.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    }
  });
});