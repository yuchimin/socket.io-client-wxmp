/*!
 * Socket.IO-WXMP v3.0.4
 * (c) 2014-2020 Guillermo Rauch
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["io"] = factory();
	else
		root["io"] = factory();
})((() => {
      if (typeof self !== 'undefined') {
          return self;
      } else if (typeof window !== 'undefined') {
          return window;
      } else if (typeof global !== 'undefined') {
          return global;
      } else {
          return Function('return this')();
      }
    })(), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;

var url_1 = __webpack_require__(/*! ./url */ "./build/url.js");

var manager_1 = __webpack_require__(/*! ./manager */ "./build/manager.js");

var socket_1 = __webpack_require__(/*! ./socket */ "./build/socket.js");

Object.defineProperty(exports, "Socket", {
  enumerable: true,
  get: function get() {
    return socket_1.Socket;
  }
});

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client");
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};

function lookup(uri, opts) {
  if (_typeof(uri) === "object") {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url_1.url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id]["nsps"];
  var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug("ignoring socket cache for %s", source);
    io = new manager_1.Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug("new io instance for %s", source);
      cache[id] = new manager_1.Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}

exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

Object.defineProperty(exports, "protocol", {
  enumerable: true,
  get: function get() {
    return socket_io_parser_1.protocol;
  }
});
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */

var manager_2 = __webpack_require__(/*! ./manager */ "./build/manager.js");

Object.defineProperty(exports, "Manager", {
  enumerable: true,
  get: function get() {
    return manager_2.Manager;
  }
});

/***/ }),

/***/ "./build/manager.js":
/*!**************************!*\
  !*** ./build/manager.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manager = void 0;

var eio = __webpack_require__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");

var socket_1 = __webpack_require__(/*! ./socket */ "./build/socket.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var parser = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./build/on.js");

var Backoff = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:manager");

var Manager = /*#__PURE__*/function (_Emitter) {
  _inherits(Manager, _Emitter);

  var _super = _createSuper(Manager);

  function Manager(uri, opts) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _super.call(this);
    _this.nsps = {};
    _this.subs = [];

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = undefined;
    }

    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    _this.opts = opts;

    _this.reconnection(opts.reconnection !== false);

    _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

    _this.reconnectionDelay(opts.reconnectionDelay || 1000);

    _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

    _this.randomizationFactor(opts.randomizationFactor || 0.5);

    _this.backoff = new Backoff({
      min: _this.reconnectionDelay(),
      max: _this.reconnectionDelayMax(),
      jitter: _this.randomizationFactor()
    });

    _this.timeout(null == opts.timeout ? 20000 : opts.timeout);

    _this._readyState = "closed";
    _this.uri = uri;

    var _parser = opts.parser || parser;

    _this.encoder = new _parser.Encoder();
    _this.decoder = new _parser.Decoder();
    _this._autoConnect = opts.autoConnect !== false;
    if (_this._autoConnect) _this.open();
    return _this;
  }

  _createClass(Manager, [{
    key: "reconnection",
    value: function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      return this;
    }
  }, {
    key: "reconnectionAttempts",
    value: function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
  }, {
    key: "reconnectionDelay",
    value: function reconnectionDelay(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }
  }, {
    key: "randomizationFactor",
    value: function randomizationFactor(v) {
      var _a;

      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }
  }, {
    key: "reconnectionDelayMax",
    value: function reconnectionDelayMax(v) {
      var _a;

      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }
  }, {
    key: "timeout",
    value: function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */

  }, {
    key: "maybeReconnectOnOpen",
    value: function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */

  }, {
    key: "open",
    value: function open(fn) {
      var _this2 = this;

      debug("readyState %s", this._readyState);
      if (~this._readyState.indexOf("open")) return this;
      debug("opening %s", this.uri);
      this.engine = eio(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false; // emit `open`

      var openSubDestroy = on_1.on(socket, "open", function () {
        self.onopen();
        fn && fn();
      }); // emit `error`

      var errorSub = on_1.on(socket, "error", function (err) {
        debug("error");
        self.cleanup();
        self._readyState = "closed";

        _get(_getPrototypeOf(Manager.prototype), "emit", _this2).call(_this2, "error", err);

        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          self.maybeReconnectOnOpen();
        }
      });

      if (false !== this._timeout) {
        var timeout = this._timeout;
        debug("connect attempt will timeout after %d", timeout);

        if (timeout === 0) {
          openSubDestroy(); // prevents a race condition with the 'open' event
        } // set timer


        var timer = setTimeout(function () {
          debug("connect attempt timed out after %d", timeout);
          openSubDestroy();
          socket.close();
          socket.emit("error", new Error("timeout"));
        }, timeout);
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }

      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */

  }, {
    key: "connect",
    value: function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      debug("open"); // clear old subs

      this.cleanup(); // mark as open

      this._readyState = "open";

      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "open"); // add new subs


      var socket = this.engine;
      this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */

  }, {
    key: "onping",
    value: function onping() {
      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "ping");
    }
    /**
     * Called with data.
     *
     * @private
     */

  }, {
    key: "ondata",
    value: function ondata(data) {
      this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */

  }, {
    key: "ondecoded",
    value: function ondecoded(packet) {
      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */

  }, {
    key: "onerror",
    value: function onerror(err) {
      debug("error", err);

      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */

  }, {
    key: "socket",
    value: function socket(nsp, opts) {
      var socket = this.nsps[nsp];

      if (!socket) {
        socket = new socket_1.Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      }

      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */

  }, {
    key: "_destroy",
    value: function _destroy(socket) {
      var nsps = Object.keys(this.nsps);

      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];

        if (_socket.active) {
          debug("socket %s is still active, skipping close", nsp);
          return;
        }
      }

      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "_packet",
    value: function _packet(packet) {
      debug("writing packet %j", packet);
      if (packet.query && packet.type === 0) packet.nsp += "?" + packet.query;
      var encodedPackets = this.encoder.encode(packet);

      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      debug("cleanup");
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */

  }, {
    key: "_close",
    value: function _close() {
      debug("disconnect");
      this.skipReconnect = true;
      this._reconnecting = false;

      if ("opening" === this._readyState) {
        // `onclose` will not fire because
        // an open event never happened
        this.cleanup();
      }

      this.backoff.reset();
      this._readyState = "closed";
      if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("onclose");
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";

      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "close", reason);

      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */

  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this3 = this;

      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;

      if (this.backoff.attempts >= this._reconnectionAttempts) {
        debug("reconnect failed");
        this.backoff.reset();

        _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "reconnect_failed");

        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        debug("will wait %dms before reconnect attempt", delay);
        this._reconnecting = true;
        var timer = setTimeout(function () {
          if (self.skipReconnect) return;
          debug("attempting reconnect");

          _get(_getPrototypeOf(Manager.prototype), "emit", _this3).call(_this3, "reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events


          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              debug("reconnect attempt error");
              self._reconnecting = false;
              self.reconnect();

              _get(_getPrototypeOf(Manager.prototype), "emit", _this3).call(_this3, "reconnect_error", err);
            } else {
              debug("reconnect success");
              self.onreconnect();
            }
          });
        }, delay);
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */

  }, {
    key: "onreconnect",
    value: function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();

      _get(_getPrototypeOf(Manager.prototype), "emit", this).call(this, "reconnect", attempt);
    }
  }]);

  return Manager;
}(Emitter);

exports.Manager = Manager;

/***/ }),

/***/ "./build/on.js":
/*!*********************!*\
  !*** ./build/on.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = void 0;

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

exports.on = on;

/***/ }),

/***/ "./build/socket.js":
/*!*************************!*\
  !*** ./build/socket.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "./node_modules/socket.io-parser/dist/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var on_1 = __webpack_require__(/*! ./on */ "./build/on.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */


var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});

