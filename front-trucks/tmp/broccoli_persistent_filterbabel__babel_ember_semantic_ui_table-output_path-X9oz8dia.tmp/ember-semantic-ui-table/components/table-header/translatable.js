define('ember-semantic-ui-table/components/table-header/translatable', ['exports', 'ember-semantic-ui-table/components/table-header/default', 'ember-semantic-ui-table/templates/components/table-header/translatable'], function (exports, _emberSemanticUiTableComponentsTableHeaderDefault, _emberSemanticUiTableTemplatesComponentsTableHeaderTranslatable) {
  exports['default'] = _emberSemanticUiTableComponentsTableHeaderDefault['default'].extend({
    layout: _emberSemanticUiTableTemplatesComponentsTableHeaderTranslatable['default']
  });
});