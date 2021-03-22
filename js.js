(function() {
    'use strict';
  
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _AwaitValue(value) {
      this.wrapped = value;
    }
  
    function _AsyncGenerator(gen) {
      var front, back;
  
      function send(key, arg) {
        return new Promise(function(resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };
  
          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }
  
      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;
          var wrappedAwait = value instanceof _AwaitValue;
          Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
            if (wrappedAwait) {
              resume("next", arg);
              return;
            }
  
            settle(result.done ? "return" : "normal", arg);
          }, function(err) {
            resume("throw", err);
          });
        } catch (err) {
          settle("throw", err);
        }
      }
  
      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;
  
          case "throw":
            front.reject(value);
            break;
  
          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }
  
        front = front.next;
  
        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }
  
      this._invoke = send;
  
      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }
  
    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      _AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
      };
    }
  
    _AsyncGenerator.prototype.next = function(arg) {
      return this._invoke("next", arg);
    };
  
    _AsyncGenerator.prototype.throw = function(arg) {
      return this._invoke("throw", arg);
    };
  
    _AsyncGenerator.prototype.return = function(arg) {
      return this._invoke("return", arg);
    };
  
    function conditionalClass(element, classToAdd, conditional, yesCondition) {
      if (_typeof(yesCondition) !== 'object') yesCondition = [yesCondition];
  
      for (var i = 0; i < yesCondition.length; i++) {
        if (conditional === yesCondition[i]) {
          element.classList.add(classToAdd);
          return;
        }
      }
  
      element.classList.remove(classToAdd);
    }
  
    var showBadges = "{enableBadges}";
    var wrapper = document.querySelector('#wrapper');
    conditionalClass(wrapper, 'no-badges', showBadges, 'no');
  
  }());