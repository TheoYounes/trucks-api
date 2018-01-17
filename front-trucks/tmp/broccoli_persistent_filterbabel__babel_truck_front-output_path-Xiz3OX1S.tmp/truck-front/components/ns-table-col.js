define('truck-front/components/ns-table-col', ['exports', 'truck-front/views/ns-table-cell-view'], function (exports, _nsTableCellView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		tagName: 'th',

		registerToTable: function () {
			var tableComponent = this.get('parentView');
			tableComponent.registerColumn(this);
		}.on('didInsertElement'),

		cellViewClass: null
	});
});