define('ember-semantic-ui-table/components/table-cell/row-number', ['exports', 'ember', 'ember-semantic-ui-table/components/table-cell/default', 'ember-semantic-ui-table/templates/components/table-cell/row-number'], function (exports, _ember, _emberSemanticUiTableComponentsTableCellDefault, _emberSemanticUiTableTemplatesComponentsTableCellRowNumber) {
  var computed = _ember['default'].computed;
  exports['default'] = _emberSemanticUiTableComponentsTableCellDefault['default'].extend({
    layout: _emberSemanticUiTableTemplatesComponentsTableCellRowNumber['default'],

    number: computed('index', function () {
      return this.get('index') + 1;
    })
  });
});