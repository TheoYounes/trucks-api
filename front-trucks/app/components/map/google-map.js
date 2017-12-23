import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  latitude: 47.0833300,
  longitude: 2.34,
  myZoom: 6,
  departs:'',
  destinations: '',
  depart:'',
  destination:'',
  colors:'red',
  init() {
    this._super(...arguments);
    const journeys = this.get('journeys').content;
    const colors = ['blue','dark','pink','green','red','yellow'];
    let destination = [];
    let depart = [];

    // console.log(journeys);
    if(journeys){
      journeys.map((journey) => {
        for(let i = 0; i < journey._data.steps.length; i++ ) {
          if( i % 2 === 0 ) {
            depart.push(journey._data.steps[i]);
            console.log(i+'pair'+journey._data.steps[i]);

          }
          else {
            destination.push(journey._data.steps[i]);
            console.log(i+'impair'+journey._data.steps[i]);
          }
          this.set('colors',colors[i]);

        }
      });
      this.set('departs',depart);
      this.set('destinations',destination);
    }
  },
  actions: {
    select(trajets) {
      trajets = trajets.split('-');
      this.set('depart',[trajets[0]]);
      this.set('destination',[trajets[1]]);
      console.log(this.get('depart')+this.get('destination'))
    }
}});

