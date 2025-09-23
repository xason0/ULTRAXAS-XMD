"use strict";

var _validatePhoneNumberLength2 = _interopRequireDefault(require("./validatePhoneNumberLength.js"));
var _metadataMin = _interopRequireDefault(require("../metadata.min.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function validatePhoneNumberLength() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  parameters.push(_metadataMin["default"]);
  return _validatePhoneNumberLength2["default"].apply(this, parameters);
}
describe('validatePhoneNumberLength', function () {
  it('should detect whether a phone number length is valid', function () {
    // Not a phone number.
    expect(validatePhoneNumberLength('+')).to.equal('NOT_A_NUMBER');
    expect(validatePhoneNumberLength('abcde')).to.equal('NOT_A_NUMBER');

    // No country supplied for a national number.
    expect(validatePhoneNumberLength('123')).to.equal('INVALID_COUNTRY');

    // Too short while the number is not considered "viable"
    // by Google's `libphonenumber`.
    expect(validatePhoneNumberLength('2', 'US')).to.equal('TOO_SHORT');
    expect(validatePhoneNumberLength('+1', 'US')).to.equal('TOO_SHORT');
    expect(validatePhoneNumberLength('+12', 'US')).to.equal('TOO_SHORT');

    // Test national (significant) number length.
    expect(validatePhoneNumberLength('444 1 44', 'TR')).to.equal('TOO_SHORT');
    expect(validatePhoneNumberLength('444 1 444', 'TR')).to.be.undefined;
    expect(validatePhoneNumberLength('444 1 4444', 'TR')).to.equal('INVALID_LENGTH');
    expect(validatePhoneNumberLength('444 1 4444444444', 'TR')).to.equal('TOO_LONG');
  });
});
//# sourceMappingURL=validatePhoneNumberLength.test.js.map