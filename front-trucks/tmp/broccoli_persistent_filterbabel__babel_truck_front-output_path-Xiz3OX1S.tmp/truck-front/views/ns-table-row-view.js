define('truck-front/views/ns-table-row-view', ['exports', 'truck-front/views/ns-table-cell-view'], function (exports, _nsTableCellView) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.CollectionView.extend({
      tagName: 'tr',
      defaultItemViewClass: _nsTableCellView.default,
      columns: [],
      createChildView: function createChildView(viewClass, attrs) {
         var columnModel = this.get('columns')[attrs.contentIndex];
         return this._super(columnModel.get('cellViewClass') || this.get('defaultItemViewClass'), Ember.$.extend(attrs, { row: this.get('row') }));
      }
   });
});