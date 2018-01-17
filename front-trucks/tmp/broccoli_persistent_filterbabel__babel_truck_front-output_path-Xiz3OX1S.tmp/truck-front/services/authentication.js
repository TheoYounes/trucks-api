define('truck-front/services/authentication', ['exports', 'truck-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    session: Ember.inject.service('session'),
    store: Ember.inject.service(),

    register: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, password) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(_environment.default.APP.API_HOST + '/availableUser');
                try {
                  user = this.get('store').createRecord('user', { name: name, password: password });
                  // we make an request to server to know if the user exist

                  $.ajax({
                    url: _environment.default.APP.API_HOST + '/availableUser',
                    type: 'POST',
                    data: { name: name, password: password },
                    success: function success(data) {
                      if (data.result === 'okUserNotExisting') user.save();
                    }
                  });
                } catch (err) {
                  console.log(err);
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return register;
    }(),
    authenticate: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, password) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.get('session').authenticate('authenticator:oauth2', name, password);

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](0);

                this.set('loginError', _context2.t0.error || _context2.t0);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function authenticate(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return authenticate;
    }()
  });
});