define('truck-front/components/map/google-map', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    latitude: 47.0833300,
    longitude: 2.34,
    myZoom: 6,
    departs: '',
    destinations: '',
    depart: '',
    destination: '',
    trajet: '',
    colors: 'red',
    init: function init() {
      this._super.apply(this, arguments);
      var journeys = this.get('journeys').content;
      var colors = ['blue', 'dark', 'pink', 'green', 'red', 'yellow'];
      var trajet = [];
      var depart = [];

      console.log(journeys[0]);
      if (journeys) {
        journeys.map(function (journey) {
          trajet.push(journey._data.steps);
        });
      }
      this.set("trajet", trajet);
      console.log(this.get("trajet"));
    },

    actions: {
      select: function select(trajet) {
        var depart = [];
        var destination = [];

        trajet = trajet.split(',');
        for (var i = 0; i < trajet.length; i++) {
          if (i % 2 === 0) {
            depart.push(trajet[i]);
          } else {
            destination.push(trajet[i]);
          }
        }
        this.set('departs', depart);
        this.set('destinations', destination);

        console.log(this.get('departs') + 'yolo' + this.get('destinations'));
      }
    }

  });
});