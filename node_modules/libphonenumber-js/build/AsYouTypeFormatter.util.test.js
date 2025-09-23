"use strict";

var _AsYouTypeFormatterUtil = require("./AsYouTypeFormatter.util.js");
describe('closeNonPairedParens', function () {
  it('should close non-paired braces', function () {
    expect((0, _AsYouTypeFormatterUtil.closeNonPairedParens)('(000) 123-45 (9  )', 15)).to.equal('(000) 123-45 (9  )');
  });
});
describe('stripNonPairedParens', function () {
  it('should strip non-paired braces', function () {
    expect((0, _AsYouTypeFormatterUtil.stripNonPairedParens)('(000) 123-45 (9')).to.equal('(000) 123-45 9');
    expect((0, _AsYouTypeFormatterUtil.stripNonPairedParens)('(000) 123-45 (9)')).to.equal('(000) 123-45 (9)');
  });
});
describe('repeat', function () {
  it('should repeat string N times', function () {
    expect((0, _AsYouTypeFormatterUtil.repeat)('a', 0)).to.equal('');
    expect((0, _AsYouTypeFormatterUtil.repeat)('a', 3)).to.equal('aaa');
    expect((0, _AsYouTypeFormatterUtil.repeat)('a', 4)).to.equal('aaaa');
  });
});
//# sourceMappingURL=AsYouTypeFormatter.util.test.js.map