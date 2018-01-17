define('ember-semantic-ui-table/components/table-cell/default', ['exports', 'ember', 'ember-semantic-ui-table/mixins/cell-alignment', 'ember-semantic-ui-table/templates/components/table-cell/default'], function (exports, _ember, _emberSemanticUiTableMixinsCellAlignment, _emberSemanticUiTableTemplatesComponentsTableCellDefault) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_emberSemanticUiTableMixinsCellAlignment['default'], {
    layout: _emberSemanticUiTableTemplatesComponentsTableCellDefault['default'],
    tagName: 'td',
    classNameBindings: ['column.collapsing:collapsing'],

    click: function click(e) {
      var _getProperties = this.getProperties('row', 'column', 'table');

      var row = _getProperties.row;
      var column = _getProperties.column;
      var table = _getProperties.table;

      this.sendAction('onClick', e, row, column, table);
    },

    doubleClick: function doubleClick(e) {
      var _getProperties2 = this.getProperties('row', 'column', 'table');

      var row = _getProperties2.row;
      var column = _getProperties2.column;
      var table = _getProperties2.table;

      this.sendAction('onDoubleClick', e, row, column, table);
    }

    // Events

    /**
     * @event onClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */
  });
});