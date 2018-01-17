define('ember-semantic-ui-table/index', ['exports', 'ember-semantic-ui-table/classes/column', 'ember-semantic-ui-table/classes/row', 'ember-semantic-ui-table/classes/table'], function (exports, _emberSemanticUiTableClassesColumn, _emberSemanticUiTableClassesRow, _emberSemanticUiTableClassesTable) {
  exports.Column = _emberSemanticUiTableClassesColumn['default'];
  exports.Row = _emberSemanticUiTableClassesRow['default'];
  exports.Table = _emberSemanticUiTableClassesTable['default'];
});