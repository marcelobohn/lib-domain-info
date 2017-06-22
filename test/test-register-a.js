const expect  = require('chai').expect

describe('#registerA', () => {
  it('return correct umbler.com ip', function() {
    r = registerA('umbler.com')
    expect(r.address).to.equal('177.55.120.23')
  });
});
