"use strict";

var _isValidPhoneNumber2 = _interopRequireDefault(require("./isValidPhoneNumber.js"));
var _metadataMin = _interopRequireDefault(require("../metadata.min.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function isValidPhoneNumber() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  parameters.push(_metadataMin["default"]);
  return _isValidPhoneNumber2["default"].apply(this, parameters);
}
describe('isValidPhoneNumber', function () {
  it('should detect whether a phone number is valid', function () {
    expect(isValidPhoneNumber('8 (800) 555 35 35', 'RU')).to.equal(true);
    expect(isValidPhoneNumber('8 (800) 555 35 35 0', 'RU')).to.equal(false);
    expect(isValidPhoneNumber('Call: 8 (800) 555 35 35', 'RU')).to.equal(false);
    expect(isValidPhoneNumber('8 (800) 555 35 35', {
      defaultCountry: 'RU'
    })).to.equal(true);
    expect(isValidPhoneNumber('+7 (800) 555 35 35')).to.equal(true);
    expect(isValidPhoneNumber('+7 1 (800) 555 35 35')).to.equal(false);
    expect(isValidPhoneNumber(' +7 (800) 555 35 35')).to.equal(false);
    expect(isValidPhoneNumber(' ')).to.equal(false);
  });
});
//# sourceMappingURL=isValidPhoneNumber.test.js.map