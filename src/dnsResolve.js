const dns = require('dns')

promisedDns = (domain) => {
  return new Promise((resolve, reject) => {
    dns.lookup(domain, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function dnsResolve(domain_name, options = {}) {
  return await promisedDns(domain_name);
}

module.exports = { dnsResolve };
