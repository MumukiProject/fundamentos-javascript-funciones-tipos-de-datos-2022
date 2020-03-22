describe("", function() {
  it("estaEntre(10, 1, 10) es false", function() {
    assert(!estaEntre(10, 1, 10));
  });
  it("estaEntre(4, 4, 9) es false", function() {
    assert(!estaEntre(4, 4, 9));
  });
  it("estaEntre(12, 1, 10) es false", function() {
    assert(!estaEntre(12, 1, 10));
  });
  it("estaEntre(200, 54, 112) es false", function() {
    assert(!estaEntre(200, 54, 112));
  });
  it("estaEntre(67, 0, 100) es true", function() {
    assert(estaEntre(67, 0, 100));
  });
  it("estaEntre(2, 0, 100) es true", function() {
    assert(estaEntre(2, 0, 100));
  });
})

describe("", function() {
  it("estaFueraDeRango(10, 1, 10) es false", function() {
    assert(!estaFueraDeRango(10, 1, 10));
  });
  it("estaFueraDeRango(4, 4, 9) es false", function() {
    assert(!estaFueraDeRango(4, 4, 9));
  });
  it("estaFueraDeRango(12, 1, 10) es true", function() {
    assert(estaFueraDeRango(12, 1, 10));
  });
  it("estaFueraDeRango(200, 54, 112) es true", function() {
    assert(estaFueraDeRango(200, 54, 112));
  });
  it("estaFueraDeRango(67, 0, 100) es false", function() {
    assert(!estaFueraDeRango(67, 0, 100));
  });
  it("estaFueraDeRango(2, 0, 100) es false", function() {
    assert(!estaFueraDeRango(2, 0, 100));
  });
})