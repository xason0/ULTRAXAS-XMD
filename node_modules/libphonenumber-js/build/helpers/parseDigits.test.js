"use strict";

var _parseDigits = _interopRequireDefault(require("./parseDigits.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('parseDigits', function () {
  it('should parse digits', function () {
    expect((0, _parseDigits["default"])('+٤٤٢٣٢٣٢٣٤')).to.equal('442323234');
  });
});
//# sourceMappingURL=parseDigits.test.js.map