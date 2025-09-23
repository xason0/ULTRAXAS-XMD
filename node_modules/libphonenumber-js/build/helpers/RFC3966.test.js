"use strict";

var _RFC = require("./RFC3966.js");
describe('RFC3966', function () {
  it('should format', function () {
    expect(function () {
      return (0, _RFC.formatRFC3966)({
        number: '123'
      });
    }).to["throw"]('expects "number" to be in E.164 format');
    expect((0, _RFC.formatRFC3966)({})).to.equal('');
    expect((0, _RFC.formatRFC3966)({
      number: '+78005553535'
    })).to.equal('tel:+78005553535');
    expect((0, _RFC.formatRFC3966)({
      number: '+78005553535',
      ext: '123'
    })).to.equal('tel:+78005553535;ext=123');
  });
  it('should parse', function () {
    expect((0, _RFC.parseRFC3966)('tel:+78005553535')).to.deep.equal({
      number: '+78005553535'
    });
    expect((0, _RFC.parseRFC3966)('tel:+78005553535;ext=123')).to.deep.equal({
      number: '+78005553535',
      ext: '123'
    });

    // With `phone-context`
    expect((0, _RFC.parseRFC3966)('tel:8005553535;ext=123;phone-context=+7')).to.deep.equal({
      number: '+78005553535',
      ext: '123'
    });

    // "Domain contexts" are ignored
    expect((0, _RFC.parseRFC3966)('tel:8005553535;ext=123;phone-context=www.leningrad.spb.ru')).to.deep.equal({
      number: '8005553535',
      ext: '123'
    });

    // Not a viable phone number.
    expect((0, _RFC.parseRFC3966)('tel:3')).to.deep.equal({});
  });
});
//# sourceMappingURL=RFC3966.test.js.map