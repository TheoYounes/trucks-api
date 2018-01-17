define('truck-front/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('components/map/google-map.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/map/google-map.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)\n17:11 - \'colors\' is assigned a value but never used. (no-unused-vars)\n19:9 - \'depart\' is assigned a value but never used. (no-unused-vars)\n21:5 - Unexpected console statement. (no-console)\n30:5 - Unexpected console statement. (no-console)\n51:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/map/input-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/map/input-form.js should pass ESLint\n\n10:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/users/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/users/login-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/users/register-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/users/register-form.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/columns-city.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/columns-city.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/columns-truck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/columns-truck.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/columns-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/columns-user.js should pass ESLint\n\n');
  });

  QUnit.test('models/city.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/city.js should pass ESLint\n\n');
  });

  QUnit.test('models/journey.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/journey.js should pass ESLint\n\n');
  });

  QUnit.test('models/marker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/marker.js should pass ESLint\n\n');
  });

  QUnit.test('models/truck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/truck.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n6:19 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass ESLint\n\n');
  });

  QUnit.test('services/authentication.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/authentication.js should pass ESLint\n\n10:5 - Unexpected console statement. (no-console)\n14:7 - \'$\' is not defined. (no-undef)\n24:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/lancement-algo-ia.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/lancement-algo-ia.js should pass ESLint\n\n11:7 - \'$\' is not defined. (no-undef)\n15:7 - Unexpected console statement. (no-console)');
  });
});