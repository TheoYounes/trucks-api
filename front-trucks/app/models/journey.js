import DS from 'ember-data';

export default DS.Model.extend({
  steps: DS.attr(),
  ressources: DS.attr(),
});
