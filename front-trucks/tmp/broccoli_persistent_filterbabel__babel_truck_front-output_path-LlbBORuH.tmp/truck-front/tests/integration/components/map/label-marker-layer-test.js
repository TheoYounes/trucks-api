define('truck-front/tests/integration/components/map/label-marker-layer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('map/label-marker-layer', 'Integration | Component | map/label marker layer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "b+crk6/c",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"map/label-marker-layer\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "sw/8FX7o",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"map/label-marker-layer\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});