import Service from '@ember/service';
import Ember from 'ember';
import ENV from '../config/environment';

export default Service.extend({
  store: Ember.inject.service(),
  ajax: Ember.inject.service(),

  async lancementAlgo() {
    try {
      $.ajax({
        url: `${ENV.APP.API_HOST}/ia`,
        type:'GET'});
    } catch ( err ) {
      console.log( err );
    }
  },
});
