"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _parseIncompletePhoneNumber = _interopRequireWildcard(require("./parseIncompletePhoneNumber.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
describe('parseIncompletePhoneNumber', function () {
  it('should parse phone number character', function () {
    // Accepts leading `+`.
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('+')).to.equal('+');

    // Doesn't accept non-leading `+`.
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('+', '+')).to.be.undefined;

    // Parses digits.
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('1')).to.equal('1');

    // Parses non-European digits.
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('٤')).to.equal('4');

    // Dismisses other characters.
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('-')).to.be.undefined;
  });
  it('should parse incomplete phone number', function () {
    expect((0, _parseIncompletePhoneNumber["default"])('')).to.equal('');

    // Doesn't accept non-leading `+`.
    expect((0, _parseIncompletePhoneNumber["default"])('++')).to.equal('+');

    // Accepts leading `+`.
    expect((0, _parseIncompletePhoneNumber["default"])('+7 800 555')).to.equal('+7800555');

    // Parses digits.
    expect((0, _parseIncompletePhoneNumber["default"])('8 (800) 555')).to.equal('8800555');

    // Parses non-European digits.
    expect((0, _parseIncompletePhoneNumber["default"])('+٤٤٢٣٢٣٢٣٤')).to.equal('+442323234');
  });
  it('should work with a new `context` argument in `parsePhoneNumberCharacter()` function (international number)', function () {
    var stopped = false;
    var emit = function emit(event) {
      switch (event) {
        case 'end':
          stopped = true;
          break;
      }
    };
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('+', undefined, emit)).to.equal('+');
    expect(stopped).to.equal(false);
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('1', '+', emit)).to.equal('1');
    expect(stopped).to.equal(false);
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('+', '+1', emit)).to.be.undefined;
    expect(stopped).to.equal(true);
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('2', '+1', emit)).to.equal('2');
    expect(stopped).to.equal(true);
  });
  it('should work with a new `context` argument in `parsePhoneNumberCharacter()` function (national number)', function () {
    var stopped = false;
    var emit = function emit(event) {
      switch (event) {
        case 'end':
          stopped = true;
          break;
      }
    };
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('2', undefined, emit)).to.equal('2');
    expect(stopped).to.equal(false);
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('+', '2', emit)).to.be.undefined;
    expect(stopped).to.equal(true);
    expect((0, _parseIncompletePhoneNumber.parsePhoneNumberCharacter)('1', '2', emit)).to.equal('1');
    expect(stopped).to.equal(true);
  });
});
//# sourceMappingURL=parseIncompletePhoneNumber.test.js.map