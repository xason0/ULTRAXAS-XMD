import parseIncompletePhoneNumber, { parsePhoneNumberCharacter } from './parseIncompletePhoneNumber.js';
describe('parseIncompletePhoneNumber', function () {
  it('should parse phone number character', function () {
    // Accepts leading `+`.
    expect(parsePhoneNumberCharacter('+')).to.equal('+');

    // Doesn't accept non-leading `+`.
    expect(parsePhoneNumberCharacter('+', '+')).to.be.undefined;

    // Parses digits.
    expect(parsePhoneNumberCharacter('1')).to.equal('1');

    // Parses non-European digits.
    expect(parsePhoneNumberCharacter('٤')).to.equal('4');

    // Dismisses other characters.
    expect(parsePhoneNumberCharacter('-')).to.be.undefined;
  });
  it('should parse incomplete phone number', function () {
    expect(parseIncompletePhoneNumber('')).to.equal('');

    // Doesn't accept non-leading `+`.
    expect(parseIncompletePhoneNumber('++')).to.equal('+');

    // Accepts leading `+`.
    expect(parseIncompletePhoneNumber('+7 800 555')).to.equal('+7800555');

    // Parses digits.
    expect(parseIncompletePhoneNumber('8 (800) 555')).to.equal('8800555');

    // Parses non-European digits.
    expect(parseIncompletePhoneNumber('+٤٤٢٣٢٣٢٣٤')).to.equal('+442323234');
  });
  it('should work with a new `context` argument in `parsePhoneNumberCharacter()` function (international number)', function () {
    var stopped = false;
    var emit = function emit(event) {
      switch (event) {
        case 'end':
          stopped = true;
          break;
      }
    };
    expect(parsePhoneNumberCharacter('+', undefined, emit)).to.equal('+');
    expect(stopped).to.equal(false);
    expect(parsePhoneNumberCharacter('1', '+', emit)).to.equal('1');
    expect(stopped).to.equal(false);
    expect(parsePhoneNumberCharacter('+', '+1', emit)).to.be.undefined;
    expect(stopped).to.equal(true);
    expect(parsePhoneNumberCharacter('2', '+1', emit)).to.equal('2');
    expect(stopped).to.equal(true);
  });
  it('should work with a new `context` argument in `parsePhoneNumberCharacter()` function (national number)', function () {
    var stopped = false;
    var emit = function emit(event) {
      switch (event) {
        case 'end':
          stopped = true;
          break;
      }
    };
    expect(parsePhoneNumberCharacter('2', undefined, emit)).to.equal('2');
    expect(stopped).to.equal(false);
    expect(parsePhoneNumberCharacter('+', '2', emit)).to.be.undefined;
    expect(stopped).to.equal(true);
    expect(parsePhoneNumberCharacter('1', '2', emit)).to.equal('1');
    expect(stopped).to.equal(true);
  });
});
//# sourceMappingURL=parseIncompletePhoneNumber.test.js.map