var Socket = /*#__PURE__*/function (_Emitter) {
  _inherits(Socket, _Emitter);

  var _super = _createSuper(Socket);

  /**
   * `Socket` constructor.
   *
   * @public
   */
  function Socket(io, nsp, opts) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _super.call(this);
    _this.ids = 0;
    _this.acks = {};
    _this.receiveBuffer = [];
    _this.sendBuffer = [];
    _this.flags = {};
    _this.io = io;
    _this.nsp = nsp;
    _this.ids = 0;
    _this.acks = {};
    _this.receiveBuffer = [];
    _this.sendBuffer = [];
    _this.connected = false;
    _this.disconnected = true;
    _this.flags = {};

    if (opts && opts.auth) {
      _this.auth = opts.auth;
    }

    if (_this.io._autoConnect) _this.open();
    return _this;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */


  _createClass(Socket, [{
    key: "subEvents",
    value: function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [on_1.on(io, "open", this.onopen.bind(this)), on_1.on(io, "packet", this.onpacket.bind(this)), on_1.on(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */

  }, {
    key: "connect",

    /**
     * "Opens" the socket.
     *
     * @public
     */
    value: function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open

      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for connect()
     */

  }, {
    key: "open",
    value: function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */

  }, {
    key: "send",
    value: function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @param ev - event name
     * @return self
     * @public
     */

  }, {
    key: "emit",
    value: function emit(ev) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev + '" is a reserved event name');
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      args.unshift(ev);
      var packet = {
        type: socket_io_parser_1.PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false; // event ack callback

      if ("function" === typeof args[args.length - 1]) {
        debug("emitting packet with ack id %d", this.ids);
        this.acks[this.ids] = args.pop();
        packet.id = this.ids++;
      }

      var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);

      if (discardPacket) {
        debug("discard packet as the transport is not currently writable");
      } else if (this.connected) {
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }

      this.flags = {};
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "packet",
    value: function packet(_packet) {
      _packet.nsp = this.nsp;

      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */

  }, {
    key: "onopen",
    value: function onopen() {
      var _this2 = this;

      debug("transport is open - connecting");

      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this2.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: data
          });
        });
      } else {
        this.packet({
          type: socket_io_parser_1.PacketType.CONNECT,
          data: this.auth
        });
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */

  }, {
    key: "onclose",
    value: function onclose(reason) {
      debug("close (%s)", reason);
      this.connected = false;
      this.disconnected = true;
      delete this.id;

      _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onpacket",
    value: function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;

      switch (packet.type) {
        case socket_io_parser_1.PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            var id = packet.data.sid;
            this.onconnect(id);
          } else {
            _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }

          break;

        case socket_io_parser_1.PacketType.EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;

        case socket_io_parser_1.PacketType.ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.BINARY_ACK:
          this.onack(packet);
          break;

        case socket_io_parser_1.PacketType.DISCONNECT:
          this.ondisconnect();
          break;

        case socket_io_parser_1.PacketType.CONNECT_ERROR:
          var err = new Error(packet.data.message); // @ts-ignore

          err.data = packet.data.data;

          _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect_error", err);

          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onevent",
    value: function onevent(packet) {
      var args = packet.data || [];
      debug("emitting event %j", args);

      if (null != packet.id) {
        debug("attaching ack callback to event");
        args.push(this.ack(packet.id));
      }

      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();

        var _iterator = _createForOfIteratorHelper(listeners),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */

  }, {
    key: "ack",
    value: function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        debug("sending ack %j", args);
        self.packet({
          type: socket_io_parser_1.PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */

  }, {
    key: "onack",
    value: function onack(packet) {
      var ack = this.acks[packet.id];

      if ("function" === typeof ack) {
        debug("calling ack %s with %j", packet.id, packet.data);
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
        debug("bad ack %s", packet.id);
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */

  }, {
    key: "onconnect",
    value: function onconnect(id) {
      debug("socket connected with id %s", id);
      this.id = id;
      this.connected = true;
      this.disconnected = false;

      _get(_getPrototypeOf(Socket.prototype), "emit", this).call(this, "connect");

      this.emitBuffered();
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */

  }, {
    key: "emitBuffered",
    value: function emitBuffered() {
      var _this3 = this;

      this.receiveBuffer.forEach(function (args) {
        return _this3.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        return _this3.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */

  }, {
    key: "ondisconnect",
    value: function ondisconnect() {
      debug("server disconnect (%s)", this.nsp);
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }

      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        debug("performing disconnect (%s)", this.nsp);
        this.packet({
          type: socket_io_parser_1.PacketType.DISCONNECT
        });
      } // remove socket from pool


      this.destroy();

      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }

      return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */

  }, {
    key: "close",
    value: function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */

  }, {
    key: "compress",
    value: function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */

  }, {
    key: "onAny",

    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    value: function onAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.push(listener);

      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */

  }, {
    key: "prependAny",
    value: function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];

      this._anyListeners.unshift(listener);

      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */

  }, {
    key: "offAny",
    value: function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }

      if (listener) {
        var listeners = this._anyListeners;

        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }

      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */

  }, {
    key: "listenersAny",
    value: function listenersAny() {
      return this._anyListeners || [];
    }
  }, {
    key: "active",
    get: function get() {
      return !!this.subs;
    }
  }, {
    key: "volatile",
    get: function get() {
      this.flags["volatile"] = true;
      return this;
    }
  }]);

  return Socket;
}(Emitter);

exports.Socket = Socket;

/***/ }),

/***/ "./build/url.js":
/*!**********************!*\
  !*** ./build/url.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = void 0;

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */


function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support

  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug("protocol-less url %s", uri);

      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    } // parse


    debug("parse %s", uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }

  obj.path = obj.path || "/";
  var ipv6 = obj.host.indexOf(":") !== -1;
  var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id

  obj.id = obj.protocol + "://" + host + ":" + obj.port; // define href

  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

exports.url = url;

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options["long"] ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug["default"] = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Socket = __webpack_require__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

module.exports = function (uri, opts) {
  return new Socket(uri, opts);
};
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */


module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int

module.exports.Transport = __webpack_require__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
module.exports.transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var transports = __webpack_require__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:socket");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var Socket = /*#__PURE__*/function (_Emitter) {
  _inherits(Socket, _Emitter);

  var _super = _createSuper(Socket);

  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  function Socket(uri) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Socket);

    _this = _super.call(this);

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = _this.secure ? "443" : "80";
    }

    _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? 443 : 80);
    _this.transports = opts.transports || ["polling", "websocket"];
    _this.readyState = "";
    _this.writeBuffer = [];
    _this.prevBufferLen = 0;
    _this.opts = _extends({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      jsonp: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {}
    }, opts);
    _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";

    if (typeof _this.opts.query === "string") {
      _this.opts.query = parseqs.decode(_this.opts.query);
    } // set on handshake


    _this.id = null;
    _this.upgrades = null;
    _this.pingInterval = null;
    _this.pingTimeout = null; // set on heartbeat

    _this.pingTimeoutTimer = null;

    _this.open();

    return _this;
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  _createClass(Socket, [{
    key: "createTransport",
    value: function createTransport(name) {
      debug('creating transport "%s"', name);
      var query = clone(this.opts.query); // append engine.io protocol identifier

      query.EIO = parser.protocol; // transport name

      query.transport = name; // session id if we already have one

      if (this.id) query.sid = this.id;

      var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });

      debug("options: %j", opts);
      return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */

  }, {
    key: "open",
    value: function open() {
      var transport;

      if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        // Emit error on next tick so it can be listened to
        var self = this;
        setTimeout(function () {
          self.emit("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }

      this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

      try {
        transport = this.createTransport(transport);
      } catch (e) {
        debug("error while creating transport: %s", e);
        this.transports.shift();
        this.open();
        return;
      }

      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */

  }, {
    key: "setTransport",
    value: function setTransport(transport) {
      debug("setting transport %s", transport.name);
      var self = this;

      if (this.transport) {
        debug("clearing existing transport %s", this.transport.name);
        this.transport.removeAllListeners();
      } // set up transport


      this.transport = transport; // set up transport listeners

      transport.on("drain", function () {
        self.onDrain();
      }).on("packet", function (packet) {
        self.onPacket(packet);
      }).on("error", function (e) {
        self.onError(e);
      }).on("close", function () {
        self.onClose("transport close");
      });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */

  }, {
    key: "probe",
    value: function probe(name) {
      debug('probing transport "%s"', name);
      var transport = this.createTransport(name, {
        probe: 1
      });
      var failed = false;
      var self = this;
      Socket.priorWebsocketSuccess = false;

      function onTransportOpen() {
        if (self.onlyBinaryUpgrades) {
          var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
          failed = failed || upgradeLosesBinary;
        }

        if (failed) return;
        debug('probe transport "%s" opened', name);
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;

          if ("pong" === msg.type && "probe" === msg.data) {
            debug('probe transport "%s" pong', name);
            self.upgrading = true;
            self.emit("upgrading", transport);
            if (!transport) return;
            Socket.priorWebsocketSuccess = "websocket" === transport.name;
            debug('pausing current transport "%s"', self.transport.name);
            self.transport.pause(function () {
              if (failed) return;
              if ("closed" === self.readyState) return;
              debug("changing transport and sending upgrade packet");
              cleanup();
              self.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              self.emit("upgrade", transport);
              transport = null;
              self.upgrading = false;
              self.flush();
            });
          } else {
            debug('probe transport "%s" failed', name);
            var err = new Error("probe error");
            err.transport = transport.name;
            self.emit("upgradeError", err);
          }
        });
      }

      function freezeTransport() {
        if (failed) return; // Any callback called by transport should be ignored since now

        failed = true;
        cleanup();
        transport.close();
        transport = null;
      } // Handle any error that happens while probing


      function onerror(err) {
        var error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        debug('probe transport "%s" failed because of error: %s', name, err);
        self.emit("upgradeError", error);
      }

      function onTransportClose() {
        onerror("transport closed");
      } // When the socket is closed while we're probing


      function onclose() {
        onerror("socket closed");
      } // When the socket is upgraded while we're probing


      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          debug('"%s" works - aborting "%s"', to.name, transport.name);
          freezeTransport();
        }
      } // Remove all listeners on the transport and on self


      function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        self.removeListener("close", onclose);
        self.removeListener("upgrading", onupgrade);
      }

      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api public
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      debug("socket open");
      this.readyState = "open";
      Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emit("open");
      this.flush(); // we check for `readyState` in case an `open`
      // listener already closed the socket

      if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
        debug("starting upgrade probes");
        var i = 0;
        var l = this.upgrades.length;

        for (; i < l; i++) {
          this.probe(this.upgrades[i]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
        this.emit("packet", packet); // Socket is live - any packet counts

        this.emit("heartbeat");

        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;

          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emit("pong");
            break;

          case "error":
            var err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;

          case "message":
            this.emit("data", packet.data);
            this.emit("message", packet.data);
            break;
        }
      } else {
        debug('packet received with socket readyState "%s"', this.readyState);
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} handshake obj
     * @api private
     */

  }, {
    key: "onHandshake",
    value: function onHandshake(data) {
      this.emit("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.onOpen(); // In case open handler closes socket

      if ("closed" === this.readyState) return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */

  }, {
    key: "resetPingTimeout",
    value: function resetPingTimeout() {
      var _this2 = this;

      clearTimeout(this.pingTimeoutTimer);
      this.pingTimeoutTimer = setTimeout(function () {
        _this2.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */

  }, {
    key: "onDrain",
    value: function onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`

      this.prevBufferLen = 0;

      if (0 === this.writeBuffer.length) {
        this.emit("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */

  }, {
    key: "flush",
    value: function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        debug("flushing %d packets in socket", this.writeBuffer.length);
        this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`

        this.prevBufferLen = this.writeBuffer.length;
        this.emit("flush");
      }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */

  }, {
    key: "write",
    value: function write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
  }, {
    key: "send",
    value: function send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */

  }, {
    key: "sendPacket",
    value: function sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }

      if ("function" === typeof options) {
        fn = options;
        options = null;
      }

      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }

      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emit("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      var self = this;

      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";

        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }

      function close() {
        self.onClose("forced close");
        debug("socket closing - telling transport to close");
        self.transport.close();
      }

      function cleanupAndClose() {
        self.removeListener("upgrade", cleanupAndClose);
        self.removeListener("upgradeError", cleanupAndClose);
        close();
      }

      function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        self.once("upgrade", cleanupAndClose);
        self.once("upgradeError", cleanupAndClose);
      }

      return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */

  }, {
    key: "onError",
    value: function onError(err) {
      debug("socket error %j", err);
      Socket.priorWebsocketSuccess = false;
      this.emit("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose(reason, desc) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket close with reason: "%s"', reason);
        var self = this; // clear timers

        clearTimeout(this.pingIntervalTimer);
        clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

        this.transport.removeAllListeners("close"); // ensure transport won't stay open

        this.transport.close(); // ignore further transport communication

        this.transport.removeAllListeners(); // set ready state

        this.readyState = "closed"; // clear session id

        this.id = null; // emit close event

        this.emit("close", reason, desc); // clean buffers after, so users can still
        // grab the buffers on `close` event

        self.writeBuffer = [];
        self.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */

  }, {
    key: "filterUpgrades",
    value: function filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      var i = 0;
      var j = upgrades.length;

      for (; i < j; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }

      return filteredUpgrades;
    }
  }]);

  return Socket;
}(Emitter);

Socket.priorWebsocketSuccess = false;
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}

module.exports = Socket;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var Transport = /*#__PURE__*/function (_Emitter) {
  _inherits(Transport, _Emitter);

  var _super = _createSuper(Transport);

  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  function Transport(opts) {
    var _this;

    _classCallCheck(this, Transport);

    _this = _super.call(this);
    _this.opts = opts;
    _this.query = opts.query;
    _this.readyState = "";
    _this.socket = opts.socket;
    return _this;
  }
  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */


  _createClass(Transport, [{
    key: "onError",
    value: function onError(msg, desc) {
      var err = new Error(msg);
      err.type = "TransportError";
      err.description = desc;
      this.emit("error", err);
      return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */

  }, {
    key: "open",
    value: function open() {
      if ("closed" === this.readyState || "" === this.readyState) {
        this.readyState = "opening";
        this.doOpen();
      }

      return this;
    }
    /**
     * Closes the transport.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.doClose();
        this.onClose();
      }

      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api private
     */

  }, {
    key: "send",
    value: function send(packets) {
      if ("open" === this.readyState) {
        this.write(packets);
      } else {
        throw new Error("Transport not open");
      }
    }
    /**
     * Called upon open
     *
     * @api private
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      this.readyState = "open";
      this.writable = true;
      this.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api private
     */

  }, {
    key: "onData",
    value: function onData(data) {
      var packet = parser.decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      this.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      this.readyState = "closed";
      this.emit("close");
    }
  }]);

  return Transport;
}(Emitter);

module.exports = Transport;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var websocket = __webpack_require__(/*! ./wx-websocket */ "./node_modules/engine.io-client/lib/transports/wx-websocket.js");

exports.websocket = websocket;

/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/wx-websocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/wx-websocket.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 微信小程序websocket实现
 */
var Transport = __webpack_require__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:websocket");

var WS = /*#__PURE__*/function (_Transport) {
  _inherits(WS, _Transport);

  var _super = _createSuper(WS);

  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  function WS(opts) {
    var _this;

    _classCallCheck(this, WS);

    _this = _super.call(this, opts);
    _this.supportsBinary = !opts.forceBase64;
    return _this;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  _createClass(WS, [{
    key: "doOpen",

    /**
     * Opens socket.
     *
     * @api private
     */
    value: function doOpen() {
      if (!this.check()) {
        // let probe timeout
        return;
      }

      var uri = this.uri();
      var opts = {
        url: uri
      };

      if (this.opts.auth) {
        opts.data = this.opts.auth;
      }

      if (this.opts.protocols) {
        opts.protocols = this.opts.protocols;
      }

      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }

      try {
        this.ws = wx.connectSocket(opts);
      } catch (err) {
        return this.emit("error", err);
      }

      if (this.ws.binaryType === undefined) {
        this.supportsBinary = false;
      }

      if (this.ws.supports && this.ws.supports.binary) {
        this.supportsBinary = true;
        this.ws.binaryType = 'nodebuffer';
      } else {
        this.ws.binaryType = 'arraybuffer';
      } // this.ws.binaryType = this.socket.binaryType || defaultBinaryType;


      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */

  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var self = this;
      this.ws.onOpen(function () {
        debug('websocket opened!');
        self.onOpen();
      });
      this.ws.onError(function (e) {
        debug('websocket error!', e);
        self.onError('websocket error', e);
      });
      this.ws.onClose(function () {
        debug('websocket closed!');
        self.onClose();
      });
      this.ws.onMessage(function (ev) {
        debug("websocket received data: ".concat(ev.data, ", type: ").concat(_typeof(ev.data)));
        self.onData(ev.data);
      });
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */

  }, {
    key: "write",
    value: function write(packets) {
      var self = this;
      this.writable = false; // encodePacket efficient as it uses WS framing
      // no need for encodePayload

      var total = packets.length;
      var i = 0;
      var l = total;

      for (; i < l; i++) {
        (function (packet) {
          parser.encodePacket(packet, self.supportsBinary, function (data) {
            // Sometimes the websocket has already been closed but the browser didn't
            // have a chance of informing us about it yet, in that case send will
            // throw an error
            try {
              self.ws.send({
                data: data
              });
            } catch (e) {
              debug("websocket closed before onclose event");
            }

            --total || done();
          });
        })(packets[i]);
      }

      function done() {
        self.emit("flush"); // fake drain
        // defer to next tick to allow Socket to clear writeBuffer

        setTimeout(function () {
          self.writable = true;
          self.emit("drain");
        }, 0);
      }
    }
    /**
     * Called upon close
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      // Transport.prototype.onClose.call(this);
      _get(_getPrototypeOf(WS.prototype), "onClose", this).call(this);
    }
    /**
     * Closes socket.
     *
     * @api private
     */

  }, {
    key: "doClose",
    value: function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
      }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */

  }, {
    key: "uri",
    value: function uri() {
      var query = this.query || {};
      var schema = this.opts.secure ? "wss" : "ws";
      var port = ""; // avoid port if default for schema

      if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      } // append timestamp to URI


      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      } // communicate binary support capabilities


      if (!this.supportsBinary) {
        query.b64 = 1;
      }

      query = parseqs.encode(query); // prepend ? to query

      if (query.length) {
        query = "?" + query;
      }

      var ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */

  }, {
    key: "check",
    value: function check() {
      return 'function' === typeof wx.connectSocket;
    }
  }, {
    key: "name",
    get: function get() {
      return "websocket";
    }
  }]);

  return WS;
}(Transport);

