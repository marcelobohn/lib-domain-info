const expect  = require('chai').expect;

const { dnsResolve } = require('../index');

describe('#namesServers', () => {
  it('return names servers of umbler.com', async function() {
    r = await dnsResolve('umbler.com');
    expect(r).to.equal('177.55.120.23');
  });

});
