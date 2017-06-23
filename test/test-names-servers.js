const expect  = require('chai').expect;

const { namesServers } = require('../src/namesServers');

describe('#namesServers', () => {
  it('return names servers of umbler.com', async function() {
    r = await namesServers('umbler.com');
    nss = await r.map((ns) => { return ns.data });
    expect(r.length).to.equal(4);
    expect(r[0]).to.be.an('object');
    expect(r[0]).to.include.keys(['name','type','class','ttl', 'data']);
    expect(nss).to.deep.include('ns1.umbler.com');
    expect(nss).to.deep.equal(['ns1.umbler.com','ns2.umbler.com','ns3.umbler.com','ns4.umbler.com']);
  });

  it('return names servers of google.com', async function() {
    r = await namesServers('google.com');
    nss = await r.map((ns) => { return ns.data });
    expect(r.length).to.equal(4);
    expect(r[0]).to.be.an('object');
    expect(r[0]).to.include.keys(['name','type','class','ttl', 'data']);
    expect(nss).to.deep.include('ns1.google.com');
  });

  it('return invalid domain', async function() {
    r = await namesServers('enderecoquenaoexiste.com');
    expect(r).to.deep.equal({})
  });
});
