define('ember-get-config/index', ['exports', 'truck-front/config/environment'], function (exports, _truckFrontConfigEnvironment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _truckFrontConfigEnvironment['default'];
    }
  });
});