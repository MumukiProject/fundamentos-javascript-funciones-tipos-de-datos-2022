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
  try {
    let mismoResultado = gritar("hola") === gritar("adios");
    it("tiene que usar el parámetro", function(){
      assert(!mismoResultado)
    })    
  } catch (e) {}
  
  try {
    let usaAdmiracion = gritar("hola").indexOf("!") >= 0 && gritar("hola").indexOf("¡") >= 0;
    it("tiene que usar los signos de admiración", function(){
      assert(usaAdmiracion)
    })
  } catch (e) {}  

  
  
})