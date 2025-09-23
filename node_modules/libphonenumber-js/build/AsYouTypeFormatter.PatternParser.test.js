"use strict";

var _AsYouTypeFormatterPatternParser = _interopRequireDefault(require("./AsYouTypeFormatter.PatternParser.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('PatternParser', function () {
  it('should parse single-character patterns', function () {
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('2')).to.equal('2');
  });
  it('should parse string patterns', function () {
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('123')).to.deep.equal(['1', '2', '3']);
  });
  it('should parse "one of" patterns', function () {
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('[5-9]')).to.deep.equal({
      op: '[]',
      args: ['5', '6', '7', '8', '9']
    });
  });
  it('should parse "or" patterns', function () {
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('123|[5-9]')).to.deep.equal({
      op: '|',
      args: [['1', '2', '3'], {
        op: '[]',
        args: ['5', '6', '7', '8', '9']
      }]
    });
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('123|[5-9]0')).to.deep.equal({
      op: '|',
      args: [['1', '2', '3'], [{
        op: '[]',
        args: ['5', '6', '7', '8', '9']
      }, '0']]
    });
  });
  it('should parse nested "or" patterns', function () {
    expect(new _AsYouTypeFormatterPatternParser["default"]().parse('123|(?:2|34)[5-9]')).to.deep.equal({
      op: '|',
      args: [['1', '2', '3'], [{
        op: '|',
        args: ['2', ['3', '4']]
      }, {
        op: '[]',
        args: ['5', '6', '7', '8', '9']
      }]]
    });
  });
});
//# sourceMappingURL=AsYouTypeFormatter.PatternParser.test.js.map