module.exports = WS;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/commons.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/commons.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};
module.exports = {
  PACKET_TYPES: PACKET_TYPES,
  PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
  ERROR_PACKET: ERROR_PACKET
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/decodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE,
    ERROR_PACKET = _require.ERROR_PACKET;

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var base64decoder;

if (withNativeArrayBuffer) {
  base64decoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

var decodePacket = function decodePacket(encodedPacket, binaryType) {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  var type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  var packetType = PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};

var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
  if (base64decoder) {
    var decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data: data
    }; // fallback for old browsers
  }
};

var mapBinary = function mapBinary(data, binaryType) {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

module.exports = decodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/encodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES = _require.PACKET_TYPES;

var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
  var type = _ref.type,
      data = _ref.data;

  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data instanceof ArrayBuffer ? data : data.buffer);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(PACKET_TYPES[type] + (data || ""));
};

var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
  var fileReader = new FileReader();

  fileReader.onload = function () {
    var content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var encodePacket = __webpack_require__(/*! ./encodePacket */ "./node_modules/engine.io-parser/lib/encodePacket.browser.js");

var decodePacket = __webpack_require__(/*! ./decodePacket */ "./node_modules/engine.io-parser/lib/decodePacket.browser.js");

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

var encodePayload = function encodePayload(packets, callback) {
  // some packets may be added to the array while encoding, so the initial length must be saved
  var length = packets.length;
  var encodedPackets = new Array(length);
  var count = 0;
  packets.forEach(function (packet, i) {
    // force base64 encoding for binary packets
    encodePacket(packet, false, function (encodedPacket) {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

var decodePayload = function decodePayload(encodedPayload, binaryType) {
  var encodedPackets = encodedPayload.split(SEPARATOR);
  var packets = [];

  for (var i = 0; i < encodedPackets.length; i++) {
    var decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

module.exports = {
  protocol: 4,
  encodePacket: encodePacket,
  encodePayload: encodePayload,
  decodePacket: decodePacket,
  decodePayload: decodePayload
};

/***/ }),

/***/ "./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
};

function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/binary.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/binary.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reconstructPacket = exports.deconstructPacket = void 0;

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */


function deconstructPacket(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
}

exports.deconstructPacket = deconstructPacket;

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (is_binary_1.isBinary(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (_typeof(data) === "object" && !(data instanceof Date)) {
    var _newData = {};

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        _newData[key] = _deconstructPacket(data[key], buffers);
      }
    }

    return _newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */


function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
}

exports.reconstructPacket = reconstructPacket;

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (_typeof(data) === "object") {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }

  return data;
}

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var binary_1 = __webpack_require__(/*! ./binary */ "./node_modules/socket.io-parser/dist/binary.js");

var is_binary_1 = __webpack_require__(/*! ./is-binary */ "./node_modules/socket.io-parser/dist/is-binary.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("socket.io-parser");
/**
 * Protocol version.
 *
 * @public
 */


exports.protocol = 5;
var PacketType;

(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType = exports.PacketType || (exports.PacketType = {}));
/**
 * A socket.io Encoder instance
 */


var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
  }

  _createClass(Encoder, [{
    key: "encode",

    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    value: function encode(obj) {
      debug("encoding packet %j", obj);

      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (is_binary_1.hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }

      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */

  }, {
    key: "encodeAsString",
    value: function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type; // attachments if we have them

      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      } // if we have a namespace other than `/`
      // we append it followed by a comma `,`


      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      } // immediately followed by the id


      if (null != obj.id) {
        str += obj.id;
      } // json data


      if (null != obj.data) {
        str += JSON.stringify(obj.data);
      }

      debug("encoded %j as %s", obj, str);
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */

  }, {
    key: "encodeAsBinary",
    value: function encodeAsBinary(obj) {
      var deconstruction = binary_1.deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list

      return buffers; // write all the buffers
    }
  }]);

  return Encoder;
}();

exports.Encoder = Encoder;
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */

var Decoder = /*#__PURE__*/function (_Emitter) {
  _inherits(Decoder, _Emitter);

  var _super = _createSuper(Decoder);

  function Decoder() {
    _classCallCheck(this, Decoder);

    return _super.call(this);
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */


  _createClass(Decoder, [{
    key: "add",
    value: function add(obj) {
      var packet;

      if (typeof obj === "string") {
        packet = this.decodeString(obj);

        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

          if (packet.attachments === 0) {
            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        } else {
          // non-binary full packet
          _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
        }
      } else if (is_binary_1.isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);

          if (packet) {
            // received final buffer
            this.reconstructor = null;

            _get(_getPrototypeOf(Decoder.prototype), "emit", this).call(this, "decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */

  }, {
    key: "decodeString",
    value: function decodeString(str) {
      var i = 0; // look up type

      var p = {
        type: Number(str.charAt(0))
      };

      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      } // look up attachments if type binary


      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;

        while (str.charAt(++i) !== "-" && i != str.length) {}

        var buf = str.substring(start, i);

        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }

        p.attachments = Number(buf);
      } // look up namespace (if any)


      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;

        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }

        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      } // look up id


      var next = str.charAt(i + 1);

      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;

        while (++i) {
          var _c = str.charAt(i);

          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }

          if (i === str.length) break;
        }

        p.id = Number(str.substring(_start2, i + 1));
      } // look up json data


      if (str.charAt(++i)) {
        var payload = tryParse(str.substr(i));

        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }

      debug("decoded %s as %j", str, p);
      return p;
    }
  }, {
    key: "destroy",

    /**
     * Deallocates a parser's resources
     */
    value: function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }
  }], [{
    key: "isPayloadValid",
    value: function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return _typeof(payload) === "object";

        case PacketType.DISCONNECT:
          return payload === undefined;

        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || _typeof(payload) === "object";

        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && typeof payload[0] === "string";

        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
  }]);

  return Decoder;
}(Emitter);

exports.Decoder = Decoder;

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */


var BinaryReconstructor = /*#__PURE__*/function () {
  function BinaryReconstructor(packet) {
    _classCallCheck(this, BinaryReconstructor);

    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */


  _createClass(BinaryReconstructor, [{
    key: "takeBinaryData",
    value: function takeBinaryData(binData) {
      this.buffers.push(binData);

      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }

      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */

  }, {
    key: "finishedReconstruction",
    value: function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }]);

  return BinaryReconstructor;
}();

/***/ }),

/***/ "./node_modules/socket.io-parser/dist/is-binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/is-binary.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasBinary = exports.isBinary = void 0;
var withNativeArrayBuffer = typeof ArrayBuffer === "function";

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}

exports.isBinary = isBinary;

