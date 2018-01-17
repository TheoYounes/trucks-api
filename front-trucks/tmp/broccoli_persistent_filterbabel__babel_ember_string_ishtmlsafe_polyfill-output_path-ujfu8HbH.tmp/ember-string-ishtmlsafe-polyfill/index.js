define('ember-string-ishtmlsafe-polyfill/index', ['exports', 'ember'], function (exports, _ember) {

  function isHTMLSafePolyfill(str) {
    return str && typeof str.toHTML === 'function';
  }

  exports['default'] = _ember['default'].String.isHTMLSafe || isHTMLSafePolyfill;
});