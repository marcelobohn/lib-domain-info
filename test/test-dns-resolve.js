const expect  = require('chai').expect;

const { dnsResolve } = require('../index');

describe('#dnsResolve', () => {
  it('return names servers of umbler.com', async function() {
    r = await dnsResolve('umbler.com');
    expect(r).to.equal('177.55.120.23');
  });

  it('return names servers of globo.com', async function() {
    r = await dnsResolve('globo.com');
    expect(r).to.equal('186.192.90.5');
  });

  it('return invalid domain', async function() {
    try {
      await dnsResolve('naoexisteestedominio.com');
    }
    catch(err) {
      expect(err.message).to.eql('getaddrinfo ENOTFOUND naoexisteestedominio.com');
      expect(err.code).to.eql('ENOTFOUND');
    }
  });

});
