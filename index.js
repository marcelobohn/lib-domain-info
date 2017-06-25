const { registerA, namesServers } = require('./src/domainParse');
const { whoisParse } = require('./src/whoisParse');

module.exports = { namesServers, registerA, whoisParse };
