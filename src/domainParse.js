const domain = require('domain-info');

promisedDomainInfo = (domain_name, type) => {
  return new Promise((resolve, reject) => {
    domain.groper(domain_name, type, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function registerA(domain_name, options = {}) {
  r = await await promisedDomainInfo(domain_name, ['A']);
  if (r['A'].length > 0) {
    return r['A'][0];
  } else {
    return {}
  }
}

async function namesServers(domain_name, options = {}) {
  r = await await promisedDomainInfo(domain_name, ['NS']);
  if (r['NS'].length > 0) {
    return r['NS'];
  } else {
    return {}
  }
}

module.exports = { registerA, namesServers };
