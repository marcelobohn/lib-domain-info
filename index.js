const { registerA, namesServers } = require('./src/domainParse');
const { whoisParse } = require('./src/whoisParse');
const { dnsResolve } = require('./src/dnsResolve');

module.exports = { namesServers, registerA, whoisParse, dnsResolve };
