describe("", function() {
  it(longitudNombreCompleto("Cosme", "Fulanito"), function() {
    assert.equal(longitudNombreCompleto("Cosme", "Fulanito"), 14);
  });
  it(longitudNombreCompleto("John", "Snow"), function() {
    assert.equal(longitudNombreCompleto("John", "Snow"), 9);
  });
  it(longitudNombreCompleto("Juana", "Azurduy"), function() {
    assert.equal(longitudNombreCompleto("Juana", "Azurduy"), 13);
  });
})