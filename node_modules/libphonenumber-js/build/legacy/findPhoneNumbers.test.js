"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _findPhoneNumbers = _interopRequireWildcard(require("./findPhoneNumbers.js"));
var _findPhoneNumbersInitialImplementation = require("./findPhoneNumbersInitialImplementation.js");
var _metadataMin = _interopRequireDefault(require("../../metadata.min.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } // This is a legacy function.
// Use `findNumbers()` instead.
describe('findPhoneNumbers', function () {
  it('should find numbers', function () {
    expect((0, _findPhoneNumbers["default"])('2133734253', 'US', _metadataMin["default"])).to.deep.equal([{
      phone: '2133734253',
      country: 'US',
      startsAt: 0,
      endsAt: 10
    }]);
    expect((0, _findPhoneNumbers["default"])('(213) 373-4253', 'US', _metadataMin["default"])).to.deep.equal([{
      phone: '2133734253',
      country: 'US',
      startsAt: 0,
      endsAt: 14
    }]);
    expect((0, _findPhoneNumbers["default"])('The number is +7 (800) 555-35-35 and not (213) 373-4253 as written in the document.', 'US', _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 14,
      endsAt: 32
    }, {
      phone: '2133734253',
      country: 'US',
      startsAt: 41,
      endsAt: 55
    }]);

    // Opening parenthesis issue.
    // https://github.com/catamphetamine/libphonenumber-js/issues/252
    expect((0, _findPhoneNumbers["default"])('The number is +7 (800) 555-35-35 and not (213) 373-4253 (that\'s not even in the same country!) as written in the document.', 'US', _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 14,
      endsAt: 32
    }, {
      phone: '2133734253',
      country: 'US',
      startsAt: 41,
      endsAt: 55
    }]);

    // No default country.
    expect((0, _findPhoneNumbers["default"])('The number is +7 (800) 555-35-35 as written in the document.', _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 14,
      endsAt: 32
    }]);

    // Passing `options` and default country.
    expect((0, _findPhoneNumbers["default"])('The number is +7 (800) 555-35-35 as written in the document.', 'US', {
      leniency: 'VALID'
    }, _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 14,
      endsAt: 32
    }]);

    // Passing `options`.
    expect((0, _findPhoneNumbers["default"])('The number is +7 (800) 555-35-35 as written in the document.', {
      leniency: 'VALID'
    }, _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 14,
      endsAt: 32
    }]);

    // Not a phone number and a phone number.
    expect((0, _findPhoneNumbers["default"])('Digits 12 are not a number, but +7 (800) 555-35-35 is.', {
      leniency: 'VALID'
    }, _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      startsAt: 32,
      endsAt: 50
    }]);

    // Phone number extension.
    expect((0, _findPhoneNumbers["default"])('Date 02/17/2018 is not a number, but +7 (800) 555-35-35 ext. 123 is.', {
      leniency: 'VALID'
    }, _metadataMin["default"])).to.deep.equal([{
      phone: '8005553535',
      country: 'RU',
      ext: '123',
      startsAt: 37,
      endsAt: 64
    }]);
  });
  it('shouldn\'t find non-valid numbers', function () {
    // Not a valid phone number for US.
    expect((0, _findPhoneNumbers["default"])('1111111111', 'US', _metadataMin["default"])).to.deep.equal([]);
  });
  it('should find non-European digits', function () {
    // E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
    expect((0, _findPhoneNumbers["default"])('العَرَبِيَّة‎ +٤٤٣٣٣٣٣٣٣٣٣٣عَرَبِيّ‎', _metadataMin["default"])).to.deep.equal([{
      country: 'GB',
      phone: '3333333333',
      startsAt: 14,
      endsAt: 27
    }]);
  });
  it('should iterate', function () {
    var expected_numbers = [{
      country: 'RU',
      phone: '8005553535',
      // number   : '+7 (800) 555-35-35',
      startsAt: 14,
      endsAt: 32
    }, {
      country: 'US',
      phone: '2133734253',
      // number   : '(213) 373-4253',
      startsAt: 41,
      endsAt: 55
    }];
    for (var _iterator = _createForOfIteratorHelperLoose((0, _findPhoneNumbers.searchPhoneNumbers)('The number is +7 (800) 555-35-35 and not (213) 373-4253 as written in the document.', 'US', _metadataMin["default"])), _step; !(_step = _iterator()).done;) {
      var number = _step.value;
      expect(number).to.deep.equal(expected_numbers.shift());
    }
    expect(expected_numbers.length).to.equal(0);
  });
  it('should work in edge cases', function () {
    var thrower;

    // No input
    expect((0, _findPhoneNumbers["default"])('', _metadataMin["default"])).to.deep.equal([]);

    // No country metadata for this `require` country code
    thrower = function thrower() {
      return (0, _findPhoneNumbers["default"])('123', 'ZZ', _metadataMin["default"]);
    };
    expect(thrower).to["throw"]('Unknown country');

    // Numerical `value`
    thrower = function thrower() {
      return (0, _findPhoneNumbers["default"])(2141111111, 'US');
    };
    expect(thrower).to["throw"]('A text for parsing must be a string.');

    // // No metadata
    // thrower = () => findNumbers('')
    // thrower.should.throw('`metadata` argument not passed')
  });
  it('shouldn\'t find phone numbers which are not phone numbers', function () {
    // A timestamp.
    expect((0, _findPhoneNumbers["default"])('2012-01-02 08:00', 'US', _metadataMin["default"])).to.deep.equal([]);

    // A valid number (not a complete timestamp).
    expect((0, _findPhoneNumbers["default"])('2012-01-02 08', 'US', _metadataMin["default"])).to.deep.equal([{
      country: 'US',
      phone: '2012010208',
      startsAt: 0,
      endsAt: 13
    }]);

    // Invalid parens.
    expect((0, _findPhoneNumbers["default"])('213(3734253', 'US', _metadataMin["default"])).to.deep.equal([]);

    // Letters after phone number.
    expect((0, _findPhoneNumbers["default"])('2133734253a', 'US', _metadataMin["default"])).to.deep.equal([]);

    // Valid phone (same as the one found in the UUID below).
    expect((0, _findPhoneNumbers["default"])('The phone number is 231354125.', 'FR', _metadataMin["default"])).to.deep.equal([{
      country: 'FR',
      phone: '231354125',
      startsAt: 20,
      endsAt: 29
    }]);

    // Not a phone number (part of a UUID).
    // Should parse in `{ extended: true }` mode.
    var possibleNumbers = (0, _findPhoneNumbers["default"])('The UUID is CA801c26f98cd16e231354125ad046e40b.', 'FR', {
      extended: true
    }, _metadataMin["default"]);
    expect(possibleNumbers.length).to.equal(3);
    expect(possibleNumbers[1].country).to.equal('FR');
    expect(possibleNumbers[1].phone).to.equal('231354125');

    // Not a phone number (part of a UUID).
    // Shouldn't parse by default.
    expect((0, _findPhoneNumbers["default"])('The UUID is CA801c26f98cd16e231354125ad046e40b.', 'FR', _metadataMin["default"])).to.deep.equal([]);
  });
});
describe('PhoneNumberSearch', function () {
  it('should search for phone numbers', function () {
    var finder = new _findPhoneNumbersInitialImplementation.PhoneNumberSearch('The number is +7 (800) 555-35-35 and not (213) 373-4253 as written in the document.', {
      defaultCountry: 'US'
    }, _metadataMin["default"]);
    expect(finder.hasNext()).to.equal(true);
    expect(finder.next()).to.deep.equal({
      country: 'RU',
      phone: '8005553535',
      // number   : '+7 (800) 555-35-35',
      startsAt: 14,
      endsAt: 32
    });
    expect(finder.hasNext()).to.equal(true);
    expect(finder.next()).to.deep.equal({
      country: 'US',
      phone: '2133734253',
      // number   : '(213) 373-4253',
      startsAt: 41,
      endsAt: 55
    });
    expect(finder.hasNext()).to.equal(false);
  });
  it('should search for phone numbers (no options)', function () {
    var finder = new _findPhoneNumbersInitialImplementation.PhoneNumberSearch('The number is +7 (800) 555-35-35', undefined, _metadataMin["default"]);
    expect(finder.hasNext()).to.equal(true);
    expect(finder.next()).to.deep.equal({
      country: 'RU',
      phone: '8005553535',
      // number   : '+7 (800) 555-35-35',
      startsAt: 14,
      endsAt: 32
    });
    expect(finder.hasNext()).to.equal(false);
  });
  it('should work in edge cases', function () {
    // No options
    var search = new _findPhoneNumbersInitialImplementation.PhoneNumberSearch('', undefined, _metadataMin["default"]);

    // No next element
    var thrower = function thrower() {
      return search.next();
    };
    expect(thrower).to["throw"]('No next element');
  });
});
//# sourceMappingURL=findPhoneNumbers.test.js.map