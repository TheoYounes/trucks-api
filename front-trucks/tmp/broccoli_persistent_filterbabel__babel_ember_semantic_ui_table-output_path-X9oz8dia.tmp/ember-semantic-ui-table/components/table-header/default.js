define('ember-semantic-ui-table/components/table-header/default', ['exports', 'ember', 'ember-semantic-ui-table/mixins/cell-alignment', 'ember-semantic-ui-table/templates/components/table-header/default'], function (exports, _ember, _emberSemanticUiTableMixinsCellAlignment, _emberSemanticUiTableTemplatesComponentsTableHeaderDefault) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_emberSemanticUiTableMixinsCellAlignment['default'], {
    layout: _emberSemanticUiTableTemplatesComponentsTableHeaderDefault['default'],
    tagName: 'th',
    classNameBindings: ['column.sortable:sortable', 'column.sorted:sorted', 'column.direction', 'column.width', 'column.collapsing:collapsing'],

    click: function click(e) {
      var _getProperties = this.getProperties('column', 'table');

      var column = _getProperties.column;
      var table = _getProperties.table;

      this.sendAction('onClick', e, column, table);
    },

    doubleClick: function doubleClick(e) {
      var _getProperties2 = this.getProperties('column', 'table');

      var column = _getProperties2.column;
      var table = _getProperties2.table;

      this.sendAction('onDoubleClick', e, column, table);
    }

    // Events

    /**
     * @event onClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */
  });
});