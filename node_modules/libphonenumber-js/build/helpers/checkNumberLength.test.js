"use strict";

var _metadata2 = _interopRequireDefault(require("../metadata.js"));
var _metadataMax = _interopRequireDefault(require("../../metadata.max.json"));
var _metadataMin = _interopRequireDefault(require("../../test/metadata/1.0.0/metadata.min.json"));
var _checkNumberLength = require("./checkNumberLength.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('checkNumberLength', function () {
  it('should check phone number length', function () {
    // Too short.
    expect(checkNumberLength('800555353', 'FIXED_LINE', 'RU')).to.equal('TOO_SHORT');
    // Normal.
    expect(checkNumberLength('8005553535', 'FIXED_LINE', 'RU')).to.equal('IS_POSSIBLE');
    // Too long.
    expect(checkNumberLength('80055535355', 'FIXED_LINE', 'RU')).to.equal('TOO_LONG');

    // No such type.
    expect(checkNumberLength('169454850', 'VOIP', 'AC')).to.equal('INVALID_LENGTH');
    // No such possible length.
    expect(checkNumberLength('1694548', undefined, 'AD')).to.equal('INVALID_LENGTH');

    // FIXED_LINE_OR_MOBILE
    expect(checkNumberLength('1694548', 'FIXED_LINE_OR_MOBILE', 'AD')).to.equal('INVALID_LENGTH');
    // No mobile phones.
    expect(checkNumberLength('8123', 'FIXED_LINE_OR_MOBILE', 'TA')).to.equal('IS_POSSIBLE');
    // No "possible lengths" for "mobile".
    expect(checkNumberLength('81234567', 'FIXED_LINE_OR_MOBILE', 'SZ')).to.equal('IS_POSSIBLE');
  });
  it('should work for old metadata', function () {
    var _oldMetadata = new _metadata2["default"](_metadataMin["default"]);
    _oldMetadata.country('RU');
    expect((0, _checkNumberLength.checkNumberLengthForType)('8005553535', 'FIXED_LINE', _oldMetadata)).to.equal('IS_POSSIBLE');
  });
});
function checkNumberLength(number, type, country) {
  var _metadata = new _metadata2["default"](_metadataMax["default"]);
  _metadata.country(country);
  return (0, _checkNumberLength.checkNumberLengthForType)(number, type, _metadata);
}
//# sourceMappingURL=checkNumberLength.test.js.map