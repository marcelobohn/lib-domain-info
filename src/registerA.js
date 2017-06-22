const domain = require('domain-info');

async function registerA(domain_name, options = {}) {
  let promise = domain.groper(domain_name, ['A'] )
  r = await promise.then(data => {
    return data;
  });
  if (r['A'].length > 0) {
    return r['A'][0];
  } else {
    return {}
  }
}

module.exports = { registerA };
