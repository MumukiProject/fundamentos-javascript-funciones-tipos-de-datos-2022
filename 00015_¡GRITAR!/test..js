describe("", function() {
  it('gritar("miguel")', function() {
    assert.equal(gritar("miguel"), "¡MIGUEL!");
  });
  it('gritar("gritar")', function() {
    assert.equal(gritar("gritar"), "¡GRITAR!");
  });
  it('gritar("minuto")', function() {
    assert.equal(gritar("minuto"), "¡MINUTO!");
  });
})