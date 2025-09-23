"use strict";

var _metadataMin = _interopRequireDefault(require("../metadata.min.json"));
var _getCountries = _interopRequireDefault(require("./getCountries.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('getCountries', function () {
  it('should get countries list', function () {
    expect((0, _getCountries["default"])(_metadataMin["default"]).indexOf('RU') > 0).to.equal(true);
  });
});
//# sourceMappingURL=getCountries.test.js.map