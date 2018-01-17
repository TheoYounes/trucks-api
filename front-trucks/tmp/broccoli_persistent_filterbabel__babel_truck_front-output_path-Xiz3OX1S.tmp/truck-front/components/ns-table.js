define('truck-front/components/ns-table', ['exports', 'truck-front/views/ns-table-rows-view'], function (exports, _nsTableRowsView) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		tagName: 'table',
		rowValuePaths: [],
		columnComponents: [],
		rowsView: _nsTableRowsView.default,
		refreshDebounceTime: 100,

		registerColumn: function registerColumn(columnComponent) {
			this.get('columnComponents').addObject(columnComponent);
			this.refreshRows();
		},

		refreshRows: function refreshRows() {
			Ember.run.debounce(this, this.refreshRowsImpl, this.get('refreshDebounceTime'));
		},

		refreshRowsImpl: function refreshRowsImpl() {
			var cols = this.get('columnComponents').map(function (cc) {
				return cc.get('valuePath');
			}.bind(this));
			this.set('rowValuePaths', cols);
		},

		rowData: function () {
			var valPaths = this.get('rowValuePaths');

			if (Ember.isEmpty(valPaths)) {
				return [];
			} else {
				return this.get('content').map(function (rowData) {
					return valPaths.map(function (valPath) {
						return Ember.get(rowData, valPath);
					}.bind(this));
				}.bind(this));
			}
		}.property('rows', 'rowValuePaths', 'rowValuePaths.[]')
	});
});