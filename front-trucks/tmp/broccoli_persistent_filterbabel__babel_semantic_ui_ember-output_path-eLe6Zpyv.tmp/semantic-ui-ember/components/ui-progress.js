define('semantic-ui-ember/components/ui-progress', ['exports', 'ember', 'semantic-ui-ember/mixins/base'], function (exports, _ember, _semanticUiEmberMixinsBase) {
  exports['default'] = _ember['default'].Component.extend(_semanticUiEmberMixinsBase['default'], {
    module: 'progress',
    classNames: ['ui', 'progress'],
    ignorableAttrs: ['progress']
  });
});