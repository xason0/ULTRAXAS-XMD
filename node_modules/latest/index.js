var npm = require('npm');
var util = require('util');

module.exports = latest;
module.exports.checkupdate = checkupdate;

/**
 * get the latest version of a package
 */
function latest(name, cb) {
  npm.load({name: name, loglevel: 'silent'}, function(err) {
    if (err) return cb(err);
    npm.commands.show([name, 'versions'], true, function(err, data) {
      if (err) return cb(err);
      var versions = data[Object.keys(data)[0]].versions;
      var latest = versions[versions.length - 1];
      cb(null, latest);
    });
  });
};

/**
 * Convenience method
 *
 * Given a package.json style obj, determine if there are updates available
 *
 * Optionally, give true as a second argument to exit after writing the message
 */
function checkupdate(package, cb) {
  latest(package.name, function(err, v) {
    var s = '';
    var ret = 0;
    if (err) {
      s = ">>> couldn't determine latest version";
      ret = 2;
    } else if (v !== package.version) {
      s = util.format('>>> you are running version %s, a newer version %s is available\n',
          package.version, v);
      s += util.format('>>> consider updating with: [sudo] npm update -g %s',
          package.name);
      ret = 1;
    } else {
      s = util.format('you are running the latest version %s', package.version);
      ret = 0;
    }
    cb(ret, s);
  });
};
