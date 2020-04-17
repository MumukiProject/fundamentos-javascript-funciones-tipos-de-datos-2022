describe("", function() {
  it('longitudNombreCompleto("Cosme", "Fulanito")', function() {
    assert.equal(longitudNombreCompleto("Cosme", "Fulanito"), 14);
  });
  it('longitudNombreCompleto("John", "Snow")', function() {
    assert.equal(longitudNombreCompleto("John", "Snow"), 9);
  });
  it('longitudNombreCompleto("Juana", "Azurduy")', function() {
    assert.equal(longitudNombreCompleto("Juana", "Azurduy"), 13);
  });
})


describe("longitudNombreCompleto", () => {
    try {
      let resultado = [
        longitudNombreCompleto("", ""),
        longitud_nombreCompleto("abc", "d"),
      ] !== [0, 4];
      it("no falta contemplar el espacio", () => {
        assert(resultado, "¡Te falta contemplar el espacio!")
      })
    catch(e){}
})