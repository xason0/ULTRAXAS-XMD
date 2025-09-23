"use strict";

var _matchesEntirely = _interopRequireDefault(require("./matchesEntirely.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('matchesEntirely', function () {
  it('should work in edge cases', function () {
    // No text.
    expect((0, _matchesEntirely["default"])(undefined, '')).to.equal(true);

    // "OR" in regexp.
    expect((0, _matchesEntirely["default"])('911231231', '4\d{8}|[1-9]\d{7}')).to.equal(false);
  });
});
//# sourceMappingURL=matchesEntirely.test.js.map