import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  latitude: 47.0833300,
  longitude: 2.34,
  myZoom: 6,
  departs: '',
  destinations: '',
  depart: '',
  destination: '',
  trajet: '',
  colors: 'red',
  init() {
    this._super(...arguments);
    const journeys = this.get('journeys').content;
    const colors = ['blue', 'dark', 'pink', 'green', 'red', 'yellow'];
    let trajet = [];
    let depart = [];

    console.log(journeys[0]);
    if (journeys) {
      journeys.map((journey) => {
          trajet.push(journey._data.steps);

      });

    }
    this.set("trajet", trajet);
    console.log(this.get("trajet"));
  },
  actions: {
    select(trajet) {
      let depart = [];
      let destination = [];

      trajet = trajet.split(',');
      for(let i = 0; i < trajet.length; i++ ) {
        if( i % 2 === 0 ) {
          depart.push(trajet[i]);
        }
        else {
          destination.push(trajet[i]);

        }

      }
      this.set('departs', depart);
      this.set('destinations', destination);

      console.log(this.get('departs') +'yolo'+ this.get('destinations'));

      }
    }

});

