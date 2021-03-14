(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["polyfills-es5"], {
    /***/
    "+2oP":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.slice.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function oP(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      "Hd5f");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
      var USES_TO_LENGTH = arrayMethodUsesToLength('slice', {
        ACCESSORS: true,
        0: 0,
        1: 2
      });
      var SPECIES = wellKnownSymbol('species');
      var nativeSlice = [].slice;
      var max = Math.max; // `Array.prototype.slice` method
      // https://tc39.es/ecma262/#sec-array.prototype.slice
      // fallback for not array-like ES3 strings and DOM objects

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
      }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = toLength(O.length);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

          var Constructor, result, n;

          if (isArray(O)) {
            Constructor = O.constructor; // cross-realm fallback

            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = undefined;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null) Constructor = undefined;
            }

            if (Constructor === Array || Constructor === undefined) {
              return nativeSlice.call(O, k, fin);
            }
          }

          result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

          for (n = 0; k < fin; k++, n++) {
            if (k in O) createProperty(result, n, O[k]);
          }

          result.length = n;
          return result;
        }
      });
      /***/
    },

    /***/
    "+MnM":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function MnM(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      $({
        global: true
      }, {
        Reflect: {}
      }); // Reflect[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-reflect-@@tostringtag

      setToStringTag(global.Reflect, 'Reflect', true);
      /***/
    },

    /***/
    "/5zm":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.cosh.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zm(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      "jrUv");

      var nativeCosh = Math.cosh;
      var abs = Math.abs;
      var E = Math.E; // `Math.cosh` method
      // https://tc39.es/ecma262/#sec-math.cosh

      $({
        target: 'Math',
        stat: true,
        forced: !nativeCosh || nativeCosh(710) === Infinity
      }, {
        cosh: function cosh(x) {
          var t = expm1(abs(x) - 1) + 1;
          return (t + 1 / (t * E * E)) * (E / 2);
        }
      });
      /***/
    },

    /***/
    "/GqU":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function GqU(module, exports, __webpack_require__) {
      // toObject with fallback for non-array-like ES3 strings
      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      "RK3t");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it));
      };
      /***/

    },

    /***/
    "/b8u":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function b8u(module, exports, __webpack_require__) {
      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      "STAE");

      module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
      && !Symbol.sham // eslint-disable-next-line no-undef
      && typeof Symbol.iterator == 'symbol';
      /***/
    },

    /***/
    "/byt":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/dom-iterables.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function byt(module, exports) {
      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
      /***/
    },

    /***/
    "/qmn":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function qmn(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = global.Promise;
      /***/
    },

    /***/
    "07d7":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function d7(module, exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      "AO7/");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var toString = __webpack_require__(
      /*! ../internals/object-to-string */
      "sEFX"); // `Object.prototype.toString` method
      // https://tc39.es/ecma262/#sec-object.prototype.tostring


      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, 'toString', toString, {
          unsafe: true
        });
      }
      /***/

    },

    /***/
    "0BK2":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/hidden-keys.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function BK2(module, exports) {
      module.exports = {};
      /***/
    },

    /***/
    "0Dky":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/internals/fails.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function Dky(module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
      /***/

    },

    /***/
    "0GbY":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/get-built-in.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function GbY(module, exports, __webpack_require__) {
      var path = __webpack_require__(
      /*! ../internals/path */
      "Qo9l");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var aFunction = function aFunction(variable) {
        return typeof variable == 'function' ? variable : undefined;
      };

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
      };
      /***/

    },

    /***/
    "0eef":
    /*!*************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function eef(module, exports, __webpack_require__) {
      "use strict";

      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
        1: 2
      }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
      /***/
    },

    /***/
    "0oug":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function oug(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.iterator` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.iterator


      defineWellKnownSymbol('iterator');
      /***/
    },

    /***/
    "0rvr":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function rvr(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var aPossiblePrototype = __webpack_require__(
      /*! ../internals/a-possible-prototype */
      "O741"); // `Object.setPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.

      /* eslint-disable no-proto */


      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;

        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
          /* empty */
        }

        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
          return O;
        };
      }() : undefined);
      /***/
    },

    /***/
    "14Sl":
    /*!******************************************************************************!*\
      !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function Sl(module, exports, __webpack_require__) {
      "use strict"; // TODO: Remove from `core-js@4` since it's moved to entry points

      __webpack_require__(
      /*! ../modules/es.regexp.exec */
      "rB9j");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var regexpExec = __webpack_require__(
      /*! ../internals/regexp-exec */
      "kmMV");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var SPECIES = wellKnownSymbol('species');
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;

        re.exec = function () {
          var result = [];
          result.groups = {
            a: '7'
          };
          return result;
        };

        return ''.replace(re, '$<a>') !== '7';
      }); // IE <= 11 replaces $0 with the whole match, as if it was $&
      // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

      var REPLACE_KEEPS_$0 = function () {
        return 'a'.replace(/./, '$0') === '$0';
      }();

      var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
        if (/./[REPLACE]) {
          return /./[REPLACE]('a', '$0') === '';
        }

        return false;
      }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper


      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        var re = /(?:)/;
        var originalExec = re.exec;

        re.exec = function () {
          return originalExec.apply(this, arguments);
        };

        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      });

      module.exports = function (KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};

          O[SYMBOL] = function () {
            return 7;
          };

          return ''[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
          // Symbol-named RegExp methods call .exec
          var execCalled = false;
          var re = /a/;

          if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.

            re.constructor = {};

            re.constructor[SPECIES] = function () {
              return re;
            };

            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
          }

          re.exec = function () {
            execCalled = true;
            return null;
          };

          re[SYMBOL]('');
          return !execCalled;
        });

        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                  done: true,
                  value: nativeRegExpMethod.call(regexp, str, arg2)
                };
              }

              return {
                done: true,
                value: nativeMethod.call(str, regexp, arg2)
              };
            }

            return {
              done: false
            };
          }, {
            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          });
          var stringMethod = methods[0];
          var regexMethod = methods[1];
          redefine(String.prototype, KEY, stringMethod);
          redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) {
            return regexMethod.call(string, this, arg);
          } // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) {
            return regexMethod.call(string, this);
          });
        }

        if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
      };
      /***/

    },

    /***/
    "1E5z":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function E5z(module, exports, __webpack_require__) {
      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');

      module.exports = function (it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, {
            configurable: true,
            value: TAG
          });
        }
      };
      /***/

    },

    /***/
    "1Y/n":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/array-reduce.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function YN(module, exports, __webpack_require__) {
      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      "RK3t");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ"); // `Array.prototype.{ reduce, reduceRight }` methods implementation


      var createMethod = function createMethod(IS_RIGHT) {
        return function (that, callbackfn, argumentsLength, memo) {
          aFunction(callbackfn);
          var O = toObject(that);
          var self = IndexedObject(O);
          var length = toLength(O.length);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }

            index += i;

            if (IS_RIGHT ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }

          for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
            if (index in self) {
              memo = callbackfn(memo, self[index], index, O);
            }
          }

          return memo;
        };
      };

      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
      /***/
    },

    /***/
    "27RR":
    /*!********************************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
      \********************************************************************************/

    /*! no static exports found */

    /***/
    function RR(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var ownKeys = __webpack_require__(
      /*! ../internals/own-keys */
      "Vu81");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN"); // `Object.getOwnPropertyDescriptors` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


      $({
        target: 'Object',
        stat: true,
        sham: !DESCRIPTORS
      }, {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          var O = toIndexedObject(object);
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          var keys = ownKeys(O);
          var result = {};
          var index = 0;
          var key, descriptor;

          while (keys.length > index) {
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
          }

          return result;
        }
      });
      /***/
    },

    /***/
    "2A+d":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.raw.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function AD(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ"); // `String.raw` method
      // https://tc39.es/ecma262/#sec-string.raw


      $({
        target: 'String',
        stat: true
      }, {
        raw: function raw(template) {
          var rawTemplate = toIndexedObject(template.raw);
          var literalSegments = toLength(rawTemplate.length);
          var argumentsLength = arguments.length;
          var elements = [];
          var i = 0;

          while (literalSegments > i) {
            elements.push(String(rawTemplate[i++]));
            if (i < argumentsLength) elements.push(String(arguments[i]));
          }

          return elements.join('');
        }
      });
      /***/
    },

    /***/
    "2B1R":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.map.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function B1R(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $map = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").map;

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      "Hd5f");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

      var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
      }, {
        map: function map(callbackfn
        /* , thisArg */
        ) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "2oRo":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/global.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function oRo(module, exports) {
      var check = function check(it) {
        return it && it.Math == Math && it;
      }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


      module.exports = // eslint-disable-next-line no-undef
      check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
      function () {
        return this;
      }() || Function('return this')();
      /***/

    },

    /***/
    "33Wh":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/object-keys.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Wh(module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__(
      /*! ../internals/object-keys-internal */
      "yoRg");

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      "eDl+"); // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys


      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
      /***/

    },

    /***/
    "3I1R":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.has-instance.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function I1R(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.hasInstance` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.hasinstance


      defineWellKnownSymbol('hasInstance');
      /***/
    },

    /***/
    "3KgV":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function KgV(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      "uy83");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa").onFreeze;

      var nativeFreeze = Object.freeze;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeFreeze(1);
      }); // `Object.freeze` method
      // https://tc39.es/ecma262/#sec-object.freeze

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        freeze: function freeze(it) {
          return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
        }
      });
      /***/
    },

    /***/
    "3bBZ":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function bBZ(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var DOMIterables = __webpack_require__(
      /*! ../internals/dom-iterables */
      "/byt");

      var ArrayIteratorMethods = __webpack_require__(
      /*! ../modules/es.array.iterator */
      "4mDm");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var ITERATOR = wellKnownSymbol('iterator');
      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var ArrayValues = ArrayIteratorMethods.values;

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype;

        if (CollectionPrototype) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
          }

          if (!CollectionPrototype[TO_STRING_TAG]) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
          }

          if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
              createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
          }
        }
      }
      /***/

    },

    /***/
    "4Brf":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Brf(module, exports, __webpack_require__) {
      "use strict"; // `Symbol.prototype.description` getter
      // https://tc39.es/ecma262/#sec-symbol.prototype.description

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var copyConstructorProperties = __webpack_require__(
      /*! ../internals/copy-constructor-properties */
      "6JNq");

      var NativeSymbol = global.Symbol;

      if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
      NativeSymbol().description !== undefined)) {
        var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

        var SymbolWrapper = function Symbol() {
          var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
          var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description);
          if (description === '') EmptyStringDescriptionStore[result] = true;
          return result;
        };

        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;
        var symbolToString = symbolPrototype.toString;

        var _native = String(NativeSymbol('test')) == 'Symbol(test)';

        var regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty(symbolPrototype, 'description', {
          configurable: true,
          get: function description() {
            var symbol = isObject(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol)) return '';
            var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
            return desc === '' ? undefined : desc;
          }
        });
        $({
          global: true,
          forced: true
        }, {
          Symbol: SymbolWrapper
        });
      }
      /***/

    },

    /***/
    "4WOD":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function WOD(module, exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      "93I0");

      var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
      /*! ../internals/correct-prototype-getter */
      "4Xet");

      var IE_PROTO = sharedKey('IE_PROTO');
      var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.getprototypeof

      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectPrototype : null;
      };
      /***/
    },

    /***/
    "4Xet":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function Xet(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      module.exports = !fails(function () {
        function F() {
          /* empty */
        }

        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
      /***/
    },

    /***/
    "4h0Y":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.is-frozen.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function h0Y(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var nativeIsFrozen = Object.isFrozen;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeIsFrozen(1);
      }); // `Object.isFrozen` method
      // https://tc39.es/ecma262/#sec-object.isfrozen

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isFrozen: function isFrozen(it) {
          return isObject(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
        }
      });
      /***/
    },

    /***/
    "4l63":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.parse-int.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function l63(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var parseIntImplementation = __webpack_require__(
      /*! ../internals/number-parse-int */
      "wg0c"); // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix


      $({
        global: true,
        forced: parseInt != parseIntImplementation
      }, {
        parseInt: parseIntImplementation
      });
      /***/
    },

    /***/
    "4mDm":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function mDm(module, exports, __webpack_require__) {
      "use strict";

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs");

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      "P4y1");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      "fdAy");

      var ARRAY_ITERATOR = 'Array Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
      // https://tc39.es/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.es/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.es/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.es/ecma262/#sec-createarrayiterator

      module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind: kind // kind

        }); // `%ArrayIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;

        if (!target || index >= target.length) {
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        }

        if (kind == 'keys') return {
          value: index,
          done: false
        };
        if (kind == 'values') return {
          value: target[index],
          done: false
        };
        return {
          value: [index, target[index]],
          done: false
        };
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.es/ecma262/#sec-createmappedargumentsobject

      Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/
    },

    /***/
    "4oU/":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/number-is-finite.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function oU(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var globalIsFinite = global.isFinite; // `Number.isFinite` method
      // https://tc39.es/ecma262/#sec-number.isfinite

      module.exports = Number.isFinite || function isFinite(it) {
        return typeof it == 'number' && globalIsFinite(it);
      };
      /***/

    },

    /***/
    "4syw":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/redefine-all.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function syw(module, exports, __webpack_require__) {
      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      module.exports = function (target, src, options) {
        for (var key in src) {
          redefine(target, key, src[key], options);
        }

        return target;
      };
      /***/

    },

    /***/
    "5D5o":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.is-sealed.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function D5o(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var nativeIsSealed = Object.isSealed;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeIsSealed(1);
      }); // `Object.isSealed` method
      // https://tc39.es/ecma262/#sec-object.issealed

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isSealed: function isSealed(it) {
          return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
        }
      });
      /***/
    },

    /***/
    "5DmW":
    /*!*******************************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
      \*******************************************************************************/

    /*! no static exports found */

    /***/
    function DmW(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var nativeGetOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeGetOwnPropertyDescriptor(1);
      });
      var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

      $({
        target: 'Object',
        stat: true,
        forced: FORCED,
        sham: !DESCRIPTORS
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
          return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
        }
      });
      /***/
    },

    /***/
    "5Tg+":
    /*!*********************************************************************!*\
      !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function Tg(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      exports.f = wellKnownSymbol;
      /***/
    },

    /***/
    "5Yz+":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Yz(module, exports, __webpack_require__) {
      "use strict";

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var min = Math.min;
      var nativeLastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

      var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
        ACCESSORS: true,
        1: 0
      });
      var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH; // `Array.prototype.lastIndexOf` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

      module.exports = FORCED ? function lastIndexOf(searchElement
      /* , fromIndex = @[*-1] */
      ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;

        for (; index >= 0; index--) {
          if (index in O && O[index] === searchElement) return index || 0;
        }

        return -1;
      } : nativeLastIndexOf;
      /***/
    },

    /***/
    "5mdu":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/perform.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function mdu(module, exports) {
      module.exports = function (exec) {
        try {
          return {
            error: false,
            value: exec()
          };
        } catch (error) {
          return {
            error: true,
            value: error
          };
        }
      };
      /***/

    },

    /***/
    "5s+n":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/es.promise.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function sN(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var NativePromise = __webpack_require__(
      /*! ../internals/native-promise-constructor */
      "/qmn");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      "4syw");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      "JiZb");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      "GarU");

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      "iSVu");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      "HH4o");

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      "SEBh");

      var task = __webpack_require__(
      /*! ../internals/task */
      "LPSS").set;

      var microtask = __webpack_require__(
      /*! ../internals/microtask */
      "tXUg");

      var promiseResolve = __webpack_require__(
      /*! ../internals/promise-resolve */
      "zfnd");

      var hostReportErrors = __webpack_require__(
      /*! ../internals/host-report-errors */
      "RN6c");

      var newPromiseCapabilityModule = __webpack_require__(
      /*! ../internals/new-promise-capability */
      "8GlL");

      var perform = __webpack_require__(
      /*! ../internals/perform */
      "5mdu");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var SPECIES = wellKnownSymbol('species');
      var PROMISE = 'Promise';
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var PromiseConstructor = NativePromise;
      var TypeError = global.TypeError;
      var document = global.document;
      var process = global.process;
      var $fetch = getBuiltIn('fetch');
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
      var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
      var UNHANDLED_REJECTION = 'unhandledrejection';
      var REJECTION_HANDLED = 'rejectionhandled';
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
      var FORCED = isForced(PROMISE, function () {
        var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

        if (!GLOBAL_CORE_JS_PROMISE) {
          // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // We can't detect it synchronously, so just check versions
          if (V8_VERSION === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

          if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
        } // We need Promise#finally in the pure version for preventing prototype pollution


        if (IS_PURE && !PromiseConstructor.prototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
        // deoptimization and performance degradation
        // https://github.com/zloirock/core-js/issues/679

        if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

        var promise = PromiseConstructor.resolve(1);

        var FakePromise = function FakePromise(exec) {
          exec(function () {
            /* empty */
          }, function () {
            /* empty */
          });
        };

        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        return !(promise.then(function () {
          /* empty */
        }) instanceof FakePromise);
      });
      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
        PromiseConstructor.all(iterable)['catch'](function () {
          /* empty */
        });
      }); // helpers

      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify = function notify(state, isReject) {
        if (state.notified) return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function () {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0; // variable length - can't use forEach

          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;

            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }

                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // can throw

                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }

                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          }

          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };

      var dispatchEvent = function dispatchEvent(name, promise, reason) {
        var event, handler;

        if (DISPATCH_EVENT) {
          event = document.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global.dispatchEvent(event);
        } else event = {
          promise: promise,
          reason: reason
        };

        if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function onUnhandled(state) {
        task.call(global, function () {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;

          if (IS_UNHANDLED) {
            result = perform(function () {
              if (IS_NODE) {
                process.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function isUnhandled(state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function onHandleUnhandled(state) {
        task.call(global, function () {
          var promise = state.facade;

          if (IS_NODE) {
            process.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      var bind = function bind(fn, state, unwrap) {
        return function (value) {
          fn(state, value, unwrap);
        };
      };

      var internalReject = function internalReject(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };

      var internalResolve = function internalResolve(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;

        try {
          if (state.facade === value) throw TypeError("Promise can't be resolved itself");
          var then = isThenable(value);

          if (then) {
            microtask(function () {
              var wrapper = {
                done: false
              };

              try {
                then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({
            done: false
          }, error, state);
        }
      }; // constructor polyfill


      if (FORCED) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromiseConstructor, PROMISE);
          aFunction(executor);
          Internal.call(this);
          var state = getInternalState(this);

          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        }; // eslint-disable-next-line no-unused-vars


        Internal = function Promise(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };

        Internal.prototype = redefineAll(PromiseConstructor.prototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };

        newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };

        if (!IS_PURE && typeof NativePromise == 'function') {
          nativeThen = NativePromise.prototype.then; // wrap native Promise#then for native async functions

          redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function (resolve, reject) {
              nativeThen.call(that, resolve, reject);
            }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
          }, {
            unsafe: true
          }); // wrap fetch result

          if (typeof $fetch == 'function') $({
            global: true,
            enumerable: true,
            forced: true
          }, {
            // eslint-disable-next-line no-unused-vars
            fetch: function fetch(input
            /* , init */
            ) {
              return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
            }
          });
        }
      }

      $({
        global: true,
        wrap: true,
        forced: FORCED
      }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
      PromiseWrapper = getBuiltIn(PROMISE); // statics

      $({
        target: PROMISE,
        stat: true,
        forced: FORCED
      }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          capability.reject.call(undefined, r);
          return capability.promise;
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: IS_PURE || FORCED
      }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              $promiseResolve.call(C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function (promise) {
              $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
      /***/
    },

    /***/
    "5uH8":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.min-safe-integer.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function uH8(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb"); // `Number.MIN_SAFE_INTEGER` constant
      // https://tc39.es/ecma262/#sec-number.min_safe_integer


      $({
        target: 'Number',
        stat: true
      }, {
        MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
      });
      /***/
    },

    /***/
    "6JNq":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function JNq(module, exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var ownKeys = __webpack_require__(
      /*! ../internals/own-keys */
      "Vu81");

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      module.exports = function (target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
      /***/

    },

    /***/
    "6LWA":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/is-array.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function LWA(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK"); // `IsArray` abstract operation
      // https://tc39.es/ecma262/#sec-isarray


      module.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == 'Array';
      };
      /***/

    },

    /***/
    "6VoE":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function VoE(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      "P4y1");

      var ITERATOR = wellKnownSymbol('iterator');
      var ArrayPrototype = Array.prototype; // check on default Array iterator

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
      /***/

    },

    /***/
    "6hpn":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/es/math/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function hpn(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.math.acosh */
      "Uydy");

      __webpack_require__(
      /*! ../../modules/es.math.asinh */
      "eajv");

      __webpack_require__(
      /*! ../../modules/es.math.atanh */
      "n/mU");

      __webpack_require__(
      /*! ../../modules/es.math.cbrt */
      "PqOI");

      __webpack_require__(
      /*! ../../modules/es.math.clz32 */
      "QNnp");

      __webpack_require__(
      /*! ../../modules/es.math.cosh */
      "/5zm");

      __webpack_require__(
      /*! ../../modules/es.math.expm1 */
      "CsgD");

      __webpack_require__(
      /*! ../../modules/es.math.fround */
      "9mRW");

      __webpack_require__(
      /*! ../../modules/es.math.hypot */
      "QFcT");

      __webpack_require__(
      /*! ../../modules/es.math.imul */
      "vAFs");

      __webpack_require__(
      /*! ../../modules/es.math.log10 */
      "a5NK");

      __webpack_require__(
      /*! ../../modules/es.math.log1p */
      "yiG3");

      __webpack_require__(
      /*! ../../modules/es.math.log2 */
      "kNcU");

      __webpack_require__(
      /*! ../../modules/es.math.sign */
      "KvGi");

      __webpack_require__(
      /*! ../../modules/es.math.sinh */
      "AmFO");

      __webpack_require__(
      /*! ../../modules/es.math.tanh */
      "eJiR");

      __webpack_require__(
      /*! ../../modules/es.math.to-string-tag */
      "I9xj");

      __webpack_require__(
      /*! ../../modules/es.math.trunc */
      "tl/u");

      var path = __webpack_require__(
      /*! ../../internals/path */
      "Qo9l");

      module.exports = path.Math;
      /***/
    },

    /***/
    "7+kd":
    /*!************************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function kd(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.isConcatSpreadable` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable


      defineWellKnownSymbol('isConcatSpreadable');
      /***/
    },

    /***/
    "7+zs":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function zs(module, exports, __webpack_require__) {
      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var dateToPrimitive = __webpack_require__(
      /*! ../internals/date-to-primitive */
      "UesL");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
      var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

      if (!(TO_PRIMITIVE in DatePrototype)) {
        createNonEnumerableProperty(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
      }
      /***/

    },

    /***/
    "7sbD":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/es/number/index.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function sbD(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.number.constructor */
      "qePV");

      __webpack_require__(
      /*! ../../modules/es.number.epsilon */
      "NbN+");

      __webpack_require__(
      /*! ../../modules/es.number.is-finite */
      "8AyJ");

      __webpack_require__(
      /*! ../../modules/es.number.is-integer */
      "i6QF");

      __webpack_require__(
      /*! ../../modules/es.number.is-nan */
      "kSko");

      __webpack_require__(
      /*! ../../modules/es.number.is-safe-integer */
      "WDsR");

      __webpack_require__(
      /*! ../../modules/es.number.max-safe-integer */
      "r/Vq");

      __webpack_require__(
      /*! ../../modules/es.number.min-safe-integer */
      "5uH8");

      __webpack_require__(
      /*! ../../modules/es.number.parse-float */
      "w1rZ");

      __webpack_require__(
      /*! ../../modules/es.number.parse-int */
      "JevA");

      __webpack_require__(
      /*! ../../modules/es.number.to-fixed */
      "toAj");

      __webpack_require__(
      /*! ../../modules/es.number.to-precision */
      "VC3L");

      var path = __webpack_require__(
      /*! ../../internals/path */
      "Qo9l");

      module.exports = path.Number;
      /***/
    },

    /***/
    8:
    /*!***********************************************************************************************************************************!*\
      !*** multi ./node_modules/@angular-devkit/build-angular/src/webpack/es5-polyfills.js zone.js/dist/zone-legacy ./src/polyfills.ts ***!
      \***********************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! /home/runner/work/ionic-pwa-example/ionic-pwa-example/node_modules/@angular-devkit/build-angular/src/webpack/es5-polyfills.js */
      "voQr");

      __webpack_require__(
      /*! zone.js/dist/zone-legacy */
      "R0gw");

      module.exports = __webpack_require__(
      /*! /home/runner/work/ionic-pwa-example/ionic-pwa-example/src/polyfills.ts */
      "hN/g");
      /***/
    },

    /***/
    "8AyJ":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.is-finite.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function AyJ(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var numberIsFinite = __webpack_require__(
      /*! ../internals/number-is-finite */
      "4oU/"); // `Number.isFinite` method
      // https://tc39.es/ecma262/#sec-number.isfinite


      $({
        target: 'Number',
        stat: true
      }, {
        isFinite: numberIsFinite
      });
      /***/
    },

    /***/
    "8GlL":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function GlL(module, exports, __webpack_require__) {
      "use strict";

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var PromiseCapability = function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }; // 25.4.1.5 NewPromiseCapability(C)


      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/

    },

    /***/
    "8YOa":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/internal-metadata.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function YOa(module, exports, __webpack_require__) {
      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      "0BK2");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var uid = __webpack_require__(
      /*! ../internals/uid */
      "kOOl");

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      "uy83");

      var METADATA = uid('meta');
      var id = 0;

      var isExtensible = Object.isExtensible || function () {
        return true;
      };

      var setMetadata = function setMetadata(it) {
        defineProperty(it, METADATA, {
          value: {
            objectID: 'O' + ++id,
            // object ID
            weakData: {} // weak collections IDs

          }
        });
      };

      var fastKey = function fastKey(it, create) {
        // return a primitive with prefix
        if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

        if (!has(it, METADATA)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'; // not necessary to add metadata

          if (!create) return 'E'; // add missing metadata

          setMetadata(it); // return object ID
        }

        return it[METADATA].objectID;
      };

      var getWeakData = function getWeakData(it, create) {
        if (!has(it, METADATA)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true; // not necessary to add metadata

          if (!create) return false; // add missing metadata

          setMetadata(it); // return the store of weak collections IDs
        }

        return it[METADATA].weakData;
      }; // add metadata on freeze-family methods calling


      var onFreeze = function onFreeze(it) {
        if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
        return it;
      };

      var meta = module.exports = {
        REQUIRED: false,
        fastKey: fastKey,
        getWeakData: getWeakData,
        onFreeze: onFreeze
      };
      hiddenKeys[METADATA] = true;
      /***/
    },

    /***/
    "8oxB":
    /*!*****************************************!*\
      !*** ./node_modules/process/browser.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function oxB(module, exports) {
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
      /***/

    },

    /***/
    "90hW":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/math-sign.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function hW(module, exports) {
      // `Math.sign` method implementation
      // https://tc39.es/ecma262/#sec-math.sign
      module.exports = Math.sign || function sign(x) {
        // eslint-disable-next-line no-self-compare
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
      /***/

    },

    /***/
    "93I0":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/shared-key.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function I0(module, exports, __webpack_require__) {
      var shared = __webpack_require__(
      /*! ../internals/shared */
      "VpIT");

      var uid = __webpack_require__(
      /*! ../internals/uid */
      "kOOl");

      var keys = shared('keys');

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };
      /***/

    },

    /***/
    "9LPj":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function LPj(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var FORCED = fails(function () {
        return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
          toISOString: function toISOString() {
            return 1;
          }
        }) !== 1;
      }); // `Date.prototype.toJSON` method
      // https://tc39.es/ecma262/#sec-date.prototype.tojson

      $({
        target: 'Date',
        proto: true,
        forced: FORCED
      }, {
        // eslint-disable-next-line no-unused-vars
        toJSON: function toJSON(key) {
          var O = toObject(this);
          var pv = toPrimitive(O);
          return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
        }
      });
      /***/
    },

    /***/
    "9N29":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.reduce-right.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function N29(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $reduceRight = __webpack_require__(
      /*! ../internals/array-reduce */
      "1Y/n").right;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var CHROME_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var STRICT_METHOD = arrayMethodIsStrict('reduceRight'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

      var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {
        1: 0
      }); // Chrome 80-82 has a critical bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG
      }, {
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "9bJ7":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.code-point-at.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function bJ7(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var codeAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      "ZUd8").codeAt; // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat


      $({
        target: 'String',
        proto: true
      }, {
        codePointAt: function codePointAt(pos) {
          return codeAt(this, pos);
        }
      });
      /***/
    },

    /***/
    "9d/t":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/classof.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function dT(module, exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      "AO7/");

      var classofRaw = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

      var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (error) {
          /* empty */
        }
      }; // getting tag from ES6+ `Object.prototype.toString`


      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
      };
      /***/
    },

    /***/
    "9mRW":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.fround.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function mRW(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fround = __webpack_require__(
      /*! ../internals/math-fround */
      "vo4V"); // `Math.fround` method
      // https://tc39.es/ecma262/#sec-math.fround


      $({
        target: 'Math',
        stat: true
      }, {
        fround: fround
      });
      /***/
    },

    /***/
    "9tb/":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.from-code-point.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function tb(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh");

      var fromCharCode = String.fromCharCode;
      var nativeFromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

      var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1; // `String.fromCodePoint` method
      // https://tc39.es/ecma262/#sec-string.fromcodepoint

      $({
        target: 'String',
        stat: true,
        forced: INCORRECT_LENGTH
      }, {
        fromCodePoint: function fromCodePoint(x) {
          // eslint-disable-line no-unused-vars
          var elements = [];
          var length = arguments.length;
          var i = 0;
          var code;

          while (length > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
            elements.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
          }

          return elements.join('');
        }
      });
      /***/
    },

    /***/
    "A2ZE":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/internals/function-bind-context.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function A2ZE(module, exports, __webpack_require__) {
      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM"); // optional / simple context binding


      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 0:
            return function () {
              return fn.call(that);
            };

          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },

    /***/
    "AO7/":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function AO7(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var test = {};
      test[TO_STRING_TAG] = 'z';
      module.exports = String(test) === '[object z]';
      /***/
    },

    /***/
    "AmFO":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.sinh.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function AmFO(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      "jrUv");

      var abs = Math.abs;
      var exp = Math.exp;
      var E = Math.E;
      var FORCED = fails(function () {
        return Math.sinh(-2e-17) != -2e-17;
      }); // `Math.sinh` method
      // https://tc39.es/ecma262/#sec-math.sinh
      // V8 near Chromium 38 has a problem with very small numbers

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        sinh: function sinh(x) {
          return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
        }
      });
      /***/
    },

    /***/
    "B6y2":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.values.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function B6y2(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $values = __webpack_require__(
      /*! ../internals/object-to-array */
      "b1O7").values; // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values


      $({
        target: 'Object',
        stat: true
      }, {
        values: function values(O) {
          return $values(O);
        }
      });
      /***/
    },

    /***/
    "BIHw":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.flat.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function BIHw(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var flattenIntoArray = __webpack_require__(
      /*! ../internals/flatten-into-array */
      "or9q");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      "ZfDv"); // `Array.prototype.flat` method
      // https://tc39.es/ecma262/#sec-array.prototype.flat


      $({
        target: 'Array',
        proto: true
      }, {
        flat: function flat()
        /* depthArg = 1 */
        {
          var depthArg = arguments.length ? arguments[0] : undefined;
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
          return A;
        }
      });
      /***/
    },

    /***/
    "BNMt":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.blink.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function BNMt(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.blink` method
      // https://tc39.es/ecma262/#sec-string.prototype.blink


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('blink')
      }, {
        blink: function blink() {
          return createHTML(this, 'blink', '', '');
        }
      });
      /***/
    },

    /***/
    "BTho":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/function-bind.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function BTho(module, exports, __webpack_require__) {
      "use strict";

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var slice = [].slice;
      var factories = {};

      var construct = function construct(C, argsLength, args) {
        if (!(argsLength in factories)) {
          for (var list = [], i = 0; i < argsLength; i++) {
            list[i] = 'a[' + i + ']';
          } // eslint-disable-next-line no-new-func


          factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
        }

        return factories[argsLength](C, args);
      }; // `Function.prototype.bind` method implementation
      // https://tc39.es/ecma262/#sec-function.prototype.bind


      module.exports = Function.bind || function bind(that
      /* , ...args */
      ) {
        var fn = aFunction(this);
        var partArgs = slice.call(arguments, 1);

        var boundFunction = function bound()
        /* args... */
        {
          var args = partArgs.concat(slice.call(arguments));
          return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
        };

        if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
        return boundFunction;
      };
      /***/

    },

    /***/
    "BX/b":
    /*!**********************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function BXB(module, exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var nativeGetOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      "JBy8").f;

      var toString = {}.toString;
      var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return nativeGetOwnPropertyNames(it);
        } catch (error) {
          return windowNames.slice();
        }
      }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
      };
      /***/

    },

    /***/
    "Bs8V":
    /*!******************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function Bs8V(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      "0eef");

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      "XGwC");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var IE8_DOM_DEFINE = __webpack_require__(
      /*! ../internals/ie8-dom-define */
      "DPsx");

      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) {
          /* empty */
        }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
      /***/
    },

    /***/
    "CsgD":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.expm1.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function CsgD(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      "jrUv"); // `Math.expm1` method
      // https://tc39.es/ecma262/#sec-math.expm1


      $({
        target: 'Math',
        stat: true,
        forced: expm1 != Math.expm1
      }, {
        expm1: expm1
      });
      /***/
    },

    /***/
    "DEfu":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function DEfu(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z"); // JSON[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-json-@@tostringtag


      setToStringTag(global.JSON, 'JSON', true);
      /***/
    },

    /***/
    "DLK6":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/get-substitution.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function DLK6(module, exports, __webpack_require__) {
      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var floor = Math.floor;
      var replace = ''.replace;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g; // https://tc39.es/ecma262/#sec-getsubstitution

      module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }

        return replace.call(replacement, symbols, function (match, ch) {
          var capture;

          switch (ch.charAt(0)) {
            case '$':
              return '$';

            case '&':
              return matched;

            case '`':
              return str.slice(0, position);

            case "'":
              return str.slice(tailPos);

            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;

            default:
              // \d\d?
              var n = +ch;
              if (n === 0) return match;

              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }

              capture = captures[n - 1];
          }

          return capture === undefined ? '' : capture;
        });
      };
      /***/

    },

    /***/
    "DMt2":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/string-pad.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function DMt2(module, exports, __webpack_require__) {
      // https://github.com/tc39/proposal-string-pad-start-end
      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      "EUja");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

      var createMethod = function createMethod(IS_END) {
        return function ($this, maxLength, fillString) {
          var S = String(requireObjectCoercible($this));
          var stringLength = S.length;
          var fillStr = fillString === undefined ? ' ' : String(fillString);
          var intMaxLength = toLength(maxLength);
          var fillLen, stringFiller;
          if (intMaxLength <= stringLength || fillStr == '') return S;
          fillLen = intMaxLength - stringLength;
          stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
          return IS_END ? S + stringFiller : stringFiller + S;
        };
      };

      module.exports = {
        // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart
        start: createMethod(false),
        // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend
        end: createMethod(true)
      };
      /***/
    },

    /***/
    "DPsx":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function DPsx(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var createElement = __webpack_require__(
      /*! ../internals/document-create-element */
      "zBJ4"); // Thank's IE8 for his funny defineProperty


      module.exports = !DESCRIPTORS && !fails(function () {
        return Object.defineProperty(createElement('div'), 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },

    /***/
    "DQNa":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function DQNa(module, exports, __webpack_require__) {
      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var DatePrototype = Date.prototype;
      var INVALID_DATE = 'Invalid Date';
      var TO_STRING = 'toString';
      var nativeDateToString = DatePrototype[TO_STRING];
      var getTime = DatePrototype.getTime; // `Date.prototype.toString` method
      // https://tc39.es/ecma262/#sec-date.prototype.tostring

      if (new Date(NaN) + '' != INVALID_DATE) {
        redefine(DatePrototype, TO_STRING, function toString() {
          var value = getTime.call(this); // eslint-disable-next-line no-self-compare

          return value === value ? nativeDateToString.call(this) : INVALID_DATE;
        });
      }
      /***/

    },

    /***/
    "E5NM":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.big.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function E5NM(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.big` method
      // https://tc39.es/ecma262/#sec-string.prototype.big


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('big')
      }, {
        big: function big() {
          return createHTML(this, 'big', '', '');
        }
      });
      /***/
    },

    /***/
    "E9XD":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function E9XD(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $reduce = __webpack_require__(
      /*! ../internals/array-reduce */
      "1Y/n").left;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var CHROME_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var STRICT_METHOD = arrayMethodIsStrict('reduce');
      var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {
        1: 0
      }); // Chrome 80-82 has a critical bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG
      }, {
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "ENF9":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/es.weak-map.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ENF9(module, exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      "4syw");

      var InternalMetadataModule = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa");

      var collection = __webpack_require__(
      /*! ../internals/collection */
      "bWFh");

      var collectionWeak = __webpack_require__(
      /*! ../internals/collection-weak */
      "rKzb");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var enforceIternalState = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8").enforce;

      var NATIVE_WEAK_MAP = __webpack_require__(
      /*! ../internals/native-weak-map */
      "f5p1");

      var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
      var isExtensible = Object.isExtensible;
      var InternalWeakMap;

      var wrapper = function wrapper(init) {
        return function WeakMap() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }; // `WeakMap` constructor
      // https://tc39.es/ecma262/#sec-weakmap-constructor


      var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
      // We can't use feature detection because it crash some old IE builds
      // https://github.com/zloirock/core-js/issues/485

      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
        InternalMetadataModule.REQUIRED = true;
        var WeakMapPrototype = $WeakMap.prototype;
        var nativeDelete = WeakMapPrototype['delete'];
        var nativeHas = WeakMapPrototype.has;
        var nativeGet = WeakMapPrototype.get;
        var nativeSet = WeakMapPrototype.set;
        redefineAll(WeakMapPrototype, {
          'delete': function _delete(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeDelete.call(this, key) || state.frozen['delete'](key);
            }

            return nativeDelete.call(this, key);
          },
          has: function has(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) || state.frozen.has(key);
            }

            return nativeHas.call(this, key);
          },
          get: function get(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
            }

            return nativeGet.call(this, key);
          },
          set: function set(key, value) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
            } else nativeSet.call(this, key, value);

            return this;
          }
        });
      }
      /***/

    },

    /***/
    "EUja":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/string-repeat.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function EUja(module, exports, __webpack_require__) {
      "use strict";

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF"); // `String.prototype.repeat` method implementation
      // https://tc39.es/ecma262/#sec-string.prototype.repeat


      module.exports = ''.repeat || function repeat(count) {
        var str = String(requireObjectCoercible(this));
        var result = '';
        var n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

        for (; n > 0; (n >>>= 1) && (str += str)) {
          if (n & 1) result += str;
        }

        return result;
      };
      /***/

    },

    /***/
    "EnZy":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.split.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function EnZy(module, exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      "14Sl");

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      "ROdP");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      "SEBh");

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      "iqWW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var callRegExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      "FMNM");

      var regexpExec = __webpack_require__(
      /*! ../internals/regexp-exec */
      "kmMV");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var arrayPush = [].push;
      var min = Math.min;
      var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

      var SUPPORTS_Y = !fails(function () {
        return !RegExp(MAX_UINT32, 'y');
      }); // @@split logic

      fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;

        if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function internalSplit(separator, limit) {
            var string = String(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

            if (!isRegExp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;

            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;

              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }

              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }

            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));

            return output.length > lim ? output.slice(0, lim) : output;
          }; // Chakra, V8

        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function internalSplit(separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [// `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = separator == undefined ? undefined : separator[SPLIT];
          return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        }, // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (regexp, limit) {
          var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.

          var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];

          while (q < S.length) {
            splitter.lastIndex = SUPPORTS_Y ? q : 0;
            var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
            var e;

            if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              A.push(S.slice(p, q));
              if (A.length === lim) return A;

              for (var i = 1; i <= z.length - 1; i++) {
                A.push(z[i]);
                if (A.length === lim) return A;
              }

              q = p = e;
            }
          }

          A.push(S.slice(p));
          return A;
        }];
      }, !SUPPORTS_Y);
      /***/
    },

    /***/
    "Ep9I":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/same-value.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Ep9I(module, exports) {
      // `SameValue` abstract operation
      // https://tc39.es/ecma262/#sec-samevalue
      module.exports = Object.is || function is(x, y) {
        // eslint-disable-next-line no-self-compare
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
      /***/

    },

    /***/
    "ExoC":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function ExoC(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      "0rvr"); // `Object.setPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.setprototypeof


      $({
        target: 'Object',
        stat: true
      }, {
        setPrototypeOf: setPrototypeOf
      });
      /***/
    },

    /***/
    "F8JR":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/array-for-each.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function F8JR(module, exports, __webpack_require__) {
      "use strict";

      var $forEach = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").forEach;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var STRICT_METHOD = arrayMethodIsStrict('forEach');
      var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.foreach

      module.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn
      /* , thisArg */
      ) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      } : [].forEach;
      /***/
    },

    /***/
    "FF6l":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/array-copy-within.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function FF6l(module, exports, __webpack_require__) {
      "use strict";

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var min = Math.min; // `Array.prototype.copyWithin` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.copywithin

      module.exports = [].copyWithin || function copyWithin(target
      /* = 0 */
      , start
      /* = 0, end = @length */
      ) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : undefined;
        var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;

        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }

        while (count-- > 0) {
          if (from in O) O[to] = O[from];else delete O[to];
          to += inc;
          from += inc;
        }

        return O;
      };
      /***/

    },

    /***/
    "FMNM":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function FMNM(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ./classof-raw */
      "xrYK");

      var regexpExec = __webpack_require__(
      /*! ./regexp-exec */
      "kmMV"); // `RegExpExec` abstract operation
      // https://tc39.es/ecma262/#sec-regexpexec


      module.exports = function (R, S) {
        var exec = R.exec;

        if (typeof exec === 'function') {
          var result = exec.call(R, S);

          if (typeof result !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }

          return result;
        }

        if (classof(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }

        return regexpExec.call(R, S);
      };
      /***/

    },

    /***/
    "FZtP":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function FZtP(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var DOMIterables = __webpack_require__(
      /*! ../internals/dom-iterables */
      "/byt");

      var forEach = __webpack_require__(
      /*! ../internals/array-for-each */
      "F8JR");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
        } catch (error) {
          CollectionPrototype.forEach = forEach;
        }
      }
      /***/

    },

    /***/
    "G+Rx":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/html.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function GRx(module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      module.exports = getBuiltIn('document', 'documentElement');
      /***/
    },

    /***/
    "GKVU":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.anchor.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function GKVU(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.anchor` method
      // https://tc39.es/ecma262/#sec-string.prototype.anchor


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('anchor')
      }, {
        anchor: function anchor(name) {
          return createHTML(this, 'a', 'name', name);
        }
      });
      /***/
    },

    /***/
    "GRPF":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.fontsize.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function GRPF(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.fontsize` method
      // https://tc39.es/ecma262/#sec-string.prototype.fontsize


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fontsize')
      }, {
        fontsize: function fontsize(size) {
          return createHTML(this, 'font', 'size', size);
        }
      });
      /***/
    },

    /***/
    "GXvd":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.species.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function GXvd(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.species` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.species


      defineWellKnownSymbol('species');
      /***/
    },

    /***/
    "GarU":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/an-instance.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function GarU(module, exports) {
      module.exports = function (it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
        }

        return it;
      };
      /***/

    },

    /***/
    "H0pb":
    /*!*************************************************!*\
      !*** ./node_modules/core-js/es/symbol/index.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function H0pb(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.array.concat */
      "ma9I");

      __webpack_require__(
      /*! ../../modules/es.object.to-string */
      "07d7");

      __webpack_require__(
      /*! ../../modules/es.symbol */
      "pNMO");

      __webpack_require__(
      /*! ../../modules/es.symbol.async-iterator */
      "tjZM");

      __webpack_require__(
      /*! ../../modules/es.symbol.description */
      "4Brf");

      __webpack_require__(
      /*! ../../modules/es.symbol.has-instance */
      "3I1R");

      __webpack_require__(
      /*! ../../modules/es.symbol.is-concat-spreadable */
      "7+kd");

      __webpack_require__(
      /*! ../../modules/es.symbol.iterator */
      "0oug");

      __webpack_require__(
      /*! ../../modules/es.symbol.match */
      "KhsS");

      __webpack_require__(
      /*! ../../modules/es.symbol.match-all */
      "jt2F");

      __webpack_require__(
      /*! ../../modules/es.symbol.replace */
      "gOCb");

      __webpack_require__(
      /*! ../../modules/es.symbol.search */
      "a57n");

      __webpack_require__(
      /*! ../../modules/es.symbol.species */
      "GXvd");

      __webpack_require__(
      /*! ../../modules/es.symbol.split */
      "I1Gw");

      __webpack_require__(
      /*! ../../modules/es.symbol.to-primitive */
      "gXIK");

      __webpack_require__(
      /*! ../../modules/es.symbol.to-string-tag */
      "lEou");

      __webpack_require__(
      /*! ../../modules/es.symbol.unscopables */
      "gbiT");

      __webpack_require__(
      /*! ../../modules/es.json.to-string-tag */
      "DEfu");

      __webpack_require__(
      /*! ../../modules/es.math.to-string-tag */
      "I9xj");

      __webpack_require__(
      /*! ../../modules/es.reflect.to-string-tag */
      "+MnM");

      var path = __webpack_require__(
      /*! ../../internals/path */
      "Qo9l");

      module.exports = path.Symbol;
      /***/
    },

    /***/
    "H7XF":
    /*!*****************************************!*\
      !*** ./node_modules/base64-js/index.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function H7XF(module, exports, __webpack_require__) {
      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      } // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications


      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function getLens(b64) {
        var len = b64.length;

        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        } // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42


        var validLen = b64.indexOf('=');
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      } // base64 is 4/3 + up to two characters of the original data


      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i;

        for (i = 0; i < len; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[curByte++] = tmp >> 16 & 0xFF;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];

        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }

        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later

        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        } // pad the end with zeros, but make sure to not forget the extra bytes


        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
        }

        return parts.join('');
      }
      /***/

    },

    /***/
    "HAuM":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/a-function.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function HAuM(module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') {
          throw TypeError(String(it) + ' is not a function');
        }

        return it;
      };
      /***/

    },

    /***/
    "HH4o":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function HH4o(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var ITERATOR = wellKnownSymbol('iterator');
      var SAFE_CLOSING = false;

      try {
        var called = 0;
        var iteratorWithReturn = {
          next: function next() {
            return {
              done: !!called++
            };
          },
          'return': function _return() {
            SAFE_CLOSING = true;
          }
        };

        iteratorWithReturn[ITERATOR] = function () {
          return this;
        }; // eslint-disable-next-line no-throw-literal


        Array.from(iteratorWithReturn, function () {
          throw 2;
        });
      } catch (error) {
        /* empty */
      }

      module.exports = function (exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        var ITERATION_SUPPORT = false;

        try {
          var object = {};

          object[ITERATOR] = function () {
            return {
              next: function next() {
                return {
                  done: ITERATION_SUPPORT = true
                };
              }
            };
          };

          exec(object);
        } catch (error) {
          /* empty */
        }

        return ITERATION_SUPPORT;
      };
      /***/

    },

    /***/
    "HNyW":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function HNyW(module, exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
      /***/
    },

    /***/
    "HRxU":
    /*!*********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function HRxU(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var defineProperties = __webpack_require__(
      /*! ../internals/object-define-properties */
      "N+g0"); // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties


      $({
        target: 'Object',
        stat: true,
        forced: !DESCRIPTORS,
        sham: !DESCRIPTORS
      }, {
        defineProperties: defineProperties
      });
      /***/
    },

    /***/
    "HYAF":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function HYAF(module, exports) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.es/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };
      /***/

    },

    /***/
    "Hd5f":
    /*!****************************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function Hd5f(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION >= 51 || !fails(function () {
          var array = [];
          var constructor = array.constructor = {};

          constructor[SPECIES] = function () {
            return {
              foo: 1
            };
          };

          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
      /***/

    },

    /***/
    "HsHA":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/math-log1p.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function HsHA(module, exports) {
      var log = Math.log; // `Math.log1p` method implementation
      // https://tc39.es/ecma262/#sec-math.log1p

      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
      };
      /***/

    },

    /***/
    "I+eb":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/export.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function IEb(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      "zk60");

      var copyConstructorProperties = __webpack_require__(
      /*! ../internals/copy-constructor-properties */
      "6JNq");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");
      /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */


      module.exports = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;

        if (GLOBAL) {
          target = global;
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global[TARGET] || {}).prototype;
        }

        if (target) for (key in source) {
          sourceProperty = source[key];

          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];

          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          } // add a flag to not completely full polyfills


          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, 'sham', true);
          } // extend global


          redefine(target, key, sourceProperty, options);
        }
      };
      /***/

    },

    /***/
    "I1Gw":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.split.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function I1Gw(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.split` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.split


      defineWellKnownSymbol('split');
      /***/
    },

    /***/
    "I8vh":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function I8vh(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var max = Math.max;
      var min = Math.min; // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

      module.exports = function (index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
      /***/

    },

    /***/
    "I9xj":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function I9xj(module, exports, __webpack_require__) {
      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z"); // Math[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-math-@@tostringtag


      setToStringTag(Math, 'Math', true);
      /***/
    },

    /***/
    "ImZN":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/iterate.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function ImZN(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var isArrayIteratorMethod = __webpack_require__(
      /*! ../internals/is-array-iterator-method */
      "6VoE");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var getIteratorMethod = __webpack_require__(
      /*! ../internals/get-iterator-method */
      "NaFW");

      var iteratorClose = __webpack_require__(
      /*! ../internals/iterator-close */
      "KmKo");

      var Result = function Result(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };

      module.exports = function (iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
        var iterator, iterFn, index, length, result, next, step;

        var stop = function stop(condition) {
          if (iterator) iteratorClose(iterator);
          return new Result(true, condition);
        };

        var callFn = function callFn(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }

          return INTERRUPTED ? fn(value, stop) : fn(value);
        };

        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength(iterable.length); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && result instanceof Result) return result;
            }

            return new Result(false);
          }

          iterator = iterFn.call(iterable);
        }

        next = iterator.next;

        while (!(step = next.call(iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }

          if (typeof result == 'object' && result && result instanceof Result) return result;
        }

        return new Result(false);
      };
      /***/

    },

    /***/
    "IxXR":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.strike.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function IxXR(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.strike` method
      // https://tc39.es/ecma262/#sec-string.prototype.strike


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('strike')
      }, {
        strike: function strike() {
          return createHTML(this, 'strike', '', '');
        }
      });
      /***/
    },

    /***/
    "J30X":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function J30X(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA"); // `Array.isArray` method
      // https://tc39.es/ecma262/#sec-array.isarray


      $({
        target: 'Array',
        stat: true
      }, {
        isArray: isArray
      });
      /***/
    },

    /***/
    "JBy8":
    /*!*************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function JBy8(module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__(
      /*! ../internals/object-keys-internal */
      "yoRg");

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      "eDl+");

      var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
      /***/

    },

    /***/
    "JTJg":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.includes.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function JTJg(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ"); // `String.prototype.includes` method
      // https://tc39.es/ecma262/#sec-string.prototype.includes


      $({
        target: 'String',
        proto: true,
        forced: !correctIsRegExpLogic('includes')
      }, {
        includes: function includes(searchString
        /* , position = 0 */
        ) {
          return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "JevA":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.parse-int.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function JevA(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var parseInt = __webpack_require__(
      /*! ../internals/number-parse-int */
      "wg0c"); // `Number.parseInt` method
      // https://tc39.es/ecma262/#sec-number.parseint


      $({
        target: 'Number',
        stat: true,
        forced: Number.parseInt != parseInt
      }, {
        parseInt: parseInt
      });
      /***/
    },

    /***/
    "JfAA":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function JfAA(module, exports, __webpack_require__) {
      "use strict";

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var flags = __webpack_require__(
      /*! ../internals/regexp-flags */
      "rW0t");

      var TO_STRING = 'toString';
      var RegExpPrototype = RegExp.prototype;
      var nativeToString = RegExpPrototype[TO_STRING];
      var NOT_GENERIC = fails(function () {
        return nativeToString.call({
          source: 'a',
          flags: 'b'
        }) != '/a/b';
      }); // FF44- RegExp#toString has a wrong name

      var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = String(R.source);
          var rf = R.flags;
          var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
          return '/' + p + '/' + f;
        }, {
          unsafe: true
        });
      }
      /***/

    },

    /***/
    "JiZb":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/set-species.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function JiZb(module, exports, __webpack_require__) {
      "use strict";

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;

        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        }
      };
      /***/

    },

    /***/
    "KhsS":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.match.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function KhsS(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.match` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.match


      defineWellKnownSymbol('match');
      /***/
    },

    /***/
    "KmKo":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/iterator-close.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function KmKo(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      module.exports = function (iterator) {
        var returnMethod = iterator['return'];

        if (returnMethod !== undefined) {
          return anObject(returnMethod.call(iterator)).value;
        }
      };
      /***/

    },

    /***/
    "KvGi":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.sign.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function KvGi(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      "90hW"); // `Math.sign` method
      // https://tc39.es/ecma262/#sec-math.sign


      $({
        target: 'Math',
        stat: true
      }, {
        sign: sign
      });
      /***/
    },

    /***/
    "Kxld":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.is.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Kxld(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var is = __webpack_require__(
      /*! ../internals/same-value */
      "Ep9I"); // `Object.is` method
      // https://tc39.es/ecma262/#sec-object.is


      $({
        target: 'Object',
        stat: true
      }, {
        is: is
      });
      /***/
    },

    /***/
    "LKBx":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function LKBx(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var nativeStartsWith = ''.startsWith;
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.startsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.startswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        startsWith: function startsWith(searchString
        /* , position = 0 */
        ) {
          var that = String(requireObjectCoercible(this));
          notARegExp(searchString);
          var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
          var search = String(searchString);
          return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
      });
      /***/
    },

    /***/
    "LPSS":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/task.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function LPSS(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var html = __webpack_require__(
      /*! ../internals/html */
      "G+Rx");

      var createElement = __webpack_require__(
      /*! ../internals/document-create-element */
      "zBJ4");

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      "HNyW");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var location = global.location;
      var set = global.setImmediate;
      var clear = global.clearImmediate;
      var process = global.process;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer, channel, port;

      var run = function run(id) {
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var runner = function runner(id) {
        return function () {
          run(id);
        };
      };

      var listener = function listener(event) {
        run(event.data);
      };

      var post = function post(id) {
        // old engines have not location.origin
        global.postMessage(id + '', location.protocol + '//' + location.host);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!set || !clear) {
        set = function setImmediate(fn) {
          var args = [];
          var i = 1;

          while (arguments.length > i) {
            args.push(arguments[i++]);
          }

          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
          };

          defer(counter);
          return counter;
        };

        clear = function clearImmediate(id) {
          delete queue[id];
        }; // Node.js 0.8-


        if (IS_NODE) {
          defer = function defer(id) {
            process.nextTick(runner(id));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(runner(id));
          }; // Browsers with MessageChannel, includes WebWorkers
          // except iOS - https://github.com/zloirock/core-js/issues/624

        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
          defer = post;
          global.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
          defer = function defer(id) {
            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          }; // Rest old browsers

        } else {
          defer = function defer(id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      module.exports = {
        set: set,
        clear: clear
      };
      /***/
    },

    /***/
    "LQDL":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function LQDL(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      var process = global.process;
      var versions = process && process.versions;
      var v8 = versions && versions.v8;
      var match, version;

      if (v8) {
        match = v8.split('.');
        version = match[0] + match[1];
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);

        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = match[1];
        }
      }

      module.exports = version && +version;
      /***/
    },

    /***/
    "N+g0":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/object-define-properties.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function NG0(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      "33Wh"); // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties


      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;

        while (length > index) {
          definePropertyModule.f(O, key = keys[index++], Properties[key]);
        }

        return O;
      };
      /***/
    },

    /***/
    "NBAS":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function NBAS(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var nativeGetPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      "4WOD");

      var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
      /*! ../internals/correct-prototype-getter */
      "4Xet");

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeGetPrototypeOf(1);
      }); // `Object.getPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.getprototypeof

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !CORRECT_PROTOTYPE_GETTER
      }, {
        getPrototypeOf: function getPrototypeOf(it) {
          return nativeGetPrototypeOf(toObject(it));
        }
      });
      /***/
    },

    /***/
    "NC/Y":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function NCY(module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      module.exports = getBuiltIn('navigator', 'userAgent') || '';
      /***/
    },

    /***/
    "NaFW":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function NaFW(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof */
      "9d/t");

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      "P4y1");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var ITERATOR = wellKnownSymbol('iterator');

      module.exports = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
      /***/

    },

    /***/
    "NbN+":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.epsilon.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function NbN(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb"); // `Number.EPSILON` constant
      // https://tc39.es/ecma262/#sec-number.epsilon


      $({
        target: 'Number',
        stat: true
      }, {
        EPSILON: Math.pow(2, -52)
      });
      /***/
    },

    /***/
    "O741":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function O741(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      module.exports = function (it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype');
        }

        return it;
      };
      /***/

    },

    /***/
    "OM9Z":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.repeat.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function OM9Z(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      "EUja"); // `String.prototype.repeat` method
      // https://tc39.es/ecma262/#sec-string.prototype.repeat


      $({
        target: 'String',
        proto: true
      }, {
        repeat: repeat
      });
      /***/
    },

    /***/
    "P4y1":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/iterators.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function P4y1(module, exports) {
      module.exports = {};
      /***/
    },

    /***/
    "PKPk":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function PKPk(module, exports, __webpack_require__) {
      "use strict";

      var charAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      "ZUd8").charAt;

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      "fdAy");

      var STRING_ITERATOR = 'String Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

      defineIterator(String, 'String', function (iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        }); // `%StringIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return {
          value: undefined,
          done: true
        };
        point = charAt(string, index);
        state.index += point.length;
        return {
          value: point,
          done: false
        };
      });
      /***/
    },

    /***/
    "PqOI":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.cbrt.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function PqOI(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      "90hW");

      var abs = Math.abs;
      var pow = Math.pow; // `Math.cbrt` method
      // https://tc39.es/ecma262/#sec-math.cbrt

      $({
        target: 'Math',
        stat: true
      }, {
        cbrt: function cbrt(x) {
          return sign(x = +x) * pow(abs(x), 1 / 3);
        }
      });
      /***/
    },

    /***/
    "QFcT":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.hypot.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function QFcT(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $hypot = Math.hypot;
      var abs = Math.abs;
      var sqrt = Math.sqrt; // Chrome 77 bug
      // https://bugs.chromium.org/p/v8/issues/detail?id=9546

      var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
      // https://tc39.es/ecma262/#sec-math.hypot

      $({
        target: 'Math',
        stat: true,
        forced: BUGGY
      }, {
        hypot: function hypot(value1, value2) {
          // eslint-disable-line no-unused-vars
          var sum = 0;
          var i = 0;
          var aLen = arguments.length;
          var larg = 0;
          var arg, div;

          while (i < aLen) {
            arg = abs(arguments[i++]);

            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }

          return larg === Infinity ? Infinity : larg * sqrt(sum);
        }
      });
      /***/
    },

    /***/
    "QIpd":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/this-number-value.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function QIpd(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK"); // `thisNumberValue` abstract operation
      // https://tc39.es/ecma262/#sec-thisnumbervalue


      module.exports = function (value) {
        if (typeof value != 'number' && classof(value) != 'Number') {
          throw TypeError('Incorrect invocation');
        }

        return +value;
      };
      /***/

    },

    /***/
    "QNnp":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.clz32.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function QNnp(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var floor = Math.floor;
      var log = Math.log;
      var LOG2E = Math.LOG2E; // `Math.clz32` method
      // https://tc39.es/ecma262/#sec-math.clz32

      $({
        target: 'Math',
        stat: true
      }, {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32;
        }
      });
      /***/
    },

    /***/
    "QWBl":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function QWBl(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var forEach = __webpack_require__(
      /*! ../internals/array-for-each */
      "F8JR"); // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach


      $({
        target: 'Array',
        proto: true,
        forced: [].forEach != forEach
      }, {
        forEach: forEach
      });
      /***/
    },

    /***/
    "Qo9l":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/path.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Qo9l(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = global;
      /***/
    },

    /***/
    "R0gw":
    /*!**************************************************!*\
      !*** ./node_modules/zone.js/dist/zone-legacy.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function R0gw(module, exports, __webpack_require__) {
      "use strict";

      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
       * @license Angular v12.0.0-next.0
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */


      (function (factory) {
        true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function () {
        'use strict';
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /*
         * This is necessary for Chrome and Chrome mobile, to enable
         * things like redefining `createdCallback` on an element.
         */

        var zoneSymbol;

        var _defineProperty;

        var _getOwnPropertyDescriptor;

        var _create;

        var unconfigurablesKey;

        function propertyPatch() {
          zoneSymbol = Zone.__symbol__;
          _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
          _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
          _create = Object.create;
          unconfigurablesKey = zoneSymbol('unconfigurables');

          Object.defineProperty = function (obj, prop, desc) {
            if (isUnconfigurable(obj, prop)) {
              throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
            }

            var originalConfigurableFlag = desc.configurable;

            if (prop !== 'prototype') {
              desc = rewriteDescriptor(obj, prop, desc);
            }

            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
          };

          Object.defineProperties = function (obj, props) {
            Object.keys(props).forEach(function (prop) {
              Object.defineProperty(obj, prop, props[prop]);
            });
            return obj;
          };

          Object.create = function (obj, proto) {
            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
              Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
              });
            }

            return _create(obj, proto);
          };

          Object.getOwnPropertyDescriptor = function (obj, prop) {
            var desc = _getOwnPropertyDescriptor(obj, prop);

            if (desc && isUnconfigurable(obj, prop)) {
              desc.configurable = false;
            }

            return desc;
          };
        }

        function _redefineProperty(obj, prop, desc) {
          var originalConfigurableFlag = desc.configurable;
          desc = rewriteDescriptor(obj, prop, desc);
          return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        }

        function isUnconfigurable(obj, prop) {
          return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
        }

        function rewriteDescriptor(obj, prop, desc) {
          // issue-927, if the desc is frozen, don't try to change the desc
          if (!Object.isFrozen(desc)) {
            desc.configurable = true;
          }

          if (!desc.configurable) {
            // issue-927, if the obj is frozen, don't try to set the desc to obj
            if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
              _defineProperty(obj, unconfigurablesKey, {
                writable: true,
                value: {}
              });
            }

            if (obj[unconfigurablesKey]) {
              obj[unconfigurablesKey][prop] = true;
            }
          }

          return desc;
        }

        function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
          try {
            return _defineProperty(obj, prop, desc);
          } catch (error) {
            if (desc.configurable) {
              // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
              // retry with the original flag value
              if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
              } else {
                desc.configurable = originalConfigurableFlag;
              }

              try {
                return _defineProperty(obj, prop, desc);
              } catch (error) {
                var swallowError = false;

                if (prop === 'createdCallback' || prop === 'attachedCallback' || prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
                  // We only swallow the error in registerElement patch
                  // this is the work around since some applications
                  // fail if we throw the error
                  swallowError = true;
                }

                if (!swallowError) {
                  throw error;
                } // TODO: @JiaLiPassion, Some application such as `registerElement` patch
                // still need to swallow the error, in the future after these applications
                // are updated, the following logic can be removed.


                var descJson = null;

                try {
                  descJson = JSON.stringify(desc);
                } catch (error) {
                  descJson = desc.toString();
                }

                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
              }
            } else {
              throw error;
            }
          }
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function eventTargetLegacyPatch(_global, api) {
          var _a = api.getGlobalObjects(),
              eventNames = _a.eventNames,
              globalSources = _a.globalSources,
              zoneSymbolEventNames = _a.zoneSymbolEventNames,
              TRUE_STR = _a.TRUE_STR,
              FALSE_STR = _a.FALSE_STR,
              ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;

          var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
          var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
          var EVENT_TARGET = 'EventTarget';
          var apis = [];
          var isWtf = _global['wtf'];
          var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

          if (isWtf) {
            // Workaround for: https://github.com/google/tracing-framework/issues/555
            apis = WTF_ISSUE_555_ARRAY.map(function (v) {
              return 'HTML' + v + 'Element';
            }).concat(NO_EVENT_TARGET);
          } else if (_global[EVENT_TARGET]) {
            apis.push(EVENT_TARGET);
          } else {
            // Note: EventTarget is not available in all browsers,
            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
            apis = NO_EVENT_TARGET;
          }

          var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
          var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
          var ieOrEdge = api.isIEOrEdge();
          var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
          var FUNCTION_WRAPPER = '[object FunctionWrapper]';
          var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
          var pointerEventsMap = {
            'MSPointerCancel': 'pointercancel',
            'MSPointerDown': 'pointerdown',
            'MSPointerEnter': 'pointerenter',
            'MSPointerHover': 'pointerhover',
            'MSPointerLeave': 'pointerleave',
            'MSPointerMove': 'pointermove',
            'MSPointerOut': 'pointerout',
            'MSPointerOver': 'pointerover',
            'MSPointerUp': 'pointerup'
          }; //  predefine all __zone_symbol__ + eventName + true/false string

          for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
          } //  predefine all task.source string


          for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
            var target = WTF_ISSUE_555_ARRAY[i];
            var targets = globalSources[target] = {};

            for (var j = 0; j < eventNames.length; j++) {
              var eventName = eventNames[j];
              targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
            }
          }

          var checkIEAndCrossContext = function checkIEAndCrossContext(nativeDelegate, delegate, target, args) {
            if (!isDisableIECheck && ieOrEdge) {
              if (isEnableCrossContextCheck) {
                try {
                  var testString = delegate.toString();

                  if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
                    nativeDelegate.apply(target, args);
                    return false;
                  }
                } catch (error) {
                  nativeDelegate.apply(target, args);
                  return false;
                }
              } else {
                var testString = delegate.toString();

                if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
                  nativeDelegate.apply(target, args);
                  return false;
                }
              }
            } else if (isEnableCrossContextCheck) {
              try {
                delegate.toString();
              } catch (error) {
                nativeDelegate.apply(target, args);
                return false;
              }
            }

            return true;
          };

          var apiTypes = [];

          for (var i = 0; i < apis.length; i++) {
            var type = _global[apis[i]];
            apiTypes.push(type && type.prototype);
          } // vh is validateHandler to check event handler
          // is valid or not(for security check)


          api.patchEventTarget(_global, apiTypes, {
            vh: checkIEAndCrossContext,
            transferEventName: function transferEventName(eventName) {
              var pointerEventName = pointerEventsMap[eventName];
              return pointerEventName || eventName;
            }
          });
          Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
          return true;
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        // we have to patch the instance since the proto is non-configurable


        function apply(api, _global) {
          var _a = api.getGlobalObjects(),
              ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR,
              REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;

          var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
          // On older Chrome, no need since EventTarget was already patched

          if (!_global.EventTarget) {
            api.patchEventTarget(_global, [WS.prototype]);
          }

          _global.WebSocket = function (x, y) {
            var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
            var proxySocket;
            var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

            var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

            if (onmessageDesc && onmessageDesc.configurable === false) {
              proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
              // but proxySocket not, so we will keep socket as prototype and pass it to
              // patchOnProperties method

              proxySocketProto = socket;
              [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                  var args = api.ArraySlice.call(arguments);

                  if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                    var eventName = args.length > 0 ? args[0] : undefined;

                    if (eventName) {
                      var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                      socket[propertySymbol] = proxySocket[propertySymbol];
                    }
                  }

                  return socket[propName].apply(socket, args);
                };
              });
            } else {
              // we can patch the real socket
              proxySocket = socket;
            }

            api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
            return proxySocket;
          };

          var globalWebSocket = _global['WebSocket'];

          for (var prop in WS) {
            globalWebSocket[prop] = WS[prop];
          }
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function propertyDescriptorLegacyPatch(api, _global) {
          var _a = api.getGlobalObjects(),
              isNode = _a.isNode,
              isMix = _a.isMix;

          if (isNode && !isMix) {
            return;
          }

          if (!canPatchViaPropertyDescriptor(api, _global)) {
            var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

            patchViaCapturingAllTheEvents(api);
            api.patchClass('XMLHttpRequest');

            if (supportsWebSocket) {
              apply(api, _global);
            }

            Zone[api.symbol('patchEvents')] = true;
          }
        }

        function canPatchViaPropertyDescriptor(api, _global) {
          var _a = api.getGlobalObjects(),
              isBrowser = _a.isBrowser,
              isMix = _a.isMix;

          if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
            // IDL interface attributes are not configurable
            var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
            if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
            // because XMLHttpRequest is not available in service worker

            if (desc) {
              api.ObjectDefineProperty(Element.prototype, 'onclick', {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return true;
                }
              });
              var div = document.createElement('div');
              var result = !!div.onclick;
              api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
              return result;
            }
          }

          var XMLHttpRequest = _global['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return false;
          }

          var ON_READY_STATE_CHANGE = 'onreadystatechange';
          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
          var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
          // by default XMLHttpRequest.prototype.onreadystatechange is undefined
          // without adding enumerable and configurable will cause onreadystatechange
          // non-configurable
          // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
          // we should set a real desc instead a fake one

          if (xhrDesc) {
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
              enumerable: true,
              configurable: true,
              get: function get() {
                return true;
              }
            });
            var req = new XMLHttpRequest();
            var result = !!req.onreadystatechange; // restore original desc

            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
            return result;
          } else {
            var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
              enumerable: true,
              configurable: true,
              get: function get() {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
              },
              set: function set(value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
              }
            });
            var req = new XMLHttpRequest();

            var detectFunc = function detectFunc() {};

            req.onreadystatechange = detectFunc;
            var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
            req.onreadystatechange = null;
            return result;
          }
        } // Whenever any eventListener fires, we check the eventListener target and all parents
        // for `onwhatever` properties and replace them with zone-bound functions
        // - Chrome (for now)


        function patchViaCapturingAllTheEvents(api) {
          var eventNames = api.getGlobalObjects().eventNames;
          var unboundKey = api.symbol('unbound');

          var _loop_1 = function _loop_1(i) {
            var property = eventNames[i];
            var onproperty = 'on' + property;
            self.addEventListener(property, function (event) {
              var elt = event.target,
                  bound,
                  source;

              if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
              } else {
                source = 'unknown.' + onproperty;
              }

              while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                  bound = api.wrapWithCurrentZone(elt[onproperty], source);
                  bound[unboundKey] = elt[onproperty];
                  elt[onproperty] = bound;
                }

                elt = elt.parentElement;
              }
            }, true);
          };

          for (var i = 0; i < eventNames.length; i++) {
            _loop_1(i);
          }
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function registerElementPatch(_global, api) {
          var _a = api.getGlobalObjects(),
              isBrowser = _a.isBrowser,
              isMix = _a.isMix;

          if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
            return;
          }

          var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
          api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
        }
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        (function (_global) {
          var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

          function __symbol__(name) {
            return symbolPrefix + name;
          }

          _global[__symbol__('legacyPatch')] = function () {
            var Zone = _global['Zone'];

            Zone.__load_patch('defineProperty', function (global, Zone, api) {
              api._redefineProperty = _redefineProperty;
              propertyPatch();
            });

            Zone.__load_patch('registerElement', function (global, Zone, api) {
              registerElementPatch(global, api);
            });

            Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
              eventTargetLegacyPatch(global, api);
              propertyDescriptorLegacyPatch(api, global);
            });
          };
        })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
      });
      /***/

    },

    /***/
    "RK3t":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/indexed-object.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function RK3t(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

      module.exports = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it);
      } : Object;
      /***/
    },

    /***/
    "RN6c":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/host-report-errors.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function RN6c(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = function (a, b) {
        var console = global.console;

        if (console && console.error) {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        }
      };
      /***/

    },

    /***/
    "RNIs":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function RNIs(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var create = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var UNSCOPABLES = wellKnownSymbol('unscopables');
      var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      } // add a key to Array.prototype[@@unscopables]


      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
      /***/

    },

    /***/
    "ROdP":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-regexp.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ROdP(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
      // https://tc39.es/ecma262/#sec-isregexp

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
      };
      /***/

    },

    /***/
    "Rfxz":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.some.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Rfxz(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $some = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").some;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var STRICT_METHOD = arrayMethodIsStrict('some');
      var USES_TO_LENGTH = arrayMethodUsesToLength('some'); // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || !USES_TO_LENGTH
      }, {
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "Rm1S":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.match.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Rm1S(module, exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      "14Sl");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      "iqWW");

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      "FMNM"); // @@match logic


      fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
        return [// `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = requireObjectCoercible(this);
          var matcher = regexp == undefined ? undefined : regexp[MATCH];
          return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        }, // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (regexp) {
          var res = maybeCallNative(nativeMatch, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          if (!rx.global) return regExpExec(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;

          while ((result = regExpExec(rx, S)) !== null) {
            var matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }

          return n === 0 ? null : A;
        }];
      });
      /***/
    },

    /***/
    "SEBh":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/species-constructor.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function SEBh(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
      // https://tc39.es/ecma262/#sec-speciesconstructor

      module.exports = function (O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
      };
      /***/

    },

    /***/
    "STAE":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/native-symbol.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function STAE(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
        // Chrome 38 Symbol has incorrect toString conversion
        // eslint-disable-next-line no-undef
        return !String(Symbol());
      });
      /***/
    },

    /***/
    "SYor":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.trim.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function SYor(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $trim = __webpack_require__(
      /*! ../internals/string-trim */
      "WKiH").trim;

      var forcedStringTrimMethod = __webpack_require__(
      /*! ../internals/string-trim-forced */
      "yNLB"); // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim


      $({
        target: 'String',
        proto: true,
        forced: forcedStringTrimMethod('trim')
      }, {
        trim: function trim() {
          return $trim(this);
        }
      });
      /***/
    },

    /***/
    "T63A":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.entries.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function T63A(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $entries = __webpack_require__(
      /*! ../internals/object-to-array */
      "b1O7").entries; // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries


      $({
        target: 'Object',
        stat: true
      }, {
        entries: function entries(O) {
          return $entries(O);
        }
      });
      /***/
    },

    /***/
    "TFPT":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.sub.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function TFPT(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.sub` method
      // https://tc39.es/ecma262/#sec-string.prototype.sub


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('sub')
      }, {
        sub: function sub() {
          return createHTML(this, 'sub', '', '');
        }
      });
      /***/
    },

    /***/
    "TWNs":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function TWNs(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      "cVYH");

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      "JBy8").f;

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      "ROdP");

      var getFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      "rW0t");

      var stickyHelpers = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      "n3/R");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var setInternalState = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8").set;

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      "JiZb");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var MATCH = wellKnownSymbol('match');
      var NativeRegExp = global.RegExp;
      var RegExpPrototype = NativeRegExp.prototype;
      var re1 = /a/g;
      var re2 = /a/g; // "new" should create a new object, old webkit bug

      var CORRECT_NEW = new NativeRegExp(re1) !== re1;
      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
      var FORCED = DESCRIPTORS && isForced('RegExp', !CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
        re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      })); // `RegExp` constructor
      // https://tc39.es/ecma262/#sec-regexp-constructor

      if (FORCED) {
        var RegExpWrapper = function RegExp(pattern, flags) {
          var thisIsRegExp = this instanceof RegExpWrapper;
          var patternIsRegExp = isRegExp(pattern);
          var flagsAreUndefined = flags === undefined;
          var sticky;

          if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
            return pattern;
          }

          if (CORRECT_NEW) {
            if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
          } else if (pattern instanceof RegExpWrapper) {
            if (flagsAreUndefined) flags = getFlags.call(pattern);
            pattern = pattern.source;
          }

          if (UNSUPPORTED_Y) {
            sticky = !!flags && flags.indexOf('y') > -1;
            if (sticky) flags = flags.replace(/y/g, '');
          }

          var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
          if (UNSUPPORTED_Y && sticky) setInternalState(result, {
            sticky: sticky
          });
          return result;
        };

        var proxy = function proxy(key) {
          key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
            configurable: true,
            get: function get() {
              return NativeRegExp[key];
            },
            set: function set(it) {
              NativeRegExp[key] = it;
            }
          });
        };

        var keys = getOwnPropertyNames(NativeRegExp);
        var index = 0;

        while (keys.length > index) {
          proxy(keys[index++]);
        }

        RegExpPrototype.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype;
        redefine(global, 'RegExp', RegExpWrapper);
      } // https://tc39.es/ecma262/#sec-get-regexp-@@species


      setSpecies('RegExp');
      /***/
    },

    /***/
    "TWQb":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/array-includes.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function TWQb(module, exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh"); // `Array.prototype.{ indexOf, includes }` methods implementation


      var createMethod = function createMethod(IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
      /***/
    },

    /***/
    "TeQF":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.filter.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function TeQF(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $filter = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").filter;

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      "Hd5f");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

      var USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
      }, {
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "TfTi":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/array-from.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function TfTi(module, exports, __webpack_require__) {
      "use strict";

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var callWithSafeIterationClosing = __webpack_require__(
      /*! ../internals/call-with-safe-iteration-closing */
      "m92n");

      var isArrayIteratorMethod = __webpack_require__(
      /*! ../internals/is-array-iterator-method */
      "6VoE");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN");

      var getIteratorMethod = __webpack_require__(
      /*! ../internals/get-iterator-method */
      "NaFW"); // `Array.from` method implementation
      // https://tc39.es/ecma262/#sec-array.from


      module.exports = function from(arrayLike
      /* , mapfn = undefined, thisArg = undefined */
      ) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          result = new C();

          for (; !(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = toLength(O.length);
          result = new C(length);

          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }

        result.length = index;
        return result;
      };
      /***/

    },

    /***/
    "ToJy":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.sort.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function ToJy(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var test = [];
      var nativeSort = test.sort; // IE8-

      var FAILS_ON_UNDEFINED = fails(function () {
        test.sort(undefined);
      }); // V8 bug

      var FAILS_ON_NULL = fails(function () {
        test.sort(null);
      }); // Old WebKit

      var STRICT_METHOD = arrayMethodIsStrict('sort');
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD; // `Array.prototype.sort` method
      // https://tc39.es/ecma262/#sec-array.prototype.sort

      $({
        target: 'Array',
        proto: true,
        forced: FORCED
      }, {
        sort: function sort(comparefn) {
          return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction(comparefn));
        }
      });
      /***/
    },

    /***/
    "Tskq":
    /*!************************************************!*\
      !*** ./node_modules/core-js/modules/es.map.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Tskq(module, exports, __webpack_require__) {
      "use strict";

      var collection = __webpack_require__(
      /*! ../internals/collection */
      "bWFh");

      var collectionStrong = __webpack_require__(
      /*! ../internals/collection-strong */
      "ZWaQ"); // `Map` constructor
      // https://tc39.es/ecma262/#sec-map-objects


      module.exports = collection('Map', function (init) {
        return function Map() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong);
      /***/
    },

    /***/
    "U3f4":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function U3f4(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var objectDefinePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var regExpFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      "rW0t");

      var UNSUPPORTED_Y = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      "n3/R").UNSUPPORTED_Y; // `RegExp.prototype.flags` getter
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


      if (DESCRIPTORS && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
        objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
          configurable: true,
          get: regExpFlags
        });
      }
      /***/

    },

    /***/
    "UMSQ":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/to-length.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function UMSQ(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var min = Math.min; // `ToLength` abstract operation
      // https://tc39.es/ecma262/#sec-tolength

      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };
      /***/

    },

    /***/
    "UTVS":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/internals/has.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function UTVS(module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/

    },

    /***/
    "UesL":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function UesL(module, exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      module.exports = function (hint) {
        if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
          throw TypeError('Incorrect hint');
        }

        return toPrimitive(anObject(this), hint !== 'number');
      };
      /***/

    },

    /***/
    "UxlC":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.replace.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function UxlC(module, exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      "14Sl");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      "iqWW");

      var getSubstitution = __webpack_require__(
      /*! ../internals/get-substitution */
      "DLK6");

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      "FMNM");

      var max = Math.max;
      var min = Math.min;

      var maybeToString = function maybeToString(it) {
        return it === undefined ? it : String(it);
      }; // @@replace logic


      fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
        var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
        return [// `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = requireObjectCoercible(this);
          var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
          return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
        }, // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (regexp, replaceValue) {
          if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
            var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
            if (res.done) return res.value;
          }

          var rx = anObject(regexp);
          var S = String(this);
          var functionalReplace = typeof replaceValue === 'function';
          if (!functionalReplace) replaceValue = String(replaceValue);
          var global = rx.global;

          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }

          var results = [];

          while (true) {
            var result = regExpExec(rx, S);
            if (result === null) break;
            results.push(result);
            if (!global) break;
            var matchStr = String(result[0]);
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          }

          var accumulatedResult = '';
          var nextSourcePosition = 0;

          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = String(result[0]);
            var position = max(min(toInteger(result.index), S.length), 0);
            var captures = []; // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

            for (var j = 1; j < result.length; j++) {
              captures.push(maybeToString(result[j]));
            }

            var namedCaptures = result.groups;

            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S);
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
              var replacement = String(replaceValue.apply(undefined, replacerArgs));
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }

            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
              nextSourcePosition = position + matched.length;
            }
          }

          return accumulatedResult + S.slice(nextSourcePosition);
        }];
      });
      /***/
    },

    /***/
    "Uydy":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.acosh.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Uydy(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var log1p = __webpack_require__(
      /*! ../internals/math-log1p */
      "HsHA");

      var nativeAcosh = Math.acosh;
      var log = Math.log;
      var sqrt = Math.sqrt;
      var LN2 = Math.LN2;
      var FORCED = !nativeAcosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
      || Math.floor(nativeAcosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
      || nativeAcosh(Infinity) != Infinity; // `Math.acosh` method
      // https://tc39.es/ecma262/#sec-math.acosh

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log(x) + LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
      });
      /***/
    },

    /***/
    "VC3L":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.to-precision.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function VC3L(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var thisNumberValue = __webpack_require__(
      /*! ../internals/this-number-value */
      "QIpd");

      var nativeToPrecision = 1.0.toPrecision;
      var FORCED = fails(function () {
        // IE7-
        return nativeToPrecision.call(1, undefined) !== '1';
      }) || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToPrecision.call({});
      }); // `Number.prototype.toPrecision` method
      // https://tc39.es/ecma262/#sec-number.prototype.toprecision

      $({
        target: 'Number',
        proto: true,
        forced: FORCED
      }, {
        toPrecision: function toPrecision(precision) {
          return precision === undefined ? nativeToPrecision.call(thisNumberValue(this)) : nativeToPrecision.call(thisNumberValue(this), precision);
        }
      });
      /***/
    },

    /***/
    "VpIT":
    /*!**************************************************!*\
      !*** ./node_modules/core-js/internals/shared.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function VpIT(module, exports, __webpack_require__) {
      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var store = __webpack_require__(
      /*! ../internals/shared-store */
      "xs3f");

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.8.2',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
      });
      /***/
    },

    /***/
    "Vu81":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/own-keys.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Vu81(module, exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var getOwnPropertyNamesModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      "JBy8");

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      "dBg+");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk"); // all object keys, includes non-enumerable and symbols


      module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
      /***/

    },

    /***/
    "WDsR":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.is-safe-integer.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function WDsR(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isInteger = __webpack_require__(
      /*! ../internals/is-integer */
      "Xol8");

      var abs = Math.abs; // `Number.isSafeInteger` method
      // https://tc39.es/ecma262/#sec-number.issafeinteger

      $({
        target: 'Number',
        stat: true
      }, {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 0x1FFFFFFFFFFFFF;
        }
      });
      /***/
    },

    /***/
    "WJkJ":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/whitespaces.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function WJkJ(module, exports) {
      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      /***/
    },

    /***/
    "WKiH":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/string-trim.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function WKiH(module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      "WJkJ");

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

      var createMethod = function createMethod(TYPE) {
        return function ($this) {
          var string = String(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
      /***/
    },

    /***/
    "WjRb":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function WjRb(module, exports, __webpack_require__) {
      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      "ROdP");

      module.exports = function (it) {
        if (isRegExp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        }

        return it;
      };
      /***/

    },

    /***/
    "XGwC":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function XGwC(module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
      /***/

    },

    /***/
    "XbcX":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function XbcX(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var flattenIntoArray = __webpack_require__(
      /*! ../internals/flatten-into-array */
      "or9q");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      "HAuM");

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      "ZfDv"); // `Array.prototype.flatMap` method
      // https://tc39.es/ecma262/#sec-array.prototype.flatmap


      $({
        target: 'Array',
        proto: true
      }, {
        flatMap: function flatMap(callbackfn
        /* , thisArg */
        ) {
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A;
          aFunction(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          return A;
        }
      });
      /***/
    },

    /***/
    "Xe3L":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.of.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function Xe3L(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN");

      var ISNT_GENERIC = fails(function () {
        function F() {
          /* empty */
        }

        return !(Array.of.call(F) instanceof F);
      }); // `Array.of` method
      // https://tc39.es/ecma262/#sec-array.of
      // WebKit Array.of isn't generic

      $({
        target: 'Array',
        stat: true,
        forced: ISNT_GENERIC
      }, {
        of: function of()
        /* ...args */
        {
          var index = 0;
          var argumentsLength = arguments.length;
          var result = new (typeof this == 'function' ? this : Array)(argumentsLength);

          while (argumentsLength > index) {
            createProperty(result, index, arguments[index++]);
          }

          result.length = argumentsLength;
          return result;
        }
      });
      /***/
    },

    /***/
    "Xol8":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/is-integer.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Xol8(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var floor = Math.floor; // `Number.isInteger` method implementation
      // https://tc39.es/ecma262/#sec-number.isinteger

      module.exports = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      };
      /***/

    },

    /***/
    "YF1G":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-node.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function YF1G(module, exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = classof(global.process) == 'process';
      /***/
    },

    /***/
    "YGK4":
    /*!************************************************!*\
      !*** ./node_modules/core-js/modules/es.set.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function YGK4(module, exports, __webpack_require__) {
      "use strict";

      var collection = __webpack_require__(
      /*! ../internals/collection */
      "bWFh");

      var collectionStrong = __webpack_require__(
      /*! ../internals/collection-strong */
      "ZWaQ"); // `Set` constructor
      // https://tc39.es/ecma262/#sec-set-objects


      module.exports = collection('Set', function (init) {
        return function Set() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong);
      /***/
    },

    /***/
    "YNrV":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/object-assign.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function YNrV(module, exports, __webpack_require__) {
      "use strict";

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      "33Wh");

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      "dBg+");

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      "0eef");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      "RK3t");

      var nativeAssign = Object.assign;
      var defineProperty = Object.defineProperty; // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign

      module.exports = !nativeAssign || fails(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS && nativeAssign({
          b: 1
        }, nativeAssign(defineProperty({}, 'a', {
          enumerable: true,
          get: function get() {
            defineProperty(this, 'b', {
              value: 3,
              enumerable: false
            });
          }
        }), {
          b: 2
        })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

        var A = {};
        var B = {}; // eslint-disable-next-line no-undef

        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) {
          B[chr] = chr;
        });
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;

        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;

          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
          }
        }

        return T;
      } : nativeAssign;
      /***/
    },

    /***/
    "ZOXb":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/date-to-iso-string.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function ZOXb(module, exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var padStart = __webpack_require__(
      /*! ../internals/string-pad */
      "DMt2").start;

      var abs = Math.abs;
      var DatePrototype = Date.prototype;
      var getTime = DatePrototype.getTime;
      var nativeDateToISOString = DatePrototype.toISOString; // `Date.prototype.toISOString` method implementation
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit fails here:

      module.exports = fails(function () {
        return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
      }) || !fails(function () {
        nativeDateToISOString.call(new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
        var date = this;
        var year = date.getUTCFullYear();
        var milliseconds = date.getUTCMilliseconds();
        var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
        return sign + padStart(abs(year), sign ? 6 : 4, 0) + '-' + padStart(date.getUTCMonth() + 1, 2, 0) + '-' + padStart(date.getUTCDate(), 2, 0) + 'T' + padStart(date.getUTCHours(), 2, 0) + ':' + padStart(date.getUTCMinutes(), 2, 0) + ':' + padStart(date.getUTCSeconds(), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
      } : nativeDateToISOString;
      /***/
    },

    /***/
    "ZUd8":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/string-multibyte.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function ZUd8(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF"); // `String.prototype.{ codePointAt, at }` methods implementation


      var createMethod = function createMethod(CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
          first = S.charCodeAt(position);
          return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
      };

      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
      /***/
    },

    /***/
    "ZWaQ":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/collection-strong.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function ZWaQ(module, exports, __webpack_require__) {
      "use strict";

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var create = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY");

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      "4syw");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      "GarU");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      "fdAy");

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      "JiZb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var fastKey = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa").fastKey;

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module.exports = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create(null),
              first: undefined,
              last: undefined,
              size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index; // change existing entry

            if (entry) {
              entry.value = value; // create new entry
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key: key,
                value: value,
                previous: previous = state.last,
                next: undefined,
                removed: false
              };
              if (!state.first) state.first = entry;
              if (previous) previous.next = entry;
              if (DESCRIPTORS) state.size++;else that.size++; // add to index

              if (index !== 'F') state.index[index] = entry;
            }

            return that;
          };

          var getEntry = function getEntry(that, key) {
            var state = getInternalState(that); // fast case

            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index]; // frozen object case

            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key) return entry;
            }
          };

          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;

              while (entry) {
                entry.removed = true;
                if (entry.previous) entry.previous = entry.previous.next = undefined;
                delete data[entry.index];
                entry = entry.next;
              }

              state.first = state.last = undefined;
              if (DESCRIPTORS) state.size = 0;else that.size = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            'delete': function _delete(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);

              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev) prev.next = next;
                if (next) next.previous = prev;
                if (state.first == entry) state.first = next;
                if (state.last == entry) state.last = prev;
                if (DESCRIPTORS) state.size--;else that.size--;
              }

              return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn
            /* , that = undefined */
            ) {
              var state = getInternalState(this);
              var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
              var entry;

              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this); // revert to the last existing entry

                while (entry && entry.removed) {
                  entry = entry.previous;
                }
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
              return define(this, key === 0 ? 0 : key, value);
            }
          } : {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
              return define(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
            get: function get() {
              return getInternalState(this).size;
            }
          });
          return C;
        },
        setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
          // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

          defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind: kind,
              last: undefined
            });
          }, function () {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last; // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            } // get next entry


            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              // or finish the iteration
              state.target = undefined;
              return {
                value: undefined,
                done: true
              };
            } // return step by kind


            if (kind == 'keys') return {
              value: entry.key,
              done: false
            };
            if (kind == 'values') return {
              value: entry.value,
              done: false
            };
            return {
              value: [entry.key, entry.value],
              done: false
            };
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

          setSpecies(CONSTRUCTOR_NAME);
        }
      };
      /***/
    },

    /***/
    "ZfDv":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/array-species-create.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function ZfDv(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
      // https://tc39.es/ecma262/#sec-arrayspeciescreate

      module.exports = function (originalArray, length) {
        var C;

        if (isArray(originalArray)) {
          C = originalArray.constructor; // cross-realm fallback

          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }

        return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };
      /***/

    },

    /***/
    "Zk8X":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.sup.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Zk8X(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.sup` method
      // https://tc39.es/ecma262/#sec-string.prototype.sup


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('sup')
      }, {
        sup: function sup() {
          return createHTML(this, 'sup', '', '');
        }
      });
      /***/
    },

    /***/
    "a57n":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.search.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function a57n(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.search` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.search


      defineWellKnownSymbol('search');
      /***/
    },

    /***/
    "a5NK":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.log10.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function a5NK(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var log = Math.log;
      var LOG10E = Math.LOG10E; // `Math.log10` method
      // https://tc39.es/ecma262/#sec-math.log10

      $({
        target: 'Math',
        stat: true
      }, {
        log10: function log10(x) {
          return log(x) * LOG10E;
        }
      });
      /***/
    },

    /***/
    "afO8":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/internal-state.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function afO8(module, exports, __webpack_require__) {
      var NATIVE_WEAK_MAP = __webpack_require__(
      /*! ../internals/native-weak-map */
      "f5p1");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var objectHas = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var shared = __webpack_require__(
      /*! ../internals/shared-store */
      "xs3f");

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      "93I0");

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      "0BK2");

      var WeakMap = global.WeakMap;
      var set, get, has;

      var enforce = function enforce(it) {
        return has(it) ? get(it) : set(it, {});
      };

      var getterFor = function getterFor(TYPE) {
        return function (it) {
          var state;

          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          }

          return state;
        };
      };

      if (NATIVE_WEAK_MAP) {
        var store = shared.state || (shared.state = new WeakMap());
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;

        set = function set(it, metadata) {
          metadata.facade = it;
          wmset.call(store, it, metadata);
          return metadata;
        };

        get = function get(it) {
          return wmget.call(store, it) || {};
        };

        has = function has(it) {
          return wmhas.call(store, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;

        set = function set(it, metadata) {
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };

        get = function get(it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };

        has = function has(it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
      };
      /***/
    },

    /***/
    "b1O7":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/object-to-array.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function b1O7(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      "33Wh");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var propertyIsEnumerable = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      "0eef").f; // `Object.{ entries, values }` methods implementation


      var createMethod = function createMethod(TO_ENTRIES) {
        return function (it) {
          var O = toIndexedObject(it);
          var keys = objectKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;

          while (length > i) {
            key = keys[i++];

            if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
              result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
            }
          }

          return result;
        };
      };

      module.exports = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
      };
      /***/
    },

    /***/
    "bWFh":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/collection.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function bWFh(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var InternalMetadataModule = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      "GarU");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      "HH4o");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      "cVYH");

      module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
        var ADDER = IS_MAP ? 'set' : 'add';
        var NativeConstructor = global[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};

        var fixMethod = function fixMethod(KEY) {
          var nativeMethod = NativePrototype[KEY];
          redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          });
        }; // eslint-disable-next-line max-len


        if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next();
        })))) {
          // create collection constructor
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.REQUIRED = true;
        } else if (isForced(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor(); // early implementations not supports chaining

          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

          var THROWS_ON_PRIMITIVES = fails(function () {
            instance.has(1);
          }); // most early implementations doesn't supports iterables, most modern - not close it correctly
          // eslint-disable-next-line no-new

          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
            new NativeConstructor(iterable);
          }); // for early implementations -0 and +0 not the same

          var BUGGY_ZERO = !IS_WEAK && fails(function () {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;

            while (index--) {
              $instance[ADDER](index, index);
            }

            return !$instance.has(-0);
          });

          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function (dummy, iterable) {
              anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
              });
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }

          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
          }

          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

          if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
        }

        exported[CONSTRUCTOR_NAME] = Constructor;
        $({
          global: true,
          forced: Constructor != NativeConstructor
        }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
      /***/

    },

    /***/
    "biPl":
    /*!********************************************************!*\
      !*** ./node_modules/image-capture/src/imagecapture.js ***!
      \********************************************************/

    /*! exports provided: ImageCapture */

    /***/
    function biPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageCapture", function () {
        return ImageCapture;
      });
      /**
       * MediaStream ImageCapture polyfill
       *
       * @license
       * Copyright 2018 Google Inc.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ImageCapture = window.ImageCapture;

      if (typeof ImageCapture === 'undefined') {
        ImageCapture = /*#__PURE__*/function () {
          /**
           * TODO https://www.w3.org/TR/image-capture/#constructors
           *
           * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
           */
          function ImageCapture(videoStreamTrack) {
            var _this = this;

            _classCallCheck(this, ImageCapture);

            if (videoStreamTrack.kind !== 'video') throw new DOMException('NotSupportedError');
            this._videoStreamTrack = videoStreamTrack;

            if (!('readyState' in this._videoStreamTrack)) {
              // Polyfill for Firefox
              this._videoStreamTrack.readyState = 'live';
            } // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512


            this._previewStream = new MediaStream([videoStreamTrack]);
            this.videoElement = document.createElement('video');
            this.videoElementPlaying = new Promise(function (resolve) {
              _this.videoElement.addEventListener('playing', resolve);
            });

            if (HTMLMediaElement) {
              this.videoElement.srcObject = this._previewStream; // Safari 11 doesn't allow use of createObjectURL for MediaStream
            } else {
              this.videoElement.src = URL.createObjectURL(this._previewStream);
            }

            this.videoElement.muted = true;
            this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784

            this.videoElement.play();
            this.canvasElement = document.createElement('canvas'); // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

            this.canvas2dContext = this.canvasElement.getContext('2d');
          }
          /**
           * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
           * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
           */


          _createClass(ImageCapture, [{
            key: "videoStreamTrack",
            get: function get() {
              return this._videoStreamTrack;
            }
            /**
             * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
             * @return {Promise<PhotoCapabilities>} Fulfilled promise with
             * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
             * object on success, rejected promise on failure
             */

          }, {
            key: "getPhotoCapabilities",
            value: function getPhotoCapabilities() {
              return new Promise(function executorGPC(resolve, reject) {
                // TODO see https://github.com/w3c/mediacapture-image/issues/97
                var MediaSettingsRange = {
                  current: 0,
                  min: 0,
                  max: 0
                };
                resolve({
                  exposureCompensation: MediaSettingsRange,
                  exposureMode: 'none',
                  fillLightMode: 'none',
                  focusMode: 'none',
                  imageHeight: MediaSettingsRange,
                  imageWidth: MediaSettingsRange,
                  iso: MediaSettingsRange,
                  redEyeReduction: false,
                  whiteBalanceMode: 'none',
                  zoom: MediaSettingsRange
                });
                reject(new DOMException('OperationError'));
              });
            }
            /**
             * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
             * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
             * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
             */

          }, {
            key: "setOptions",
            value: function setOptions() {
              var photoSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return new Promise(function executorSO(resolve, reject) {// TODO
              });
            }
            /**
             * TODO
             * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
             * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
             * argument on success; rejected promise on failure
             */

          }, {
            key: "takePhoto",
            value: function takePhoto() {
              var self = this;
              return new Promise(function executorTP(resolve, reject) {
                // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
                // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
                if (self._videoStreamTrack.readyState !== 'live') {
                  return reject(new DOMException('InvalidStateError'));
                }

                self.videoElementPlaying.then(function () {
                  try {
                    self.canvasElement.width = self.videoElement.videoWidth;
                    self.canvasElement.height = self.videoElement.videoHeight;
                    self.canvas2dContext.drawImage(self.videoElement, 0, 0);
                    self.canvasElement.toBlob(resolve);
                  } catch (error) {
                    reject(new DOMException('UnknownError'));
                  }
                });
              });
            }
            /**
             * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
             * @return {Promise<ImageBitmap>} Fulfilled promise with
             * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
             * argument on success; rejected promise on failure
             */

          }, {
            key: "grabFrame",
            value: function grabFrame() {
              var self = this;
              return new Promise(function executorGF(resolve, reject) {
                // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
                // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
                if (self._videoStreamTrack.readyState !== 'live') {
                  return reject(new DOMException('InvalidStateError'));
                }

                self.videoElementPlaying.then(function () {
                  try {
                    self.canvasElement.width = self.videoElement.videoWidth;
                    self.canvasElement.height = self.videoElement.videoHeight;
                    self.canvas2dContext.drawImage(self.videoElement, 0, 0); // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE

                    resolve(window.createImageBitmap(self.canvasElement));
                  } catch (error) {
                    reject(new DOMException('UnknownError'));
                  }
                });
              });
            }
          }]);

          return ImageCapture;
        }();
      }

      window.ImageCapture = ImageCapture;
      /***/
    },

    /***/
    "brp2":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.now.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function brp2(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb"); // `Date.now` method
      // https://tc39.es/ecma262/#sec-date.now


      $({
        target: 'Date',
        stat: true
      }, {
        now: function now() {
          return new Date().getTime();
        }
      });
      /***/
    },

    /***/
    "busE":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/redefine.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function busE(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      "zk60");

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      "iSVu");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split('String');
      (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var state;

        if (typeof value == 'function') {
          if (typeof key == 'string' && !has(value, 'name')) {
            createNonEnumerableProperty(value, 'name', key);
          }

          state = enforceInternalState(value);

          if (!state.source) {
            state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }
        }

        if (O === global) {
          if (simple) O[key] = value;else setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }

        if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
      });
      /***/
    },

    /***/
    "cDke":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.get-own-property-names.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function cDke(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var nativeGetOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names-external */
      "BX/b").f;

      var FAILS_ON_PRIMITIVES = fails(function () {
        return !Object.getOwnPropertyNames(1);
      }); // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        getOwnPropertyNames: nativeGetOwnPropertyNames
      });
      /***/
    },

    /***/
    "cVYH":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function cVYH(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      "0rvr"); // makes subclassing work correct for wrapped built-ins


      module.exports = function ($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if ( // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
      /***/

    },

    /***/
    "dBg+":
    /*!***************************************************************************!*\
      !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function dBg(module, exports) {
      exports.f = Object.getOwnPropertySymbols;
      /***/
    },

    /***/
    "dG/n":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function dGN(module, exports, __webpack_require__) {
      var path = __webpack_require__(
      /*! ../internals/path */
      "Qo9l");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var wrappedWellKnownSymbolModule = __webpack_require__(
      /*! ../internals/well-known-symbol-wrapped */
      "5Tg+");

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      module.exports = function (NAME) {
        var Symbol = path.Symbol || (path.Symbol = {});
        if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        });
      };
      /***/

    },

    /***/
    "eDl+":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function eDl(module, exports) {
      // IE8- don't enum bug keys
      module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
      /***/
    },

    /***/
    "eJiR":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.tanh.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function eJiR(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      "jrUv");

      var exp = Math.exp; // `Math.tanh` method
      // https://tc39.es/ecma262/#sec-math.tanh

      $({
        target: 'Math',
        stat: true
      }, {
        tanh: function tanh(x) {
          var a = expm1(x = +x);
          var b = expm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        }
      });
      /***/
    },

    /***/
    "eajv":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.asinh.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function eajv(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var nativeAsinh = Math.asinh;
      var log = Math.log;
      var sqrt = Math.sqrt;

      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
      } // `Math.asinh` method
      // https://tc39.es/ecma262/#sec-math.asinh
      // Tor Browser bug: Math.asinh(0) -> -0


      $({
        target: 'Math',
        stat: true,
        forced: !(nativeAsinh && 1 / nativeAsinh(0) > 0)
      }, {
        asinh: asinh
      });
      /***/
    },

    /***/
    "eoL8":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function eoL8(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var objectDefinePropertyModile = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8"); // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty


      $({
        target: 'Object',
        stat: true,
        forced: !DESCRIPTORS,
        sham: !DESCRIPTORS
      }, {
        defineProperty: objectDefinePropertyModile.f
      });
      /***/
    },

    /***/
    "ewvW":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/to-object.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ewvW(module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF"); // `ToObject` abstract operation
      // https://tc39.es/ecma262/#sec-toobject


      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument));
      };
      /***/

    },

    /***/
    "f5p1":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/native-weak-map.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function f5p1(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      "iSVu");

      var WeakMap = global.WeakMap;
      module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
      /***/
    },

    /***/
    "fHMY":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/object-create.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function fHMY(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var defineProperties = __webpack_require__(
      /*! ../internals/object-define-properties */
      "N+g0");

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      "eDl+");

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      "0BK2");

      var html = __webpack_require__(
      /*! ../internals/html */
      "G+Rx");

      var documentCreateElement = __webpack_require__(
      /*! ../internals/document-create-element */
      "zBJ4");

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      "93I0");

      var GT = '>';
      var LT = '<';
      var PROTOTYPE = 'prototype';
      var SCRIPT = 'script';
      var IE_PROTO = sharedKey('IE_PROTO');

      var EmptyConstructor = function EmptyConstructor() {
        /* empty */
      };

      var scriptTag = function scriptTag(content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
      }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


      var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak

        return temp;
      }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


      var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
      }; // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug


      var activeXDocument;

      var _NullProtoObject = function NullProtoObject() {
        try {
          /* global ActiveXObject */
          activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) {
          /* ignore */
        }

        _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;

        while (length--) {
          delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        }

        return _NullProtoObject();
      };

      hiddenKeys[IE_PROTO] = true; // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = _NullProtoObject();

        return Properties === undefined ? result : defineProperties(result, Properties);
      };
      /***/

    },

    /***/
    "fbCW":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.find.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function fbCW(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $find = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").find;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var FIND = 'find';
      var SKIPS_HOLES = true;
      var USES_TO_LENGTH = arrayMethodUsesToLength(FIND); // Shouldn't skip holes

      if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
      }); // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find

      $({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES || !USES_TO_LENGTH
      }, {
        find: function find(callbackfn
        /* , that = undefined */
        ) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND);
      /***/
    },

    /***/
    "fdAy":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/define-iterator.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function fdAy(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createIteratorConstructor = __webpack_require__(
      /*! ../internals/create-iterator-constructor */
      "ntOU");

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      "4WOD");

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      "0rvr");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      "P4y1");

      var IteratorsCore = __webpack_require__(
      /*! ../internals/iterators-core */
      "rpNk");

      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol('iterator');
      var KEYS = 'keys';
      var VALUES = 'values';
      var ENTRIES = 'entries';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        var getIterationMethod = function getIterationMethod(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };

            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };

            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }

          return function () {
            return new IteratorConstructor(this);
          };
        };

        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY; // fix native

        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            } // Set @@toStringTag to native iterators


            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        } // fix Array#{values, @@iterator}.name in V8 / FF


        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;

          defaultIterator = function values() {
            return nativeIterator.call(this);
          };
        } // define iterator


        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
        }

        Iterators[NAME] = defaultIterator; // export additional methods

        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              redefine(IterablePrototype, KEY, methods[KEY]);
            }
          } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
          }, methods);
        }

        return methods;
      };
      /***/

    },

    /***/
    "fhKU":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/number-parse-float.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function fhKU(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      "WKiH").trim;

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      "WJkJ");

      var $parseFloat = global.parseFloat;
      var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string

      module.exports = FORCED ? function parseFloat(string) {
        var trimmedString = trim(String(string));
        var result = $parseFloat(trimmedString);
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
      } : $parseFloat;
      /***/
    },

    /***/
    "ftKg":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/es/date/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ftKg(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.date.now */
      "brp2");

      __webpack_require__(
      /*! ../../modules/es.date.to-json */
      "9LPj");

      __webpack_require__(
      /*! ../../modules/es.date.to-iso-string */
      "rMz7");

      __webpack_require__(
      /*! ../../modules/es.date.to-string */
      "DQNa");

      __webpack_require__(
      /*! ../../modules/es.date.to-primitive */
      "7+zs");

      var path = __webpack_require__(
      /*! ../../internals/path */
      "Qo9l");

      module.exports = path.Date;
      /***/
    },

    /***/
    "g6v/":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/descriptors.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function g6v(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky"); // Detect IE8's incomplete defineProperty implementation


      module.exports = !fails(function () {
        return Object.defineProperty({}, 1, {
          get: function get() {
            return 7;
          }
        })[1] != 7;
      });
      /***/
    },

    /***/
    "gOCb":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.replace.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function gOCb(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.replace` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.replace


      defineWellKnownSymbol('replace');
      /***/
    },

    /***/
    "gXIK":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function gXIK(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.toPrimitive` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.toprimitive


      defineWellKnownSymbol('toPrimitive');
      /***/
    },

    /***/
    "gbiT":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.unscopables.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function gbiT(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.unscopables` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.unscopables


      defineWellKnownSymbol('unscopables');
      /***/
    },

    /***/
    "gdVl":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/array-fill.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function gdVl(module, exports, __webpack_require__) {
      "use strict";

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ"); // `Array.prototype.fill` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.fill


      module.exports = function fill(value
      /* , start = 0, end = @length */
      ) {
        var O = toObject(this);
        var length = toLength(O.length);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
        var end = argumentsLength > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

        while (endPos > index) {
          O[index++] = value;
        }

        return O;
      };
      /***/

    },

    /***/
    "glrk":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/an-object.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function glrk(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        }

        return it;
      };
      /***/

    },

    /***/
    "hBjN":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/create-property.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function hBjN(module, exports, __webpack_require__) {
      "use strict";

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      "XGwC");

      module.exports = function (object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
      };
      /***/

    },

    /***/
    "hByQ":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.search.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function hByQ(module, exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      "14Sl");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var sameValue = __webpack_require__(
      /*! ../internals/same-value */
      "Ep9I");

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      "FMNM"); // @@search logic


      fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
        return [// `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = requireObjectCoercible(this);
          var searcher = regexp == undefined ? undefined : regexp[SEARCH];
          return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        }, // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          var res = maybeCallNative(nativeSearch, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = regExpExec(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }];
      });
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _zone_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./zone-flags */
      "o3nU");
      /* harmony import */


      var _zone_flags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zone_flags__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var image_capture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! image-capture */
      "biPl");
      /* eslint-disable @typescript-eslint/no-var-requires */

      /* eslint-disable max-len */

      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/guide/browser-support
       */


      var _a, _b;
      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /**
       * By default, zone.js will patch all possible macroTask and DomEvents
       * user can disable parts of macroTask/DomEvents patch by setting following flags
       * because those flags need to be set before `zone.js` being loaded, and webpack
       * will put import in the top of bundle, so user need to create a separate file
       * in this directory (for example: zone-flags.ts), and put the following flags
       * into that file, and then add the following code before importing zone.js.
       * import './zone-flags.ts';
       *
       * The flags allowed in zone-flags.ts are listed here.
       *
       * The following flags will work for all browsers.
       *
       * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
       * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
       * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
       *
       *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
       *  with the following flag, it will bypass `zone.js` patch for IE/Edge
       *
       *  (window as any).__Zone_enable_cross_context_check = true;
       *
       */

      /***************************************************************************************************
       * Zone JS is required by default for Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */
      // RxDB


      window.global = window; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

      global.Buffer = (_a = global.Buffer) !== null && _a !== void 0 ? _a : __webpack_require__(
      /*! buffer */
      "tjlA").Buffer; // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition

      global.process = (_b = global.process) !== null && _b !== void 0 ? _b : __webpack_require__(
      /*! process */
      "8oxB"); // ImageCapture

      /***/
    },

    /***/
    "hXpO":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/create-html.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function hXpO(module, exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
      // https://tc39.es/ecma262/#sec-createhtml

      module.exports = function (string, tag, attribute, value) {
        var S = String(requireObjectCoercible(string));
        var p1 = '<' + tag;
        if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
        return p1 + '>' + S + '</' + tag + '>';
      };
      /***/

    },

    /***/
    "hh1v":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-object.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function hh1v(module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },

    /***/
    "i6QF":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function i6QF(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isInteger = __webpack_require__(
      /*! ../internals/is-integer */
      "Xol8"); // `Number.isInteger` method
      // https://tc39.es/ecma262/#sec-number.isinteger


      $({
        target: 'Number',
        stat: true
      }, {
        isInteger: isInteger
      });
      /***/
    },

    /***/
    "iSVu":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/inspect-source.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function iSVu(module, exports, __webpack_require__) {
      var store = __webpack_require__(
      /*! ../internals/shared-store */
      "xs3f");

      var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

      if (typeof store.inspectSource != 'function') {
        store.inspectSource = function (it) {
          return functionToString.call(it);
        };
      }

      module.exports = store.inspectSource;
      /***/
    },

    /***/
    "inlA":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function inlA(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var nativeEndsWith = ''.endsWith;
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.endsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.endswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        endsWith: function endsWith(searchString
        /* , endPosition = @length */
        ) {
          var that = String(requireObjectCoercible(this));
          notARegExp(searchString);
          var endPosition = arguments.length > 1 ? arguments[1] : undefined;
          var len = toLength(that.length);
          var end = endPosition === undefined ? len : min(toLength(endPosition), len);
          var search = String(searchString);
          return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        }
      });
      /***/
    },

    /***/
    "iqWW":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/advance-string-index.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function iqWW(module, exports, __webpack_require__) {
      "use strict";

      var charAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      "ZUd8").charAt; // `AdvanceStringIndex` abstract operation
      // https://tc39.es/ecma262/#sec-advancestringindex


      module.exports = function (S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };
      /***/

    },

    /***/
    "jrUv":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/math-expm1.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function jrUv(module, exports) {
      var nativeExpm1 = Math.expm1;
      var exp = Math.exp; // `Math.expm1` method implementation
      // https://tc39.es/ecma262/#sec-math.expm1

      module.exports = !nativeExpm1 // Old FF bug
      || nativeExpm1(10) > 22025.465794806719 || nativeExpm1(10) < 22025.4657948067165168 // Tor Browser bug
      || nativeExpm1(-2e-17) != -2e-17 ? function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
      } : nativeExpm1;
      /***/
    },

    /***/
    "jt2F":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.match-all.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function jt2F(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.matchAll` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.matchall


      defineWellKnownSymbol('matchAll');
      /***/
    },

    /***/
    "kNcU":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.log2.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function kNcU(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var log = Math.log;
      var LN2 = Math.LN2; // `Math.log2` method
      // https://tc39.es/ecma262/#sec-math.log2

      $({
        target: 'Math',
        stat: true
      }, {
        log2: function log2(x) {
          return log(x) / LN2;
        }
      });
      /***/
    },

    /***/
    "kOOl":
    /*!***********************************************!*\
      !*** ./node_modules/core-js/internals/uid.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function kOOl(module, exports) {
      var id = 0;
      var postfix = Math.random();

      module.exports = function (key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
      };
      /***/

    },

    /***/
    "kRJp":
    /*!**************************************************************************!*\
      !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function kRJp(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      "XGwC");

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/
    },

    /***/
    "kSko":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.is-nan.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function kSko(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb"); // `Number.isNaN` method
      // https://tc39.es/ecma262/#sec-number.isnan


      $({
        target: 'Number',
        stat: true
      }, {
        isNaN: function isNaN(number) {
          // eslint-disable-next-line no-self-compare
          return number != number;
        }
      });
      /***/
    },

    /***/
    "kVK+":
    /*!***************************************!*\
      !*** ./node_modules/ieee754/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function kVK(module, exports) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;

        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;

        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }

        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);

          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }

          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }

          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;

        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
      /***/

    },

    /***/
    "kmMV":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/regexp-exec.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function kmMV(module, exports, __webpack_require__) {
      "use strict";

      var regexpFlags = __webpack_require__(
      /*! ./regexp-flags */
      "rW0t");

      var stickyHelpers = __webpack_require__(
      /*! ./regexp-sticky-helpers */
      "n3/R");

      var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.

      var nativeReplace = String.prototype.replace;
      var patchedExec = nativeExec;

      var UPDATES_LAST_INDEX_WRONG = function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      }();

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;

          if (sticky) {
            flags = flags.replace('y', '');

            if (flags.indexOf('g') === -1) {
              flags += 'g';
            }

            strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
              source = '(?: ' + source + ')';
              strCopy = ' ' + strCopy;
              charsAdded++;
            } // ^(? + rx + ) is needed, in combination with some str slicing, to
            // simulate the 'y' flag.


            reCopy = new RegExp('^(?:' + source + ')', flags);
          }

          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
          }

          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
          match = nativeExec.call(sticky ? reCopy : re, strCopy);

          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }

          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      module.exports = patchedExec;
      /***/
    },

    /***/
    "l2dK":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.fontcolor.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function l2dK(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.fontcolor` method
      // https://tc39.es/ecma262/#sec-string.prototype.fontcolor


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fontcolor')
      }, {
        fontcolor: function fontcolor(color) {
          return createHTML(this, 'font', 'color', color);
        }
      });
      /***/
    },

    /***/
    "lEou":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function lEou(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.toStringTag` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.tostringtag


      defineWellKnownSymbol('toStringTag');
      /***/
    },

    /***/
    "lMq5":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-forced.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function lMq5(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var replacement = /#|\.prototype\./;

      var isForced = function isForced(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';
      module.exports = isForced;
      /***/
    },

    /***/
    "ls82":
    /*!*****************************************************!*\
      !*** ./node_modules/regenerator-runtime/runtime.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ls82(module, exports, __webpack_require__) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      true ? module.exports : undefined);

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }
      /***/

    },

    /***/
    "m/L8":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/object-define-property.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function mL8(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var IE8_DOM_DEFINE = __webpack_require__(
      /*! ../internals/ie8-dom-define */
      "DPsx");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty

      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return nativeDefineProperty(O, P, Attributes);
        } catch (error) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/
    },

    /***/
    "m92n":
    /*!****************************************************************************!*\
      !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function m92n(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var iteratorClose = __webpack_require__(
      /*! ../internals/iterator-close */
      "KmKo"); // call something on iterator step with safe closing on error


      module.exports = function (iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
        } catch (error) {
          iteratorClose(iterator);
          throw error;
        }
      };
      /***/

    },

    /***/
    "mRH6":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.link.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function mRH6(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.link` method
      // https://tc39.es/ecma262/#sec-string.prototype.link


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('link')
      }, {
        link: function link(url) {
          return createHTML(this, 'a', 'href', url);
        }
      });
      /***/
    },

    /***/
    "ma9I":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.concat.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function ma9I(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN");

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      "ZfDv");

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      "Hd5f");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/679

      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

      var isConcatSpreadable = function isConcatSpreadable(O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };

      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
      // https://tc39.es/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species

      $({
        target: 'Array',
        proto: true,
        forced: FORCED
      }, {
        concat: function concat(arg) {
          // eslint-disable-line no-unused-vars
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;

          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];

            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

              for (k = 0; k < len; k++, n++) {
                if (k in E) createProperty(A, n, E[k]);
              }
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }

          A.length = n;
          return A;
        }
      });
      /***/
    },

    /***/
    "n/mU":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.atanh.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function nMU(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var nativeAtanh = Math.atanh;
      var log = Math.log; // `Math.atanh` method
      // https://tc39.es/ecma262/#sec-math.atanh
      // Tor Browser bug: Math.atanh(-0) -> 0

      $({
        target: 'Math',
        stat: true,
        forced: !(nativeAtanh && 1 / nativeAtanh(-0) < 0)
      }, {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
        }
      });
      /***/
    },

    /***/
    "n3/R":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function n3R(module, exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ./fails */
      "0Dky"); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
      // so we use an intermediate function.


      function RE(s, f) {
        return RegExp(s, f);
      }

      exports.UNSUPPORTED_Y = fails(function () {
        // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
        var re = RE('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
      });
      exports.BROKEN_CARET = fails(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = RE('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
      });
      /***/
    },

    /***/
    "ntOU":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function ntOU(module, exports, __webpack_require__) {
      "use strict";

      var IteratorPrototype = __webpack_require__(
      /*! ../internals/iterators-core */
      "rpNk").IteratorPrototype;

      var create = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY");

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      "XGwC");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      "P4y1");

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = create(IteratorPrototype, {
          next: createPropertyDescriptor(1, next)
        });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
      /***/

    },

    /***/
    "o3nU":
    /*!***************************!*\
      !*** ./src/zone-flags.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function o3nU(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Prevents Angular change detection from
       * running with certain Web Component callbacks
       */

      window.__Zone_disable_customElements = true;
      /***/
    },

    /***/
    "oVuX":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.join.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function oVuX(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      "RK3t");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var nativeJoin = [].join;
      var ES3_STRINGS = IndexedObject != Object;
      var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
      // https://tc39.es/ecma262/#sec-array.prototype.join

      $({
        target: 'Array',
        proto: true,
        forced: ES3_STRINGS || !STRICT_METHOD
      }, {
        join: function join(separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
      });
      /***/
    },

    /***/
    "or9q":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function or9q(module, exports, __webpack_require__) {
      "use strict";

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE"); // `FlattenIntoArray` abstract operation
      // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


      var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
        var element;

        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            if (depth > 0 && isArray(element)) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
              target[targetIndex] = element;
            }

            targetIndex++;
          }

          sourceIndex++;
        }

        return targetIndex;
      };

      module.exports = flattenIntoArray;
      /***/
    },

    /***/
    "pDQq":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.splice.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function pDQq(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      "I8vh");

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      "ZfDv");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN");

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      "Hd5f");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
      var USES_TO_LENGTH = arrayMethodUsesToLength('splice', {
        ACCESSORS: true,
        0: 0,
        1: 2
      });
      var max = Math.max;
      var min = Math.min;
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
      // https://tc39.es/ecma262/#sec-array.prototype.splice
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
      }, {
        splice: function splice(start, deleteCount
        /* , ...items */
        ) {
          var O = toObject(this);
          var len = toLength(O.length);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from, to;

          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
          }

          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }

          A = arraySpeciesCreate(O, actualDeleteCount);

          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
          }

          A.length = actualDeleteCount;

          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O) O[to] = O[from];else delete O[to];
            }

            for (k = len; k > len - actualDeleteCount + insertCount; k--) {
              delete O[k - 1];
            }
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O) O[to] = O[from];else delete O[to];
            }
          }

          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }

          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
      /***/
    },

    /***/
    "pDpN":
    /*!*****************************************************!*\
      !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function pDpN(module, exports, __webpack_require__) {
      "use strict";
      /**
       * @license Angular v12.0.0-next.0
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "__load_patch",
            value: function __load_patch(name, fn) {
              var ignoreDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              if (patches.hasOwnProperty(name)) {
                // `checkDuplicate` option is defined from global variable
                // so it works for all modules.
                // `ignoreDuplicate` can work for the specified module
                if (!ignoreDuplicate && checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate = /*#__PURE__*/function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }, {
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop = function _loop(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop2 = function _loop2() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                if (uncaughtPromiseError.throwOriginal) {
                  throw uncaughtPromiseError.rejection;
                }

                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop2();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                try {
                  // Here we throws a new Error to print more readable error log
                  // and if the value is not an error, zone.js builds an `Error`
                  // Object here to attach the stack information.
                  throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                } catch (err) {
                  uncaughtPromiseError = err;
                }

                if (isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // use the value instead of wrapping it.
                  uncaughtPromiseError.throwOriginal = true;
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise = /*#__PURE__*/function () {
          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }, {
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }], [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this2 = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop3 = function _loop3() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this2.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop3();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];
        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this3 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this3, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function (self, args) {
            var resultPromise = fn.apply(self, args);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          patchMethod(global, 'fetch', function (delegate) {
            return zoneify(delegate);
          });
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (typeof Promise === 'function' && this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (unpatchedEvents) {
                // check upatched list
                for (var i = 0; i < unpatchedEvents.length; i++) {
                  if (eventName === unpatchedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE() ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          data.args[0] = function () {
            return task.invoke.apply(this, arguments);
          };

          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative.call(window, task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var callback = args[0];

              args[0] = function timer() {
                try {
                  return callback.apply(this, arguments);
                } finally {
                  // issue-934, task will be cancelled
                  // even it is a periodic task such as
                  // setInterval
                  // https://github.com/angular/angular/issues/40387
                  // Cleanup tasksByHandleId should be handled before scheduleTask
                  // Since some zoneSpec may intercept and doesn't trigger
                  // scheduleFn(scheduleTask) provided here.
                  if (!_options.isPeriodic) {
                    if (typeof _options.handleId === 'number') {
                      // in non-nodejs env, we remove timerId
                      // from local cache
                      delete tasksByHandleId[_options.handleId];
                    } else if (_options.handleId) {
                      // Node returns complex objects as handleIds
                      // we remove task reference from timer object
                      _options.handleId[taskSymbol] = null;
                    }
                  }
                }
              };

              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
        api.patchMethod(global, 'queueMicrotask', function (delegate) {
          return function (self, args) {
            Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
          };
        });
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
      });

      Zone.__load_patch('MutationObserver', function (global, Zone, api) {
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
      });

      Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
        patchClass('IntersectionObserver');
      });

      Zone.__load_patch('FileReader', function (global, Zone, api) {
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  // Also if the request failed without response (status = 0), the load event handler
                  // will not be triggered, in that case, we should also invoke the placeholder callback
                  // to close the XMLHttpRequest::send macroTask.
                  // https://github.com/angular/angular/issues/38795
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
      /***/

    },

    /***/
    "pLQz":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function pLQz(module, exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
      /***/
    },

    /***/
    "pNMO":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function pNMO(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      "STAE");

      var USE_SYMBOL_AS_UID = __webpack_require__(
      /*! ../internals/use-symbol-as-uid */
      "/b8u");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      "XGwC");

      var nativeObjectCreate = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY");

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      "33Wh");

      var getOwnPropertyNamesModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      "JBy8");

      var getOwnPropertyNamesExternal = __webpack_require__(
      /*! ../internals/object-get-own-property-names-external */
      "BX/b");

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      "dBg+");

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      "0eef");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var shared = __webpack_require__(
      /*! ../internals/shared */
      "VpIT");

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      "93I0");

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      "0BK2");

      var uid = __webpack_require__(
      /*! ../internals/uid */
      "kOOl");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var wrappedWellKnownSymbolModule = __webpack_require__(
      /*! ../internals/well-known-symbol-wrapped */
      "5Tg+");

      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var $forEach = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").forEach;

      var HIDDEN = sharedKey('hidden');
      var SYMBOL = 'Symbol';
      var PROTOTYPE = 'prototype';
      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE];
      var $Symbol = global.Symbol;
      var $stringify = getBuiltIn('JSON', 'stringify');
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
      var AllSymbols = shared('symbols');
      var ObjectPrototypeSymbols = shared('op-symbols');
      var StringToSymbolRegistry = shared('string-to-symbol-registry');
      var SymbolToStringRegistry = shared('symbol-to-string-registry');
      var WellKnownSymbolsStore = shared('wks');
      var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

      var setSymbolDescriptor = DESCRIPTORS && fails(function () {
        return nativeObjectCreate(nativeDefineProperty({}, 'a', {
          get: function get() {
            return nativeDefineProperty(this, 'a', {
              value: 7
            }).a;
          }
        })).a != 7;
      }) ? function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
        nativeDefineProperty(O, P, Attributes);

        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
      } : nativeDefineProperty;

      var wrap = function wrap(tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
        setInternalState(symbol, {
          type: SYMBOL,
          tag: tag,
          description: description
        });
        if (!DESCRIPTORS) symbol.description = description;
        return symbol;
      };

      var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
        return typeof it == 'symbol';
      } : function (it) {
        return Object(it) instanceof $Symbol;
      };

      var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject(O);
        var key = toPrimitive(P, true);
        anObject(Attributes);

        if (has(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
          } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, {
              enumerable: createPropertyDescriptor(0, false)
            });
          }

          return setSymbolDescriptor(O, key, Attributes);
        }

        return nativeDefineProperty(O, key, Attributes);
      };

      var $defineProperties = function defineProperties(O, Properties) {
        anObject(O);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function (key) {
          if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
        });
        return O;
      };

      var $create = function create(O, Properties) {
        return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
      };

      var $propertyIsEnumerable = function propertyIsEnumerable(V) {
        var P = toPrimitive(V, true);
        var enumerable = nativePropertyIsEnumerable.call(this, P);
        if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
        return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
      };

      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject(O);
        var key = toPrimitive(P, true);
        if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);

        if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }

        return descriptor;
      };

      var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
        });
        return result;
      };

      var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key]);
          }
        });
        return result;
      }; // `Symbol` constructor
      // https://tc39.es/ecma262/#sec-symbol-constructor


      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
          var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
          var tag = uid(description);

          var setter = function setter(value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
          };

          if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
          });
          return wrap(tag, description);
        };

        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return getInternalState(this).tag;
        });
        redefine($Symbol, 'withoutSetter', function (description) {
          return wrap(uid(description), description);
        });
        propertyIsEnumerableModule.f = $propertyIsEnumerable;
        definePropertyModule.f = $defineProperty;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

        wrappedWellKnownSymbolModule.f = function (name) {
          return wrap(wellKnownSymbol(name), name);
        };

        if (DESCRIPTORS) {
          // https://github.com/tc39/proposal-Symbol-description
          nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });

          if (!IS_PURE) {
            redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
              unsafe: true
            });
          }
        }
      }

      $({
        global: true,
        wrap: true,
        forced: !NATIVE_SYMBOL,
        sham: !NATIVE_SYMBOL
      }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
        defineWellKnownSymbol(name);
      });
      $({
        target: SYMBOL,
        stat: true,
        forced: !NATIVE_SYMBOL
      }, {
        // `Symbol.for` method
        // https://tc39.es/ecma262/#sec-symbol.for
        'for': function _for(key) {
          var string = String(key);
          if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
          var symbol = $Symbol(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        },
        // `Symbol.keyFor` method
        // https://tc39.es/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
          if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
        },
        useSetter: function useSetter() {
          USE_SETTER = true;
        },
        useSimple: function useSimple() {
          USE_SETTER = false;
        }
      });
      $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_SYMBOL,
        sham: !DESCRIPTORS
      }, {
        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_SYMBOL
      }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
      }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
      // https://bugs.chromium.org/p/v8/issues/detail?id=3443

      $({
        target: 'Object',
        stat: true,
        forced: fails(function () {
          getOwnPropertySymbolsModule.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return getOwnPropertySymbolsModule.f(toObject(it));
        }
      }); // `JSON.stringify` method behavior with symbols
      // https://tc39.es/ecma262/#sec-json.stringify

      if ($stringify) {
        var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
          var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

          return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
          || $stringify({
            a: symbol
          }) != '{}' // V8 throws on boxed symbols
          || $stringify(Object(symbol)) != '{}';
        });
        $({
          target: 'JSON',
          stat: true,
          forced: FORCED_JSON_STRINGIFY
        }, {
          // eslint-disable-next-line no-unused-vars
          stringify: function stringify(it, replacer, space) {
            var args = [it];
            var index = 1;
            var $replacer;

            while (arguments.length > index) {
              args.push(arguments[index++]);
            }

            $replacer = replacer;
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

            if (!isArray(replacer)) replacer = function replacer(key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return $stringify.apply(null, args);
          }
        });
      } // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


      if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
        createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      } // `Symbol.prototype[@@toStringTag]` property
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;
      /***/
    },

    /***/
    "piMb":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.every.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function piMb(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $every = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").every;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var STRICT_METHOD = arrayMethodIsStrict('every');
      var USES_TO_LENGTH = arrayMethodUsesToLength('every'); // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || !USES_TO_LENGTH
      }, {
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "pjDv":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.from.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function pjDv(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var from = __webpack_require__(
      /*! ../internals/array-from */
      "TfTi");

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      "HH4o");

      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        Array.from(iterable);
      }); // `Array.from` method
      // https://tc39.es/ecma262/#sec-array.from

      $({
        target: 'Array',
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        from: from
      });
      /***/
    },

    /***/
    "pkCn":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function pkCn(module, exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      module.exports = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal
          method.call(null, argument || function () {
            throw 1;
          }, 1);
        });
      };
      /***/

    },

    /***/
    "ppGB":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/to-integer.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function ppGB(module, exports) {
      var ceil = Math.ceil;
      var floor = Math.floor; // `ToInteger` abstract operation
      // https://tc39.es/ecma262/#sec-tointeger

      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
      /***/

    },

    /***/
    "qHT+":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.copy-within.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function qHT(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var copyWithin = __webpack_require__(
      /*! ../internals/array-copy-within */
      "FF6l");

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs"); // `Array.prototype.copyWithin` method
      // https://tc39.es/ecma262/#sec-array.prototype.copywithin


      $({
        target: 'Array',
        proto: true
      }, {
        copyWithin: copyWithin
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('copyWithin');
      /***/
    },

    /***/
    "qePV":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function qePV(module, exports, __webpack_require__) {
      "use strict";

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      "cVYH");

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      "wE6v");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var create = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY");

      var getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      "JBy8").f;

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      "WKiH").trim;

      var NUMBER = 'Number';
      var NativeNumber = global[NUMBER];
      var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

      var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
      // https://tc39.es/ecma262/#sec-tonumber

      var toNumber = function toNumber(argument) {
        var it = toPrimitive(argument, false);
        var first, third, radix, maxCode, digits, length, index, code;

        if (typeof it == 'string' && it.length > 2) {
          it = trim(it);
          first = it.charCodeAt(0);

          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              // fast equal of /^0b[01]+$/i

              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              // fast equal of /^0o[0-7]+$/i

              default:
                return +it;
            }

            digits = it.slice(2);
            length = digits.length;

            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols

              if (code < 48 || code > maxCode) return NaN;
            }

            return parseInt(digits, radix);
          }
        }

        return +it;
      }; // `Number` constructor
      // https://tc39.es/ecma262/#sec-number-constructor


      if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number(value) {
          var it = arguments.length < 1 ? 0 : value;
          var dummy = this;
          return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
          && (BROKEN_CLASSOF ? fails(function () {
            NumberPrototype.valueOf.call(dummy);
          }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
        };

        for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : ( // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' + // ESNext
        'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
          if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
          }
        }

        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global, NUMBER, NumberWrapper);
      }
      /***/

    },

    /***/
    "qxPZ":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function qxPZ(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var MATCH = wellKnownSymbol('match');

      module.exports = function (METHOD_NAME) {
        var regexp = /./;

        try {
          '/./'[METHOD_NAME](regexp);
        } catch (error1) {
          try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (error2) {
            /* empty */
          }
        }

        return false;
      };
      /***/

    },

    /***/
    "r/Vq":
    /*!********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.max-safe-integer.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function rVq(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb"); // `Number.MAX_SAFE_INTEGER` constant
      // https://tc39.es/ecma262/#sec-number.max_safe_integer


      $({
        target: 'Number',
        stat: true
      }, {
        MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
      });
      /***/
    },

    /***/
    "r5Og":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.seal.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function r5Og(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa").onFreeze;

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      "uy83");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var nativeSeal = Object.seal;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeSeal(1);
      }); // `Object.seal` method
      // https://tc39.es/ecma262/#sec-object.seal

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        seal: function seal(it) {
          return nativeSeal && isObject(it) ? nativeSeal(onFreeze(it)) : it;
        }
      });
      /***/
    },

    /***/
    "rB9j":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function rB9j(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var exec = __webpack_require__(
      /*! ../internals/regexp-exec */
      "kmMV"); // `RegExp.prototype.exec` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.exec


      $({
        target: 'RegExp',
        proto: true,
        forced: /./.exec !== exec
      }, {
        exec: exec
      });
      /***/
    },

    /***/
    "rKzb":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/collection-weak.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function rKzb(module, exports, __webpack_require__) {
      "use strict";

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      "4syw");

      var getWeakData = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa").getWeakData;

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      "GarU");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var ArrayIterationModule = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR");

      var $has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      var find = ArrayIterationModule.find;
      var findIndex = ArrayIterationModule.findIndex;
      var id = 0; // fallback for uncaught frozen keys

      var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
        return store.frozen || (store.frozen = new UncaughtFrozenStore());
      };

      var UncaughtFrozenStore = function UncaughtFrozenStore() {
        this.entries = [];
      };

      var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
        return find(store.entries, function (it) {
          return it[0] === key;
        });
      };

      UncaughtFrozenStore.prototype = {
        get: function get(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) return entry[1];
        },
        has: function has(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function set(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) entry[1] = value;else this.entries.push([key, value]);
        },
        'delete': function _delete(key) {
          var index = findIndex(this.entries, function (it) {
            return it[0] === key;
          });
          if (~index) this.entries.splice(index, 1);
          return !!~index;
        }
      };
      module.exports = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              id: id++,
              frozen: undefined
            });
            if (iterable != undefined) iterate(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
            return that;
          };

          redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            'delete': function _delete(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state)['delete'](key);
              return data && $has(data, state.id) && delete data[state.id];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state).has(key);
              return data && $has(data, state.id);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // 23.3.3.3 WeakMap.prototype.get(key)
            get: function get(key) {
              var state = getInternalState(this);

              if (isObject(key)) {
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).get(key);
                return data ? data[state.id] : undefined;
              }
            },
            // 23.3.3.5 WeakMap.prototype.set(key, value)
            set: function set(key, value) {
              return define(this, key, value);
            }
          } : {
            // 23.4.3.1 WeakSet.prototype.add(value)
            add: function add(value) {
              return define(this, value, true);
            }
          });
          return C;
        }
      };
      /***/
    },

    /***/
    "rMz7":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.date.to-iso-string.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function rMz7(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toISOString = __webpack_require__(
      /*! ../internals/date-to-iso-string */
      "ZOXb"); // `Date.prototype.toISOString` method
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit has a broken implementations


      $({
        target: 'Date',
        proto: true,
        forced: Date.prototype.toISOString !== toISOString
      }, {
        toISOString: toISOString
      });
      /***/
    },

    /***/
    "rNhl":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.parse-float.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function rNhl(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var parseFloatImplementation = __webpack_require__(
      /*! ../internals/number-parse-float */
      "fhKU"); // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string


      $({
        global: true,
        forced: parseFloat != parseFloatImplementation
      }, {
        parseFloat: parseFloatImplementation
      });
      /***/
    },

    /***/
    "rW0t":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/regexp-flags.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function rW0t(module, exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk"); // `RegExp.prototype.flags` getter implementation
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


      module.exports = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
      /***/

    },

    /***/
    "rkAj":
    /*!***********************************************************************!*\
      !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function rkAj(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var defineProperty = Object.defineProperty;
      var cache = {};

      var thrower = function thrower(it) {
        throw it;
      };

      module.exports = function (METHOD_NAME, options) {
        if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
        if (!options) options = {};
        var method = [][METHOD_NAME];
        var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
        var argument0 = has(options, 0) ? options[0] : thrower;
        var argument1 = has(options, 1) ? options[1] : undefined;
        return cache[METHOD_NAME] = !!method && !fails(function () {
          if (ACCESSORS && !DESCRIPTORS) return true;
          var O = {
            length: -1
          };
          if (ACCESSORS) defineProperty(O, 1, {
            enumerable: true,
            get: thrower
          });else O[1] = 1;
          method.call(O, argument0, argument1);
        });
      };
      /***/

    },

    /***/
    "rpNk":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/internals/iterators-core.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function rpNk(module, exports, __webpack_require__) {
      "use strict";

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      "4WOD");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var ITERATOR = wellKnownSymbol('iterator');
      var BUGGY_SAFARI_ITERATORS = false;

      var returnThis = function returnThis() {
        return this;
      }; // `%IteratorPrototype%` object
      // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


      var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

      if ([].keys) {
        arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }

      if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

      if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
      }

      module.exports = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
      };
      /***/
    },

    /***/
    "rwPt":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/string-html-forced.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function rwPt(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky"); // check the existence of a method, lowercase
      // of a tag and escaping quotes in arguments


      module.exports = function (METHOD_NAME) {
        return fails(function () {
          var test = ''[METHOD_NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        });
      };
      /***/

    },

    /***/
    "sEFX":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/object-to-string.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function sEFX(module, exports, __webpack_require__) {
      "use strict";

      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      "AO7/");

      var classof = __webpack_require__(
      /*! ../internals/classof */
      "9d/t"); // `Object.prototype.toString` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.tostring


      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
      };
      /***/
    },

    /***/
    "sMBO":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.function.name.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function sMBO(module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8").f;

      var FunctionPrototype = Function.prototype;
      var FunctionPrototypeToString = FunctionPrototype.toString;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = 'name'; // Function instances `.name` property
      // https://tc39.es/ecma262/#sec-function-instances-name

      if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
        defineProperty(FunctionPrototype, NAME, {
          configurable: true,
          get: function get() {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1];
            } catch (error) {
              return '';
            }
          }
        });
      }
      /***/

    },

    /***/
    "tW5y":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.function.has-instance.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function tW5y(module, exports, __webpack_require__) {
      "use strict";

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      "4WOD");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var HAS_INSTANCE = wellKnownSymbol('hasInstance');
      var FunctionPrototype = Function.prototype; // `Function.prototype[@@hasInstance]` method
      // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance

      if (!(HAS_INSTANCE in FunctionPrototype)) {
        definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
          value: function value(O) {
            if (typeof this != 'function' || !isObject(O)) return false;
            if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

            while (O = getPrototypeOf(O)) {
              if (this.prototype === O) return true;
            }

            return false;
          }
        });
      }
      /***/

    },

    /***/
    "tXUg":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/microtask.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function tXUg(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var macrotask = __webpack_require__(
      /*! ../internals/task */
      "LPSS").set;

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      "HNyW");

      var IS_WEBOS_WEBKIT = __webpack_require__(
      /*! ../internals/engine-is-webos-webkit */
      "pLQz");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
      var document = global.document;
      var process = global.process;
      var Promise = global.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

      if (!queueMicrotask) {
        flush = function flush() {
          var parent, fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();

          while (head) {
            fn = head.fn;
            head = head.next;

            try {
              fn();
            } catch (error) {
              if (head) notify();else last = undefined;
              throw error;
            }
          }

          last = undefined;
          if (parent) parent.enter();
        }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, {
            characterData: true
          });

          notify = function notify() {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise.resolve(undefined);
          then = promise.then;

          notify = function notify() {
            then.call(promise, flush);
          }; // Node.js without promises

        } else if (IS_NODE) {
          notify = function notify() {
            process.nextTick(flush);
          }; // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout

        } else {
          notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }
      }

      module.exports = queueMicrotask || function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;

        if (!head) {
          head = task;
          notify();
        }

        last = task;
      };
      /***/

    },

    /***/
    "tiKp":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function tiKp(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var shared = __webpack_require__(
      /*! ../internals/shared */
      "VpIT");

      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var uid = __webpack_require__(
      /*! ../internals/uid */
      "kOOl");

      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      "STAE");

      var USE_SYMBOL_AS_UID = __webpack_require__(
      /*! ../internals/use-symbol-as-uid */
      "/b8u");

      var WellKnownSymbolsStore = shared('wks');
      var Symbol = global.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

      module.exports = function (name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
        }

        return WellKnownSymbolsStore[name];
      };
      /***/

    },

    /***/
    "tjZM":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function tjZM(module, exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      "dG/n"); // `Symbol.asyncIterator` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.asynciterator


      defineWellKnownSymbol('asyncIterator');
      /***/
    },

    /***/
    "tjlA":
    /*!**************************************!*\
      !*** ./node_modules/buffer/index.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function tjlA(module, exports, __webpack_require__) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */

      /* eslint-disable no-proto */

      var base64 = __webpack_require__(
      /*! base64-js */
      "H7XF");

      var ieee754 = __webpack_require__(
      /*! ieee754 */
      "kVK+");

      var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? // eslint-disable-line dot-notation
      Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
      : null;
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;
      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Print warning and recommend using `buffer` v4.x which has an Object
       *               implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * We report that the browser does not support typed arrays if the are not subclassable
       * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
       * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
       * for __proto__ and has a buggy typed array implementation.
       */

      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }

      function typedArraySupport() {
        // Can typed array instances can be augmented?
        try {
          var arr = new Uint8Array(1);
          var proto = {
            foo: function foo() {
              return 42;
            }
          };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.byteOffset;
        }
      });

      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        } // Return an augmented `Uint8Array` instance


        var buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }
      /**
       * The Buffer constructor returns instances of `Uint8Array` that have their
       * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
       * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
       * and the `Uint8Array` methods. Square bracket notation works as expected -- it
       * returns a single octet.
       *
       * The `Uint8Array` prototype remains unmodified.
       */


      function Buffer(arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
          }

          return allocUnsafe(arg);
        }

        return from(arg, encodingOrOffset, length);
      }

      Buffer.poolSize = 8192; // not used by this implementation

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }

        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }

        if (value == null) {
          throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
        }

        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof value === 'number') {
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }

        var valueOf = value.valueOf && value.valueOf();

        if (valueOf != null && valueOf !== value) {
          return Buffer.from(valueOf, encodingOrOffset, length);
        }

        var b = fromObject(value);
        if (b) return b;

        if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
          return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
        }

        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
      }
      /**
       * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
       * if value is a number.
       * Buffer.from(str[, encoding])
       * Buffer.from(array)
       * Buffer.from(buffer)
       * Buffer.from(arrayBuffer[, byteOffset[, length]])
       **/


      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      }; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
      // https://github.com/feross/buffer/pull/148


      Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer, Uint8Array);

      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }

      function alloc(size, fill, encoding) {
        assertSize(size);

        if (size <= 0) {
          return createBuffer(size);
        }

        if (fill !== undefined) {
          // Only pay attention to encoding if it's a string. This
          // prevents accidentally sending in a number that would
          // be interpreted as a start offset.
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }

        return createBuffer(size);
      }
      /**
       * Creates a new filled Buffer instance.
       * alloc(size[, fill[, encoding]])
       **/


      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };

      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      /**
       * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
       * */


      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };
      /**
       * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
       */


      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };

      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }

        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }

        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);
        var actual = buf.write(string, encoding);

        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);

        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }

        return buf;
      }

      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          var copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }

        return fromArrayLike(arrayView);
      }

      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }

        var buf;

        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        } // Return an augmented `Uint8Array` instance


        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }

      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj.length !== undefined) {
          if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }

          return fromArrayLike(obj);
        }

        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }

      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }

        return length | 0;
      }

      function SlowBuffer(length) {
        if (+length != length) {
          // eslint-disable-line eqeqeq
          length = 0;
        }

        return Buffer.alloc(+length);
      }

      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
      };

      Buffer.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }

        if (a === b) return 0;
        var x = a.length;
        var y = b.length;

        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;

          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return Buffer.alloc(0);
        }

        var i;

        if (length === undefined) {
          length = 0;

          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;

        for (i = 0; i < list.length; ++i) {
          var buf = list[i];

          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(buffer, buf, pos);
            }
          } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }

          pos += buf.length;
        }

        return buffer;
      };

      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }

        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }

        if (typeof string !== 'string') {
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
        }

        var len = string.length;
        var mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;

            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(string).length;

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;

            case 'hex':
              return len >>> 1;

            case 'base64':
              return base64ToBytes(string).length;

            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
              }

              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }

      Buffer.byteLength = byteLength;

      function slowToString(encoding, start, end) {
        var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.
        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

        if (start === undefined || start < 0) {
          start = 0;
        } // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.


        if (start > this.length) {
          return '';
        }

        if (end === undefined || end > this.length) {
          end = this.length;
        }

        if (end <= 0) {
          return '';
        } // Force coercion to uint32. This will also coerce falsey/NaN values to 0.


        end >>>= 0;
        start >>>= 0;

        if (end <= start) {
          return '';
        }

        if (!encoding) encoding = 'utf8';

        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);

            case 'ascii':
              return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);

            case 'base64':
              return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      } // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
      // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
      // reliably in a browserify context because there could be multiple different
      // copies of the 'buffer' package in use. This method works even for Buffer
      // instances that were created from another copy of the `buffer` package.
      // See: https://github.com/feross/buffer/issues/154


      Buffer.prototype._isBuffer = true;

      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }

      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;

        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }

        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }

        return this;
      };

      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;

        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }

        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }

        return this;
      };

      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;

        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }

        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }

        return this;
      };

      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.toLocaleString = Buffer.prototype.toString;

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
        if (this.length > max) str += ' ... ';
        return '<Buffer ' + str + '>';
      };

      if (customInspectSymbol) {
        Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
      }

      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer.from(target, target.offset, target.byteLength);
        }

        if (!Buffer.isBuffer(target)) {
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
        }

        if (start === undefined) {
          start = 0;
        }

        if (end === undefined) {
          end = target ? target.length : 0;
        }

        if (thisStart === undefined) {
          thisStart = 0;
        }

        if (thisEnd === undefined) {
          thisEnd = this.length;
        }

        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }

        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }

        if (thisStart >= thisEnd) {
          return -1;
        }

        if (start >= end) {
          return 1;
        }

        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);

        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
      // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
      //
      // Arguments:
      // - buffer - a Buffer to search
      // - val - a string, Buffer, or number
      // - byteOffset - an index into `buffer`; will be clamped to an int32
      // - encoding - an optional encoding, relevant is val is a string
      // - dir - true for indexOf, false for lastIndexOf


      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1; // Normalize byteOffset

        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }

        byteOffset = +byteOffset; // Coerce to Number.

        if (numberIsNaN(byteOffset)) {
          // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
          byteOffset = dir ? 0 : buffer.length - 1;
        } // Normalize byteOffset: negative offsets start from the end of the buffer


        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        } // Normalize val


        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        } // Finally, search either indexOf (if dir is true) or lastIndexOf


        if (Buffer.isBuffer(val)) {
          // Special case: looking for empty string/buffer always fails
          if (val.length === 0) {
            return -1;
          }

          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF; // Search for a byte value [0-255]

          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }

          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }

        throw new TypeError('val must be string, number or Buffer');
      }

      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;

        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();

          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }

            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }

        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }

        var i;

        if (dir) {
          var foundIndex = -1;

          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

          for (i = byteOffset; i >= 0; i--) {
            var found = true;

            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }

            if (found) return i;
          }
        }

        return -1;
      }

      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };

      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };

      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;

        if (!length) {
          length = remaining;
        } else {
          length = Number(length);

          if (length > remaining) {
            length = remaining;
          }
        }

        var strLen = string.length;

        if (length > strLen / 2) {
          length = strLen / 2;
        }

        var i;

        for (i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }

        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }

      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }

      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }

      Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0; // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0; // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
          offset = offset >>> 0;

          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';
        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
            case 'latin1':
            case 'binary':
              return asciiWrite(this, string, offset, length);

            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;

        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

          if (i + bytesPerSequence <= end) {
            var secondByte = void 0,
                thirdByte = void 0,
                fourthByte = void 0,
                tempCodePoint = void 0;

            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }

                break;

              case 2:
                secondByte = buf[i + 1];

                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }

            }
          }

          if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }

          res.push(codePoint);
          i += bytesPerSequence;
        }

        return decodeCodePointsArray(res);
      } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
      // the lowest limit is Chrome, with 0x10000 args.
      // We go 1 magnitude less, for safety


      var MAX_ARGUMENTS_LENGTH = 0x1000;

      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;

        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
        } // Decode in chunks to avoid "call stack size exceeded".


        var res = '';
        var i = 0;

        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }

        return res;
      }

      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }

        return ret;
      }

      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }

        return ret;
      }

      function hexSlice(buf, start, end) {
        var len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        var out = '';

        for (var i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }

        return out;
      }

      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = ''; // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)

        for (var i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }

        return res;
      }

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;
        var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

        Object.setPrototypeOf(newBuf, Buffer.prototype);
        return newBuf;
      };
      /*
       * Need to make sure that buffer isn't trying to write out of bounds.
       */


      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }

      Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;

        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var lo = first + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 24);
        var hi = this[++offset] + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + last * Math.pow(2, 24);
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var hi = first * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + this[++offset];
        var lo = this[++offset] * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];

        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var val = this[offset + 4] + this[offset + 5] * Math.pow(2, 8) + this[offset + 6] * Math.pow(2, 16) + (last << 24); // Overflow

        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 24));
      });
      Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var val = (first << 24) + // Overflow
        this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + last);
      });

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };

      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }

      Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        var lo = Number(value & BigInt(0xffffffff));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }

      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        var lo = Number(value & BigInt(0xffffffff));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }

      Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
      });
      Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
      });

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      });
      Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      });

      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }

      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }

        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }

      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };

      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }

        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }

      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }

        if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
        if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

        if (end > this.length) end = this.length;

        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;

        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
          // Use built-in when available, missing from IE11
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }

        return len;
      }; // Usage:
      //    buffer.fill(number[, offset[, end]])
      //    buffer.fill(buffer[, offset[, end]])
      //    buffer.fill(string[, offset[, end]][, encoding])


      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }

          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }

          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }

          if (val.length === 1) {
            var code = val.charCodeAt(0);

            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
              // Fast path: If `val` fits into a single byte, use that numeric value.
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        } else if (typeof val === 'boolean') {
          val = Number(val);
        } // Invalid ranges are not set to a default, so can range check early.


        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;

        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
          var len = bytes.length;

          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }

          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      }; // CUSTOM ERRORS
      // =============
      // Simplified versions from Node, changed for Buffer-only usage


      var errors = {};

      function E(sym, getMessage, Base) {
        errors[sym] = /*#__PURE__*/function (_Base) {
          _inherits(NodeError, _Base);

          var _super = _createSuper(NodeError);

          function NodeError() {
            var _this4;

            _classCallCheck(this, NodeError);

            _this4 = _super.call(this);
            Object.defineProperty(_assertThisInitialized(_this4), 'message', {
              value: getMessage.apply(_assertThisInitialized(_this4), arguments),
              writable: true,
              configurable: true
            }); // Add the error code to the name to include it in the stack trace.

            _this4.name = "".concat(_this4.name, " [").concat(sym, "]"); // Access the stack to generate the error message including the error code
            // from the name.

            _this4.stack; // eslint-disable-line no-unused-expressions
            // Reset the name to the actual name.

            delete _this4.name;
            return _this4;
          }

          _createClass(NodeError, [{
            key: "code",
            get: function get() {
              return sym;
            },
            set: function set(value) {
              Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true
              });
            }
          }, {
            key: "toString",
            value: function toString() {
              return "".concat(this.name, " [").concat(sym, "]: ").concat(this.message);
            }
          }]);

          return NodeError;
        }(Base);
      }

      E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
        if (name) {
          return "".concat(name, " is outside of buffer bounds");
        }

        return 'Attempt to access memory outside buffer bounds';
      }, RangeError);
      E('ERR_INVALID_ARG_TYPE', function (name, actual) {
        return "The \"".concat(name, "\" argument must be of type number. Received type ").concat(typeof actual);
      }, TypeError);
      E('ERR_OUT_OF_RANGE', function (str, range, input) {
        var msg = "The value of \"".concat(str, "\" is out of range.");
        var received = input;

        if (Number.isInteger(input) && Math.abs(input) > Math.pow(2, 32)) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === 'bigint') {
          received = String(input);

          if (input > Math.pow(BigInt(2), BigInt(32)) || input < -Math.pow(BigInt(2), BigInt(32))) {
            received = addNumericalSeparator(received);
          }

          received += 'n';
        }

        msg += " It must be ".concat(range, ". Received ").concat(received);
        return msg;
      }, RangeError);

      function addNumericalSeparator(val) {
        var res = '';
        var i = val.length;
        var start = val[0] === '-' ? 1 : 0;

        for (; i >= start + 4; i -= 3) {
          res = "_".concat(val.slice(i - 3, i)).concat(res);
        }

        return "".concat(val.slice(0, i)).concat(res);
      } // CHECK FUNCTIONS
      // ===============


      function checkBounds(buf, offset, byteLength) {
        validateNumber(offset, 'offset');

        if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
          boundsError(offset, buf.length - (byteLength + 1));
        }
      }

      function checkIntBI(value, min, max, buf, offset, byteLength) {
        if (value > max || value < min) {
          var n = typeof min === 'bigint' ? 'n' : '';
          var range;

          if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = ">= 0".concat(n, " and < 2").concat(n, " ** ").concat((byteLength + 1) * 8).concat(n);
            } else {
              range = ">= -(2".concat(n, " ** ").concat((byteLength + 1) * 8 - 1).concat(n, ") and < 2 ** ") + "".concat((byteLength + 1) * 8 - 1).concat(n);
            }
          } else {
            range = ">= ".concat(min).concat(n, " and <= ").concat(max).concat(n);
          }

          throw new errors.ERR_OUT_OF_RANGE('value', range, value);
        }

        checkBounds(buf, offset, byteLength);
      }

      function validateNumber(value, name) {
        if (typeof value !== 'number') {
          throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
        }
      }

      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
        }

        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }

        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', ">= ".concat(type ? 1 : 0, " and <= ").concat(length), value);
      } // HELPER FUNCTIONS
      // ================


      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

      function base64clean(str) {
        // Node takes equal signs as end of the Base64 encoding
        str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

        str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

        if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

        while (str.length % 4 !== 0) {
          str = str + '=';
        }

        return str;
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i); // is surrogate component

          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } // valid lead


              leadSurrogate = codePoint;
              continue;
            } // 2 leads in a row


            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            } // valid surrogate pair


            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null; // encode utf8

          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function asciiToBytes(str) {
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }

        return byteArray;
      }

      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }

      function blitBuffer(src, dst, offset, length) {
        var i;

        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }

        return i;
      } // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
      // the `instanceof` check but they should be treated as of that type.
      // See: https://github.com/feross/buffer/issues/166


      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }

      function numberIsNaN(obj) {
        // For IE11 support
        return obj !== obj; // eslint-disable-line no-self-compare
      } // Create lookup table for `toString('hex')`
      // See: https://github.com/feross/buffer/issues/219


      var hexSliceLookupTable = function () {
        var alphabet = '0123456789abcdef';
        var table = new Array(256);

        for (var i = 0; i < 16; ++i) {
          var i16 = i * 16;

          for (var j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }

        return table;
      }(); // Return not function with Error if BigInt not supported


      function defineBigIntMethod(fn) {
        return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
      }

      function BufferBigIntNotDefined() {
        throw new Error('BigInt not supported');
      }
      /***/

    },

    /***/
    "tkto":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.keys.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function tkto(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var nativeKeys = __webpack_require__(
      /*! ../internals/object-keys */
      "33Wh");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeKeys(1);
      }); // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        keys: function keys(it) {
          return nativeKeys(toObject(it));
        }
      });
      /***/
    },

    /***/
    "tl/u":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.trunc.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function tlU(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var ceil = Math.ceil;
      var floor = Math.floor; // `Math.trunc` method
      // https://tc39.es/ecma262/#sec-math.trunc

      $({
        target: 'Math',
        stat: true
      }, {
        trunc: function trunc(it) {
          return (it > 0 ? floor : ceil)(it);
        }
      });
      /***/
    },

    /***/
    "toAj":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function toAj(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      "ppGB");

      var thisNumberValue = __webpack_require__(
      /*! ../internals/this-number-value */
      "QIpd");

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      "EUja");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var nativeToFixed = 1.0.toFixed;
      var floor = Math.floor;

      var pow = function pow(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };

      var log = function log(x) {
        var n = 0;
        var x2 = x;

        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }

        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }

        return n;
      };

      var FORCED = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToFixed.call({});
      }); // `Number.prototype.toFixed` method
      // https://tc39.es/ecma262/#sec-number.prototype.tofixed

      $({
        target: 'Number',
        proto: true,
        forced: FORCED
      }, {
        // eslint-disable-next-line max-statements
        toFixed: function toFixed(fractionDigits) {
          var number = thisNumberValue(this);
          var fractDigits = toInteger(fractionDigits);
          var data = [0, 0, 0, 0, 0, 0];
          var sign = '';
          var result = '0';
          var e, z, j, k;

          var multiply = function multiply(n, c) {
            var index = -1;
            var c2 = c;

            while (++index < 6) {
              c2 += n * data[index];
              data[index] = c2 % 1e7;
              c2 = floor(c2 / 1e7);
            }
          };

          var divide = function divide(n) {
            var index = 6;
            var c = 0;

            while (--index >= 0) {
              c += data[index];
              data[index] = floor(c / n);
              c = c % n * 1e7;
            }
          };

          var dataToString = function dataToString() {
            var index = 6;
            var s = '';

            while (--index >= 0) {
              if (s !== '' || index === 0 || data[index] !== 0) {
                var t = String(data[index]);
                s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
              }
            }

            return s;
          };

          if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare

          if (number != number) return 'NaN';
          if (number <= -1e21 || number >= 1e21) return String(number);

          if (number < 0) {
            sign = '-';
            number = -number;
          }

          if (number > 1e-21) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;

            if (e > 0) {
              multiply(0, z);
              j = fractDigits;

              while (j >= 7) {
                multiply(1e7, 0);
                j -= 7;
              }

              multiply(pow(10, j, 1), 0);
              j = e - 1;

              while (j >= 23) {
                divide(1 << 23);
                j -= 23;
              }

              divide(1 << j);
              multiply(1, 1);
              divide(2);
              result = dataToString();
            } else {
              multiply(0, z);
              multiply(1 << -e, 0);
              result = dataToString() + repeat.call('0', fractDigits);
            }
          }

          if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + repeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
          } else {
            result = sign + result;
          }

          return result;
        }
      });
      /***/
    },

    /***/
    "tycR":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/array-iteration.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function tycR(module, exports, __webpack_require__) {
      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      "RK3t");

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      "ewvW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      "ZfDv");

      var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

      var createMethod = function createMethod(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_OUT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self = IndexedObject(O);
          var boundFunction = bind(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
          var value, result;

          for (; length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);

              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch (TYPE) {
                    case 3:
                      return true;
                    // some

                    case 5:
                      return value;
                    // find

                    case 6:
                      return index;
                    // findIndex

                    case 2:
                      push.call(target, value);
                    // filter
                  } else switch (TYPE) {
                    case 4:
                      return false;
                    // every

                    case 7:
                      push.call(target, value);
                    // filterOut
                  }
              }
            }
          }

          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };

      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterOut` method
        // https://github.com/tc39/proposal-array-filtering
        filterOut: createMethod(7)
      };
      /***/
    },

    /***/
    "uL8W":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.create.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function uL8W(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var create = __webpack_require__(
      /*! ../internals/object-create */
      "fHMY"); // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create


      $({
        target: 'Object',
        stat: true,
        sham: !DESCRIPTORS
      }, {
        create: create
      });
      /***/
    },

    /***/
    "uqXc":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function uqXc(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var lastIndexOf = __webpack_require__(
      /*! ../internals/array-last-index-of */
      "5Yz+"); // `Array.prototype.lastIndexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.lastindexof


      $({
        target: 'Array',
        proto: true,
        forced: lastIndexOf !== [].lastIndexOf
      }, {
        lastIndexOf: lastIndexOf
      });
      /***/
    },

    /***/
    "uy83":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/internals/freezing.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function uy83(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      module.exports = !fails(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
      /***/
    },

    /***/
    "vAFs":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.imul.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function vAFs(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var nativeImul = Math.imul;
      var FORCED = fails(function () {
        return nativeImul(0xFFFFFFFF, 5) != -5 || nativeImul.length != 2;
      }); // `Math.imul` method
      // https://tc39.es/ecma262/#sec-math.imul
      // some WebKit versions fails with big numbers, some has wrong arity

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        imul: function imul(x, y) {
          var UINT16 = 0xFFFF;
          var xn = +x;
          var yn = +y;
          var xl = UINT16 & xn;
          var yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        }
      });
      /***/
    },

    /***/
    "vo4V":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/math-fround.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function vo4V(module, exports, __webpack_require__) {
      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      "90hW");

      var abs = Math.abs;
      var pow = Math.pow;
      var EPSILON = pow(2, -52);
      var EPSILON32 = pow(2, -23);
      var MAX32 = pow(2, 127) * (2 - EPSILON32);
      var MIN32 = pow(2, -126);

      var roundTiesToEven = function roundTiesToEven(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      }; // `Math.fround` method implementation
      // https://tc39.es/ecma262/#sec-math.fround


      module.exports = Math.fround || function fround(x) {
        var $abs = abs(x);
        var $sign = sign(x);
        var a, result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs); // eslint-disable-next-line no-self-compare

        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      };
      /***/

    },

    /***/
    "voQr":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/src/webpack/es5-polyfills.js ***!
      \*********************************************************************************/

    /*! no exports provided */

    /***/
    function voQr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es/symbol */
      "H0pb");
      /* harmony import */


      var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! core-js/modules/es.function.bind */
      "wLYn");
      /* harmony import */


      var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! core-js/modules/es.function.name */
      "sMBO");
      /* harmony import */


      var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! core-js/modules/es.function.has-instance */
      "tW5y");
      /* harmony import */


      var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! core-js/modules/es.object.create */
      "uL8W");
      /* harmony import */


      var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! core-js/modules/es.object.define-property */
      "eoL8");
      /* harmony import */


      var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! core-js/modules/es.object.define-properties */
      "HRxU");
      /* harmony import */


      var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-descriptor */
      "5DmW");
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! core-js/modules/es.object.get-prototype-of */
      "NBAS");
      /* harmony import */


      var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! core-js/modules/es.object.keys */
      "tkto");
      /* harmony import */


      var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-names */
      "cDke");
      /* harmony import */


      var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! core-js/modules/es.object.freeze */
      "3KgV");
      /* harmony import */


      var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! core-js/modules/es.object.seal */
      "r5Og");
      /* harmony import */


      var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! core-js/modules/es.object.prevent-extensions */
      "zuhW");
      /* harmony import */


      var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! core-js/modules/es.object.is-frozen */
      "4h0Y");
      /* harmony import */


      var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! core-js/modules/es.object.is-sealed */
      "5D5o");
      /* harmony import */


      var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! core-js/modules/es.object.is-extensible */
      "yQYn");
      /* harmony import */


      var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! core-js/modules/es.object.assign */
      "zKZe");
      /* harmony import */


      var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! core-js/modules/es.object.is */
      "Kxld");
      /* harmony import */


      var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! core-js/modules/es.object.set-prototype-of */
      "ExoC");
      /* harmony import */


      var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! core-js/modules/es.object.to-string */
      "07d7");
      /* harmony import */


      var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! core-js/modules/es.object.entries */
      "T63A");
      /* harmony import */


      var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! core-js/modules/es.object.values */
      "B6y2");
      /* harmony import */


      var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-descriptors */
      "27RR");
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__);
      /* harmony import */


      var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! core-js/modules/es.object.from-entries */
      "wfmh");
      /* harmony import */


      var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24__);
      /* harmony import */


      var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! core-js/modules/es.array.concat */
      "ma9I");
      /* harmony import */


      var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25__);
      /* harmony import */


      var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! core-js/modules/es.array.is-array */
      "J30X");
      /* harmony import */


      var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26__);
      /* harmony import */


      var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! core-js/modules/es.array.from */
      "pjDv");
      /* harmony import */


      var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27__);
      /* harmony import */


      var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! core-js/modules/es.array.of */
      "Xe3L");
      /* harmony import */


      var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28__);
      /* harmony import */


      var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! core-js/modules/es.array.join */
      "oVuX");
      /* harmony import */


      var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29__);
      /* harmony import */


      var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! core-js/modules/es.array.slice */
      "+2oP");
      /* harmony import */


      var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30__);
      /* harmony import */


      var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! core-js/modules/es.array.splice */
      "pDQq");
      /* harmony import */


      var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31__);
      /* harmony import */


      var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! core-js/modules/es.array.sort */
      "ToJy");
      /* harmony import */


      var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32__);
      /* harmony import */


      var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! core-js/modules/es.array.for-each */
      "QWBl");
      /* harmony import */


      var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33__);
      /* harmony import */


      var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! core-js/modules/es.array.map */
      "2B1R");
      /* harmony import */


      var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34__);
      /* harmony import */


      var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! core-js/modules/es.array.filter */
      "TeQF");
      /* harmony import */


      var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35__);
      /* harmony import */


      var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! core-js/modules/es.array.some */
      "Rfxz");
      /* harmony import */


      var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36__);
      /* harmony import */


      var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! core-js/modules/es.array.every */
      "piMb");
      /* harmony import */


      var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37__);
      /* harmony import */


      var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! core-js/modules/es.array.reduce */
      "E9XD");
      /* harmony import */


      var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38__);
      /* harmony import */


      var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! core-js/modules/es.array.reduce-right */
      "9N29");
      /* harmony import */


      var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__);
      /* harmony import */


      var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! core-js/modules/es.array.index-of */
      "yXV3");
      /* harmony import */


      var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40__);
      /* harmony import */


      var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! core-js/modules/es.array.last-index-of */
      "uqXc");
      /* harmony import */


      var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41__);
      /* harmony import */


      var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! core-js/modules/es.array.copy-within */
      "qHT+");
      /* harmony import */


      var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42__);
      /* harmony import */


      var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! core-js/modules/es.array.fill */
      "yyme");
      /* harmony import */


      var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43__);
      /* harmony import */


      var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! core-js/modules/es.array.find */
      "fbCW");
      /* harmony import */


      var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44__);
      /* harmony import */


      var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! core-js/modules/es.array.find-index */
      "x0AG");
      /* harmony import */


      var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45__);
      /* harmony import */


      var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! core-js/modules/es.array.iterator */
      "4mDm");
      /* harmony import */


      var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46__);
      /* harmony import */


      var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! core-js/modules/es.array.includes */
      "yq1k");
      /* harmony import */


      var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47__);
      /* harmony import */


      var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! core-js/modules/es.array.flat */
      "BIHw");
      /* harmony import */


      var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48__);
      /* harmony import */


      var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! core-js/modules/es.array.flat-map */
      "XbcX");
      /* harmony import */


      var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49__);
      /* harmony import */


      var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! core-js/modules/es.string.from-code-point */
      "9tb/");
      /* harmony import */


      var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50__);
      /* harmony import */


      var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! core-js/modules/es.string.raw */
      "2A+d");
      /* harmony import */


      var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51__);
      /* harmony import */


      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! core-js/modules/es.string.trim */
      "SYor");
      /* harmony import */


      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52__);
      /* harmony import */


      var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! core-js/modules/es.string.iterator */
      "PKPk");
      /* harmony import */


      var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53__);
      /* harmony import */


      var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! core-js/modules/es.string.code-point-at */
      "9bJ7");
      /* harmony import */


      var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54__);
      /* harmony import */


      var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! core-js/modules/es.string.ends-with */
      "inlA");
      /* harmony import */


      var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55__);
      /* harmony import */


      var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! core-js/modules/es.string.includes */
      "JTJg");
      /* harmony import */


      var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56__);
      /* harmony import */


      var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! core-js/modules/es.string.repeat */
      "OM9Z");
      /* harmony import */


      var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57__);
      /* harmony import */


      var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! core-js/modules/es.string.starts-with */
      "LKBx");
      /* harmony import */


      var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58__);
      /* harmony import */


      var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! core-js/modules/es.string.anchor */
      "GKVU");
      /* harmony import */


      var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59__);
      /* harmony import */


      var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! core-js/modules/es.string.big */
      "E5NM");
      /* harmony import */


      var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60__);
      /* harmony import */


      var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! core-js/modules/es.string.blink */
      "BNMt");
      /* harmony import */


      var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61__);
      /* harmony import */


      var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! core-js/modules/es.string.bold */
      "zHFu");
      /* harmony import */


      var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62__);
      /* harmony import */


      var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! core-js/modules/es.string.fixed */
      "x83w");
      /* harmony import */


      var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63__);
      /* harmony import */


      var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! core-js/modules/es.string.fontcolor */
      "l2dK");
      /* harmony import */


      var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64__);
      /* harmony import */


      var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! core-js/modules/es.string.fontsize */
      "GRPF");
      /* harmony import */


      var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65__);
      /* harmony import */


      var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! core-js/modules/es.string.italics */
      "xdBZ");
      /* harmony import */


      var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66__);
      /* harmony import */


      var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! core-js/modules/es.string.link */
      "mRH6");
      /* harmony import */


      var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67__);
      /* harmony import */


      var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! core-js/modules/es.string.small */
      "yWo2");
      /* harmony import */


      var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68__);
      /* harmony import */


      var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! core-js/modules/es.string.strike */
      "IxXR");
      /* harmony import */


      var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69__);
      /* harmony import */


      var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! core-js/modules/es.string.sub */
      "TFPT");
      /* harmony import */


      var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70__);
      /* harmony import */


      var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! core-js/modules/es.string.sup */
      "Zk8X");
      /* harmony import */


      var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71__);
      /* harmony import */


      var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! core-js/modules/es.string.match */
      "Rm1S");
      /* harmony import */


      var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72__);
      /* harmony import */


      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! core-js/modules/es.string.replace */
      "UxlC");
      /* harmony import */


      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73__);
      /* harmony import */


      var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! core-js/modules/es.string.search */
      "hByQ");
      /* harmony import */


      var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74__);
      /* harmony import */


      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! core-js/modules/es.string.split */
      "EnZy");
      /* harmony import */


      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75__);
      /* harmony import */


      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! core-js/modules/es.parse-int */
      "4l63");
      /* harmony import */


      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76__);
      /* harmony import */


      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! core-js/modules/es.parse-float */
      "rNhl");
      /* harmony import */


      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77__);
      /* harmony import */


      var core_js_es_number__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! core-js/es/number */
      "7sbD");
      /* harmony import */


      var core_js_es_number__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_78__);
      /* harmony import */


      var core_js_es_math__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! core-js/es/math */
      "6hpn");
      /* harmony import */


      var core_js_es_math__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_79__);
      /* harmony import */


      var core_js_es_date__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! core-js/es/date */
      "ftKg");
      /* harmony import */


      var core_js_es_date__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_80__);
      /* harmony import */


      var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! core-js/modules/es.regexp.constructor */
      "TWNs");
      /* harmony import */


      var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81__);
      /* harmony import */


      var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! core-js/modules/es.regexp.to-string */
      "JfAA");
      /* harmony import */


      var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82__);
      /* harmony import */


      var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! core-js/modules/es.regexp.flags */
      "U3f4");
      /* harmony import */


      var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83__);
      /* harmony import */


      var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! core-js/modules/es.map */
      "Tskq");
      /* harmony import */


      var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84__);
      /* harmony import */


      var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! core-js/modules/es.weak-map */
      "ENF9");
      /* harmony import */


      var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85__);
      /* harmony import */


      var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! core-js/modules/es.set */
      "YGK4");
      /* harmony import */


      var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86__);
      /* harmony import */


      var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! core-js/modules/web.dom-collections.for-each */
      "FZtP");
      /* harmony import */


      var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87__);
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! core-js/modules/web.dom-collections.iterator */
      "3bBZ");
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88__);
      /* harmony import */


      var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! core-js/modules/es.promise */
      "5s+n");
      /* harmony import */


      var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89__);
      /* harmony import */


      var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! core-js/modules/es.json.to-string-tag */
      "DEfu");
      /* harmony import */


      var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90__);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! regenerator-runtime/runtime */
      "ls82");
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91__);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // ES2015 symbol capabilities
      // ES2015 function capabilities
      // ES2015 object capabilities
      // ES2015 array capabilities
      // ES2015 string capabilities

      /***/

    },

    /***/
    "w1rZ":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.number.parse-float.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function w1rZ(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var parseFloat = __webpack_require__(
      /*! ../internals/number-parse-float */
      "fhKU"); // `Number.parseFloat` method
      // https://tc39.es/ecma262/#sec-number.parseFloat


      $({
        target: 'Number',
        stat: true,
        forced: Number.parseFloat != parseFloat
      }, {
        parseFloat: parseFloat
      });
      /***/
    },

    /***/
    "wE6v":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/to-primitive.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function wE6v(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v"); // `ToPrimitive` abstract operation
      // https://tc39.es/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string


      module.exports = function (input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/

    },

    /***/
    "wLYn":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.function.bind.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function wLYn(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var bind = __webpack_require__(
      /*! ../internals/function-bind */
      "BTho"); // `Function.prototype.bind` method
      // https://tc39.es/ecma262/#sec-function.prototype.bind


      $({
        target: 'Function',
        proto: true
      }, {
        bind: bind
      });
      /***/
    },

    /***/
    "wfmh":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function wfmh(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      "hBjN"); // `Object.fromEntries` method
      // https://github.com/tc39/proposal-object-from-entries


      $({
        target: 'Object',
        stat: true
      }, {
        fromEntries: function fromEntries(iterable) {
          var obj = {};
          iterate(iterable, function (k, v) {
            createProperty(obj, k, v);
          }, {
            AS_ENTRIES: true
          });
          return obj;
        }
      });
      /***/
    },

    /***/
    "wg0c":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/internals/number-parse-int.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function wg0c(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      "WKiH").trim;

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      "WJkJ");

      var $parseInt = global.parseInt;
      var hex = /^[+-]?0[Xx]/;
      var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix

      module.exports = FORCED ? function parseInt(string, radix) {
        var S = trim(String(string));
        return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
      } : $parseInt;
      /***/
    },

    /***/
    "x0AG":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function x0AG(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $findIndex = __webpack_require__(
      /*! ../internals/array-iteration */
      "tycR").findIndex;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var FIND_INDEX = 'findIndex';
      var SKIPS_HOLES = true;
      var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX); // Shouldn't skip holes

      if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
        SKIPS_HOLES = false;
      }); // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findindex

      $({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES || !USES_TO_LENGTH
      }, {
        findIndex: function findIndex(callbackfn
        /* , that = undefined */
        ) {
          return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND_INDEX);
      /***/
    },

    /***/
    "x83w":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.fixed.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function x83w(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.fixed` method
      // https://tc39.es/ecma262/#sec-string.prototype.fixed


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fixed')
      }, {
        fixed: function fixed() {
          return createHTML(this, 'tt', '', '');
        }
      });
      /***/
    },

    /***/
    "xDBR":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/is-pure.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function xDBR(module, exports) {
      module.exports = false;
      /***/
    },

    /***/
    "xdBZ":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.italics.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function xdBZ(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.italics` method
      // https://tc39.es/ecma262/#sec-string.prototype.italics


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('italics')
      }, {
        italics: function italics() {
          return createHTML(this, 'i', '', '');
        }
      });
      /***/
    },

    /***/
    "xrYK":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/classof-raw.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function xrYK(module, exports) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/

    },

    /***/
    "xs3f":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/shared-store.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function xs3f(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      "zk60");

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
      /***/
    },

    /***/
    "yNLB":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function yNLB(module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      "WJkJ");

      var non = "\u200B\x85\u180E"; // check that a method works with the correct list
      // of whitespaces and has a correct name

      module.exports = function (METHOD_NAME) {
        return fails(function () {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };
      /***/

    },

    /***/
    "yQYn":
    /*!*****************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.is-extensible.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function yQYn(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var nativeIsExtensible = Object.isExtensible;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeIsExtensible(1);
      }); // `Object.isExtensible` method
      // https://tc39.es/ecma262/#sec-object.isextensible

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isExtensible: function isExtensible(it) {
          return isObject(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
        }
      });
      /***/
    },

    /***/
    "yWo2":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.small.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function yWo2(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.small` method
      // https://tc39.es/ecma262/#sec-string.prototype.small


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('small')
      }, {
        small: function small() {
          return createHTML(this, 'small', '', '');
        }
      });
      /***/
    },

    /***/
    "yXV3":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function yXV3(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $indexOf = __webpack_require__(
      /*! ../internals/array-includes */
      "TWQb").indexOf;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var nativeIndexOf = [].indexOf;
      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('indexOf');
      var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
        ACCESSORS: true,
        1: 0
      }); // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof

      $({
        target: 'Array',
        proto: true,
        forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
      }, {
        indexOf: function indexOf(searchElement
        /* , fromIndex = 0 */
        ) {
          return NEGATIVE_ZERO // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "yiG3":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.math.log1p.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function yiG3(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var log1p = __webpack_require__(
      /*! ../internals/math-log1p */
      "HsHA"); // `Math.log1p` method
      // https://tc39.es/ecma262/#sec-math.log1p


      $({
        target: 'Math',
        stat: true
      }, {
        log1p: log1p
      });
      /***/
    },

    /***/
    "yoRg":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function yoRg(module, exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      "UTVS");

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      "/GqU");

      var indexOf = __webpack_require__(
      /*! ../internals/array-includes */
      "TWQb").indexOf;

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      "0BK2");

      module.exports = function (object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) {
          !has(hiddenKeys, key) && has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys


        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        }

        return result;
      };
      /***/

    },

    /***/
    "yq1k":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.includes.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function yq1k(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $includes = __webpack_require__(
      /*! ../internals/array-includes */
      "TWQb").includes;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs");

      var arrayMethodUsesToLength = __webpack_require__(
      /*! ../internals/array-method-uses-to-length */
      "rkAj");

      var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
        ACCESSORS: true,
        1: 0
      }); // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes

      $({
        target: 'Array',
        proto: true,
        forced: !USES_TO_LENGTH
      }, {
        includes: function includes(el
        /* , fromIndex = 0 */
        ) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('includes');
      /***/
    },

    /***/
    "yyme":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.fill.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function yyme(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var fill = __webpack_require__(
      /*! ../internals/array-fill */
      "gdVl");

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      "RNIs"); // `Array.prototype.fill` method
      // https://tc39.es/ecma262/#sec-array.prototype.fill


      $({
        target: 'Array',
        proto: true
      }, {
        fill: fill
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('fill');
      /***/
    },

    /***/
    "zBJ4":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/document-create-element.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function zBJ4(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var document = global.document; // typeof document.createElement is 'object' in old IE

      var EXISTS = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return EXISTS ? document.createElement(it) : {};
      };
      /***/

    },

    /***/
    "zHFu":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.bold.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function zHFu(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      "hXpO");

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      "rwPt"); // `String.prototype.bold` method
      // https://tc39.es/ecma262/#sec-string.prototype.bold


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('bold')
      }, {
        bold: function bold() {
          return createHTML(this, 'b', '', '');
        }
      });
      /***/
    },

    /***/
    "zKZe":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.assign.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function zKZe(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var assign = __webpack_require__(
      /*! ../internals/object-assign */
      "YNrV"); // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign


      $({
        target: 'Object',
        stat: true,
        forced: Object.assign !== assign
      }, {
        assign: assign
      });
      /***/
    },

    /***/
    "zfnd":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/promise-resolve.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function zfnd(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var newPromiseCapability = __webpack_require__(
      /*! ../internals/new-promise-capability */
      "8GlL");

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/

    },

    /***/
    "zk60":
    /*!******************************************************!*\
      !*** ./node_modules/core-js/internals/set-global.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zk60(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      "kRJp");

      module.exports = function (key, value) {
        try {
          createNonEnumerableProperty(global, key, value);
        } catch (error) {
          global[key] = value;
        }

        return value;
      };
      /***/

    },

    /***/
    "zuhW":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/modules/es.object.prevent-extensions.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function zuhW(module, exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      "8YOa").onFreeze;

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      "uy83");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var nativePreventExtensions = Object.preventExtensions;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativePreventExtensions(1);
      }); // `Object.preventExtensions` method
      // https://tc39.es/ecma262/#sec-object.preventextensions

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        preventExtensions: function preventExtensions(it) {
          return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze(it)) : it;
        }
      });
      /***/
    }
  }, [[8, "runtime"]]]);
})();
//# sourceMappingURL=polyfills-es5.424f21e959b40599dc1a.js.map