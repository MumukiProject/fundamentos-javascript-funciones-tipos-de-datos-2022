describe("", function() {
  it("El signo de 10 es 1 por ser positivo", function() {
    assert.equal(signo(10), 1)
  });
  
  it("El signo de 1 es 1 por ser positivo", function() {
    assert.equal(signo(1), 1)
  });
  
  it("El signo de 0 es 0", function() {
    assert.equal(signo(0), 0)
  });
  
  it("El signo de -1 es -1 por ser negativo", function() {
    assert.equal(signo(-1), -1)
  })
  
  it("El signo de -65 es -1 por ser negativo", function() {
    assert.equal(signo(-65), -1)
  })
})

describe("signo", () => {
  
  try {
    let resultado = [-2, -1, 0, 1, 2].every(it => typeof(signo(it)) !== 'string');
    it("no devuelve strings", () => {
      assert(resultado, "ojo, en algun caso estás devolviendo strings")
    })
  } catch (e) {}
  
  
})
