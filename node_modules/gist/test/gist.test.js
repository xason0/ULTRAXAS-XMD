var testCase = require('nodeunit').testCase
  , gist = require('../lib/gist')
  , http = require('http')
  , EventEmitter = require('events').EventEmitter;

module.exports = testCase({
  'should return the new gist url': function(test) {
    var gistJSONResponse = '{"gists":[{"public":true,"repo":"854033","created_at":"2011/03/03 17:57:22 -0800","files":["file1.ab"],"description":null}]}';
    var url = gist.url(gistJSONResponse);
    test.equal(url, 'http://gist.github.com/854033');
    test.done();
  },
  'should create gist and return the correct url': function(test) {
    var gistJSONResponse = '{"gists":[{"public":true,"repo":"123456","created_at":"2011/03/03 17:57:22 -0800","files":["file1.ab"],"description":null}]}';

    stubHttpRequest(gistJSONResponse);
    gist.create('teste 123456', function (url) {
      test.equal(url, 'http://gist.github.com/123456');
      test.done();
    });
  }
});

var stubHttpRequest = function(data) {
  http.request = function(options, callback) {
    var requestStubEmitter = new EventEmitter();
    requestStubEmitter.setEncoding = function () {};
    return {
      end: function(body) {
        callback(requestStubEmitter);
        requestStubEmitter.emit('data', data);
        requestStubEmitter.emit('end');
      }
    };
  };
};
