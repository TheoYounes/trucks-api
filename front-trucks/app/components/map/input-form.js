import Component from '@ember/component';

export default Component.extend({
  address: '',
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
    searchPos() {
    }
  }
});
