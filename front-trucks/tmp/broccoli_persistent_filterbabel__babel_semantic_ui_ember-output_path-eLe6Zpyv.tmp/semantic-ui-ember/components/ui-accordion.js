define('semantic-ui-ember/components/ui-accordion', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'accordion',
    classNames: ['ui', 'accordion']
  });
});