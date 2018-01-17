define('ember-semantic-ui-table/mixins/cell-alignment', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  exports['default'] = Mixin.create({
    classNameBindings: ['alignClass', 'verticalAlignClass'],

    alignClass: computed('column.align', function () {
      var align = get(this, 'column.align');
      if (align) {
        return align + ' aligned';
      }
    }),

    verticalAlignClass: computed('column.align', function () {
      var verticalAlign = get(this, 'column.verticalAlign');
      if (verticalAlign) {
        return verticalAlign + ' aligned';
      }
    })
  });
});