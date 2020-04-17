describe("", function() {
  it("estaEntre(10, 1, 10) es false", function() {
    assert(estaEntre(10, 1, 10) === false);
  });
  it("estaEntre(4, 4, 9) es false", function() {
    assert(estaEntre(4, 4, 9) === false);
  });
  it("estaEntre(12, 1, 10) es false", function() {
    assert(estaEntre(12, 1, 10) === false);
  });
  it("estaEntre(200, 54, 112) es false", function() {
    assert(estaEntre(200, 54, 112) === false);
  });
  it("estaEntre(67, 0, 100) es true", function() {
    assert(estaEntre(67, 0, 100) === true);
  });
  it("estaEntre(2, 0, 100) es true", function() {
    assert(estaEntre(2, 0, 100) === true);
  });
})

describe("", function() {
  it("estaFueraDeRango(10, 1, 10) es false", function() {
    assert(estaFueraDeRango(10, 1, 10) === false);
  });
  it("estaFueraDeRango(4, 4, 9) es false", function() {
    assert(estaFueraDeRango(4, 4, 9) === false);
  });
  it("estaFueraDeRango(12, 1, 10) es true", function() {
    assert(estaFueraDeRango(12, 1, 10) === true);
  });
  it("estaFueraDeRango(200, 54, 112) es true", function() {
    assert(estaFueraDeRango(200, 54, 112) === true);
  });
  it("estaFueraDeRango(67, 0, 100) es false", function() {
    assert(estaFueraDeRango(67, 0, 100) === false);
  });
  it("estaFueraDeRango(2, 0, 100) es false", function() {
    assert(estaFueraDeRango(2, 0, 100) === false);
  });
})


describe("estaEntre", () => {
  try {
    let resultado = estaEntre(200, 54, 112)  === null || estaEntre(200, 54, 112)  === undefined || estaEntre(2, 0, 100)  === null || estaEntre(2, 0, 100)  === undefined;
    it("devuelve siempre algo", () => {
      assert(!resultado, "ojo, tenés que siempre devolver un valor booleano")  
    })
  } catch (e) {}
})

describe("estaFueraDeRango", () => {
  try {
    let resultado = estaFueraDeRango(2, 0, 100)  === null || estaFueraDeRango(2, 0, 100)  === undefined || estaFueraDeRango(12, 1, 10)  === null || estaFueraDeRango(12, 1, 10)  === undefined;
    it("devuelve siempre algo", () => {
      assert(!resultado, "ojo, tenés que siempre devolver un valor booleano")  
    })
  } catch (e) {}
})

