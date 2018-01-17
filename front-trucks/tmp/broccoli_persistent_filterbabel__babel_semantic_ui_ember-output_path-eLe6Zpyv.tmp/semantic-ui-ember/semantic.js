define('semantic-ui-ember/semantic', ['exports', 'ember'], function (exports, _ember) {

  var Semantic = _ember['default'].Namespace.create({
    UI_DEBUG: false,
    UI_PERFORMANCE: false,
    UI_VERBOSE: false
  });

  exports['default'] = Semantic;
});