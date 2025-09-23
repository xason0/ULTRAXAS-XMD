"use strict";

var _examplesMobile = _interopRequireDefault(require("../examples.mobile.json"));
var _metadataMin = _interopRequireDefault(require("../metadata.min.json"));
var _getExampleNumber = _interopRequireDefault(require("./getExampleNumber.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('getExampleNumber', function () {
  it('should get an example number', function () {
    var phoneNumber = (0, _getExampleNumber["default"])('RU', _examplesMobile["default"], _metadataMin["default"]);
    expect(phoneNumber.nationalNumber).to.equal('9123456789');
    expect(phoneNumber.number).to.equal('+79123456789');
    expect(phoneNumber.countryCallingCode).to.equal('7');
    expect(phoneNumber.country).to.equal('RU');
  });
  it('should handle a non-existing country', function () {
    expect((0, _getExampleNumber["default"])('XX', _examplesMobile["default"], _metadataMin["default"])).to.be.undefined;
  });
});
//# sourceMappingURL=getExampleNumber.test.js.map