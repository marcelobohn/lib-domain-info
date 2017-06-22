const expect  = require('chai').expect;

const { registerA } = require('../src/registerA');

describe('#registerA', () => {
  it('return correct umbler.com ip', async function() {
    r = await registerA('umbler.com')
    expect(r.address).to.equal('177.55.120.23')
  });
});
