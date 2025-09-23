"use strict";

var _formatIncompletePhoneNumber = _interopRequireDefault(require("./formatIncompletePhoneNumber.js"));
var _metadataMin = _interopRequireDefault(require("../metadata.min.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('formatIncompletePhoneNumber', function () {
  it('should format parsed input value', function () {
    var result;

    // National input.
    expect((0, _formatIncompletePhoneNumber["default"])('880055535', 'RU', _metadataMin["default"])).to.equal('8 (800) 555-35');

    // International input, no country.
    expect((0, _formatIncompletePhoneNumber["default"])('+780055535', null, _metadataMin["default"])).to.equal('+7 800 555 35');

    // International input, no country argument.
    expect((0, _formatIncompletePhoneNumber["default"])('+780055535', _metadataMin["default"])).to.equal('+7 800 555 35');

    // International input, with country.
    expect((0, _formatIncompletePhoneNumber["default"])('+780055535', 'RU', _metadataMin["default"])).to.equal('+7 800 555 35');
  });
  it('should support an object argument', function () {
    expect((0, _formatIncompletePhoneNumber["default"])('880055535', {
      defaultCountry: 'RU'
    }, _metadataMin["default"])).to.equal('8 (800) 555-35');
    expect((0, _formatIncompletePhoneNumber["default"])('880055535', {
      defaultCallingCode: '7'
    }, _metadataMin["default"])).to.equal('8 (800) 555-35');
  });
});
//# sourceMappingURL=formatIncompletePhoneNumber.test.js.map