define('ember-semantic-ui-table/components/ui-thead', ['exports', 'ember', 'ember-semantic-ui-table/templates/components/ui-thead'], function (exports, _ember, _emberSemanticUiTableTemplatesComponentsUiThead) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  exports['default'] = Component.extend({
    layout: _emberSemanticUiTableTemplatesComponentsUiThead['default'],
    tagName: 'thead',

    columns: computed.alias('table.visibleColumns').readOnly()

    /**
     * @event onHeaderClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onHeaderDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Column} column The column that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */
  });
});