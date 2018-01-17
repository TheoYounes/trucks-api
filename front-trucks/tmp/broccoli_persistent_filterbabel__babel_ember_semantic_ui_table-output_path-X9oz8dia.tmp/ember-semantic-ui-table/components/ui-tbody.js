define('ember-semantic-ui-table/components/ui-tbody', ['exports', 'ember', 'ember-semantic-ui-table/templates/components/ui-tbody'], function (exports, _ember, _emberSemanticUiTableTemplatesComponentsUiTbody) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _emberSemanticUiTableTemplatesComponentsUiTbody['default'],
    tagName: 'tbody'
  });
});