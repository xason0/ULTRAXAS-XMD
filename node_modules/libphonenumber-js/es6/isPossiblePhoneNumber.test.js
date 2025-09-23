import _isPossiblePhoneNumber from './isPossiblePhoneNumber.js';
import metadata from '../metadata.min.json' with { type: 'json' };
import oldMetadata from '../test/metadata/1.0.0/metadata.min.json' with { type: 'json' };
function isPossiblePhoneNumber() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  parameters.push(metadata);
  return _isPossiblePhoneNumber.apply(this, parameters);
}
describe('isPossiblePhoneNumber', function () {
  it('should detect whether a phone number is possible', function () {
    expect(isPossiblePhoneNumber('8 (800) 555 35 35', 'RU')).to.equal(true);
    expect(isPossiblePhoneNumber('8 (800) 555 35 35 0', 'RU')).to.equal(false);
    expect(isPossiblePhoneNumber('Call: 8 (800) 555 35 35', 'RU')).to.equal(false);
    expect(isPossiblePhoneNumber('8 (800) 555 35 35', {
      defaultCountry: 'RU'
    })).to.equal(true);
    expect(isPossiblePhoneNumber('+7 (800) 555 35 35')).to.equal(true);
    expect(isPossiblePhoneNumber('+7 1 (800) 555 35 35')).to.equal(false);
    expect(isPossiblePhoneNumber(' +7 (800) 555 35 35')).to.equal(false);
    expect(isPossiblePhoneNumber(' ')).to.equal(false);
  });
  it('should detect whether a phone number is possible when using old metadata', function () {
    expect(function () {
      return _isPossiblePhoneNumber('8 (800) 555 35 35', 'RU', oldMetadata);
    }).to["throw"]('Missing "possibleLengths" in metadata.');
    expect(_isPossiblePhoneNumber('+888 123 456 78901', oldMetadata)).to.equal(true);
  });
});
//# sourceMappingURL=isPossiblePhoneNumber.test.js.map