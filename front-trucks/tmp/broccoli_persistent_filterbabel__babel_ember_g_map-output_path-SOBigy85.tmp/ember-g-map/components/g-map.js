define('ember-g-map/components/g-map', ['exports', 'ember', 'ember-g-map/templates/components/g-map'], function (exports, _ember, _emberGMapTemplatesComponentsGMap) {
  var isEmpty = _ember['default'].isEmpty;
  var isPresent = _ember['default'].isPresent;
  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;
  var run = _ember['default'].run;
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberGMapTemplatesComponentsGMap['default'],
    classNames: ['g-map'],
    bannedOptions: _ember['default'].A(['center', 'zoom']),

    init: function init() {
      this._super.apply(this, arguments);
      this.set('markers', _ember['default'].A());
      this.set('polylines', _ember['default'].A());
      if (isEmpty(this.get('options'))) {
        this.set('options', {});
      }
    },

    permittedOptions: computed('options', function () {
      var _getProperties = this.getProperties(['options', 'bannedOptions']);

      var options = _getProperties.options;
      var bannedOptions = _getProperties.bannedOptions;

      var permittedOptions = {};
      for (var option in options) {
        if (options.hasOwnProperty(option) && !bannedOptions.includes(option)) {
          permittedOptions[option] = options[option];
        }
      }
      return permittedOptions;
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      if (isEmpty(this.get('map')) && typeof FastBoot === 'undefined') {
        var canvas = this.$().find('.g-map-canvas').get(0);
        var options = this.get('permittedOptions');
        this.set('map', new google.maps.Map(canvas, options));
      }
      this.setZoom();
      this.setCenter();
      if (this.get('shouldFit')) {
        this.fitToMarkers();
      }
    },

    permittedOptionsChanged: observer('permittedOptions', function () {
      run.once(this, 'setOptions');
    }),

    setOptions: function setOptions() {
      var map = this.get('map');
      var options = this.get('permittedOptions');
      if (isPresent(map)) {
        map.setOptions(options);
      }
    },

    zoomChanged: observer('zoom', function () {
      run.once(this, 'setZoom');
    }),

    setZoom: function setZoom() {
      var map = this.get('map');
      var zoom = this.get('zoom');
      if (isPresent(map)) {
        map.setZoom(zoom);
      }
    },

    coordsChanged: observer('lat', 'lng', function () {
      run.once(this, 'setCenter');
    }),

    setCenter: function setCenter() {
      var map = this.get('map');
      var lat = this.get('lat');
      var lng = this.get('lng');

      if (isPresent(map) && isPresent(lat) && isPresent(lng) && typeof FastBoot === 'undefined') {
        var center = new google.maps.LatLng(lat, lng);
        map.setCenter(center);
      }
    },

    registerMarker: function registerMarker(marker) {
      this.get('markers').addObject(marker);
    },

    unregisterMarker: function unregisterMarker(marker) {
      this.get('markers').removeObject(marker);
    },

    registerPolyline: function registerPolyline(polyline) {
      this.get('polylines').addObject(polyline);
    },

    unregisterPolyline: function unregisterPolyline(polyline) {
      this.get('polylines').removeObject(polyline);
    },

    shouldFit: computed('markersFitMode', function () {
      return _ember['default'].A(['init', 'live']).includes(this.get('markersFitMode'));
    }),

    markersChanged: observer('markers.@each.lat', 'markers.@each.lng', function () {
      if (this.get('markersFitMode') === 'live') {
        run.once(this, 'fitToMarkers');
      }
    }),

    fitToMarkers: function fitToMarkers() {
      var markers = this.get('markers').filter(function (marker) {
        return isPresent(marker.get('lat')) && isPresent(marker.get('lng'));
      });

      if (markers.length === 0 || typeof FastBoot !== 'undefined') {
        return;
      }

      var map = this.get('map');
      var bounds = new google.maps.LatLngBounds();

      markers.forEach(function (marker) {
        if (isPresent(marker.get('viewport'))) {
          bounds.union(marker.get('viewport'));
        } else {
          bounds.extend(new google.maps.LatLng(marker.get('lat'), marker.get('lng')));
        }
      });
      map.fitBounds(bounds);
    },

    groupMarkerClicked: function groupMarkerClicked(marker, group) {
      var markers = this.get('markers').without(marker).filterBy('group', group);
      markers.forEach(function (marker) {
        return marker.closeInfowindow();
      });
    }
  });
});