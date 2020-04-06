describe("", function() {
  it('esFinDeSemana("sábado")', function() {
    assert(esFinDeSemana("sábado"));
  });
  it('esFinDeSemana("domingo")', function() {
    assert(esFinDeSemana("domingo"));
  });
  it('esFinDeSemana("lunes")', function() {
    assert(!esFinDeSemana("lunes"));
  })
  it('esFinDeSemana("jueves")', function() {
    assert(!esFinDeSemana("jueves"));
  })
})