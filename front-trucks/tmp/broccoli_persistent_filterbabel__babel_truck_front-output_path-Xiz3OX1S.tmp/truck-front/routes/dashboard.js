define('truck-front/routes/dashboard', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
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

  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    session: Ember.inject.service('session'),
    sortProperties: ['name:asc'],
    user: Ember.computed.sort('model.users', 'sortProperties'),
    model: function model() {
      return Ember.RSVP.hash({
        markers: this.get('store').findAll('marker'),
        trucks: this.get('store').findAll('truck'),
        journeys: this.get('store').findAll('journey')
      });
    },


    actions: {
      createUser: function createUser(name, password) {
        var user = this.get('store').createRecord('user', { name: name }, { password: password });
        user.save();
      },
      deleteUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.store.findRecord('user', id, { backgroundReload: false });

                case 3:
                  user = _context.sent;

                  user.deleteRecord();
                  user.get('isDeleted'); // => true
                  user.save(); // => DELETE to /users/1
                  _context.next = 11;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 9]]);
        }));

        function deleteUser(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteUser;
      }(),
      updateUser: function updateUser(id, userName) {
        this.get('store').findRecord('user', id).then(function (user) {
          user.set('name', userName);
          user.save();
        });
      },
      searchPos: function searchPos(adress) {
        this.get('searchPosition').searchPositionGoogle(adress);
        this.get('setupController');
      },
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });
});