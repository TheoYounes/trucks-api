define('ember-semantic-ui-table/components/ui-tr', ['exports', 'ember', 'ember-semantic-ui-table/templates/components/ui-tr'], function (exports, _ember, _emberSemanticUiTableTemplatesComponentsUiTr) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _emberSemanticUiTableTemplatesComponentsUiTr['default'],
    tagName: 'tr',

    classNameBindings: ['row.selected:active'],

    click: function click(e) {
      var _getProperties = this.getProperties('row', 'table');

      var row = _getProperties.row;
      var table = _getProperties.table;

      this.sendAction('onClick', e, row, table);
    },

    doubleClick: function doubleClick(e) {
      var _getProperties2 = this.getProperties('row', 'table');

      var row = _getProperties2.row;
      var table = _getProperties2.table;

      this.sendAction('onDoubleClick', e, row, table);
    }

    // Events

    /**
     * @event onClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onCellClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onCellDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */
  });
});