var testCase = require('nodeunit').testCase
  , gist = require('../lib/gist');

module.exports = testCase({
  'should create gist and return the gist url': function(test) {
    gist.create('teste new gist', function (url) {
      test.ok(url.match(/^http:\/\/gist\.github\.com\/\d+$/) != null);
      test.done();
    });
  }
});
