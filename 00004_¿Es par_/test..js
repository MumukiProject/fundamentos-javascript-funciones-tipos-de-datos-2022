describe('', function() {
  it("esPar(2) es verdadero", function() {
    assert(esPar(2));
  });
  
  it("esPar(8) es verdadero", function() {
    assert(esPar(8));
  });
  
  it("esPar(9890) es verdadero", function() {
    assert(esPar(9890));
  });
  
  it("esPar(1) es falso", function() {
    assert(!esPar(1));
  });
  
  it("esPar(879) es falso", function() {
    assert(!esPar(879));
  });
})