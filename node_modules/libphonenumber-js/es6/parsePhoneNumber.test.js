import _parsePhoneNumber from './parsePhoneNumber.js';
import metadata from '../metadata.min.json' with { type: 'json' };
function parsePhoneNumber() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  parameters.push(metadata);
  return _parsePhoneNumber.apply(this, parameters);
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
describe('parsePhoneNumber', function () {
  it('should parse phone numbers from string', function () {
    expect(parsePhoneNumber('Phone: 8 (800) 555 35 35.', 'RU').nationalNumber).to.equal('8005553535');
    expect(parsePhoneNumber('3', 'RU')).to.be.undefined;
  });
  it('should work in edge cases', function () {
    expect(parsePhoneNumber('')).to.be.undefined;
  });
  it('should parse phone numbers when invalid country code is passed', function () {
    expect(parsePhoneNumber('Phone: +7 (800) 555 35 35.', 'XX').nationalNumber).to.equal('8005553535');
    expect(parsePhoneNumber('Phone: 8 (800) 555-35-35.', 'XX')).to.be.undefined;
  });
  it('should parse non-geographic numbering plan phone numbers (extended)', function () {
    var phoneNumber = parsePhoneNumber('+870773111632');
    expect(phoneNumber.number).to.equal('+870773111632');
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      expect(phoneNumber.country).to.equal('001');
    } else {
      expect(phoneNumber.country).to.be.undefined;
    }
    expect(phoneNumber.countryCallingCode).to.equal('870');
  });
  it('should parse non-geographic numbering plan phone numbers (default country code) (extended)', function () {
    var phoneNumber = parsePhoneNumber('773111632', {
      defaultCallingCode: '870'
    });
    expect(phoneNumber.number).to.equal('+870773111632');
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      expect(phoneNumber.country).to.equal('001');
    } else {
      expect(phoneNumber.country).to.be.undefined;
    }
    expect(phoneNumber.countryCallingCode).to.equal('870');
  });
  it('should determine the possibility of non-geographic phone numbers', function () {
    var phoneNumber = parsePhoneNumber('+870773111632');
    expect(phoneNumber.isPossible()).to.equal(true);
    var phoneNumber2 = parsePhoneNumber('+8707731116321');
    expect(phoneNumber2.isPossible()).to.equal(false);
  });
  it('should support `extract: false` flag', function () {
    var testCorrectness = function testCorrectness(number, expectedResult) {
      var result = expect(parsePhoneNumber(number, {
        extract: false,
        defaultCountry: 'US'
      }));
      if (expectedResult) {
        result.to.not.be.undefined;
      } else {
        result.to.be.undefined;
      }
    };
    testCorrectness('Call: (213) 373-4253', false);
    testCorrectness('(213) 373-4253x', false);
    testCorrectness('(213) 373-4253', true);
    testCorrectness('- (213) 373-4253 -', true);
    testCorrectness('+1 (213) 373-4253', true);
    testCorrectness(' +1 (213) 373-4253', false);
  });
  it('should not prematurely strip a possible national prefix from Chinese numbers', function () {
    // https://gitlab.com/catamphetamine/libphonenumber-js/-/issues/57
    var phoneNumber = parsePhoneNumber('+86123456789');
    expect(phoneNumber.isPossible()).to.equal(true);
    expect(phoneNumber.isValid()).to.equal(false);
    expect(phoneNumber.nationalNumber).to.equal('123456789');
  });
});
//# sourceMappingURL=parsePhoneNumber.test.js.map