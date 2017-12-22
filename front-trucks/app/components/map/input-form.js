import Component from '@ember/component';

const { inject: { service } } = Ember;

export default Component.extend({
  address: '',
  session: service('session'),
  isDelivering: '',
  actions: {
    searchPos(){
      this.sendAction('searchPos', this.get('address'));
    },
  getStatus(){
    this.set('isDelivering', this.get('isDelivering').isDelivering);
  }
  }
});
