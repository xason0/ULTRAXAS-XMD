var latest = require('../');
var p = require('../package.json');

latest.checkupdate(p, function(ret, msg) {
  console.log(msg);
  process.exit(ret);
});
