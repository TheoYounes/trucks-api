define('ember-leaflet/components/marker-layer', ['exports', 'ember-leaflet/components/base-layer', 'ember-leaflet/mixins/draggability', 'ember-leaflet/mixins/div-overlayable', 'ember-leaflet/macros/to-lat-lng'], function (exports, _baseLayer, _draggability, _divOverlayable, _toLatLng) {
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

  exports.default = _baseLayer.default.extend(_draggability.default, _divOverlayable.default, {

    leafletRequiredOptions: ['location'],

    leafletOptions: ['icon', 'clickable', 'draggable', 'keyboard', 'title', 'alt', 'zIndexOffset', 'opacity', 'riseOnHover', 'riseOffset'],

    leafletEvents: ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'moveend', 'remove', 'add', 'popupopen', 'popupclose'],

    leafletProperties: ['zIndexOffset', 'opacity', 'location:setLatLng'],

    location: (0, _toLatLng.default)(),

    createLayer: function createLayer() {
      var _L;

      return (_L = this.L).marker.apply(_L, _toConsumableArray(this.get('requiredOptions')).concat([this.get('options')]));
    },


    // icon observer separated from generated (leaflet properties) due to a
    // leaflet bug where draggability is lost on icon change
    iconDidChange: Ember.observer('icon', function () {
      this._layer.setIcon(this.get('icon'));

      if (this.get('draggable')) {
        this._layer.dragging.enable();
      } else {
        this._layer.dragging.disable();
      }
    })
  });
});