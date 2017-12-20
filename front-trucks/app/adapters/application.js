import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3232',
  namespace: 'api'
});
