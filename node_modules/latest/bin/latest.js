#!/usr/bin/env node
var latest = require('../');
var packages = process.argv.slice(2);

var versions = {};
var code = 0;
packages.forEach(function(p) {
  latest(p, function(err, v) {
    versions[p] = err || v;
    if (err)
      code++;
  });
});

process.on('exit', function() {
  packages.forEach(function(p) {
    console.log('%s: %s', p, versions[p].toString());
  });
  process.exit(code);
});
