const whois = require('whois-json');

promisedWhois = (domain) => {
  return new Promise((resolve, reject) => {
    whois(domain, (err, data) => {
    // whois(domain, {verbose: true} , (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function whoisParse(domain_name, options = {}) {
  return await promisedWhois(domain_name);
}

module.exports = { whoisParse };
