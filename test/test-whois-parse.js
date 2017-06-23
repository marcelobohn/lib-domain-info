const expect  = require('chai').expect;

const { whoisParse } = require('../src/whoisParse');

describe('#whoisParse', () => {
  it('return whois data of umbler.com', async function() {
    r = await whoisParse('umbler.com');
    expect(r).to.be.an('object');
    expect(r).to.include.keys(['creationDate','updatedDate','registrantOrganization','registrantName', 'registrationServiceProvidedBy']);
    expect(r.registrantOrganization).to.equal('Umbler');
    expect(r.registrantName).to.equal('Flavio Cardoso');
    expect(r.registrationServiceProvidedBy).to.equal('REDEHOST');
  });

  it('return whois data of 177.55.120.23 (umbler)', async function() {
    r = await whoisParse('177.55.120.23');
    expect(r).to.be.an('object');
    expect(r).to.include.keys(['owner']);
    expect(r.owner).to.equal('RedeHost Internet Ltda.');
  });
});
