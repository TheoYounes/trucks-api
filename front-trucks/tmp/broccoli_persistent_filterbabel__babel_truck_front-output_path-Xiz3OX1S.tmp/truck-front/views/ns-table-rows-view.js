define('truck-front/views/ns-table-rows-view', ['exports', 'truck-front/views/ns-table-row-view'], function (exports, _nsTableRowView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.CollectionView.extend({
		tagName: 'tbody',
		itemViewClass: _nsTableRowView.default,
		createChildView: function createChildView(viewClass, attrs) {
			var keys = this.get('columns').mapBy('valuePath');
			var vals = attrs.content;
			var o = {};
			for (var i = 0; i < keys.length; i += 1) {
				o[keys[i]] = vals[i];
			}
			return this._super(viewClass, Ember.$.extend(attrs, { columns: this.get('columns'), row: o }));
		}
	});
});