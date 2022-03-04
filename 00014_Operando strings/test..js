describe("", function() {
  it('longitudNombreCompleto("Augusta", "Ada", "Lovelace")', function() {
    assert.equal(longitudNombreCompleto("Augusta", "Ada", "Lovelace"), 20);
  });
  it('longitudNombreCompleto("Haydée", "Mercedes", "Sosa")', function() {
    assert.equal(longitudNombreCompleto("Haydée", "Mercedes", "Sosa"),20 );
  });
  it('longitudNombreCompleto("Elsa", "Isabel", "Bornemann")', function() {
    assert.equal(longitudNombreCompleto("Elsa", "Isabel", "Bornemann"), 21);
  });
})


describe("longitudNombreCompleto", () => {
    try {
      let resultado = longitudNombreCompleto("", "") !== 0 && longitudNombreCompleto("abc", "d") !== 4;
      it("no falta contemplar el espacio", () => {
        assert(resultado, "¡Te falta contemplar el espacio!")
      })
    } catch(e){}
})