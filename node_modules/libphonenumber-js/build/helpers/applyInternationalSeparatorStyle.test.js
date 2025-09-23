"use strict";

var _applyInternationalSeparatorStyle = _interopRequireDefault(require("./applyInternationalSeparatorStyle.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('applyInternationalSeparatorStyle', function () {
  it('should change Google\'s international format style', function () {
    expect((0, _applyInternationalSeparatorStyle["default"])('(xxx) xxx-xx-xx')).to.equal('xxx xxx xx xx');
    expect((0, _applyInternationalSeparatorStyle["default"])('(xxx)xxx')).to.equal('xxx xxx');
  });
});
//# sourceMappingURL=applyInternationalSeparatorStyle.test.js.map