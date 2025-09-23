"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCountryByNationalNumber;
var _metadata = _interopRequireDefault(require("../metadata.js"));
var _getNumberType = _interopRequireDefault(require("./getNumberType.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getCountryByNationalNumber(nationalPhoneNumber, _ref) {
  var countries = _ref.countries,
    defaultCountry = _ref.defaultCountry,
    metadata = _ref.metadata;
  // Re-create `metadata` because it will be selecting a `country`.
  metadata = new _metadata["default"](metadata);

  // const matchingCountries = []

  for (var _iterator = _createForOfIteratorHelperLoose(countries), _step; !(_step = _iterator()).done;) {
    var country = _step.value;
    metadata.country(country);
    // "Leading digits" patterns are only defined for about 20% of all countries.
    // By definition, matching "leading digits" is a sufficient but not a necessary
    // condition for a phone number to belong to a country.
    // The point of "leading digits" check is that it's the fastest one to get a match.
    // https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md#leading_digits
    // I'd suppose that "leading digits" patterns are mutually exclusive for different countries
    // because of the intended use of that feature.
    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    }
    // Else perform full validation with all of those
    // fixed-line/mobile/etc regular expressions.
    else if ((0, _getNumberType["default"])({
      phone: nationalPhoneNumber,
      country: country
    }, undefined, metadata.metadata)) {
      // If both the `defaultCountry` and the "main" one match the phone number,
      // don't prefer the `defaultCountry` over the "main" one.
      // https://gitlab.com/catamphetamine/libphonenumber-js/-/issues/154
      return country;
      // // If the `defaultCountry` is among the `matchingCountries` then return it.
      // if (defaultCountry) {
      // 	if (country === defaultCountry) {
      // 		return country
      // 	}
      // 	matchingCountries.push(country)
      // } else {
      // 	return country
      // }
    }
  }

  // // Return the first ("main") one of the `matchingCountries`.
  // if (matchingCountries.length > 0) {
  // 	return matchingCountries[0]
  // }
}
//# sourceMappingURL=getCountryByNationalNumber.js.map