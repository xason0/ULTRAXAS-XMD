"use strict";

var _util = require("./util.js");
describe('findNumbers/util', function () {
  it('should generate regexp limit', function () {
    var thrower = function thrower() {
      return (0, _util.limit)(1, 0);
    };
    expect(thrower).to["throw"]();
    thrower = function thrower() {
      return (0, _util.limit)(-1, 1);
    };
    expect(thrower).to["throw"]();
    thrower = function thrower() {
      return (0, _util.limit)(0, 0);
    };
    expect(thrower).to["throw"]();
  });
  it('should trimAfterFirstMatch', function () {
    expect((0, _util.trimAfterFirstMatch)(/\d/, 'abc123')).to.equal('abc');
    expect((0, _util.trimAfterFirstMatch)(/\d/, 'abc')).to.equal('abc');
  });
  it('should determine if a string starts with a substring', function () {
    expect((0, _util.startsWith)('𐍈123', '𐍈')).to.equal(true);
    expect((0, _util.startsWith)('1𐍈', '𐍈')).to.equal(false);
  });
  it('should determine if a string ends with a substring', function () {
    expect((0, _util.endsWith)('123𐍈', '𐍈')).to.equal(true);
    expect((0, _util.endsWith)('𐍈1', '𐍈')).to.equal(false);
  });
});
//# sourceMappingURL=util.test.js.map