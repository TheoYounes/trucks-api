"use strict";



define('truck-front/adapters/application', ['exports', 'ember-data', 'truck-front/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: '' + _environment.default.APP.API_HOST,
    namespace: 'api'
  });
});
define('truck-front/app', ['exports', 'truck-front/resolver', 'ember-load-initializers', 'truck-front/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('truck-front/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant', 'truck-front/config/environment'], function (exports, _oauth2PasswordGrant, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2PasswordGrant.default.extend({
    serverTokenEndpoint: _environment.default.APP.API_HOST + '/auth'
  });
});
define('truck-front/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _arrayPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayPathLayer.default;
    }
  });
});
define('truck-front/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _baseLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseLayer.default;
    }
  });
});
define('truck-front/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _circleLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleLayer.default;
    }
  });
});
define('truck-front/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _circleMarkerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleMarkerLayer.default;
    }
  });
});
define('truck-front/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _containerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _containerLayer.default;
    }
  });
});
define('truck-front/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _divOverlayLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divOverlayLayer.default;
    }
  });
});
define('truck-front/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('truck-front/components/g-map-address-marker', ['exports', 'ember-g-map/components/g-map-address-marker'], function (exports, _gMapAddressMarker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapAddressMarker.default;
    }
  });
});
define('truck-front/components/g-map-address-route', ['exports', 'ember-g-map/components/g-map-address-route'], function (exports, _gMapAddressRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapAddressRoute.default;
    }
  });
});
define('truck-front/components/g-map-infowindow', ['exports', 'ember-g-map/components/g-map-infowindow'], function (exports, _gMapInfowindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapInfowindow.default;
    }
  });
});
define('truck-front/components/g-map-marker', ['exports', 'ember-g-map/components/g-map-marker'], function (exports, _gMapMarker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapMarker.default;
    }
  });
});
define('truck-front/components/g-map-polyline-coordinate', ['exports', 'ember-g-map/components/g-map-polyline-coordinate'], function (exports, _gMapPolylineCoordinate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapPolylineCoordinate.default;
    }
  });
});
define('truck-front/components/g-map-polyline', ['exports', 'ember-g-map/components/g-map-polyline'], function (exports, _gMapPolyline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapPolyline.default;
    }
  });
});
define('truck-front/components/g-map-route-address-waypoint', ['exports', 'ember-g-map/components/g-map-route-address-waypoint'], function (exports, _gMapRouteAddressWaypoint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapRouteAddressWaypoint.default;
    }
  });
});
define('truck-front/components/g-map-route-waypoint', ['exports', 'ember-g-map/components/g-map-route-waypoint'], function (exports, _gMapRouteWaypoint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapRouteWaypoint.default;
    }
  });
});
define('truck-front/components/g-map-route', ['exports', 'ember-g-map/components/g-map-route'], function (exports, _gMapRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMapRoute.default;
    }
  });
});
define('truck-front/components/g-map', ['exports', 'ember-g-map/components/g-map'], function (exports, _gMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gMap.default;
    }
  });
});
define('truck-front/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _geojsonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _geojsonLayer.default;
    }
  });
});
define('truck-front/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _imageLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imageLayer.default;
    }
  });
});
define('truck-front/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _leafletMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletMap.default;
    }
  });
});
define('truck-front/components/map/google-map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    latitude: 47.0833300,
    longitude: 2.34,
    myZoom: 6,
    departs: '',
    destinations: '',
    depart: '',
    destination: '',
    trajet: '',
    colors: 'red',
    init: function init() {
      this._super.apply(this, arguments);
      var journeys = this.get('journeys').content;
      var colors = ['blue', 'dark', 'pink', 'green', 'red', 'yellow'];
      var trajet = [];
      var depart = [];

      console.log(journeys[0]);
      if (journeys) {
        journeys.map(function (journey) {
          trajet.push(journey._data.steps);
        });
      }
      this.set("trajet", trajet);
      console.log(this.get("trajet"));
    },

    actions: {
      select: function select(trajet) {
        var depart = [];
        var destination = [];

        trajet = trajet.split(',');
        for (var i = 0; i < trajet.length; i++) {
          if (i % 2 === 0) {
            depart.push(trajet[i]);
          } else {
            destination.push(trajet[i]);
          }
        }
        this.set('departs', depart);
        this.set('destinations', destination);

        console.log(this.get('departs') + 'yolo' + this.get('destinations'));
      }
    }

  });
});
define('truck-front/components/map/input-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    address: '',
    lancementAlgoIa: Ember.inject.service(),

    init: function init() {
      this._super.apply(this, arguments);
      console.log(this.get('trucks'));
      if (this.get('trucks').content[0] === undefined) {

        this.notDelivering = true;
      } else {

        this.notDelivering = !this.get('trucks').content[0].__data.delivering;
      }
    },

    actions: {
      lancementAlgo: function lancementAlgo() {
        this.get('lancementAlgoIa').lancementAlgo();
      }
    }
  });
});
define('truck-front/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _markerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markerLayer.default;
    }
  });
});
define('truck-front/components/ns-table-col', ['exports', 'truck-front/views/ns-table-cell-view'], function (exports, _nsTableCellView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		tagName: 'th',

		registerToTable: function () {
			var tableComponent = this.get('parentView');
			tableComponent.registerColumn(this);
		}.on('didInsertElement'),

		cellViewClass: null
	});
});
define('truck-front/components/ns-table', ['exports', 'truck-front/views/ns-table-rows-view'], function (exports, _nsTableRowsView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		tagName: 'table',
		rowValuePaths: [],
		columnComponents: [],
		rowsView: _nsTableRowsView.default,
		refreshDebounceTime: 100,

		registerColumn: function registerColumn(columnComponent) {
			this.get('columnComponents').addObject(columnComponent);
			this.refreshRows();
		},

		refreshRows: function refreshRows() {
			Ember.run.debounce(this, this.refreshRowsImpl, this.get('refreshDebounceTime'));
		},

		refreshRowsImpl: function refreshRowsImpl() {
			var cols = this.get('columnComponents').map(function (cc) {
				return cc.get('valuePath');
			}.bind(this));
			this.set('rowValuePaths', cols);
		},

		rowData: function () {
			var valPaths = this.get('rowValuePaths');

			if (Ember.isEmpty(valPaths)) {
				return [];
			} else {
				return this.get('content').map(function (rowData) {
					return valPaths.map(function (valPath) {
						return Ember.get(rowData, valPath);
					}.bind(this));
				}.bind(this));
			}
		}.property('rows', 'rowValuePaths', 'rowValuePaths.[]')
	});
});
define('truck-front/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _pathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathLayer.default;
    }
  });
});
define('truck-front/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _pointPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pointPathLayer.default;
    }
  });
});
define('truck-front/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _polygonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polygonLayer.default;
    }
  });
});
define('truck-front/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _polylineLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polylineLayer.default;
    }
  });
});
define('truck-front/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _popupLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popupLayer.default;
    }
  });
});
define('truck-front/components/table-cell/default', ['exports', 'ember-semantic-ui-table/components/table-cell/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('truck-front/components/table-cell/row-index', ['exports', 'ember-semantic-ui-table/components/table-cell/row-index'], function (exports, _rowIndex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowIndex.default;
    }
  });
});
define('truck-front/components/table-cell/row-number', ['exports', 'ember-semantic-ui-table/components/table-cell/row-number'], function (exports, _rowNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rowNumber.default;
    }
  });
});
define('truck-front/components/table-header/default', ['exports', 'ember-semantic-ui-table/components/table-header/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('truck-front/components/table-header/translatable', ['exports', 'ember-semantic-ui-table/components/table-header/translatable'], function (exports, _translatable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _translatable.default;
    }
  });
});
define('truck-front/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _tileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tileLayer.default;
    }
  });
});
define('truck-front/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _tooltipLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tooltipLayer.default;
    }
  });
});
define('truck-front/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _uiAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
define('truck-front/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
define('truck-front/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _uiDimmer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
define('truck-front/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _uiDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
define('truck-front/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _uiEmbed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
define('truck-front/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
define('truck-front/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _uiNag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
define('truck-front/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
define('truck-front/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
define('truck-front/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
define('truck-front/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _uiRating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
define('truck-front/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _uiSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
define('truck-front/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _uiShape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
define('truck-front/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _uiSidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
define('truck-front/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _uiSticky) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
define('truck-front/components/ui-table', ['exports', 'ember-semantic-ui-table/components/ui-table'], function (exports, _uiTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTable.default;
    }
  });
});
define('truck-front/components/ui-tbody', ['exports', 'ember-semantic-ui-table/components/ui-tbody'], function (exports, _uiTbody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTbody.default;
    }
  });
});
define('truck-front/components/ui-tfoot', ['exports', 'ember-semantic-ui-table/components/ui-tfoot'], function (exports, _uiTfoot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTfoot.default;
    }
  });
});
define('truck-front/components/ui-thead', ['exports', 'ember-semantic-ui-table/components/ui-thead'], function (exports, _uiThead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiThead.default;
    }
  });
});
define('truck-front/components/ui-tr', ['exports', 'ember-semantic-ui-table/components/ui-tr'], function (exports, _uiTr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTr.default;
    }
  });
});
define('truck-front/components/users/login-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    session: Ember.inject.service('session'),
    name: '',
    password: '',
    actions: {
      login: function login() {
        this.sendAction('login', this.get('name'), this.get('password'));
      }
    }
  });
});
define('truck-front/components/users/register-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    name: '',
    password: '',

    actions: {
      register: function register() {
        this.sendAction('register', this.get('name'), this.get('password'));
      }
    }
  });
});
define('truck-front/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('truck-front/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _wmsTileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wmsTileLayer.default;
    }
  });
});
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
define('truck-front/helpers/app-version', ['exports', 'truck-front/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('truck-front/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _divIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divIcon.default;
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function () {
      return _divIcon.divIcon;
    }
  });
});
define('truck-front/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _icon.default;
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function () {
      return _icon.icon;
    }
  });
});
define('truck-front/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _latLngBounds) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _latLngBounds.default;
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function () {
      return _latLngBounds.latLngBounds;
    }
  });
});
define('truck-front/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _mapValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
define('truck-front/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('truck-front/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _point.default;
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function () {
      return _point.point;
    }
  });
});
define('truck-front/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('truck-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'truck-front/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('truck-front/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('truck-front/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('truck-front/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('truck-front/initializers/ember-simple-auth', ['exports', 'truck-front/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _environment, _configuration, _setupSession, _setupSessionService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
    }
  };
});
define('truck-front/initializers/export-application-global', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('truck-front/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('truck-front/initializers/leaflet-assets', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    if (typeof FastBoot === 'undefined') {
      var prefix = '';

      if (!Ember.isNone(_emberGetConfig.default.rootURL)) {
        prefix = _emberGetConfig.default.rootURL;
      } else if (!Ember.isNone(_emberGetConfig.default.baseURL)) {
        prefix = _emberGetConfig.default.baseURL;
      }

      L.Icon.Default.imagePath = prefix + 'assets/images/';
    }
  }

  exports.default = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('truck-front/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('truck-front/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("truck-front/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('truck-front/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _setupSessionRestoration.default)(instance);
    }
  };
});
define('truck-front/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('truck-front/mixins/columns-city', ['exports'], function (exports) {
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
        label: 'id',
        valuePath: 'id',
        verticalAlign: 'middle'
      }, {
        label: 'Name',
        valuePath: 'name',
        verticalAlign: 'middle'
      }];
    })
  });
});
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
define('truck-front/mixins/columns-user', ['exports'], function (exports) {
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
        label: 'id',
        valuePath: 'id',
        verticalAlign: 'middle'
      }, {
        label: 'Name',
        valuePath: 'name',
        verticalAlign: 'middle'
      }];
    })
  });
});
define('truck-front/mixins/promise-resolver', ['exports', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _promiseResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseResolver.default;
    }
  });
});
define('truck-front/models/city', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    ressources: _emberData.default.attr('number'),
    position: _emberData.default.attr()

  });
});
define('truck-front/models/journey', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    steps: _emberData.default.attr(),
    ressources: _emberData.default.attr()
  });
});
define('truck-front/models/marker', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    typeMarker: _emberData.default.attr('string'),
    marker: _emberData.default.attr()
  });
});
define('truck-front/models/truck', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('String'),
    user: _emberData.default.belongsTo('user'),
    delivering: _emberData.default.attr('Boolean')

  });
});
define('truck-front/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    password: _emberData.default.attr('string'),
    trucks: _emberData.default.attr()
  });
});
define('truck-front/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('truck-front/router', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('/');
    this.route('login');
    this.route('register');
    this.route('dashboard');
  });

  exports.default = Router;
});
define('truck-front/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend();
});
define('truck-front/routes/dashboard', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    session: Ember.inject.service('session'),
    sortProperties: ['name:asc'],
    user: Ember.computed.sort('model.users', 'sortProperties'),
    model: function model() {
      return Ember.RSVP.hash({
        markers: this.get('store').findAll('marker'),
        trucks: this.get('store').findAll('truck'),
        journeys: this.get('store').findAll('journey')
      });
    },


    actions: {
      createUser: function createUser(name, password) {
        var user = this.get('store').createRecord('user', { name: name }, { password: password });
        user.save();
      },
      deleteUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.store.findRecord('user', id, { backgroundReload: false });

                case 3:
                  user = _context.sent;

                  user.deleteRecord();
                  user.get('isDeleted'); // => true
                  user.save(); // => DELETE to /users/1
                  _context.next = 11;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 9]]);
        }));

        function deleteUser(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteUser;
      }(),
      updateUser: function updateUser(id, userName) {
        this.get('store').findRecord('user', id).then(function (user) {
          user.set('name', userName);
          user.save();
        });
      },
      searchPos: function searchPos(adress) {
        this.get('searchPosition').searchPositionGoogle(adress);
        this.get('setupController');
      },
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });
});
define('truck-front/routes/index', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    model: function model() {
      return Ember.RSVP.hash({
        users: this.get('store').findAll('user')
      });
    },

    actions: {
      createUser: function createUser(name, password) {
        var user = this.get('store').createRecord('user', { name: name }, { password: password });
        user.save();
      }
    }
  });
});
define('truck-front/routes/login', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    authentication: Ember.inject.service('authentication'),
    actions: {
      login: function login(name, password) {
        this.get('authentication').authenticate(name, password);
      }
    }
  });
});
define('truck-front/routes/register', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    authentication: Ember.inject.service('authentication'),
    actions: {
      register: function register(name, password) {
        this.get('authentication').register(name, password);
      }
    }
  });
});
define('truck-front/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('truck-front/services/authentication', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),

    register: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, password) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_environment.default.APP.API_HOST + '/availableUser');
                try {
                  user = this.get('store').createRecord('user', { name: name, password: password });
                  // we make an request to server to know if the user exist

                  $.ajax({
                    url: _environment.default.APP.API_HOST + '/availableUser',
                    type: 'POST',
                    data: { name: name, password: password },
                    success: function success(data) {
                      if (data.result === 'okUserNotExisting') user.save();
                    }
                  });
                } catch (err) {
                  console.log(err);
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return register;
    }(),
    authenticate: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, password) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.get('session').authenticate('authenticator:oauth2', name, password);

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](0);

                this.set('loginError', _context2.t0.error || _context2.t0);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function authenticate(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return authenticate;
    }()
  });
});
define('truck-front/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('truck-front/services/lancement-algo-ia', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    ajax: Ember.inject.service(),

    lancementAlgo: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  $.ajax({
                    url: _environment.default.APP.API_HOST + '/ia',
                    type: 'GET' });
                } catch (err) {
                  console.log(err);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function lancementAlgo() {
        return _ref.apply(this, arguments);
      }

      return lancementAlgo;
    }()
  });
});
define('truck-front/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('truck-front/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("truck-front/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w3lvtOaj", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/application.hbs" } });
});
define("truck-front/templates/components/map/google-map", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gMnmlJUJ", "block": "{\"symbols\":[\"traj\",\"context\",\"dest\",\"depart\",\"&default\"],\"statements\":[[4,\"g-map\",null,[[\"lat\",\"lng\",\"zoom\"],[[20,[\"latitude\"]],[20,[\"longitude\"]],[20,[\"myZoom\"]]]],{\"statements\":[[4,\"each\",[[20,[\"destinations\"]]],null,{\"statements\":[[4,\"each\",[[20,[\"departs\"]]],null,{\"statements\":[[0,\"  \"],[1,[25,\"g-map-address-route\",[[19,2,[]]],[[\"travelMode\",\"strokeColor\",\"originAddress\",\"destinationAddress\"],[\"driving\",[20,[\"colors\"]],[19,4,[]],[19,3,[]]]]],false],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"\\n\"]],\"parameters\":[2]},null],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"select\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"trajet\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[10,\"value\",[26,[[19,1,[]]]]],[7],[1,[19,1,[]],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[11,5],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/map/google-map.hbs" } });
});
define("truck-front/templates/components/map/input-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bUFfwrGt", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\" Truck Manager\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"center-card\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui card\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"ui form\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n        \"],[6,\"br\"],[7],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"card-explanation\"],[7],[0,\"\\n          \"],[6,\"p\"],[7],[0,\"Le truck manager est un outil de getion de camions,\\n            cliquer sur le bouton lancement ci dessous pour que notre\\n            IA calcule le meilleur chemin pour récuperer des resssources\"],[8],[0,\"\\n          \"],[6,\"br\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"button\"],[10,\"class\",[26,[\"ui bottom green attached button \",[25,\"if\",[[20,[\"notDelivering\"]],\"\",\"disabled\"],null]]]],[9,\"type\",\"submit\"],[3,\"action\",[[19,0,[]],\"lancementAlgo\"]],[7],[0,\"\\n      lancement\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"h3\"],[7],[0,\"\\n  Steps:\\n\"],[8],[0,\"\\n\"],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/map/input-form.hbs" } });
});
define("truck-front/templates/components/ns-table-col", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eo15r+Mj", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"title\"],false]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ns-table-col.hbs" } });
});
define("truck-front/templates/components/ns-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eIusXlDr", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"thead\"],[7],[0,\"\\n\\t\"],[6,\"tr\"],[7],[0,\"\\n\\t\\t\"],[11,1],[0,\"\\t\\n\\t\"],[8],[0,\"\\t\\n\"],[8],[0,\"\\n\"],[1,[25,\"view\",[[20,[\"rowsView\"]]],[[\"content\",\"columns\"],[[20,[\"rowData\"]],[20,[\"columnComponents\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ns-table.hbs" } });
});
define("truck-front/templates/components/ui-accordion", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zONxz+9t", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-accordion.hbs" } });
});
define("truck-front/templates/components/ui-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dDrCkPHy", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[20,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[20,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-checkbox.hbs" } });
});
define("truck-front/templates/components/ui-dimmer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CBBV28z2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-dimmer.hbs" } });
});
define("truck-front/templates/components/ui-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wgRgY253", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null],[25,\"action\",[[19,0,[]],\"mapping\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-dropdown.hbs" } });
});
define("truck-front/templates/components/ui-embed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GXmpNbA0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-embed.hbs" } });
});
define("truck-front/templates/components/ui-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5tJkl+do", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-modal.hbs" } });
});
define("truck-front/templates/components/ui-nag", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IFamOR4D", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-nag.hbs" } });
});
define("truck-front/templates/components/ui-popup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XGBxkAjp", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-popup.hbs" } });
});
define("truck-front/templates/components/ui-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oelfT1ss", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-progress.hbs" } });
});
define("truck-front/templates/components/ui-radio", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4b138ge5", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[20,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[20,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-radio.hbs" } });
});
define("truck-front/templates/components/ui-rating", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lirOyYjG", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-rating.hbs" } });
});
define("truck-front/templates/components/ui-search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+Hmqt7Xs", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-search.hbs" } });
});
define("truck-front/templates/components/ui-shape", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xSdyglTO", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-shape.hbs" } });
});
define("truck-front/templates/components/ui-sidebar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lg5BbKFm", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-sidebar.hbs" } });
});
define("truck-front/templates/components/ui-sticky", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EREDVajz", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/ui-sticky.hbs" } });
});
define("truck-front/templates/components/users/login-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "phWAxsS5", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"login-page\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui middle aligned center aligned grid\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n      \"],[6,\"h2\"],[9,\"class\",\"ui teal image header\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n          Log-in to your account\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"form\"],[9,\"class\",\"ui large form\"],[3,\"action\",[[19,0,[]],\"login\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui stacked segment\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui left icon input\"],[7],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"user icon\"],[7],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"id\",\"placeholder\",\"value\"],[\"name\",\"Enter Login\",[20,[\"name\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"ui left icon input\"],[7],[0,\"\\n              \"],[6,\"i\"],[9,\"class\",\"lock icon\"],[7],[8],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"password\",\"Enter Password\",\"password\",[20,[\"password\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"ui fluid large green submit button\"],[7],[0,\"Login\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui error message\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui message\"],[7],[0,\"\\n        New to us? \"],[4,\"link-to\",[\"register\"],null,{\"statements\":[[0,\" Sign Up \"]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"errorMessage\"]]],null,{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[1,[18,\"errorMessage\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/users/login-form.hbs" } });
});
define("truck-front/templates/components/users/register-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Koh1o1k6", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"login-page\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"ui middle aligned center aligned grid\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"column\"],[7],[0,\"\\n    \"],[6,\"h2\"],[9,\"class\",\"ui teal image header\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"content\"],[7],[0,\"\\n        Registering\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"ui large form\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui stacked segment\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui left icon input\"],[7],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"user icon\"],[7],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"id\",\"placeholder\",\"value\"],[\"name\",\"Enter Login\",[20,[\"name\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"ui left icon input\"],[7],[0,\"\\n            \"],[6,\"i\"],[9,\"class\",\"lock icon\"],[7],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"id\",\"placeholder\",\"type\",\"value\"],[\"password\",\"Enter Password\",\"password\",[20,[\"password\"]]]]],false],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"          \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"register\"]],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"ui fluid large green submit button\"],[7],[0,\"Register\"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"ui error message\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"errorMessage\"]]],null,{\"statements\":[[0,\"  \"],[6,\"p\"],[7],[1,[18,\"errorMessage\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/components/users/register-form.hbs" } });
});
define("truck-front/templates/dashboard", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "e81PvAhz", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui animated button red\"],[9,\"tabindex\",\"0\"],[9,\"type\",\"submit\"],[3,\"action\",[[19,0,[]],\"logout\"]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"visible content\"],[7],[0,\"sign out\"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"hidden content\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"sign out icon\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"ui grid\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"eight wide column\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"map-container\"],[7],[0,\"\\n          \"],[1,[25,\"map/google-map\",null,[[\"markers\",\"journeys\",\"id\"],[[20,[\"model\",\"markers\"]],[20,[\"model\",\"journeys\"]],\"map\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"seven wide column\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"card-2\"],[7],[0,\"\\n        \"],[1,[25,\"map/input-form\",null,[[\"searchPos\",\"trucks\"],[\"searchPos\",[20,[\"model\",\"trucks\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui vertical divider \"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/dashboard.hbs" } });
});
define("truck-front/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y8xdmZdC", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"card\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Truck Manager\"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"ui card\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"      \"],[6,\"br\"],[7],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"ui instagram button\"],[9,\"style\",\"width: 130px; margin-left: 30%;\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"icon user\"],[7],[8],[0,\"\\n        Login\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"register\"],null,{\"statements\":[[0,\"      \"],[6,\"br\"],[7],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"ui instagram button\"],[9,\"style\",\"width: 130px; margin-left: 30%;\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"icon add\"],[7],[8],[0,\"\\n        Register\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/index.hbs" } });
});
define("truck-front/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l9kGYi/x", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"users/login-form\",null,[[\"login\"],[\"login\"]]],false],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/login.hbs" } });
});
define("truck-front/templates/ns-table-cell-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g91pTAky", "block": "{\"symbols\":[],\"statements\":[[1,[20,[\"view\",\"content\"]],false]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/ns-table-cell-view.hbs" } });
});
define("truck-front/templates/ns-url-cell-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/Ms1Osxe", "block": "{\"symbols\":[],\"statements\":[[0,\"HELLO!! \"],[1,[20,[\"view\",\"content\"]],false],[0,\" (\"],[1,[20,[\"view\",\"row\",\"id\"]],false],[0,\")\"]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/ns-url-cell-view.hbs" } });
});
define("truck-front/templates/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T6MtMuMi", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"users/register-form\",null,[[\"register\"],[\"register\"]]],false],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "truck-front/templates/register.hbs" } });
});
define('truck-front/utils/get-promise-content', ['exports', 'ember-promise-tools/utils/get-promise-content'], function (exports, _getPromiseContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getPromiseContent.default;
    }
  });
});
define('truck-front/utils/is-fulfilled', ['exports', 'ember-promise-tools/utils/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
});
define('truck-front/utils/is-promise', ['exports', 'ember-promise-tools/utils/is-promise'], function (exports, _isPromise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPromise.default;
    }
  });
});
define('truck-front/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/smart-resolve'], function (exports, _smartResolve) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _smartResolve.default;
    }
  });
});
define('truck-front/views/ns-table-cell-view', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.View.extend({
		templateName: 'ns-table-cell-view'
	});
});
define('truck-front/views/ns-table-row-view', ['exports', 'truck-front/views/ns-table-cell-view'], function (exports, _nsTableCellView) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.CollectionView.extend({
      tagName: 'tr',
      defaultItemViewClass: _nsTableCellView.default,
      columns: [],
      createChildView: function createChildView(viewClass, attrs) {
         var columnModel = this.get('columns')[attrs.contentIndex];
         return this._super(columnModel.get('cellViewClass') || this.get('defaultItemViewClass'), Ember.$.extend(attrs, { row: this.get('row') }));
      }
   });
});
define('truck-front/views/ns-table-rows-view', ['exports', 'truck-front/views/ns-table-row-view'], function (exports, _nsTableRowView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.CollectionView.extend({
		tagName: 'tbody',
		itemViewClass: _nsTableRowView.default,
		createChildView: function createChildView(viewClass, attrs) {
			var keys = this.get('columns').mapBy('valuePath');
			var vals = attrs.content;
			var o = {};
			for (var i = 0; i < keys.length; i += 1) {
				o[keys[i]] = vals[i];
			}
			return this._super(viewClass, Ember.$.extend(attrs, { columns: this.get('columns'), row: o }));
		}
	});
});
define('truck-front/views/ns-url-cell-view', ['exports', 'truck-front/views/ns-table-cell-view'], function (exports, _nsTableCellView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _nsTableCellView.default.extend({
		templateName: 'ns-url-cell-view'
	});
});


define('truck-front/config/environment', [], function() {
  var prefix = 'truck-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("truck-front/app")["default"].create({"API_HOST":"http://localhost:3232","name":"truck-front","version":"0.0.0+2ba8c556"});
}
//# sourceMappingURL=truck-front.map
