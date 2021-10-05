describe("", function() {
  it('longitudNombreCompleto("Max", "Power")', function() {
    assert.equal(longitudNombreCompleto("Max", "Power"), 9);
  });
  it('longitudNombreCompleto("Mercedes", "Sosa")', function() {
    assert.equal(longitudNombreCompleto("Mercedes", "Sosa"),13 );
  });
  it('longitudNombreCompleto("Juana", "Azurduy")', function() {
    assert.equal(longitudNombreCompleto("Juana", "Azurduy"), 13);
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