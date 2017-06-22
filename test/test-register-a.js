const expect  = require('chai').expect;

const { registerA } = require('../src/registerA');

describe('#registerA', () => {
  it('return correct umbler.com ip', async function() {
    r = await registerA('umbler.com')
    expect(r).to.be.an('object');
    expect(r).to.include.keys(['name','type','class','ttl', 'address']);
    expect(r.address).to.equal('177.55.120.23')
  });
  it('return correct globo.com ip', async function() {
    r = await registerA('globo.com')
    expect(r.address).to.equal('186.192.90.5')
  });
  it('return correct euprometoavoce.com ip', async function() {
    r = await registerA('euprometoavoce.com.br')
    expect(r.address).to.equal('174.138.50.178')
  });
  it('return invalid domain', async function() {
    r = await registerA('enderecoquenaoexiste.com.br')
    expect(r).to.deep.equal({})
  });
});
