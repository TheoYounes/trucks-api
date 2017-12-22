import Component from '@ember/component';
import Ember from "ember";

export default Component.extend({
  address: '',
  lancementAlgoIa: Ember.inject.service(),

  init() {
    this._super(...arguments);
    console.log(this.get('trucks'));
    if (this.get('trucks').content[0] === undefined) {

      this.notDelivering = true;
    } else {

      this.notDelivering = !this.get('trucks').content[0].__data.delivering;

    }
  },
  actions: {
    lancementAlgo() {
      this.get('lancementAlgoIa').lancementAlgo();
    }
  }
});
