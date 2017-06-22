const domain = require('domain-info');

async function registerA(domain_name, options = {}) {
  let promise = domain.groper(domain_name, ['A'] )
  r = await promise.then(data => {
    return data;
  });

  return r['A'][0];
}

module.exports = { registerA };
