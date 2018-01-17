define('ember-semantic-ui-table/components/ui-table', ['exports', 'ember', 'ember-semantic-ui-table/templates/components/ui-table'], function (exports, _ember, _emberSemanticUiTableTemplatesComponentsUiTable) {
  var Component = _ember['default'].Component;
  var assert = _ember['default'].assert;
  var computed = _ember['default'].computed;

  /**
   * @class UiTable
   */
  var UiTable = Component.extend({
    layout: _emberSemanticUiTableTemplatesComponentsUiTable['default'],

    tagName: 'table',
    classNames: ['ui', 'table'],
    classNameBindings: ['singleLineClass', 'sortable', 'stacking::unstackable', 'fixed', 'striped', 'celled', 'padded', 'compact', 'size', 'rowSelection:selectable'],

    // Events

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

    /**
     * @event onRowClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

    /**
     * @event onRowDoubleClick
     * @param {Event} event Browser event object.
     * @param {SemanticUI.Row} row The row that was clicked.
     * @param {SemanticUI.Table} table The table object.
     */

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

    // Layout settings

    /**
     * Whether the single line table variant should be used.
     *
     * @property singleLine
     * @type Boolean
     * @default false
     * @public
     */
    singleLine: false,

    singleLineClass: computed('singleLine', function () {
      if (this.get('singleLine')) {
        return 'single line';
      }
      return '';
    }),

    /**
     * Whether the table columns can be sorted.
     *
     * @property sortable
     * @type Boolean
     * @default false
     * @public
     */
    sortable: false,

    /**
     * Whether the table should use fixed layout.
     *
     * @property fixed
     * @type Boolean
     * @default false
     * @public
     */
    fixed: false,

    /**
     * Whether table content should stack in small screens.
     *
     * @property stacking
     * @type Boolean
     * @default false
     * @public
     */
    stacking: false,

    /**
     * Whether alternate table rows should use a different background color for contrast.
     *
     * @property striped
     * @type Boolean
     * @default true
     * @public
     */
    striped: true,

    /**
     * Whether the table should divide the cells with a vertical border.
     *
     * @property celled
     * @type Boolean
     * @default false
     * @public
     */
    celled: false,

    /**
     * Whether the table cells have more spacing to the content.
     *
     * @property padded
     * @type Boolean
     * @default false
     * @public
     */
    padded: false,

    /**
     * Whether the table cells have less spacing to the content.
     *
     * @property padded
     * @type Boolean
     * @default false
     * @public
     */
    compact: false,

    /**
     * Table size. Options are: `'small'` and `'large'`.
     *
     * @property size
     * @type String
     * @default ''
     * @public
     */
    size: '',

    /**
     * Whether rows should be selectable.
     *
     * @property rowSelection
     * @type Bolean
     * @default false
     * @public
     */
    rowSelection: false,

    /**
     * Component to display an expanded row.
     *
     * @property expandedRow
     * @type String|Ember.Component
     * @default null
     * @public
     */
    expandedRowComponent: null,

    /**
     * Table object.
     *
     * @property table
     * @type SemanticUI.Table
     */
    table: null,

    init: function init() {
      this._super.apply(this, arguments);
      assert('You must pass a table object to {{ui-table}}', this.get('table'));
    }
  });

  UiTable.reopenClass({
    positionalParams: ['table']
  });

  exports['default'] = UiTable;
});