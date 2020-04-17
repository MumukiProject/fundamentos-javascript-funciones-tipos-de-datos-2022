describe('', function() {
  it("si recuerda haber leído 25 libros, le gusta leer", function() {
    assert(leGustaLeer(25) === true, "leGustaLeer(25) debe retornar true");
  });
  
  it("si recuerda haber leído 80 libros, le gusta leer", function() {
    assert(leGustaLeer(80) === true, "esPar(80) debe retornar true");
  });
  
  it("si recuerda haber leído 1 libro, no le gusta leer", function() {
    assert(leGustaLeer(1) === false, "esPar(1) debe retornar false");
  });
  
  it("si recuerda haber leído 15 libros, no le gusta leer", function() {
    assert(leGustaLeer(15) === false, "esPar(15) debe retornar false");
  });
})

describe("leGustaLeer", () => {
  try {
    let resultado = leGustaLeer(15) === null || leGustaLeer(15) === undefined || leGustaLeer(100) === null || leGustaLeer(100) === undefined;
    it("devuelve siempre algo", () => {
      assert(!resultado, "ojo, tenés que siempre devolver un valor booleano")  
    })
  } catch (e) {}
})