import Component from '@ember/component';

export default Component.extend({
  address: '',
  init() {
    this._super(...arguments);
    this.notDelivering = !this.get('trucks').content[0].__data.delivering;
  },
  actions: {
    searchPos(){
    }
  }
});
