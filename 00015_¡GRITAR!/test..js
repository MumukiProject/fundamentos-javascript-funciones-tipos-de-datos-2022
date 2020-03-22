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

describe("gritar", function() {
   function safeCall(f) {
    try { 
      return f();
    } catch(e) { 
      return null;
    }
  }
  
  it("tiene que usar el parámetro", function(){
    let mismoResultado = safeCall(() => gritar("hola") === gritar("adios"));
    assert(!mismoResultado)
  })
})