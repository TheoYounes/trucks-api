define('ember-semantic-ui-table/classes/table', ['exports', 'ember', 'ember-semantic-ui-table/classes/row', 'ember-semantic-ui-table/classes/column'], function (exports, _ember, _emberSemanticUiTableClassesRow, _emberSemanticUiTableClassesColumn) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var computed = _ember['default'].computed;
  var emberArray = _ember['default'].A;
  var EmberObject = _ember['default'].Object;

  /**
   * @class Table
   * @extends Ember.Object
   * @namespace SemanticUI
   */

  var Table = (function (_EmberObject$extend) {
    _inherits(Table, _EmberObject$extend);

    /**
     * @class Table
     * @constructor
     * @param  {Array} columns
     * @param  {Array} rows
     * @public
     */

    function Table() {
      var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
      var rows = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      _classCallCheck(this, Table);

      _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this);

      var _columns = emberArray(Table.createColumns(columns));
      var _rows = emberArray(Table.createRows(rows));

      this.setProperties({
        columns: _columns,
        rows: _rows
      });
    }

    /**
     * @method setColumns
     * @param {Array} columns
     * @public
     */

    _createClass(Table, [{
      key: 'setColumns',
      value: function setColumns(columns) {
        this.set('columns', Table.createColumns(columns));
      }

      /**
       * @method setRows
       * @param {Array} rows
       * @public
       */
    }, {
      key: 'setRows',
      value: function setRows(rows) {
        this.set('rows', Table.createRows(rows));
      }

      /**
       * Create a collection of Row objects with the given collection
       * @method createRows
       * @param  {Array}  rows
       * @return {Array}
       * @public
       * @static
       */
    }], [{
      key: 'createRows',
      value: function createRows() {
        var rows = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return rows.map(function (r) {
          if (r instanceof _emberSemanticUiTableClassesRow['default']) {
            return r;
          } else {
            return _emberSemanticUiTableClassesRow['default'].create(r, options);
          }
        });
      }

      /**
       * Create a collection of Column objects with the given collection
       * @method createColumns
       * @param  {Array}  columns
       * @return {Array}
       * @public
       * @static
       */
    }, {
      key: 'createColumns',
      value: function createColumns() {
        var columns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return columns.map(function (c) {
          if (c instanceof _emberSemanticUiTableClassesColumn['default']) {
            return c;
          } else {
            return _emberSemanticUiTableClassesColumn['default'].create(c);
          }
        });
      }
    }]);

    return Table;
  })(EmberObject.extend({
    /**
     * @property columns
     * @type Ember.Array
     * @default []
     * @public
     */
    columns: null,

    /**
     * @property rows
     * @type Ember.Array
     * @default []
     * @public
     */
    rows: null,

    /**
     * @property isEmpty
     * @type Boolean
     * @public
     */
    isEmpty: computed.empty('rows').readOnly(),

    /**
     * @property selectedRows
     * @type Ember.Array
     * @public
     */
    selectedRows: computed.filterBy('rows', 'selected', true).readOnly(),

    /**
     * @property hideableColumns
     * @type Ember.Array
     * @public
     */
    hideableColumns: computed.filterBy('columns', 'hideable', true).readOnly(),

    /**
     * @property hiddenColumns
     * @type Ember.Array
     * @public
     */
    hiddenColumns: computed.filterBy('columns', 'hidden', true).readOnly(),

    /**
     * @property visibleColumns
     * @type Ember.Array
     * @public
     */
    visibleColumns: computed.filterBy('columns', 'hidden', false).readOnly(),

    /**
     * @property sortedColumns
     * @type Ember.Array
     * @public
     */
    sortedColumns: computed.filterBy('columns', 'sorted', true).readOnly()
  }));

  exports['default'] = Table;
});