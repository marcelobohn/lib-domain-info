const domain = require('domain-info');

async function namesServers(domain_name, options = {}) {
  let promise = domain.groper(domain_name, ['NS'] );
  r = await promise.then(data => {
    return data;
  });
  if (r['NS'].length > 0) {
    return r['NS'];
  } else {
    return {}
  }
}

module.exports = { namesServers };