function hasBinary(obj, toJSON) {
  if (!obj || _typeof(obj) !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (isBinary(obj)) {
    return true;
  }

  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

exports.hasBinary = hasBinary;

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW8vLi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pby8uL2J1aWxkL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vaW8vLi9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9pby8uL2J1aWxkL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9pby8uL2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy9iYWNrbzIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL2lvLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2lvLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvc29ja2V0LmpzIiwid2VicGFjazovL2lvLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL2lvLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvd3gtd2Vic29ja2V0LmpzIiwid2VicGFjazovL2lvLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvcGFyc2Vxcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9kaXN0L2lzLWJpbmFyeS5qcyIsIndlYnBhY2s6Ly9pby8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNvY2tldCIsImlvIiwiTWFuYWdlciIsInByb3RvY29sIiwidXJsXzEiLCJyZXF1aXJlIiwibWFuYWdlcl8xIiwic29ja2V0XzEiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZGVidWciLCJtb2R1bGUiLCJsb29rdXAiLCJjYWNoZSIsIm1hbmFnZXJzIiwidXJpIiwib3B0cyIsInVuZGVmaW5lZCIsInBhcnNlZCIsInVybCIsInNvdXJjZSIsImlkIiwicGF0aCIsInNhbWVOYW1lc3BhY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInNvY2tldCIsInNvY2tldF9pb19wYXJzZXJfMSIsImNvbm5lY3QiLCJtYW5hZ2VyXzIiLCJlaW8iLCJFbWl0dGVyIiwicGFyc2VyIiwib25fMSIsIkJhY2tvZmYiLCJuc3BzIiwic3VicyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJtaW4iLCJtYXgiLCJqaXR0ZXIiLCJ0aW1lb3V0IiwiX3JlYWR5U3RhdGUiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsIl9hdXRvQ29ubmVjdCIsImF1dG9Db25uZWN0Iiwib3BlbiIsInYiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX2EiLCJfcmVjb25uZWN0aW9uRGVsYXkiLCJzZXRNaW4iLCJfcmFuZG9taXphdGlvbkZhY3RvciIsInNldEppdHRlciIsIl9yZWNvbm5lY3Rpb25EZWxheU1heCIsInNldE1heCIsIl90aW1lb3V0IiwiX3JlY29ubmVjdGluZyIsImF0dGVtcHRzIiwicmVjb25uZWN0IiwiZm4iLCJpbmRleE9mIiwiZW5naW5lIiwic2VsZiIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsIm9uIiwib25vcGVuIiwiZXJyb3JTdWIiLCJlcnIiLCJjbGVhbnVwIiwibWF5YmVSZWNvbm5lY3RPbk9wZW4iLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbG9zZSIsImVtaXQiLCJFcnJvciIsInB1c2giLCJzdWJEZXN0cm95IiwiY2xlYXJUaW1lb3V0Iiwib25waW5nIiwiYmluZCIsIm9uZGF0YSIsIm9uZXJyb3IiLCJvbmNsb3NlIiwib25kZWNvZGVkIiwiZGF0YSIsImFkZCIsInBhY2tldCIsIm5zcCIsImtleXMiLCJhY3RpdmUiLCJfY2xvc2UiLCJ0eXBlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJpIiwid3JpdGUiLCJvcHRpb25zIiwiZm9yRWFjaCIsImRlc3Ryb3kiLCJyZXNldCIsInJlYXNvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJvbnJlY29ubmVjdCIsImF0dGVtcHQiLCJvYmoiLCJldiIsIm9mZiIsIlJFU0VSVkVEX0VWRU5UUyIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpZHMiLCJhY2tzIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJmbGFncyIsImNvbm5lY3RlZCIsImRpc2Nvbm5lY3RlZCIsImF1dGgiLCJvbnBhY2tldCIsInN1YkV2ZW50cyIsImFyZ3MiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJoYXNPd25Qcm9wZXJ0eSIsIlBhY2tldFR5cGUiLCJFVkVOVCIsImNvbXByZXNzIiwicG9wIiwiaXNUcmFuc3BvcnRXcml0YWJsZSIsInRyYW5zcG9ydCIsIndyaXRhYmxlIiwiZGlzY2FyZFBhY2tldCIsIl9wYWNrZXQiLCJDT05ORUNUIiwic2lkIiwib25jb25uZWN0Iiwib25ldmVudCIsIkJJTkFSWV9FVkVOVCIsIkFDSyIsIm9uYWNrIiwiQklOQVJZX0FDSyIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwibWVzc2FnZSIsImFjayIsImVtaXRFdmVudCIsIl9hbnlMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsImxpc3RlbmVyIiwic2VudCIsImVtaXRCdWZmZXJlZCIsInNwbGljZSIsInBhcnNldXJpIiwibG9jIiwibG9jYXRpb24iLCJob3N0IiwiY2hhckF0IiwidGVzdCIsInBvcnQiLCJpcHY2IiwiaHJlZiIsIm1zIiwiZmFjdG9yIiwicHJvdG90eXBlIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsIm1peGluIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsIm9uY2UiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwiY2IiLCJBcnJheSIsImxlbiIsImhhc0xpc3RlbmVycyIsInMiLCJtIiwiaCIsImQiLCJ3IiwieSIsInZhbCIsInBhcnNlIiwiaXNGaW5pdGUiLCJmbXRMb25nIiwiZm10U2hvcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyIiwiU3RyaW5nIiwibWF0Y2giLCJleGVjIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsIm1zQWJzIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJuYW1lIiwiaXNQbHVyYWwiLCJsb2ciLCJmb3JtYXRBcmdzIiwic2F2ZSIsImxvYWQiLCJ1c2VDb2xvcnMiLCJzdG9yYWdlIiwibG9jYWxzdG9yYWdlIiwiY29sb3JzIiwid2luZG93IiwicHJvY2VzcyIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiY29uc29sZSIsImZpcmVidWciLCJleGNlcHRpb24iLCJ0YWJsZSIsInBhcnNlSW50IiwiUmVnRXhwIiwiJDEiLCJuYW1lc3BhY2UiLCJodW1hbml6ZSIsImRpZmYiLCJjIiwiY29sb3IiLCJpbmRleCIsImxhc3RDIiwicmVwbGFjZSIsIm5hbWVzcGFjZXMiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImVycm9yIiwiciIsImdldEl0ZW0iLCJlbnYiLCJERUJVRyIsImxvY2FsU3RvcmFnZSIsImZvcm1hdHRlcnMiLCJqIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaW5zdGFuY2VzIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJwcmV2VGltZSIsImN1cnIiLCJOdW1iZXIiLCJEYXRlIiwicHJldiIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJsb2dGbiIsImV4dGVuZCIsImluaXQiLCJkZWxpbWl0ZXIiLCJuZXdEZWJ1ZyIsInNwbGl0Iiwic3Vic3RyIiwiaW5zdGFuY2UiLCJtYXAiLCJ0b05hbWVzcGFjZSIsImpvaW4iLCJyZWdleHAiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInN0YWNrIiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0cyIsInBhcnNlcXMiLCJob3N0bmFtZSIsInNlY3VyZSIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsIndpdGhDcmVkZW50aWFscyIsInVwZ3JhZGUiLCJqc29ucCIsInRpbWVzdGFtcFBhcmFtIiwicmVtZW1iZXJVcGdyYWRlIiwicmVqZWN0VW5hdXRob3JpemVkIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiZGVjb2RlIiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdUaW1lb3V0VGltZXIiLCJjbG9uZSIsIkVJTyIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsImUiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJvbmx5QmluYXJ5VXBncmFkZXMiLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImZsdXNoIiwiZnJlZXplVHJhbnNwb3J0Iiwib25UcmFuc3BvcnRDbG9zZSIsIm9udXBncmFkZSIsInRvIiwibCIsIm9uSGFuZHNoYWtlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJ3YWl0Rm9yVXBncmFkZSIsImNsZWFudXBBbmRDbG9zZSIsImRlc2MiLCJwaW5nSW50ZXJ2YWxUaW1lciIsImZpbHRlcmVkVXBncmFkZXMiLCJvIiwiZGVzY3JpcHRpb24iLCJkb09wZW4iLCJkb0Nsb3NlIiwicGFja2V0cyIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJ3ZWJzb2NrZXQiLCJ5ZWFzdCIsIldTIiwiZm9yY2VCYXNlNjQiLCJjaGVjayIsInByb3RvY29scyIsImV4dHJhSGVhZGVycyIsImhlYWRlcnMiLCJ3cyIsInd4IiwiY29ubmVjdFNvY2tldCIsInN1cHBvcnRzIiwiYmluYXJ5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbk1lc3NhZ2UiLCJvbkRhdGEiLCJ0b3RhbCIsImVuY29kZVBhY2tldCIsImRvbmUiLCJzY2hlbWEiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsImI2NCIsIlBBQ0tFVF9UWVBFUyIsImNyZWF0ZSIsIlBBQ0tFVF9UWVBFU19SRVZFUlNFIiwiRVJST1JfUEFDS0VUIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJiYXNlNjRkZWNvZGVyIiwiZW5jb2RlZFBhY2tldCIsIm1hcEJpbmFyeSIsImRlY29kZUJhc2U2NFBhY2tldCIsInBhY2tldFR5cGUiLCJkZWNvZGVkIiwiYmFzZTY0IiwiQmxvYiIsIndpdGhOYXRpdmVCbG9iIiwiaXNWaWV3IiwiYnVmZmVyIiwiY2FsbGJhY2siLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiU0VQQVJBVE9SIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlUGF5bG9hZCIsImNvdW50IiwiZGVjb2RlUGF5bG9hZCIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsImNoYXJzIiwiYXJyYXlidWZmZXIiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJidWZmZXJMZW5ndGgiLCJwIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIiQwIiwiJDIiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwicnVuIiwibmV4dFRpY2siLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJkZWNvbnN0cnVjdFBhY2tldCIsImlzX2JpbmFyeV8xIiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJpc0JpbmFyeSIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwiaXNBcnJheSIsIm5ld0RhdGEiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJiaW5hcnlfMSIsImhhc0JpbmFyeSIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RlQXNTdHJpbmciLCJkZWNvbnN0cnVjdGlvbiIsImRlY29kZVN0cmluZyIsInJlY29uc3RydWN0b3IiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwidGFrZUJpbmFyeURhdGEiLCJzdGFydCIsImJ1ZiIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJpc1BheWxvYWRWYWxpZCIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwidG9KU09OIiwiYWxwaGFiZXQiLCJzZWVkIiwiZW5jb2RlZCIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLE87UUNwQkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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QUFRLENBQUNsYSxDQUFELENBQVQsQ0FBSCxHQUFtQkEsQ0FBbkI7QUFBeEIsQyxDQUVBO0FBQ0E7QUFDQTs7O0FBQ0E2USxLQUFLLENBQUM5USxNQUFOLEdBQWVBLE1BQWY7QUFDQThRLEtBQUssQ0FBQ25ELE1BQU4sR0FBZUEsTUFBZjtBQUNBOVQsTUFBTSxDQUFDYixPQUFQLEdBQWlCOFgsS0FBakIsQyIsImZpbGUiOiJzb2NrZXQuaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpb1wiXSA9IGZhY3RvcnkoKTtcbn0pKCgoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgIH1cbiAgICB9KSgpLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1aWxkL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IGV4cG9ydHMuaW8gPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudFwiKTtcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cbmNvbnN0IGNhY2hlID0gKGV4cG9ydHMubWFuYWdlcnMgPSB7fSk7XG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBjb25zdCBwYXJzZWQgPSB1cmxfMS51cmwodXJpKTtcbiAgICBjb25zdCBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICAgIGNvbnN0IGlkID0gcGFyc2VkLmlkO1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZWQucGF0aDtcbiAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdW1wibnNwc1wiXTtcbiAgICBjb25zdCBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fFxuICAgICAgICBvcHRzW1wiZm9yY2UgbmV3IGNvbm5lY3Rpb25cIl0gfHxcbiAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8XG4gICAgICAgIHNhbWVOYW1lc3BhY2U7XG4gICAgbGV0IGlvO1xuICAgIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgICAgIGRlYnVnKFwiaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICBpbyA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwibmV3IGlvIGluc3RhbmNlIGZvciAlc1wiLCBzb3VyY2UpO1xuICAgICAgICAgICAgY2FjaGVbaWRdID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaW8gPSBjYWNoZVtpZF07XG4gICAgfVxuICAgIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICAgICAgb3B0cy5xdWVyeSA9IHBhcnNlZC5xdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5leHBvcnRzLmlvID0gbG9va3VwO1xuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicHJvdG9jb2xcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF9pb19wYXJzZXJfMS5wcm90b2NvbDsgfSB9KTtcbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1hbmFnZXJfMiA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYW5hZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYW5hZ2VyXzIuTWFuYWdlcjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgZWlvID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXJcIik7XG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IodXJpLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnNwcyA9IHt9O1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICBvcHRzLnBhdGggPSBvcHRzLnBhdGggfHwgXCIvc29ja2V0LmlvXCI7XG4gICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uKG9wdHMucmVjb25uZWN0aW9uICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uQXR0ZW1wdHMob3B0cy5yZWNvbm5lY3Rpb25BdHRlbXB0cyB8fCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXkob3B0cy5yZWNvbm5lY3Rpb25EZWxheSB8fCAxMDAwKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heChvcHRzLnJlY29ubmVjdGlvbkRlbGF5TWF4IHx8IDUwMDApO1xuICAgICAgICB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3Iob3B0cy5yYW5kb21pemF0aW9uRmFjdG9yIHx8IDAuNSk7XG4gICAgICAgIHRoaXMuYmFja29mZiA9IG5ldyBCYWNrb2ZmKHtcbiAgICAgICAgICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgICAgICAgICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgICAgICAgICBqaXR0ZXI6IHRoaXMucmFuZG9taXphdGlvbkZhY3RvcigpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgdGhpcy51cmkgPSB1cmk7XG4gICAgICAgIGNvbnN0IF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICAgICAgICB0aGlzLl9hdXRvQ29ubmVjdCA9IG9wdHMuYXV0b0Nvbm5lY3QgIT09IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uKHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uQXR0ZW1wdHModikge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheSh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNaW4odik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByYW5kb21pemF0aW9uRmFjdG9yKHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gICAgICAgIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRKaXR0ZXIodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25EZWxheU1heCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heDtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB2O1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tvZmYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRNYXgodik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aW1lb3V0KHYpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gICAgICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1heWJlUmVjb25uZWN0T25PcGVuKCkge1xuICAgICAgICAvLyBPbmx5IHRyeSB0byByZWNvbm5lY3QgaWYgaXQncyB0aGUgZmlyc3QgdGltZSB3ZSdyZSBjb25uZWN0aW5nXG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0aW5nICYmXG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5hdHRlbXB0cyA9PT0gMCkge1xuICAgICAgICAgICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9wZW4oZm4pIHtcbiAgICAgICAgZGVidWcoXCJyZWFkeVN0YXRlICVzXCIsIHRoaXMuX3JlYWR5U3RhdGUpO1xuICAgICAgICBpZiAofnRoaXMuX3JlYWR5U3RhdGUuaW5kZXhPZihcIm9wZW5cIikpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgZGVidWcoXCJvcGVuaW5nICVzXCIsIHRoaXMudXJpKTtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuZW5naW5lO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gZW1pdCBgb3BlbmBcbiAgICAgICAgY29uc3Qgb3BlblN1YkRlc3Ryb3kgPSBvbl8xLm9uKHNvY2tldCwgXCJvcGVuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYub25vcGVuKCk7XG4gICAgICAgICAgICBmbiAmJiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZW1pdCBgZXJyb3JgXG4gICAgICAgIGNvbnN0IGVycm9yU3ViID0gb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgKGVycikgPT4ge1xuICAgICAgICAgICAgZGVidWcoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIHNlbGYuY2xlYW51cCgpO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgICAgICBzdXBlci5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7IC8vIHByZXZlbnRzIGEgcmFjZSBjb25kaXRpb24gd2l0aCB0aGUgJ29wZW4nIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1YkRlc3Ryb3kpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igb3BlbigpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdChmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKGZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJvcGVuXCIpO1xuICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgc3VwZXIuZW1pdChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgc3VwZXIuZW1pdChcInBpbmdcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRlY29kZWQocGFja2V0KSB7XG4gICAgICAgIHN1cGVyLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBkZWJ1ZyhcImVycm9yXCIsIGVycik7XG4gICAgICAgIHN1cGVyLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGlmIChwYWNrZXQucXVlcnkgJiYgcGFja2V0LnR5cGUgPT09IDApXG4gICAgICAgICAgICBwYWNrZXQubnNwICs9IFwiP1wiICsgcGFja2V0LnF1ZXJ5O1xuICAgICAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZGVidWcoXCJjbGVhbnVwXCIpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5zdWJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Nsb3NlKCkge1xuICAgICAgICBkZWJ1ZyhcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMuX3JlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lKVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNsb3NlKClcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJvbmNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBzdXBlci5lbWl0KFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgc3VwZXIuZW1pdChcInJlY29ubmVjdF9mYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgICAgICAgICBkZWJ1ZyhcIndpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdFwiLCBkZWxheSk7XG4gICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgZGVidWcoXCJhdHRlbXB0aW5nIHJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwicmVjb25uZWN0X2F0dGVtcHRcIiwgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICBzdXBlci5lbWl0KFwicmVjb25uZWN0XCIsIGF0dGVtcHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFuYWdlciA9IE1hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub24gPSB2b2lkIDA7XG5mdW5jdGlvbiBvbihvYmosIGV2LCBmbikge1xuICAgIG9iai5vbihldiwgZm4pO1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICBvYmoub2ZmKGV2LCBmbik7XG4gICAgfTtcbn1cbmV4cG9ydHMub24gPSBvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Tb2NrZXQgPSB2b2lkIDA7XG5jb25zdCBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6c29ja2V0XCIpO1xuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgUkVTRVJWRURfRVZFTlRTID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29ubmVjdDogMSxcbiAgICBjb25uZWN0X2Vycm9yOiAxLFxuICAgIGRpc2Nvbm5lY3Q6IDEsXG4gICAgZGlzY29ubmVjdGluZzogMSxcbiAgICAvLyBFdmVudEVtaXR0ZXIgcmVzZXJ2ZWQgZXZlbnRzOiBodHRwczovL25vZGVqcy5vcmcvYXBpL2V2ZW50cy5odG1sI2V2ZW50c19ldmVudF9uZXdsaXN0ZW5lclxuICAgIG5ld0xpc3RlbmVyOiAxLFxuICAgIHJlbW92ZUxpc3RlbmVyOiAxLFxufSk7XG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbywgbnNwLCBvcHRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubnNwID0gbnNwO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmF1dGgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IG9wdHMuYXV0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pby5fYXV0b0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN1YkV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaW8gPSB0aGlzLmlvO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcIm9wZW5cIiwgdGhpcy5vbm9wZW4uYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcInBhY2tldFwiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiAtIGV2ZW50IG5hbWVcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBpZiAoUkVTRVJWRURfRVZFTlRTLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBldiArICdcIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnVuc2hpZnQoZXYpO1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gdGhpcy5mbGFncy5jb21wcmVzcyAhPT0gZmFsc2U7XG4gICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZFwiLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUcmFuc3BvcnRXcml0YWJsZSA9IHRoaXMuaW8uZW5naW5lICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydC53cml0YWJsZTtcbiAgICAgICAgY29uc3QgZGlzY2FyZFBhY2tldCA9IHRoaXMuZmxhZ3Mudm9sYXRpbGUgJiYgKCFpc1RyYW5zcG9ydFdyaXRhYmxlIHx8ICF0aGlzLmNvbm5lY3RlZCk7XG4gICAgICAgIGlmIChkaXNjYXJkUGFja2V0KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImRpc2NhcmQgcGFja2V0IGFzIHRoZSB0cmFuc3BvcnQgaXMgbm90IGN1cnJlbnRseSB3cml0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwYWNrZXQocGFja2V0KSB7XG4gICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgdGhpcy5pby5fcGFja2V0KHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmdcIik7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IHRoaXMuYXV0aCB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICBzdXBlci5lbWl0KFwiZGlzY29ubmVjdFwiLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBzb2NrZXQgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25wYWNrZXQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgICAgICAgaWYgKCFzYW1lTmFtZXNwYWNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldC5kYXRhICYmIHBhY2tldC5kYXRhLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhY2tldC5kYXRhLnNpZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNvbm5lY3QoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImNvbm5lY3RfZXJyb3JcIiwgbmV3IEVycm9yKFwiSXQgc2VlbXMgeW91IGFyZSB0cnlpbmcgdG8gcmVhY2ggYSBTb2NrZXQuSU8gc2VydmVyIGluIHYyLnggd2l0aCBhIHYzLnggY2xpZW50LCBidXQgdGhleSBhcmUgbm90IGNvbXBhdGlibGUgKG1vcmUgaW5mb3JtYXRpb24gaGVyZTogaHR0cHM6Ly9zb2NrZXQuaW8vZG9jcy92My9taWdyYXRpbmctZnJvbS0yLXgtdG8tMy0wLylcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocGFja2V0LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVyci5kYXRhID0gcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICBzdXBlci5lbWl0KFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIuZW1pdChcImNvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVtaXRCdWZmZXJlZCgpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLmZvckVhY2goKGFyZ3MpID0+IHRoaXMuZW1pdEV2ZW50KGFyZ3MpKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5mb3JFYWNoKChwYWNrZXQpID0+IHRoaXMucGFja2V0KHBhY2tldCkpO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZGVidWcoXCJzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub25jbG9zZShcImlvIHNlcnZlciBkaXNjb25uZWN0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICAgICAqIHRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIG1hbmFnZXIgc3RvcHMgdHJhY2tpbmcgdXMgYW5kXG4gICAgICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goKHN1YkRlc3Ryb3kpID0+IHN1YkRlc3Ryb3koKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb1tcIl9kZXN0cm95XCJdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgZGVidWcoXCJwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1QgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgLy8gZmlyZSBldmVudHNcbiAgICAgICAgICAgIHRoaXMub25jbG9zZShcImlvIGNsaWVudCBkaXNjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzY29ubmVjdCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb21wcmVzcyAtIGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbXByZXNzKGNvbXByZXNzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3MuY29tcHJlc3MgPSBjb21wcmVzcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBtb2RpZmllciBmb3IgYSBzdWJzZXF1ZW50IGV2ZW50IGVtaXNzaW9uIHRoYXQgdGhlIGV2ZW50IG1lc3NhZ2Ugd2lsbCBiZSBkcm9wcGVkIHdoZW4gdGhpcyBzb2NrZXQgaXMgbm90XG4gICAgICogcmVhZHkgdG8gc2VuZCBtZXNzYWdlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZ2V0IHZvbGF0aWxlKCkge1xuICAgICAgICB0aGlzLmZsYWdzLnZvbGF0aWxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvbkFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC4gVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGVcbiAgICAgKiBjYWxsYmFjay4gVGhlIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RlbmVycyBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBwcmVwZW5kQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb2ZmQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgYW55IGV2ZW50IHRoYXQgaXMgc3BlY2lmaWVkLiBUaGlzIGFycmF5IGNhbiBiZSBtYW5pcHVsYXRlZCxcbiAgICAgKiBlLmcuIHRvIHJlbW92ZSBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgbGlzdGVuZXJzQW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU29ja2V0ID0gU29ja2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVybCA9IHZvaWQgMDtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnVybFwiKTtcbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gdXJsXG4gKiBAcGFyYW0gbG9jIC0gQW4gb2JqZWN0IG1lYW50IHRvIG1pbWljIHdpbmRvdy5sb2NhdGlvbi5cbiAqICAgICAgICBEZWZhdWx0cyB0byB3aW5kb3cubG9jYXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVybCh1cmksIGxvYykge1xuICAgIGxldCBvYmogPSB1cmk7XG4gICAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbik7XG4gICAgaWYgKG51bGwgPT0gdXJpKVxuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdDtcbiAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInByb3RvY29sLWxlc3MgdXJsICVzXCIsIHVyaSk7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IFwiaHR0cHM6Ly9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZVxuICAgICAgICBkZWJ1ZyhcInBhcnNlICVzXCIsIHVyaSk7XG4gICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgIGlmICghb2JqLnBvcnQpIHtcbiAgICAgICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiODBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI0NDNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8IFwiL1wiO1xuICAgIGNvbnN0IGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgY29uc3QgaG9zdCA9IGlwdjYgPyBcIltcIiArIG9iai5ob3N0ICsgXCJdXCIgOiBvYmouaG9zdDtcbiAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgXCI6Ly9cIiArIGhvc3QgKyBcIjpcIiArIG9iai5wb3J0O1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYEJhY2tvZmZgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja29mZjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGJhY2tvZmYgdGltZXIgd2l0aCBgb3B0c2AuXG4gKlxuICogLSBgbWluYCBpbml0aWFsIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFsxMDBdXG4gKiAtIGBtYXhgIG1heCB0aW1lb3V0IFsxMDAwMF1cbiAqIC0gYGppdHRlcmAgWzBdXG4gKiAtIGBmYWN0b3JgIFsyXVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEJhY2tvZmYob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdGhpcy5tcyA9IG9wdHMubWluIHx8IDEwMDtcbiAgdGhpcy5tYXggPSBvcHRzLm1heCB8fCAxMDAwMDtcbiAgdGhpcy5mYWN0b3IgPSBvcHRzLmZhY3RvciB8fCAyO1xuICB0aGlzLmppdHRlciA9IG9wdHMuaml0dGVyID4gMCAmJiBvcHRzLmppdHRlciA8PSAxID8gb3B0cy5qaXR0ZXIgOiAwO1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGJhY2tvZmYgZHVyYXRpb24uXG4gKlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIHZhciBtcyA9IHRoaXMubXMgKiBNYXRoLnBvdyh0aGlzLmZhY3RvciwgdGhpcy5hdHRlbXB0cysrKTtcbiAgaWYgKHRoaXMuaml0dGVyKSB7XG4gICAgdmFyIHJhbmQgPSAgTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZGV2aWF0aW9uID0gTWF0aC5mbG9vcihyYW5kICogdGhpcy5qaXR0ZXIgKiBtcyk7XG4gICAgbXMgPSAoTWF0aC5mbG9vcihyYW5kICogMTApICYgMSkgPT0gMCAgPyBtcyAtIGRldmlhdGlvbiA6IG1zICsgZGV2aWF0aW9uO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbihtcywgdGhpcy5tYXgpIHwgMDtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG51bWJlciBvZiBhdHRlbXB0cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWluaW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWluID0gZnVuY3Rpb24obWluKXtcbiAgdGhpcy5tcyA9IG1pbjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXhpbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbihtYXgpe1xuICB0aGlzLm1heCA9IG1heDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBqaXR0ZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldEppdHRlciA9IGZ1bmN0aW9uKGppdHRlcil7XG4gIHRoaXMuaml0dGVyID0gaml0dGVyO1xufTtcblxuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHQvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcblx0XHQvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG5cblx0XHQvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zdCBpbmRleCA9IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzW2ldO1xuXHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAodXJpLCBvcHRzKSA9PiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG5tb2R1bGUuZXhwb3J0cy5wcm90b2NvbCA9IFNvY2tldC5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcbm1vZHVsZS5leHBvcnRzLlRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydFwiKTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG4iLCJjb25zdCB0cmFuc3BvcnRzID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0cy9pbmRleFwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcImVuZ2luZS5pby1jbGllbnQ6c29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXVyaSA9IHJlcXVpcmUoXCJwYXJzZXVyaVwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHVyaSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgb3B0cyA9IHVyaTtcbiAgICAgIHVyaSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHVyaSkge1xuICAgICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICAgIG9wdHMuc2VjdXJlID0gdXJpLnByb3RvY29sID09PSBcImh0dHBzXCIgfHwgdXJpLnByb3RvY29sID09PSBcIndzc1wiO1xuICAgICAgb3B0cy5wb3J0ID0gdXJpLnBvcnQ7XG4gICAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICAgIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgICBvcHRzLmhvc3RuYW1lID0gcGFyc2V1cmkob3B0cy5ob3N0KS5ob3N0O1xuICAgIH1cblxuICAgIHRoaXMuc2VjdXJlID1cbiAgICAgIG51bGwgIT0gb3B0cy5zZWN1cmVcbiAgICAgICAgPyBvcHRzLnNlY3VyZVxuICAgICAgICA6IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbDtcblxuICAgIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAgIC8vIGlmIG5vIHBvcnQgaXMgc3BlY2lmaWVkIG1hbnVhbGx5LCB1c2UgdGhlIHByb3RvY29sIGRlZmF1bHRcbiAgICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gXCI0NDNcIiA6IFwiODBcIjtcbiAgICB9XG5cbiAgICB0aGlzLmhvc3RuYW1lID1cbiAgICAgIG9wdHMuaG9zdG5hbWUgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ob3N0bmFtZSA6IFwibG9jYWxob3N0XCIpO1xuICAgIHRoaXMucG9ydCA9XG4gICAgICBvcHRzLnBvcnQgfHxcbiAgICAgICh0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgICA/IGxvY2F0aW9uLnBvcnRcbiAgICAgICAgOiB0aGlzLnNlY3VyZVxuICAgICAgICA/IDQ0M1xuICAgICAgICA6IDgwKTtcblxuICAgIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbXCJwb2xsaW5nXCIsIFwid2Vic29ja2V0XCJdO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9lbmdpbmUuaW9cIixcbiAgICAgICAgYWdlbnQ6IGZhbHNlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgICB1cGdyYWRlOiB0cnVlLFxuICAgICAgICBqc29ucDogdHJ1ZSxcbiAgICAgICAgdGltZXN0YW1wUGFyYW06IFwidFwiLFxuICAgICAgICByZW1lbWJlclVwZ3JhZGU6IGZhbHNlLFxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIHBlck1lc3NhZ2VEZWZsYXRlOiB7XG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9XG4gICAgICB9LFxuICAgICAgb3B0c1xuICAgICk7XG5cbiAgICB0aGlzLm9wdHMucGF0aCA9IHRoaXMub3B0cy5wYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSArIFwiL1wiO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMucXVlcnkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMub3B0cy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMub3B0cy5xdWVyeSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudXBncmFkZXMgPSBudWxsO1xuICAgIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIHNldCBvbiBoZWFydGJlYXRcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY3JlYXRlVHJhbnNwb3J0KG5hbWUpIHtcbiAgICBkZWJ1ZygnY3JlYXRpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2xvbmUodGhpcy5vcHRzLnF1ZXJ5KTtcblxuICAgIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICAgIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAgIC8vIHRyYW5zcG9ydCBuYW1lXG4gICAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAgIC8vIHNlc3Npb24gaWQgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMub3B0cy50cmFuc3BvcnRPcHRpb25zW25hbWVdLFxuICAgICAgdGhpcy5vcHRzLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgc29ja2V0OiB0aGlzLFxuICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgc2VjdXJlOiB0aGlzLnNlY3VyZSxcbiAgICAgICAgcG9ydDogdGhpcy5wb3J0XG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlYnVnKFwib3B0aW9uczogJWpcIiwgb3B0cyk7XG5cbiAgICByZXR1cm4gbmV3IHRyYW5zcG9ydHNbbmFtZV0ob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgbGV0IHRyYW5zcG9ydDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdHMucmVtZW1iZXJVcGdyYWRlICYmXG4gICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmXG4gICAgICB0aGlzLnRyYW5zcG9ydHMuaW5kZXhPZihcIndlYnNvY2tldFwiKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIHRyYW5zcG9ydCA9IFwid2Vic29ja2V0XCI7XG4gICAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgXCJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gICAgfVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuXG4gICAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKFwiZXJyb3Igd2hpbGUgY3JlYXRpbmcgdHJhbnNwb3J0OiAlc1wiLCBlKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0LiBEaXNhYmxlcyB0aGUgZXhpc3Rpbmcgb25lIChpZiBhbnkpLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNldFRyYW5zcG9ydCh0cmFuc3BvcnQpIHtcbiAgICBkZWJ1ZyhcInNldHRpbmcgdHJhbnNwb3J0ICVzXCIsIHRyYW5zcG9ydC5uYW1lKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgICAgZGVidWcoXCJjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXNcIiwgdGhpcy50cmFuc3BvcnQubmFtZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICAgIHRyYW5zcG9ydFxuICAgICAgLm9uKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYub25EcmFpbigpO1xuICAgICAgfSlcbiAgICAgIC5vbihcInBhY2tldFwiLCBmdW5jdGlvbihwYWNrZXQpIHtcbiAgICAgICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICAgICAgfSlcbiAgICAgIC5vbihcImVycm9yXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKGUpO1xuICAgICAgfSlcbiAgICAgIC5vbihcImNsb3NlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgY2xvc2VcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmFuc3BvcnQgbmFtZVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb2JlKG5hbWUpIHtcbiAgICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgbGV0IHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KG5hbWUsIHsgcHJvYmU6IDEgfSk7XG4gICAgbGV0IGZhaWxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRPcGVuKCkge1xuICAgICAgaWYgKHNlbGYub25seUJpbmFyeVVwZ3JhZGVzKSB7XG4gICAgICAgIGNvbnN0IHVwZ3JhZGVMb3Nlc0JpbmFyeSA9XG4gICAgICAgICAgIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgc2VsZi50cmFuc3BvcnQuc3VwcG9ydHNCaW5hcnk7XG4gICAgICAgIGZhaWxlZCA9IGZhaWxlZCB8fCB1cGdyYWRlTG9zZXNCaW5hcnk7XG4gICAgICB9XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJwaW5nXCIsIGRhdGE6IFwicHJvYmVcIiB9XSk7XG4gICAgICB0cmFuc3BvcnQub25jZShcInBhY2tldFwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoXCJwb25nXCIgPT09IG1zZy50eXBlICYmIFwicHJvYmVcIiA9PT0gbXNnLmRhdGEpIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuZW1pdChcInVwZ3JhZGluZ1wiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IFwid2Vic29ja2V0XCIgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgc2VsZi50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgICAgc2VsZi50cmFuc3BvcnQucGF1c2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoXCJjbG9zZWRcIiA9PT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgICBkZWJ1ZyhcImNoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldFwiKTtcblxuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnNlbmQoW3sgdHlwZTogXCJ1cGdyYWRlXCIgfV0pO1xuICAgICAgICAgICAgc2VsZi5lbWl0KFwidXBncmFkZVwiLCB0cmFuc3BvcnQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmZsdXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkJywgbmFtZSk7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICAgIHNlbGYuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQoKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgICAgY2xlYW51cCgpO1xuXG4gICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uZXJyb3IoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcInByb2JlIGVycm9yOiBcIiArIGVycik7XG4gICAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCBiZWNhdXNlIG9mIGVycm9yOiAlcycsIG5hbWUsIGVycik7XG5cbiAgICAgIHNlbGYuZW1pdChcInVwZ3JhZGVFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJ0cmFuc3BvcnQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyBjbG9zZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgICBvbmVycm9yKFwic29ja2V0IGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgdXBncmFkZWQgd2hpbGUgd2UncmUgcHJvYmluZ1xuICAgIGZ1bmN0aW9uIG9udXBncmFkZSh0bykge1xuICAgICAgaWYgKHRyYW5zcG9ydCAmJiB0by5uYW1lICE9PSB0cmFuc3BvcnQubmFtZSkge1xuICAgICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG4gICAgfVxuXG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJvcGVuXCIsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0Lm9uY2UoXCJlcnJvclwiLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQub25jZShcImNsb3NlXCIsIG9uVHJhbnNwb3J0Q2xvc2UpO1xuXG4gICAgdGhpcy5vbmNlKFwiY2xvc2VcIiwgb25jbG9zZSk7XG4gICAgdGhpcy5vbmNlKFwidXBncmFkaW5nXCIsIG9udXBncmFkZSk7XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGNvbm5lY3Rpb24gaXMgZGVlbWVkIG9wZW4uXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgb3BlblwiKTtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgICB0aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgIHRoaXMuZmx1c2goKTtcblxuICAgIC8vIHdlIGNoZWNrIGZvciBgcmVhZHlTdGF0ZWAgaW4gY2FzZSBhbiBgb3BlbmBcbiAgICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gICAgaWYgKFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcInN0YXJ0aW5nIHVwZ3JhZGUgcHJvYmVzXCIpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5wcm9iZSh0aGlzLnVwZ3JhZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHBhY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuXG4gICAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgICB0aGlzLmVtaXQoXCJoZWFydGJlYXRcIik7XG5cbiAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm9wZW5cIjpcbiAgICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicGluZ1wiOlxuICAgICAgICAgIHRoaXMucmVzZXRQaW5nVGltZW91dCgpO1xuICAgICAgICAgIHRoaXMuc2VuZFBhY2tldChcInBvbmdcIik7XG4gICAgICAgICAgdGhpcy5lbWl0KFwicG9uZ1wiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJzZXJ2ZXIgZXJyb3JcIik7XG4gICAgICAgICAgZXJyLmNvZGUgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibWVzc2FnZVwiOlxuICAgICAgICAgIHRoaXMuZW1pdChcImRhdGFcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygncGFja2V0IHJlY2VpdmVkIHdpdGggc29ja2V0IHJlYWR5U3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25IYW5kc2hha2UoZGF0YSkge1xuICAgIHRoaXMuZW1pdChcImhhbmRzaGFrZVwiLCBkYXRhKTtcbiAgICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy50cmFuc3BvcnQucXVlcnkuc2lkID0gZGF0YS5zaWQ7XG4gICAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnBpbmdUaW1lb3V0ID0gZGF0YS5waW5nVGltZW91dDtcbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhbmQgcmVzZXRzIHBpbmcgdGltZW91dCB0aW1lciBiYXNlZCBvbiBzZXJ2ZXIgcGluZ3MuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcmVzZXRQaW5nVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcbiAgICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZShcInBpbmcgdGltZW91dFwiKTtcbiAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25EcmFpbigpIHtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gICAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAgIC8vIGZvciBleGFtcGxlLCB3aGVuIHVwZ3JhZGluZywgdXBncmFkZSBwYWNrZXQgaXMgc2VudCBvdmVyLFxuICAgIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIGlmICgwID09PSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5lbWl0KFwiZHJhaW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmx1c2ggd3JpdGUgYnVmZmVycy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICBpZiAoXG4gICAgICBcImNsb3NlZFwiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgICAhdGhpcy51cGdyYWRpbmcgJiZcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBkZWJ1ZyhcImZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0XCIsIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgICAvLyBzcGxpY2Ugd3JpdGVCdWZmZXIgYW5kIGNhbGxiYWNrQnVmZmVyIG9uIGBkcmFpbmBcbiAgICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KFwiZmx1c2hcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICB3cml0ZShtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbmQobXNnLCBvcHRpb25zLCBmbikge1xuICAgIHRoaXMuc2VuZFBhY2tldChcIm1lc3NhZ2VcIiwgbXNnLCBvcHRpb25zLCBmbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kUGFja2V0KHR5cGUsIGRhdGEsIG9wdGlvbnMsIGZuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICAgIGZuID0gZGF0YTtcbiAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgIGZuID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5lbWl0KFwicGFja2V0Q3JlYXRlXCIsIHBhY2tldCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgaWYgKGZuKSB0aGlzLm9uY2UoXCJmbHVzaFwiLCBmbik7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2luZ1wiO1xuXG4gICAgICBpZiAodGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbmNlKFwiZHJhaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgc2VsZi5vbkNsb3NlKFwiZm9yY2VkIGNsb3NlXCIpO1xuICAgICAgZGVidWcoXCJzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlXCIpO1xuICAgICAgc2VsZi50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwQW5kQ2xvc2UoKSB7XG4gICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZVwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSgpIHtcbiAgICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgICBzZWxmLm9uY2UoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBzZWxmLm9uY2UoXCJ1cGdyYWRlRXJyb3JcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkVycm9yKGVycikge1xuICAgIGRlYnVnKFwic29ja2V0IGVycm9yICVqXCIsIGVycik7XG4gICAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgdGhpcy5vbkNsb3NlKFwidHJhbnNwb3J0IGVycm9yXCIsIGVycik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UocmVhc29uLCBkZXNjKSB7XG4gICAgaWYgKFxuICAgICAgXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgXCJjbG9zaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZVxuICAgICkge1xuICAgICAgZGVidWcoJ3NvY2tldCBjbG9zZSB3aXRoIHJlYXNvbjogXCIlc1wiJywgcmVhc29uKTtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBjbGVhciB0aW1lcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgICAvLyBzdG9wIGV2ZW50IGZyb20gZmlyaW5nIGFnYWluIGZvciB0cmFuc3BvcnRcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycyhcImNsb3NlXCIpO1xuXG4gICAgICAvLyBlbnN1cmUgdHJhbnNwb3J0IHdvbid0IHN0YXkgb3BlblxuICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG5cbiAgICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgICAvLyBlbWl0IGNsb3NlIGV2ZW50XG4gICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiLCByZWFzb24sIGRlc2MpO1xuXG4gICAgICAvLyBjbGVhbiBidWZmZXJzIGFmdGVyLCBzbyB1c2VycyBjYW4gc3RpbGxcbiAgICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgICAgc2VsZi53cml0ZUJ1ZmZlciA9IFtdO1xuICAgICAgc2VsZi5wcmV2QnVmZmVyTGVuID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICpcbiAgICovXG4gIGZpbHRlclVwZ3JhZGVzKHVwZ3JhZGVzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBqID0gdXBncmFkZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpZiAofnRoaXMudHJhbnNwb3J0cy5pbmRleE9mKHVwZ3JhZGVzW2ldKSlcbiAgICAgICAgZmlsdGVyZWRVcGdyYWRlcy5wdXNoKHVwZ3JhZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG4gIH1cbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbmZ1bmN0aW9uIGNsb25lKG9iaikge1xuICBjb25zdCBvID0ge307XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0O1xuIiwiY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuXG5jbGFzcyBUcmFuc3BvcnQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFRyYW5zcG9ydCBhYnN0cmFjdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiXCI7XG4gICAgdGhpcy5zb2NrZXQgPSBvcHRzLnNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb25FcnJvcihtc2csIGRlc2MpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgICBlcnIudHlwZSA9IFwiVHJhbnNwb3J0RXJyb3JcIjtcbiAgICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKFwiY2xvc2VkXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIlwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlbmluZ1wiO1xuICAgICAgdGhpcy5kb09wZW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICAgIHRoaXMub25DbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBzZW5kKHBhY2tldHMpIHtcbiAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNwb3J0IG5vdCBvcGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBvcGVuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25PcGVuKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRhdGEoZGF0YSkge1xuICAgIGNvbnN0IHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gICAgdGhpcy5vblBhY2tldChwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gICAqL1xuICBvblBhY2tldChwYWNrZXQpIHtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgdGhpcy5lbWl0KFwiY2xvc2VcIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG4iLCJjb25zdCB3ZWJzb2NrZXQgPSByZXF1aXJlKFwiLi93eC13ZWJzb2NrZXRcIik7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDsiLCIvKipcbiAqIOW+ruS/oeWwj+eoi+W6j3dlYnNvY2tldOWunueOsFxuICovXG5jb25zdCBUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi4vdHJhbnNwb3J0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcImVuZ2luZS5pby1wYXJzZXJcIik7XG5jb25zdCBwYXJzZXFzID0gcmVxdWlyZShcInBhcnNlcXNcIik7XG5jb25zdCB5ZWFzdCA9IHJlcXVpcmUoXCJ5ZWFzdFwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXRcIik7XG5cbmNsYXNzIFdTIGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgLyoqXG4gICAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBhcGkge09iamVjdH0gY29ubmVjdGlvbiBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gIW9wdHMuZm9yY2VCYXNlNjQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNwb3J0IG5hbWUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJ3ZWJzb2NrZXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9PcGVuKCkge1xuICAgIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVyaSA9IHRoaXMudXJpKCk7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHVybDogdXJpXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm9wdHMuYXV0aCkge1xuICAgICAgb3B0cy5kYXRhID0gdGhpcy5vcHRzLmF1dGg7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMucHJvdG9jb2xzKSB7XG4gICAgICBvcHRzLnByb3RvY29scyA9IHRoaXMub3B0cy5wcm90b2NvbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLndzID0gd3guY29ubmVjdFNvY2tldChvcHRzKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud3MuYmluYXJ5VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud3Muc3VwcG9ydHMgJiYgdGhpcy53cy5zdXBwb3J0cy5iaW5hcnkpIHtcbiAgICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuICAgICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ25vZGVidWZmZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIH1cbiAgICAvLyB0aGlzLndzLmJpbmFyeVR5cGUgPSB0aGlzLnNvY2tldC5iaW5hcnlUeXBlIHx8IGRlZmF1bHRCaW5hcnlUeXBlO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMud3Mub25PcGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgb3BlbmVkIScpO1xuICAgICAgc2VsZi5vbk9wZW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLndzLm9uRXJyb3IoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgZXJyb3IhJywgZSk7XG4gICAgICBzZWxmLm9uRXJyb3IoJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICAgIH0pO1xuICAgIHRoaXMud3Mub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1Zygnd2Vic29ja2V0IGNsb3NlZCEnKTtcbiAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMud3Mub25NZXNzYWdlKGZ1bmN0aW9uIChldikge1xuICAgICAgZGVidWcoYHdlYnNvY2tldCByZWNlaXZlZCBkYXRhOiAke2V2LmRhdGF9LCB0eXBlOiAke3R5cGVvZiAoZXYuZGF0YSl9YCk7XG4gICAgICBzZWxmLm9uRGF0YShldi5kYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgd3JpdGUocGFja2V0cykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gICAgLy8gbm8gbmVlZCBmb3IgZW5jb2RlUGF5bG9hZFxuICAgIGxldCB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBsID0gdG90YWw7XG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihwYWNrZXQpIHtcbiAgICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHNlbGYuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgICAgLy8gaGF2ZSBhIGNoYW5jZSBvZiBpbmZvcm1pbmcgdXMgYWJvdXQgaXQgeWV0LCBpbiB0aGF0IGNhc2Ugc2VuZCB3aWxsXG4gICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi53cy5zZW5kKHtkYXRhfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVidWcoXCJ3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXRvdGFsIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShwYWNrZXRzW2ldKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgc2VsZi5lbWl0KFwiZmx1c2hcIik7XG5cbiAgICAgIC8vIGZha2UgZHJhaW5cbiAgICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBzZWxmLmVtaXQoXCJkcmFpblwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBjbG9zZVxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgLy8gVHJhbnNwb3J0LnByb3RvdHlwZS5vbkNsb3NlLmNhbGwodGhpcyk7XG4gICAgc3VwZXIub25DbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBzb2NrZXQuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgZG9DbG9zZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMud3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB1cmkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgICBjb25zdCBzY2hlbWEgPSB0aGlzLm9wdHMuc2VjdXJlID8gXCJ3c3NcIiA6IFwid3NcIjtcbiAgICBsZXQgcG9ydCA9IFwiXCI7XG5cbiAgICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5wb3J0ICYmXG4gICAgICAoKFwid3NzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgICAgIChcIndzXCIgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5vcHRzLnBvcnQpICE9PSA4MCkpXG4gICAgKSB7XG4gICAgICBwb3J0ID0gXCI6XCIgKyB0aGlzLm9wdHMucG9ydDtcbiAgICB9XG5cbiAgICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICAgIGlmICh0aGlzLm9wdHMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICAgIHF1ZXJ5W3RoaXMub3B0cy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICAgIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcXVlcnkuYjY0ID0gMTtcbiAgICB9XG5cbiAgICBxdWVyeSA9IHBhcnNlcXMuZW5jb2RlKHF1ZXJ5KTtcblxuICAgIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICAgIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gXCI/XCIgKyBxdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCBpcHY2ID0gdGhpcy5vcHRzLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICByZXR1cm4gKFxuICAgICAgc2NoZW1hICtcbiAgICAgIFwiOi8vXCIgK1xuICAgICAgKGlwdjYgPyBcIltcIiArIHRoaXMub3B0cy5ob3N0bmFtZSArIFwiXVwiIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArXG4gICAgICBwb3J0ICtcbiAgICAgIHRoaXMub3B0cy5wYXRoICtcbiAgICAgIHF1ZXJ5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNoZWNrKCkge1xuICAgIHJldHVybiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHd4LmNvbm5lY3RTb2NrZXQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG4iLCJjb25zdCBQQUNLRVRfVFlQRVMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBubyBNYXAgPSBubyBwb2x5ZmlsbFxuUEFDS0VUX1RZUEVTW1wib3BlblwiXSA9IFwiMFwiO1xuUEFDS0VUX1RZUEVTW1wiY2xvc2VcIl0gPSBcIjFcIjtcblBBQ0tFVF9UWVBFU1tcInBpbmdcIl0gPSBcIjJcIjtcblBBQ0tFVF9UWVBFU1tcInBvbmdcIl0gPSBcIjNcIjtcblBBQ0tFVF9UWVBFU1tcIm1lc3NhZ2VcIl0gPSBcIjRcIjtcblBBQ0tFVF9UWVBFU1tcInVwZ3JhZGVcIl0gPSBcIjVcIjtcblBBQ0tFVF9UWVBFU1tcIm5vb3BcIl0gPSBcIjZcIjtcblxuY29uc3QgUEFDS0VUX1RZUEVTX1JFVkVSU0UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuT2JqZWN0LmtleXMoUEFDS0VUX1RZUEVTKS5mb3JFYWNoKGtleSA9PiB7XG4gIFBBQ0tFVF9UWVBFU19SRVZFUlNFW1BBQ0tFVF9UWVBFU1trZXldXSA9IGtleTtcbn0pO1xuXG5jb25zdCBFUlJPUl9QQUNLRVQgPSB7IHR5cGU6IFwiZXJyb3JcIiwgZGF0YTogXCJwYXJzZXIgZXJyb3JcIiB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFDS0VUX1RZUEVTLFxuICBQQUNLRVRfVFlQRVNfUkVWRVJTRSxcbiAgRVJST1JfUEFDS0VUXG59O1xuIiwiY29uc3QgeyBQQUNLRVRfVFlQRVNfUkVWRVJTRSwgRVJST1JfUEFDS0VUIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxubGV0IGJhc2U2NGRlY29kZXI7XG5pZiAod2l0aE5hdGl2ZUFycmF5QnVmZmVyKSB7XG4gIGJhc2U2NGRlY29kZXIgPSByZXF1aXJlKFwiYmFzZTY0LWFycmF5YnVmZmVyXCIpO1xufVxuXG5jb25zdCBkZWNvZGVQYWNrZXQgPSAoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSkgPT4ge1xuICBpZiAodHlwZW9mIGVuY29kZWRQYWNrZXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJtZXNzYWdlXCIsXG4gICAgICBkYXRhOiBtYXBCaW5hcnkoZW5jb2RlZFBhY2tldCwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHR5cGUgPSBlbmNvZGVkUGFja2V0LmNoYXJBdCgwKTtcbiAgaWYgKHR5cGUgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogZGVjb2RlQmFzZTY0UGFja2V0KGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpLCBiaW5hcnlUeXBlKVxuICAgIH07XG4gIH1cbiAgY29uc3QgcGFja2V0VHlwZSA9IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdO1xuICBpZiAoIXBhY2tldFR5cGUpIHtcbiAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICB9XG4gIHJldHVybiBlbmNvZGVkUGFja2V0Lmxlbmd0aCA+IDFcbiAgICA/IHtcbiAgICAgICAgdHlwZTogUEFDS0VUX1RZUEVTX1JFVkVSU0VbdHlwZV0sXG4gICAgICAgIGRhdGE6IGVuY29kZWRQYWNrZXQuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdXG4gICAgICB9O1xufTtcblxuY29uc3QgZGVjb2RlQmFzZTY0UGFja2V0ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKGJhc2U2NGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYmFzZTY0ZGVjb2Rlci5kZWNvZGUoZGF0YSk7XG4gICAgcmV0dXJuIG1hcEJpbmFyeShkZWNvZGVkLCBiaW5hcnlUeXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBiYXNlNjQ6IHRydWUsIGRhdGEgfTsgLy8gZmFsbGJhY2sgZm9yIG9sZCBicm93c2Vyc1xuICB9XG59O1xuXG5jb25zdCBtYXBCaW5hcnkgPSAoZGF0YSwgYmluYXJ5VHlwZSkgPT4ge1xuICBzd2l0Y2ggKGJpbmFyeVR5cGUpIHtcbiAgICBjYXNlIFwiYmxvYlwiOlxuICAgICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFtkYXRhXSkgOiBkYXRhO1xuICAgIGNhc2UgXCJhcnJheWJ1ZmZlclwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0YTsgLy8gYXNzdW1pbmcgdGhlIGRhdGEgaXMgYWxyZWFkeSBhbiBBcnJheUJ1ZmZlclxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZVBhY2tldDtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTIH0gPSByZXF1aXJlKFwiLi9jb21tb25zXCIpO1xuXG5jb25zdCB3aXRoTmF0aXZlQmxvYiA9XG4gIHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgKHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiO1xuXG4vLyBBcnJheUJ1ZmZlci5pc1ZpZXcgbWV0aG9kIGlzIG5vdCBkZWZpbmVkIGluIElFMTBcbmNvbnN0IGlzVmlldyA9IG9iaiA9PiB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSBcImZ1bmN0aW9uXCJcbiAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgOiBvYmogJiYgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcblxuY29uc3QgZW5jb2RlUGFja2V0ID0gKHsgdHlwZSwgZGF0YSB9LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spID0+IHtcbiAgaWYgKHdpdGhOYXRpdmVCbG9iICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQoZGF0YSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiZcbiAgICAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhkYXRhKSlcbiAgKSB7XG4gICAgaWYgKHN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gZGF0YSA6IGRhdGEuYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuY29kZUJsb2JBc0Jhc2U2NChuZXcgQmxvYihbZGF0YV0pLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG4gIC8vIHBsYWluIHN0cmluZ1xuICByZXR1cm4gY2FsbGJhY2soUEFDS0VUX1RZUEVTW3R5cGVdICsgKGRhdGEgfHwgXCJcIikpO1xufTtcblxuY29uc3QgZW5jb2RlQmxvYkFzQmFzZTY0ID0gKGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlUmVhZGVyLnJlc3VsdC5zcGxpdChcIixcIilbMV07XG4gICAgY2FsbGJhY2soXCJiXCIgKyBjb250ZW50KTtcbiAgfTtcbiAgcmV0dXJuIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlUGFja2V0O1xuIiwiY29uc3QgZW5jb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZW5jb2RlUGFja2V0XCIpO1xuY29uc3QgZGVjb2RlUGFja2V0ID0gcmVxdWlyZShcIi4vZGVjb2RlUGFja2V0XCIpO1xuXG5jb25zdCBTRVBBUkFUT1IgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTsgLy8gc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RlbGltaXRlciNBU0NJSV9kZWxpbWl0ZWRfdGV4dFxuXG5jb25zdCBlbmNvZGVQYXlsb2FkID0gKHBhY2tldHMsIGNhbGxiYWNrKSA9PiB7XG4gIC8vIHNvbWUgcGFja2V0cyBtYXkgYmUgYWRkZWQgdG8gdGhlIGFycmF5IHdoaWxlIGVuY29kaW5nLCBzbyB0aGUgaW5pdGlhbCBsZW5ndGggbXVzdCBiZSBzYXZlZFxuICBjb25zdCBsZW5ndGggPSBwYWNrZXRzLmxlbmd0aDtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBwYWNrZXRzLmZvckVhY2goKHBhY2tldCwgaSkgPT4ge1xuICAgIC8vIGZvcmNlIGJhc2U2NCBlbmNvZGluZyBmb3IgYmluYXJ5IHBhY2tldHNcbiAgICBlbmNvZGVQYWNrZXQocGFja2V0LCBmYWxzZSwgZW5jb2RlZFBhY2tldCA9PiB7XG4gICAgICBlbmNvZGVkUGFja2V0c1tpXSA9IGVuY29kZWRQYWNrZXQ7XG4gICAgICBpZiAoKytjb3VudCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVuY29kZWRQYWNrZXRzLmpvaW4oU0VQQVJBVE9SKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVjb2RlUGF5bG9hZCA9IChlbmNvZGVkUGF5bG9hZCwgYmluYXJ5VHlwZSkgPT4ge1xuICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IGVuY29kZWRQYXlsb2FkLnNwbGl0KFNFUEFSQVRPUik7XG4gIGNvbnN0IHBhY2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRlY29kZWRQYWNrZXQgPSBkZWNvZGVQYWNrZXQoZW5jb2RlZFBhY2tldHNbaV0sIGJpbmFyeVR5cGUpO1xuICAgIHBhY2tldHMucHVzaChkZWNvZGVkUGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldC50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFja2V0cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm90b2NvbDogNCxcbiAgZW5jb2RlUGFja2V0LFxuICBlbmNvZGVQYXlsb2FkLFxuICBkZWNvZGVQYWNrZXQsXG4gIGRlY29kZVBheWxvYWRcbn07XG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oY2hhcnMpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpXSk7XG4gICAgICBlbmNvZGVkMiA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMV0pO1xuICAgICAgZW5jb2RlZDMgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzJdKTtcbiAgICAgIGVuY29kZWQ0ID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSszXSk7XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIpO1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBleHBvcnRzLmRlY29uc3RydWN0UGFja2V0ID0gdm9pZCAwO1xuY29uc3QgaXNfYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9pcy1iaW5hcnlcIik7XG4vKipcbiAqIFJlcGxhY2VzIGV2ZXJ5IEJ1ZmZlciB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IEZpbGUgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb25zdHJ1Y3RQYWNrZXQocGFja2V0KSB7XG4gICAgY29uc3QgYnVmZmVycyA9IFtdO1xuICAgIGNvbnN0IHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICBjb25zdCBwYWNrID0gcGFja2V0O1xuICAgIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICAgIHJldHVybiB7IHBhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVycyB9O1xufVxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGRlY29uc3RydWN0UGFja2V0O1xuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgICBpZiAoIWRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmIChpc19iaW5hcnlfMS5pc0JpbmFyeShkYXRhKSkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogUmVjb25zdHJ1Y3RzIGEgYmluYXJ5IHBhY2tldCBmcm9tIGl0cyBwbGFjZWhvbGRlciBwYWNrZXQgYW5kIGJ1ZmZlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gZXZlbnQgcGFja2V0IHdpdGggcGxhY2Vob2xkZXJzXG4gKiBAcGFyYW0ge0FycmF5fSBidWZmZXJzIC0gYmluYXJ5IGJ1ZmZlcnMgdG8gcHV0IGluIHBsYWNlaG9sZGVyIHBvc2l0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSByZWNvbnN0cnVjdGVkIHBhY2tldFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiByZWNvbnN0cnVjdFBhY2tldChwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gICAgcGFja2V0LmF0dGFjaG1lbnRzID0gdW5kZWZpbmVkOyAvLyBubyBsb25nZXIgdXNlZnVsXG4gICAgcmV0dXJuIHBhY2tldDtcbn1cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSByZWNvbnN0cnVjdFBhY2tldDtcbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gX3JlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRGVjb2RlciA9IGV4cG9ydHMuRW5jb2RlciA9IGV4cG9ydHMuUGFja2V0VHlwZSA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuY29uc3QgYmluYXJ5XzEgPSByZXF1aXJlKFwiLi9iaW5hcnlcIik7XG5jb25zdCBpc19iaW5hcnlfMSA9IHJlcXVpcmUoXCIuL2lzLWJpbmFyeVwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMucHJvdG9jb2wgPSA1O1xudmFyIFBhY2tldFR5cGU7XG4oZnVuY3Rpb24gKFBhY2tldFR5cGUpIHtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUXCJdID0gMF0gPSBcIkNPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJESVNDT05ORUNUXCJdID0gMV0gPSBcIkRJU0NPTk5FQ1RcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJFVkVOVFwiXSA9IDJdID0gXCJFVkVOVFwiO1xuICAgIFBhY2tldFR5cGVbUGFja2V0VHlwZVtcIkFDS1wiXSA9IDNdID0gXCJBQ0tcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJDT05ORUNUX0VSUk9SXCJdID0gNF0gPSBcIkNPTk5FQ1RfRVJST1JcIjtcbiAgICBQYWNrZXRUeXBlW1BhY2tldFR5cGVbXCJCSU5BUllfRVZFTlRcIl0gPSA1XSA9IFwiQklOQVJZX0VWRU5UXCI7XG4gICAgUGFja2V0VHlwZVtQYWNrZXRUeXBlW1wiQklOQVJZX0FDS1wiXSA9IDZdID0gXCJCSU5BUllfQUNLXCI7XG59KShQYWNrZXRUeXBlID0gZXhwb3J0cy5QYWNrZXRUeXBlIHx8IChleHBvcnRzLlBhY2tldFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBIHNvY2tldC5pbyBFbmNvZGVyIGluc3RhbmNlXG4gKi9cbmNsYXNzIEVuY29kZXIge1xuICAgIC8qKlxuICAgICAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICAgICAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAgICAgKi9cbiAgICBlbmNvZGUob2JqKSB7XG4gICAgICAgIGRlYnVnKFwiZW5jb2RpbmcgcGFja2V0ICVqXCIsIG9iaik7XG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5FVkVOVCB8fCBvYmoudHlwZSA9PT0gUGFja2V0VHlwZS5BQ0spIHtcbiAgICAgICAgICAgIGlmIChpc19iaW5hcnlfMS5oYXNCaW5hcnkob2JqKSkge1xuICAgICAgICAgICAgICAgIG9iai50eXBlID1cbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUGFja2V0VHlwZS5CSU5BUllfRVZFTlRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogUGFja2V0VHlwZS5CSU5BUllfQUNLO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuY29kZUFzQmluYXJ5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmVuY29kZUFzU3RyaW5nKG9iaildO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgcGFja2V0IGFzIHN0cmluZy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc1N0cmluZyhvYmopIHtcbiAgICAgICAgLy8gZmlyc3QgaXMgdHlwZVxuICAgICAgICBsZXQgc3RyID0gXCJcIiArIG9iai50eXBlO1xuICAgICAgICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgICAgICAgaWYgKG9iai50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgb2JqLnR5cGUgPT09IFBhY2tldFR5cGUuQklOQVJZX0FDSykge1xuICAgICAgICAgICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArIFwiLVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgICAgICAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gICAgICAgIGlmIChvYmoubnNwICYmIFwiL1wiICE9PSBvYmoubnNwKSB7XG4gICAgICAgICAgICBzdHIgKz0gb2JqLm5zcCArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IHRoZSBpZFxuICAgICAgICBpZiAobnVsbCAhPSBvYmouaWQpIHtcbiAgICAgICAgICAgIHN0ciArPSBvYmouaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8ganNvbiBkYXRhXG4gICAgICAgIGlmIChudWxsICE9IG9iai5kYXRhKSB7XG4gICAgICAgICAgICBzdHIgKz0gSlNPTi5zdHJpbmdpZnkob2JqLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZW5jb2RlZCAlaiBhcyAlc1wiLCBvYmosIHN0cik7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICAgICAqIGRlY29uc3RydWN0aW5nIHBhY2tldCBpbnRvIG9iamVjdCB3aXRoIHBsYWNlaG9sZGVycyBhbmRcbiAgICAgKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAgICAgKi9cbiAgICBlbmNvZGVBc0JpbmFyeShvYmopIHtcbiAgICAgICAgY29uc3QgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnlfMS5kZWNvbnN0cnVjdFBhY2tldChvYmopO1xuICAgICAgICBjb25zdCBwYWNrID0gdGhpcy5lbmNvZGVBc1N0cmluZyhkZWNvbnN0cnVjdGlvbi5wYWNrZXQpO1xuICAgICAgICBjb25zdCBidWZmZXJzID0gZGVjb25zdHJ1Y3Rpb24uYnVmZmVycztcbiAgICAgICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgICAgICByZXR1cm4gYnVmZmVyczsgLy8gd3JpdGUgYWxsIHRoZSBidWZmZXJzXG4gICAgfVxufVxuZXhwb3J0cy5FbmNvZGVyID0gRW5jb2Rlcjtcbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICovXG5jbGFzcyBEZWNvZGVyIGV4dGVuZHMgRW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2JqIC0gZW5jb2RlZCBwYWNrZXRcbiAgICAgKi9cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGxldCBwYWNrZXQ7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBwYWNrZXQgPSB0aGlzLmRlY29kZVN0cmluZyhvYmopO1xuICAgICAgICAgICAgaWYgKHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgICAgIHBhY2tldC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgICAgICAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG5ldyBCaW5hcnlSZWNvbnN0cnVjdG9yKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgICAgICAgICAgIHN1cGVyLmVtaXQoXCJkZWNvZGVkXCIsIHBhY2tldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNfYmluYXJ5XzEuaXNCaW5hcnkob2JqKSB8fCBvYmouYmFzZTY0KSB7XG4gICAgICAgICAgICAvLyByYXcgYmluYXJ5IGRhdGFcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFja2V0ID0gdGhpcy5yZWNvbnN0cnVjdG9yLnRha2VCaW5hcnlEYXRhKG9iaik7XG4gICAgICAgICAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZW1pdChcImRlY29kZWRcIiwgcGFja2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgb2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAgICAgKi9cbiAgICBkZWNvZGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbG9vayB1cCB0eXBlXG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChQYWNrZXRUeXBlW3AudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBwYWNrZXQgdHlwZSBcIiArIHAudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICAgICAgICBpZiAocC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVCB8fFxuICAgICAgICAgICAgcC50eXBlID09PSBQYWNrZXRUeXBlLkJJTkFSWV9BQ0spIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSBcIi1cIiAmJiBpICE9IHN0ci5sZW5ndGgpIHsgfVxuICAgICAgICAgICAgY29uc3QgYnVmID0gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICBpZiAoYnVmICE9IE51bWJlcihidWYpIHx8IHN0ci5jaGFyQXQoaSkgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWxsZWdhbCBhdHRhY2htZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuYXR0YWNobWVudHMgPSBOdW1iZXIoYnVmKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICAgICAgICBpZiAoXCIvXCIgPT09IHN0ci5jaGFyQXQoaSArIDEpKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChcIixcIiA9PT0gYylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5uc3AgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAubnNwID0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vayB1cCBpZFxuICAgICAgICBjb25zdCBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gICAgICAgIGlmIChcIlwiICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKCsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5pZCA9IE51bWJlcihzdHIuc3Vic3RyaW5nKHN0YXJ0LCBpICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gICAgICAgIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICAgICAgICAgIGlmIChEZWNvZGVyLmlzUGF5bG9hZFZhbGlkKHAudHlwZSwgcGF5bG9hZCkpIHtcbiAgICAgICAgICAgICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBwYXlsb2FkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnKFwiZGVjb2RlZCAlcyBhcyAlalwiLCBzdHIsIHApO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgc3RhdGljIGlzUGF5bG9hZFZhbGlkKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHBheWxvYWQgPT09IFwib2JqZWN0XCI7XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXlsb2FkID09PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkVWRU5UOlxuICAgICAgICAgICAgY2FzZSBQYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKSAmJiB0eXBlb2YgcGF5bG9hZFswXSA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgIGNhc2UgUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICBjYXNlIFBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWFsbG9jYXRlcyBhIHBhcnNlcidzIHJlc291cmNlc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuZnVuY3Rpb24gdHJ5UGFyc2Uoc3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBCaW5hcnlSZWNvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5wYWNrZXQgPSBwYWNrZXQ7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IHBhY2tldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGJpbmFyeSBkYXRhIHJlY2VpdmVkIGZyb20gY29ubmVjdGlvblxuICAgICAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXlCdWZmZXJ9IGJpbkRhdGEgLSB0aGUgcmF3IGJpbmFyeSBkYXRhIHJlY2VpdmVkXG4gICAgICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAgICAgKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICB0YWtlQmluYXJ5RGF0YShiaW5EYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgICAgICAgICAgY29uc3QgcGFja2V0ID0gYmluYXJ5XzEucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBwYWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFucyB1cCBiaW5hcnkgcGFja2V0IHJlY29uc3RydWN0aW9uIHZhcmlhYmxlcy5cbiAgICAgKi9cbiAgICBmaW5pc2hlZFJlY29uc3RydWN0aW9uKCkge1xuICAgICAgICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IFtdO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNCaW5hcnkgPSBleHBvcnRzLmlzQmluYXJ5ID0gdm9pZCAwO1xuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1ZpZXcgPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IEFycmF5QnVmZmVyLmlzVmlldyhvYmopXG4gICAgICAgIDogb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEJsb2IpID09PSBcIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXVwiKTtcbmNvbnN0IHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICh0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICB0b1N0cmluZy5jYWxsKEZpbGUpID09PSBcIltvYmplY3QgRmlsZUNvbnN0cnVjdG9yXVwiKTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIEJ1ZmZlciwgYW4gQXJyYXlCdWZmZXIsIGEgQmxvYiBvciBhIEZpbGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCaW5hcnkob2JqKSB7XG4gICAgcmV0dXJuICgod2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcob2JqKSkpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpO1xufVxuZXhwb3J0cy5pc0JpbmFyeSA9IGlzQmluYXJ5O1xuZnVuY3Rpb24gaGFzQmluYXJ5KG9iaiwgdG9KU09OKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzQmluYXJ5KG9ialtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0JpbmFyeShvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqLnRvSlNPTiAmJlxuICAgICAgICB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgJiYgaGFzQmluYXJ5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5oYXNCaW5hcnkgPSBoYXNCaW5hcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==