import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('map/label-marker-layer', 'Integration | Component | map/label marker layer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{map/label-marker-layer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#map/label-marker-layer}}
      template block text
    {{/map/label-marker-layer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
