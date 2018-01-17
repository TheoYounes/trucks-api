define('ember-semantic-ui-table/classes/row', ['exports', 'ember'], function (exports, _ember) {
  var ObjectProxy = _ember['default'].ObjectProxy;
  var merge = _ember['default'].merge;

  /**
   * @class Row
   * @extends Ember.ObjectProxy
   * @namespace SemanticUI
   */
  var Row = ObjectProxy.extend({
    /**
     * Whether the row is currently selected.
     *
     * @property selected
     * @type Boolean
     * @default false
     * @public
     */
    selected: false,

    /**
     * Whether the row is currently expanded.
     *
     * @property expanded
     * @type Boolean
     * @default false
     * @public
     */
    expanded: false,

    /**
     * Whether thw row is currently being edited.
     *
     * @property editing
     * @type Boolean
     * @default false
     * @public
     */
    editing: false,

    /**
     * Content for this row. See {{#crossLink "Ember.ObjectProxy"}}{{/crossLink}}.
     *
     * @property content
     * @type Object
     * @public
     */
    content: null
  });

  Row.reopenClass({
    /**
     * @method create
     * @param {Object} content Content for this row.
     * @param {Object} options Properties to initialize in this object.
     * @return Row
     * @public
     * @static
     */
    create: function create(content) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _options = merge({ content: content }, options);
      return this._super(_options);
    }
  });

  exports['default'] = Row;
});