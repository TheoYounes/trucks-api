define('ember-semantic-ui-table/components/ui-tfoot', ['exports', 'ember', 'ember-semantic-ui-table/templates/components/ui-tfoot'], function (exports, _ember, _emberSemanticUiTableTemplatesComponentsUiTfoot) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _emberSemanticUiTableTemplatesComponentsUiTfoot['default'],
    tagName: 'tfoot'
  });
});