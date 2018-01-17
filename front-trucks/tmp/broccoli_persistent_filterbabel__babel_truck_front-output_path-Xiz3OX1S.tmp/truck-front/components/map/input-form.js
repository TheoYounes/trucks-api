define('truck-front/components/map/input-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    address: '',
    lancementAlgoIa: Ember.inject.service(),

    init: function init() {
      this._super.apply(this, arguments);
      console.log(this.get('trucks'));
      if (this.get('trucks').content[0] === undefined) {

        this.notDelivering = true;
      } else {

        this.notDelivering = !this.get('trucks').content[0].__data.delivering;
      }
    },

    actions: {
      lancementAlgo: function lancementAlgo() {
        this.get('lancementAlgoIa').lancementAlgo();
      }
    }
  });
});