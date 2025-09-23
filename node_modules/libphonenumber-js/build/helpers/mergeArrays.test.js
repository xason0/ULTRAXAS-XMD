"use strict";

var _mergeArrays = _interopRequireDefault(require("./mergeArrays.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('mergeArrays', function () {
  it('should merge arrays', function () {
    expect((0, _mergeArrays["default"])([1, 2], [2, 3])).to.deep.equal([1, 2, 3]);
  });
});
//# sourceMappingURL=mergeArrays.test.js.map